<script setup>
const props = defineProps({
  itemlist: Array,
  style: Number,
  colomns: Number,
  type: Number,
});
const colomns = (1 / props.colomns) * 100 + "%";
const { style, type } = props;
//1 是横版 1.6比例 0是竖版0.75
const aspectratio = style === 1 ? 1.6 : 0.75;
</script>
<template>
  <div class="content">
    <a
      class="item"
      :style="{ flexBasis: colomns }" 
      :href="item.to"
      :title="item.title"
      v-for="item in itemlist"
      :key="item.id"
    >
      <div class="imgbox" :style="{ aspectRatio: aspectratio }">
        <img :src="item.imgsrc" />
        <div class="tabs cls">
          <span class="tab fl">{{ item.fenlei }}</span>
        </div>
        <p class="cls" v-if="type === 1">
          <span class="author fl">{{ item.author }}</span>
          <span class="laud fr">
            <svg
              width="15px"
              height="10px"
              viewBox="0 0 11 12"
              version="1.1"
              rel="nofollow"
              xmlns="https://www.w3.org/2000/svg"
              xmlns:xlink="https://www.w3.org/1999/xlink"
              class="icon"
            >
              <desc>Created with Sketch.</desc>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g
                  id="tag"
                  stroke="#ffffff"
                  transform="translate(-503.000000, -559.000000)"
                >
                  <g
                    id="Group-Copy-5"
                    transform="translate(504.000000, 560.000000)"
                  >
                    <path
                      id="Stroke-1"
                      d="M5.95913517,2.75540789 C5.8983025,2.93455129 6.03764219,3.11990058 6.22589463,3.11990058 L7.92468796,3.11948686 C8.78703212,3.11948686 9.36781967,3.82944084 9.21573801,4.69743819 L8.63495045,8.01345284 C8.48286878,8.88103647 7.65340715,9.59099045 6.79106299,9.59099045 L1.11800577,9.59099045 C0.503102597,9.59099045 0,9.08458971 0,8.46565547 L0,4.24482184 C0,3.6258876 0.503102597,3.11948686 1.11800577,3.11948686 L2.59443104,3.11948686 C2.7555554,3.11948686 2.91010325,3.06487501 3.037112,2.9647533 C3.33469883,2.7301706 3.7983424,2.19522276 3.80204168,1.13815258 C3.80450787,0.534939937 4.26650731,0.0343313614 4.86496923,0.00288817814 L4.89168628,0.00164699985 C5.54933673,-0.0326922661 6.09847486,0.474122201 6.13464563,1.13029179 C6.16711712,1.71695539 6.09765279,2.34912887 5.95913517,2.75540789 L5.95913517,2.75540789 Z"
                    ></path>
                    <path id="Stroke-3" d="M2,3.5 L2,8.5"></path>
                  </g>
                </g>
              </g>
            </svg>
            {{ item.laud }}
          </span>
        </p>
      </div>
      <div class="itemTitle">
        <span class="title fl"> {{ item.title }} </span>
        <span class="fenlei fr" v-if="type === 1"> {{ item.fenlei }} </span>
        <p class="cls" v-if="type === 0">
          <span class="author fl">{{ item.author }}</span>
          <span class="laud fr iconfont">{{ item.laud }} </span>
        </p>
      </div>
    </a>
  </div>
</template> 
<style lang="scss" scoped>
.author {
  color: var(--text-color);
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 24px;
  line-height: 24px;
}
img {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .item {
    flex-shrink: 0;
    flex-grow: 0;
    padding: 14px 16px 0 0;
    &:hover .imgbox {
      filter: brightness(0.9);
    }
    &:hover {
      color: rgb(58, 107, 167);
    }
    box-sizing: border-box;

    @include max-to("xl") {
      flex: 0 0 25% !important;
    }
    @include max-to("lg") {
      flex: 0 0 33.33% !important;
    }
    @include max-to("md") {
      flex: 0 0 50% !important;
    }
    .itemTitle {
      padding: 4px 6px 0;
      .title {
        color: var(--text-color);
        font-size: 14px;
      }
      .cls {
        .laud {
          &::before {
            content: "\e62a";
            font-family: "iconfont" !important;
            font-style: 14px;
            margin-right: 5px;
          }
        }
      }
      .fenlei {
        color: var(--text-color);
      }
    }
    .imgbox {
      border-radius: 5px;
      overflow: hidden;
      aspect-ratio: 0.75;
      position: relative;
      .tabs {
        bottom: 6px;
        left: 0;
        position: absolute;
        right: 6px;
        .tab {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 2px;
          color: #fff;
          font-size: 12px;
          height: 16px;
          line-height: 16px;
          margin-left: 4px;
          max-width: 34%;
          overflow: hidden;
          padding: 0 4px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .cls {
        box-sizing: border-box;

        .laud {
          position: relative;
        }
        background-image: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(transparent),
          to(rgba(0, 0, 0, 0.78))
        );
        background-image: linear-gradient(
          -180deg,
          transparent,
          rgba(0, 0, 0, 0.78)
        );
        color: #fff;
        font-size: 12px;
        width: 100%;
        padding: 2px 4px;
        position: absolute;
        bottom: 0;
      }
    }
  }
}
</style>