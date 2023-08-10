<template>
  <div id="HomeFooter" class="Footer fl">
    <div class="container">
      <div class="row">
        <div class="footitem">
          <div class="footer-list">
            <h4>常用工具</h4>
            <ul>
              <li><a target="_blank">电码查询</a></li>
              <li>
                <a>家长监护</a>
              </li>
              <li>
                <a>资料下载</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footitem">
          <div class="footer-list">
            <h4>友情链接</h4>
            <ul>
              <li>
                <a>腾讯动漫</a>
              </li>
              <li>
                <a>快看动漫</a>
              </li>
              <li>
                <a>樱花动画</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footitem">
          <div class="footer-list">
            <h4>关于我们</h4>
            <ul>
              <li>
                <a>关于好看</a>
              </li>
              <li>
                <a>服务协议</a>
              </li>
              <li>
                <a href="javascript:AddFavorite('好看漫画','index.html');"
                  >收藏本站</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footitem">
          <div class="footer-list">
            <h4>联系我们</h4>
            <ul>
              <li>
                <a>电话联系</a>
              </li>
              <li>
                <a>邮箱地址</a>
              </li>
              <li>
                <a>wx公众号</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footitem">
          <div class="footer-wechat">
            <img
              class="img-responsive"
              src="https://i.hd-r.cn/e9e7f7a012ad24e5e45d9ad79eabcc7c.jpg"
            />
            <p>微信号:adh_006</p>
          </div>
        </div>
      </div>

      <div class="bottomText">
        <p style="padding: 10px 0 0 0">
          Copyright © 2006-2023 好看漫画
          <a target="_blank" href="https://beian.miit.gov.cn/"
            >京ICP备XXXXXXXX号-1</a
          >
        </p>
        <div
          style="
            width: 300px;
            margin: 0 auto;
            padding: 10px 0;
            text-align: center;
          "
        >
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=XXXXXXXXXXXXXX"
            style="
              display: inline-block;
              text-decoration: none;
              height: 20px;
              line-height: 20px;
            "
          >
            <img
              src="http://www.clantrip.com/static/images/ghs.png"
              style="float: left"
            />
            <p
              style="
                float: left;
                height: 20px;
                line-height: 20px;
                margin: 0px 0px 0px 5px;
              "
            >
              京公网安备 XXXXXXXXXXXXXX号
            </p></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped lang='scss' >
.Footer {
  background: #282828;
  height: auto;
  width: 100%;
  .container {
    .row {
      float: left;
      width: 100%;
      .footitem {
        box-sizing: border-box;
        padding-left: 1em;
        margin-top: 40px;
        margin-bottom: 40px;
        border-left: 2px solid #c1c1c1;
        width: 20%;
        height: 160px;
        float: left;
        .footer-list {
          h4 {
            margin: 10px 0;
            font-size: 18px;
          }
          ul {
            height: 113px;
            li {
              height: 37.66px;
              line-height: 37.66px;
              font-size: 14px;
            }
          }
        }
        .footer-wechat {
          width: 100%;
          text-align: center;
          p {
            padding: 10px;
            text-align: center;
          }
          img {
            width: 131px;
          }
        }
      }
    }
    .bottomText {
      border-top: 1px solid #333;
      text-align: center;
    }
  }
}
</style>