<script setup>
import { ref, onBeforeUnmount } from "vue";
import { upload_already, upload_merge, upload_chunk } from "@/apis/upload";
let qiepianList = ref([]);
let upload = ref(null);
let upload_inp = ref(null);
let upload_button_select = ref(null);
let upload_progress = ref(null);
let upload_progress_value = ref(null);
let upload_progress_show_progress_box = ref(null);
const selectbuttonclick = function () {
  upload_inp.value.click();
};
const fileinputchange = async function () {
  let file = upload_inp.value.files[0];
  if (!file) return;
  if (!/(PNG|JPG|JPEG|mp4)/i.test(file.type)) {
    alert("上传的文件只能是 PNG/JPG/JPEG/map4 格式");
    return;
  }
  upload_button_select.value.classList.add("loading");
  upload_progress.value.style.display = "block";
  async function changeBuffer1(file) {
    const worker = new Worker(new URL("@/utils/worker.js", import.meta.url));
    return new Promise((resolve) => {
      worker.postMessage(file);
      worker.onmessage = (e) => {
        resolve(e.data);
      };
    });
  }
  // 获取文件的HASH
  let already = [];
  let data = null,
    { HASH, suffix } = await changeBuffer1(file);
  console.log(HASH);
  // 获取已经上传的切片信息
  try {
    data = await upload_already({ HASH, suffix });
    if (+data.code === 0) {
      already = data.fileList;
    } else {
      alert("已存在该文件");
      return;
    }
  } catch (err) {
    console.log(err.message);
  }
  console.log(already);
  // 切片
  // 实现文件切片处理 「固定数量 & 固定大小」
  let max = 1024 * 100;
  let count = Math.ceil(file.size / max);
  let index = 0;
  let chunks = [];
  if (count > 100) {
    max = file.size / 100;
    count = 100;
  }
  // 批量生成方框信息
  while (index < count) {
    chunks.push({
      file: file.slice(index * max, (index + 1) * max),
      filename: `${HASH}_${index + 1}.${suffix}`,
      key: index,
      value: index,
      status: "waiting",
    });
    index++;
  }
  qiepianList.value = chunks;

  // 上传成功的处理
  index = 0;
  const clear = () => {
    upload_button_select.value.classList.remove("loading");
    upload_progress.value.style.display = "none";
    upload_progress_value.value.style.width = "0%";
  };

  const complate = async () => {
    // 管控进度条
    index++;
    upload_progress_value.value.style.width = `${(index / count) * 100}%`;

    // 当所有切片都上传成功，我们合并切片
    if (index < count) return;
    upload_progress_value.value.style.width = `100%`;
    try {
      const data = await upload_merge({
        HASH,
        count,
      });
      if (+data.code === 0) {
        alert(
          `恭喜您，文件上传成功，您可以基于 ${data.servicePath} 访问该文件~~`
        );
        clear();
        return;
      }
      throw data.codeText;
    } catch (err) {
      alert("切片合并失败，请您稍后再试~~");
      clear();
    }
  };

  // 把每一个切片都上传到服务器上
  qiepianList.value.forEach((chunk) => {
    // 已经上传的无需在上传
    if (already.length > 0 && already.includes(chunk.filename)) {
      (chunk.status = "success"), complate();
      return;
    }
    let fm = new FormData();
    fm.append("file", chunk.file, chunk.filename);
    fm.append("filename", chunk.filename);
    upload_chunk(fm)
      .then((data) => {
        console.log(data);
        if (+data.code === 0) {
          (chunk.status = "success"), complate();
          return;
        }
        chunk.status = "failed";
        return Promise.reject(data.codeText);
      })
      .catch((err) => {
        chunk.status = "failed";
        console.log(err);
        clear();
      });
  });
};

onBeforeUnmount(() => {
  // 解除其他引用
  upload.value = null;
  upload_inp.value = null;
  upload_button_select.value = null;
  upload_progress.value = null;
  upload_progress_value.value = null;
  upload_progress_show_progress_box.value = null;
});
</script>

<template>
  <div class="container">
    <div class="containerbox">
      <div class="item">
        <h3>投稿上传</h3>
        <section class="upload_box" id="upload7" ref="upload">
          <input
            type="file"
            class="upload_inp"
            @change="fileinputchange"
            ref="upload_inp"
          />
          <div class="upload_button_box">
            <Authority permission="user">
              <template #default="{ userPermisstions }">
                <button
                  :disabled="!userPermisstions.includes('commit')"
                  class="upload_button select"
                  @click="selectbuttonclick"
                  ref="upload_button_select"
                >
                  上传稿件
                </button>
              </template>
            </Authority>
          </div>
          <div class="upload_progress" ref="upload_progress">
            <div class="value" ref="upload_progress_value"></div>
          </div>
          <div class="show_progress">
            <template v-if="qiepianList.length > 10">
              <div class="box" ref="upload_progress_show_progress_box">
                <ul>
                  <li v-for="item in qiepianList" :key="item.key">
                    <div
                      class="content"
                      :class="{
                        failed: item.status === 'failed',
                        success: item.status === 'success',
                      }"
                    >
                      {{ item.value }}
                    </div>
                  </li>
                </ul>
              </div>
            </template>
          </div>
        </section>
      </div>
    </div>
  </div>
</template> 
<style lang="scss">
.containerbox {
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .item {
    h3 {
      line-height: 40px;
    }
  }
}

.box {
  border: 1px solid black;
  overflow: hidden;
  width: 100%;

  ul {
    width: 100%;
    overflow: hidden;

    li {
      list-style: none;
      float: left;
      box-sizing: border-box;
      padding: 3px;
      width: 10%;
      height: 37.7px;

      .content {
        width: 100%;
        height: 100%;
        line-height: 31.7px;
        text-align: center;
        background-color: rgba(90, 83, 83, 0.45);
        &.failed {
          background-color: red;
        }
        &.success {
          background-color: greenyellow;
        }
      }
    }
  }
}

.upload_box {
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  width: 400px;
  min-height: 150px;
  border: 1px dashed #ddd;

  .upload_inp {
    display: none;
  }

  .upload_button {
    position: relative;
    box-sizing: border-box;
    margin-right: 10px;
    padding: 0 10px;
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: #ddd;
    overflow: hidden;

    &::after {
      position: absolute;
      top: 30px;
      left: 0;
      z-index: 999;
      transition: top 0.1s;
      box-sizing: border-box;
      padding-left: 25px;
      width: 100%;
      height: 100%;
      content: "loading...";
      text-align: left;
      background: url("./loading.gif") no-repeat 5px center #eee;
      background-size: 15px 15px;
      color: #999;
    }
  }

  & .upload_button.loading {
    cursor: inherit;

    &::after {
      top: 0;
    }
  }

  & .upload_button.select {
    background: #409eff;
    color: #fff;
  }

  & .upload_button.upload {
    background: #67c23a;
    color: #fff;
  }

  & .upload_button.disable {
    background: #eee;
    color: #999;
    cursor: inherit;
  }

  & .upload_tip {
    margin-top: 10px;
    line-height: 25px;
    color: #999;
    font-size: 12px;
  }

  & .upload_list,
  & .upload_abbre,
  & .upload_progress,
  & .upload_mark {
    display: none;
  }

  & .upload_list {
    margin-top: 10px;

    li {
      line-height: 25px;
      font-size: 0;

      span {
        display: inline-block;
        margin-right: 10px;
        max-width: 70%;
        color: #999;
        font-size: 12px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        em {
          padding: 0 5px;
          color: lightcoral;
          cursor: pointer;
          font-style: normal;
        }
      }
    }
  }

  & .upload_abbre,
  & .upload_progress {
    margin-top: 10px;
  }

  & .upload_abbre img {
    display: block;
    width: 100%;
  }

  & .upload_progress {
    position: relative;
    height: 5px;
    background: #eee;

    .value {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      height: 100%;
      width: 0%;
      background: #67c23a;
      transition: width 0.3s;
    }
  }

  & .upload_drag {
    height: 130px;
    position: relative;

    .icon,
    .text {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .icon {
      top: 40%;
      width: 80px;
      height: 62px;
      background: url("upload.png") no-repeat;
      background-size: 100% 100%;
    }

    .text {
      top: 80%;
      line-height: 25px;
      color: #999;
      font-size: 12px;

      a {
        color: #409eff;
      }
    }
  }

  & .upload_mark {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 150px;
  }
}
</style>