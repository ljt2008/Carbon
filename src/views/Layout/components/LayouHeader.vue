<script setup>
// vueUse
import usecomichelp from "@/utils/comichelp";
import { useUserStore } from "@/stores/userStore";
import { useLayoutStore } from "@/stores/layoutStore";
const userStore = useUserStore();
const confirm = () => {
  userStore.clearUserInfo();
};
const layoutStore = useLayoutStore();
let { theme } = usecomichelp();
</script>
<template>
  <header>
    <div class="container">
      <div class="navCon">
        <a href="/" class="logo">
          <img
            src="https://static3w.kuaikanmanhua.com/_nuxt/static-kkfront-pc/image/logo.f38006f.png"
          />
        </a>
        <ul class="NavLeft fl">
          <li
            class="item active"
            v-for="item in layoutStore.navList"
            :key="item.id"
          >
            <RouterLink :to="item.to">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
        <div class="SearchBox fl">
          <input
            class="homeSearch"
            type="text"
            placeholder="搜索作品、作者名"
          />
          <a class="searchBtn"></a>
        </div>
        <div class="logonStatus">
          <template v-if="userStore.userInfo.token">
            <div class="User fl">
              <div class="avatar">
                <img
                  src="https://tn1-f2.kkmh.com/image/180404/QEEoeIerw.webp-t.w50.webp.h"
                />
              </div>
            </div>
            <a class="to-whiting fl"> 我的钱包 </a>
            <el-popconfirm
              title="确认退出吗?"
              @confirm="confirm"
              confirm-button-text="确认"
              cancel-button-text="取消"
            >
              <template #reference>
                <a class="to-whiting fl"> 退出登录 </a>
              </template></el-popconfirm
            >
          </template>
          <template v-else>
            <a class="to-whiting fl" @click="$router.replace('/login')">
              登录
            </a>
            <a class="to-whiting fl"> 帮助中心 </a>
            <a class="to-whiting fl"> 关于我们 </a>
          </template>

          <button
            class="to-whiting fl change"
            @click="theme = theme === 'dark' ? 'light' : 'dark'"
          >
            {{ theme === "dark" ? "黑夜模式" : "白天模式" }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang='scss' >
header {
  background-color: var(--bg2);
  .navCon {
    box-sizing: border-box;
    padding: 16px 0;
    height: 64px;

    .logo {
      float: left;
      height: 32px;
      width: 64px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .NavLeft {
      padding-left: 39px;

      @include max-to("md") {
        display: flex;
        padding-left: 0;
        justify-content: space-around;
        width: calc(100% - 64px);
      }

      .item {
        float: left;

        a {
          @include max-to("md") {
            padding: 0;
          }

          padding: 0 13px;
          font-size: 14px;
          line-height: 32px;
          font-weight: 700;
        }
      }

      .item:nth-child(n + 4) {
        @include max-to("lg") {
          display: none;
        }

        @include max-to("md") {
          display: block;
        }

        @include max-to("sm") {
          display: none;
        }
      }
    }

    .SearchBox {
      @include max-to("md") {
        display: none;
      }

      margin: 0 auto;
      height: 32px;
      margin-left: 5px;
      position: relative;
      width: 202px;

      @include respond-to("xxl") {
        width: 252px;
      }

      .homeSearch {
        border: 1px solid black;
        border-radius: 16px;
        height: 14px;
        padding: 9px 38px 9px 16px;
        width: 148px;
        @include respond-to("xxl") {
          width: 252px;
        }
      }
      .searchBtn {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAAhlJREFUSA3tVsFKQkEU9an5A0oKtewTjBYVIcgTdBVtC4q2QdsWLgSDqGU/UFCroKUiD0UiWoQu2lbbIBX9AE20cx4OvGRm3ntRrhwYZrx3zj13zszcZyAwb3MF/kkBw0/carUaH41G5ng8jhNnGEY7GAxa6XS67SeOjfUCsCxrHYQFEK1ifQnELRtsGAmMOfxuIIGCaZpPXuLZWLeFIN0H6RVID6PR6E0ymfxyYprN5kKv19uDrYh+nslkLp1+1VwrNUiPsZvTUCi04iZnrVZbGg6Hr0jwCDu/VhEKu5KY8oL0LhKJrKVSqQ8B0I28AyBvQfYNN9mDqkA8UxDnvZIyDlXhkRCriivsUmJmzosUi8VuxUKvI+8BsYyhw0iJkTGfTHn6IukCCd8EU2IMYZONYZkRoEVkbT8Zmd/NhqSJ9b9jt8B/4ZdKjVvZQdYsDr9qUCuBrq1mKmILwCyLg1/mCSbHUqrDSon5LLDjRrfb3dWBZT5WMWLdCo6UmAFZe7Hrs3q97llyVi9Ai8Qyhq4piVl5QHwyGAzeQb6sC0IfE0TVegPmwq1qcb2SmE7WXATKg/y5UqkcyM6cNvr6/f4nIEP0F2LdmrJWO4HOzyLOr4xk7DfOm495lmc6kTeM+T1sO0j6wRljeu6JWIDEHwEWGNpA1kH/8UcASW6RHF+0bVywR4GdyUhyyE/pZ9+gzubsWeeMcwWgwDcwY/ak9MElrAAAAABJRU5ErkJggg==)
          no-repeat 50%;
        background-size: cover;
        height: 30px;
        position: absolute;
        right: 8px;
        top: 1px;
        width: 30px;

        @include respond-to("xxl") {
          right: -47px;
        }
      }
    }

    .logonStatus {
      @include max-to("md") {
        display: none;
      }

      cursor: pointer;
      float: right;

      .User {
        font-size: 14px;
        height: 32px;
        line-height: 32px;

        .avatar {
          border-radius: 50%;
          height: 32px;
          overflow: hidden;
          width: 32px;

          img {
            width: 100%;
          }
        }
      }

      .to-whiting {
        line-height: 32px;
        color: var(--text-color);
        display: inline-block;
        filter: alpha(opacity=80);
        font-size: 14px;
        font-weight: lighter;
        margin-left: 10px;
        opacity: 0.8;
        white-space: nowrap;

        @include respond-to("lg") {
          display: none;
        }

        @include respond-to("xxl") {
          margin-left: 20px;
        }
      }
      .change {
        background-color: var(--bg2);
        color: var(--text-color);
        border-radius: 20px;
        width: 70px;
      }
    }
  }
}
</style>