<template>
  <div class="box">
    <!-- 回答问题，发视频等card -->
    <el-card class="box-card">
      <!-- 引入字体图标组件 -->
      <div class="header-card">
        <!-- 回答问题开始 -->
        <router-link to="/question/answer">
          <icon-button>
            <template slot="iconButton">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                class="GlobalWrite-navIcon"
                fill="currentColor"
              >
                <g
                  fill="#0084FF"
                  fill-rule="evenodd"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    opacity=".12"
                  ></circle>
                  <path
                    d="M23.487 10.463c1.896 0 2.583.193 3.277.555a3.824 3.824 0 0 1 1.607 1.573c.371.678.569 1.35.569 3.206v8.472c0 1.855-.198 2.527-.569 3.205a3.824 3.824 0 0 1-1.607 1.573c-.694.363-1.381.556-3.277.556h-6.96c-1.895 0-2.583-.193-3.276-.556a3.824 3.824 0 0 1-1.608-1.573c-.37-.678-.568-1.35-.568-3.205v-8.472c0-1.855.197-2.528.568-3.206.37-.678.915-1.21 1.608-1.573.693-.362 1.38-.556 3.277-.556h6.959zm0 2.08h-6.96c-1.407 0-1.836.081-2.273.31a1.72 1.72 0 0 0-.735.72c-.234.427-.317.847-.317 2.224v8.472c0 1.377.083 1.796.317 2.224.172.316.412.551.735.72.437.229.866.31 2.274.31h6.959c1.407 0 1.836-.081 2.274-.31a1.72 1.72 0 0 0 .735-.72c.234-.428.317-.847.317-2.224v-8.472c0-1.377-.083-1.797-.317-2.225a1.72 1.72 0 0 0-.735-.72c-.438-.228-.867-.309-2.274-.309zm-1.991 9.778v1.873h-5.955V22.32h5.955zm2.977-3.328v1.872h-8.932v-1.872h8.932zm0-3.33v1.873h-8.932v-1.872h8.932z"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
              <div class="GlobalWrite-topTitle">回答问题</div>
            </template>
          </icon-button>
        </router-link>
        <!-- 回答问题结束 -->
        <!-- 发视频开始 -->
        <router-link to="">
          <icon-button>
            <template slot="iconButton">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                class="GlobalWrite-navIcon"
                fill="currentColor"
              >
                <g
                  fill="#FF9607"
                  fill-rule="evenodd"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    opacity=".12"
                  ></circle>
                  <path
                    d="M24.233 24.777v-9.555c0-.942-.748-1.706-1.67-1.706H13.61c-.922 0-1.67.764-1.67 1.707v9.554c0 .943.748 1.707 1.67 1.707h8.954c.921 0 1.669-.764 1.669-1.707zm3.478-10.349a2.302 2.302 0 0 1 3.297.243c.367.434.57.989.57 1.563v7.532c0 1.32-1.047 2.389-2.337 2.389a2.308 2.308 0 0 1-1.53-.583l-1.475-1.306v.512c0 2.073-1.644 3.753-3.672 3.753H13.61c-2.028 0-3.672-1.68-3.672-3.753v-9.555c0-2.074 1.644-3.754 3.672-3.754h8.954c2.028 0 3.672 1.68 3.672 3.754v.51l1.475-1.305zm-1.475 7.13l2.786 2.466a.33.33 0 0 0 .219.083.338.338 0 0 0 .334-.341v-7.532a.346.346 0 0 0-.082-.223.329.329 0 0 0-.47-.035l-2.787 2.466v3.116z"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
              <div class="GlobalWrite-topTitle">发视频</div>
            </template>
          </icon-button>
        </router-link>
        <!-- 发视频结束 -->
        <!-- 写文章开始 -->
        <router-link to="/editor/0">
          <icon-button>
            <template slot="iconButton">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                class="GlobalWrite-navIcon"
                fill="currentColor"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#F4C807"
                    opacity=".12"
                  ></circle>
                  <path d="M6 6h28v28H6z"></path>
                  <path
                    fill="#F4C807"
                    d="M20.406 11.772l-2.172 2.176h-2.29c-1.438 0-1.875.085-2.322.324-.33.176-.575.422-.751.752-.24.448-.324.886-.324 2.326v7.12c0 1.44.085 1.878.324 2.326.176.33.421.576.75.752.421.225.834.314 2.08.323l7.35.001c1.438 0 1.876-.084 2.323-.324.33-.176.575-.422.751-.752.24-.448.324-.886.324-2.326v-4.905l2.172-2.175v7.08c0 1.94-.202 2.643-.58 3.352a3.95 3.95 0 0 1-1.643 1.645c-.708.379-1.41.58-3.346.58h-7.108c-1.936 0-2.639-.201-3.347-.58a3.95 3.95 0 0 1-1.642-1.645c-.378-.71-.58-1.413-.58-3.352v-7.12c0-1.94.202-2.643.58-3.352a3.95 3.95 0 0 1 1.642-1.645c.708-.379 1.41-.58 3.347-.58h4.462zm6.908-2.053c.384.116.747.338 1.168.759l.188.189c.42.421.642.785.758 1.17a1.98 1.98 0 0 1 0 1.163c-.116.385-.337.749-.758 1.17l-6.9 6.911c-.62.622-.827.81-1.078 1.004-.251.193-.496.34-.784.47-.288.131-.553.226-1.392.48l-1.088.332a1.303 1.303 0 0 1-1.625-1.629l.33-1.09c.255-.84.35-1.104.48-1.393.13-.29.277-.534.47-.785.193-.252.381-.46 1.001-1.081l6.9-6.911c.42-.421.784-.643 1.168-.76a1.97 1.97 0 0 1 1.162 0zm-3.204 4.096l-4.797 4.805c-.547.548-.709.723-.852.91-.112.146-.19.276-.265.443-.097.214-.175.44-.4 1.182l-.094.31.31-.095c.74-.225.965-.303 1.179-.4.167-.076.297-.154.442-.266.187-.143.361-.305.909-.853l4.797-4.805-1.23-1.23zm2.546-2.43c-.109.033-.23.11-.443.324l-.874.875 1.228 1.231.875-.876c.213-.213.29-.334.323-.444a.24.24 0 0 0 0-.153c-.033-.11-.11-.23-.323-.445l-.189-.188c-.213-.214-.334-.291-.443-.325a.238.238 0 0 0-.154 0z"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
              <div class="GlobalWrite-topTitle">写文章</div>
            </template>
          </icon-button>
        </router-link>
        <!-- 写文章结束 -->
        <!-- 写想法开始 -->
        <router-link to="">
          <icon-button>
            <template slot="iconButton">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                class="GlobalWrite-navIcon"
                fill="currentColor"
              >
                <g
                  fill="#26BFBF"
                  fill-rule="evenodd"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    opacity=".12"
                  ></circle>
                  <path
                    d="M21.987 11.686v2.169h-6.125c-1.43 0-1.863.064-2.297.306-.332.128-.574.383-.74.702-.255.447-.332.893-.332 2.297v7.018c0 1.442.09 1.876.332 2.297.166.345.408.587.74.766.434.23.868.319 2.297.319h7.018c1.43 0 1.863-.077 2.297-.32.345-.165.587-.408.766-.74.216-.408.296-.816.305-2.054l.001-6.316.025.025h2.17v6.074c0 1.914-.217 2.616-.587 3.318a3.92 3.92 0 0 1-1.634 1.62c-.689.383-1.403.575-3.317.575h-7.018c-1.915 0-2.616-.204-3.318-.575a3.891 3.891 0 0 1-1.62-1.62c-.384-.702-.575-1.404-.575-3.318v-7.018c0-1.914.204-2.629.574-3.318a3.996 3.996 0 0 1 1.62-1.633c.703-.383 1.404-.574 3.318-.574h6.1zm1.889 6.954c1.059 1.06 1.059 2.807 0 3.88l-.039.038a2.719 2.719 0 0 1-3.879 0l-2.45-2.553a.801.801 0 0 0-1.123 0l-.05.052c-.32.357-.32.893 0 1.212a.75.75 0 0 0 .726.217c.51-.128 1.047.23 1.149.74a.946.946 0 0 1-.727 1.148 2.649 2.649 0 0 1-2.527-.74 2.796 2.796 0 0 1 0-3.905l.038-.025c1.098-1.085 2.808-1.085 3.892 0l2.463 2.488a.764.764 0 0 0 1.11 0l.038-.025a.855.855 0 0 0 0-1.187.876.876 0 0 0-.74-.217c-.51.128-1.02-.204-1.148-.727-.128-.51.204-1.021.727-1.149l.013-.013a2.703 2.703 0 0 1 2.527.766zm4.338-9.315v2.578h2.578v1.722h-2.578v2.59h-1.723v-2.602h-2.59v-1.71h2.59V9.325h1.723z"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
              <div class="GlobalWrite-topTitle">写想法</div>
            </template>
          </icon-button>
        </router-link>
        <!-- 写想法结束 -->
      </div>
      <!-- 我的草稿箱 -->
      <div class="draft nav-link">
        <a href="#">
          <span class="text">
            <span class="iconfont icon-caogaoxiang">我的草稿箱</span>
            <span class="num">2</span>
          </span>
        </a>
      </div>
    </el-card>
    <!-- Live 书店 圆桌 专栏 付费咨询 -->
    <el-card class="box-card">
      <div class="center-card">
        <!-- 图片 -->
        <router-link
          to=""
          class="center-card-img"
        >
          <img
            src="../assets/img/tab.jpeg"
            alt=""
          />
        </router-link>
        <div class="center-card-box">
          <router-link
            to=""
            class="iconS"
            style="color: rgb(255, 207, 0)"
          >
            <icon-button>
              <template slot="iconButton">
                <div class="iconS-box">
                  <span>
                    <svg
                      class="Zi Zi--Live"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M13.693 10.354l1.634-7.542c.195-.901-.16-1.083-.798-.39l-9.18 9.97c-.638.693-.377 1.254.582 1.254h5.376l-1.634 7.542c-.195.901.16 1.083.798.39l9.18-9.97c.638-.693.377-1.254-.582-1.254h-5.376z"
                      ></path>
                    </svg>
                  </span>
                  <span>Live</span>
                </div>
              </template>
            </icon-button>
          </router-link>
          <router-link
            to=""
            class="iconS"
            style="color: rgb(67, 212, 128)"
          >
            <icon-button>
              <template slot="iconButton">
                <div class="iconS-box">
                  <span>
                    <svg
                      class="Zi Zi--Ebook"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M16 17.649V2.931a.921.921 0 0 0-.045-.283.943.943 0 0 0-1.182-.604L4.655 5.235A.932.932 0 0 0 4 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 0 0-.941-.931h-.773v12.834a.934.934 0 0 1-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 0 0 .653-.886z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>书店</span>
                </div>
              </template>
            </icon-button>
          </router-link>
          <router-link
            to=""
            class="iconS"
          >
            <icon-button>
              <template slot="iconButton">
                <div
                  class="iconS-box"
                  style="color: rgb(0, 132, 255)"
                >
                  <span>
                    <svg
                      class="Zi Zi--Org"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M10.786 8.41a8.938 8.938 0 0 0-3.968-2.528c-.305-1.719.814-3.337 2.442-3.741 1.221-.405 2.646.101 3.46 1.011 1.045 1.38.915 3.64.814 4.348-.102 1.315-1.221 3.034-1.323 3.135-.305-.809-.814-1.517-1.425-2.225zm-2.442 2.832c-1.526.202-3.052 1.01-4.171 2.123-1.12-.404-1.934-1.314-2.137-2.427-.316-2.427 1.526-3.64 2.849-3.842 1.628-.371 2.849.505 4.07 1.415 1.146 1.012 2.035 2.63 2.035 2.73-.916-.202-1.832-.1-2.646 0zm4.986.303c.509-.607.931-1.586 1.12-2.225.318-1.039.61-3.134.203-4.651 1.323-1.011 3.154-1.011 4.477.303 1.235 1.146 1.017 2.933.814 3.438-.663 1.581-1.933 2.326-3.256 2.832-1.221.404-3.256.303-3.358.303zm-2.645 1.011c-.51.607-.916 1.416-1.221 2.326-.407 1.314-.643 3.06-.102 4.55-1.323 1.011-3.256 1.011-4.477-.202-1.198-1.124-1.018-2.932-.814-3.438.599-1.605 1.933-2.326 3.256-2.831.916-.304 3.256-.405 3.358-.405zm9.259-1.82c1.017.404 1.933 1.315 2.035 2.427.233 2.57-1.526 3.64-2.849 3.842-1.526 0-2.85-.505-4.07-1.415-1.018-.81-2.035-2.528-2.035-2.63.916.203 1.831.102 2.645 0 1.628-.404 3.053-1.112 4.274-2.224zm-6.716 4.854c1.065 1.08 2.442 2.022 4.07 2.528.306 1.719-.814 3.235-2.442 3.741-1.22.405-2.645-.101-3.46-1.011-1.1-1.481-1.017-3.54-.915-4.247.102-1.315 1.221-3.034 1.323-3.135.305.708.721 1.44 1.424 2.124z"
                      ></path>
                    </svg>
                  </span>
                  <span>圆桌</span>
                </div>
              </template>
            </icon-button>
          </router-link>
          <router-link
            to=""
            class="iconS"
            style="color: rgb(15, 136, 235)"
          >
            <icon-button>
              <template slot="iconButton">
                <div class="iconS-box">
                  <span>
                    <svg
                      class="Zi Zi--Edit"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"
                      ></path>
                    </svg>
                  </span>
                  <span>专栏</span>
                </div>
              </template>
            </icon-button>
          </router-link>
          <router-link
            to=""
            class="iconS"
            style="color: rgb(84, 120, 240)"
          >
            <icon-button>
              <template slot="iconButton">
                <div class="iconS-box">
                  <span>
                    <svg
                      class="Zi Zi--Infinity"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M11.267 10.188h-2.69a.26.26 0 0 0-.261.26v.508c0 .149.117.26.262.26h2.896v1.54H8.578a.26.26 0 0 0-.262.259v.508c0 .15.117.26.262.26h2.896v2.31c0 .139.119.257.265.257h.522a.258.258 0 0 0 .265-.257v-2.31h2.896a.26.26 0 0 0 .262-.26v-.508a.257.257 0 0 0-.262-.26h-2.896v-1.54h2.896a.26.26 0 0 0 .262-.26v-.507a.257.257 0 0 0-.262-.26h-2.69l2.51-2.636a.26.26 0 0 0-.004-.366l-.423-.413a.253.253 0 0 0-.36.01L12 9.418 9.545 6.784a.248.248 0 0 0-.36-.011l-.423.413a.264.264 0 0 0-.004.366l2.509 2.636zM12 19.973c-1.101 0-2.16-.15-3.152-.43-.532.18-5.27 2.177-4.743 1.179.527-.998 1.58-2.746.806-3.25C3.11 15.936 2 13.822 2 11.486 2 6.8 6.477 3 12 3s10 3.8 10 8.487-4.477 8.486-10 8.486z"
                      ></path>
                    </svg>
                  </span>
                  <span>付费咨询</span>
                </div>
              </template>
            </icon-button>
          </router-link>
          <router-link
            to=""
            class="iconS"
            style="color: rgb(88, 104, 209)"
          >
            <icon-button>
              <template slot="iconButton">
                <div class="iconS-box">
                  <span>
                    <svg
                      class="Zi Zi--KnowledgeBase"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M21 9.749v9.91c0 .74-.604 1.341-1.35 1.341H4.35C3.604 21 3 20.4 3 19.659V9.319c0-.503.283-.963.733-1.193l4.892-2.5V3.341c0-.74.604-1.341 1.35-1.341.267 0 .527.078.749.225l9.675 6.408c.375.249.601.668.601 1.116zM8.297 8.307L5.372 9.802A.223.223 0 0 0 5.25 10v8.54c0 .124.1.224.225.224h8.586a.223.223 0 1 0 .124-.41l-4.959-3.259a1.339 1.339 0 0 1-.601-1.116V8.506a.224.224 0 0 0-.328-.199z"
                      ></path>
                    </svg>
                  </span>
                  <span>百科</span>
                </div>
              </template>
            </icon-button>
          </router-link>
        </div>
      </div>
    </el-card>
    <!-- 我的收藏 我关注的问题 我的邀请 -->
    <nav-link class="box-navlink"></nav-link>
    <!-- Fake指南,应用.工作.申请开通链接 -->
    <sidebar-footer class="box-footer"></sidebar-footer>
  </div>
</template>

<script>
import IconButton from './IconButton.vue'
import NavLink from './NavLink.vue'
import SidebarFooter from './SidebarFooter.vue'
export default {
  name: 'MainSidebar',
  components: {
    IconButton,
    SidebarFooter,
    NavLink,
  },
}
</script>

<style lang="less" scoped>
.el-card /deep/ .el-card__body {
  padding: 10px;
}

a.router-link-exact-active.router-link-active {
  flex: 1;
}

.box {
  width: 100%;
  .box-card {
    margin-bottom: 0.5rem;
    .header-card {
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #f6f6f6;
      display: flex;
      .GlobalWrite-navIcon {
        margin-bottom: 0.6rem;
        color: #8590a6;
      }
      .GlobalWrite-topTitle {
        font-size: 0.6rem;
        margin: 0 auto;
      }
    }
    .draft .nav-link {
      margin-top: 0.5rem;
      .text {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .center-card {
      display: flex;
      flex-direction: column;
      text-align: center;
      .center-card-img {
        width: 276px;
        height: 2.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .center-card-box {
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.5rem;
        .iconS {
          flex: 33.3%;
          margin-bottom: 1.25rem;
          .iconS-box {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>
