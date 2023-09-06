<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();

const formLabelAlign = ref({
  usernameOrEmail: "",
  password: "",
  agree: false,
});
const router = useRouter();
// 规则数据对象
const rules = {
  usernameOrEmail: [{ required: true, message: "用户名不能为空" }],
  password: [
    { required: true, message: "密码不能为空" },
    { min: 6, max: 24, message: "密码长度要求6-14个字符" },
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        if (value) {
          callback();
        } else {
          callback(new Error("请勾选协议"));
        }
      },
    },
  ],
};
const formRef = ref(null);
const doLogin = async () => {
  const { usernameOrEmail, password } = formLabelAlign.value;
  formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        await userStore.getUserInfo({ usernameOrEmail, password });
        ElMessage({ message: "登录成功", type: "success" });
        router.replace({ path: "/" });
      } catch (error) {}
    }
  });
};
</script>

<template>
  <div class="login container" style="padding-bottom: 318px">
    <div class="content">
      <div class="form">
        <div class="login-tabs">
          <h3 class="active">密码登录</h3>
          <div class="line"></div>
          <h3 class="">短信登录</h3>
        </div>
        <el-form
          label-width="100px"
          :model="formLabelAlign"
          style="max-width: 460px"
          :rules="rules"
          ref="formRef"
        >
          <el-form-item label="用户名/邮箱" prop="usernameOrEmail">
            <el-input v-model="formLabelAlign.usernameOrEmail" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formLabelAlign.password" />
          </el-form-item>
          <div class="submit">
            <input
              type="button"
              value="登录 / 注册"
              class="loginhBtn"
              @click="doLogin"
            />
          </div>
          <el-form-item prop="agree" label-width="22px">
            <el-checkbox
              v-model="formLabelAlign.agree"
              size="large"
              prop="agree"
            >
              我已阅读并同意《<span>快看服务协议</span>》和《<span>快看隐私政策</span>》
            </el-checkbox>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template> 
<style lang="scss">
.login {
  height: 625px;
  margin: 0 auto;
  padding-bottom: 231px;
  width: 1184px;
  .content {
    background: url(https://f2.kkmh.com/image/210804/7jD8RDIB2.png) 0 100px
      no-repeat;
    height: 100%;
    position: relative;
    .form {
      position: absolute;
      right: 14%;
      top: 45%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 400px;
      .agreeCheck {
        margin-top: -25px;
        align-items: center;
        display: flex;
        justify-content: center;
        img {
          margin-right: 6px;
          width: 18px;
        }
        span {
          color: #ffba15;
          cursor: pointer;
        }
      }
      .submit {
        border-bottom: none;
        display: flex;
        height: auto;
        justify-content: center;
        margin-bottom: 42px;
        margin-top: 16px;
        .loginhBtn {
          background-color: #fce13d;
          border: 0;
          border-radius: 22px;
          cursor: pointer;
          height: 44px;
          outline: 0;
          width: 300px;
        }
      }
      .login-tabs {
        align-items: center;
        border-bottom: 0;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        width: 100%;
        .line {
          background-color: #eaeaea;
          height: 16px;
          margin: 0 24px;
          width: 1px;
        }
        h3 {
          color: #666;
          cursor: pointer;
          font-size: 18px;
          font-weight: 500;
          height: 22px;
          line-height: 22px;
          position: relative;
          &.active {
            color: #ffba15;
          }
        }
      }
    }
  }
}
</style>