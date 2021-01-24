<template>
  <!-- 头部开始 -->
  <header class="main-header">
    <!-- 提问弹出层 -->
    <el-dialog
      title="新的问题"
      :visible.sync="askModelVisiable"
      :modal-append-to-body="false"
    >
      <!-- 调用askmodel组件,绑定changeaskmodelVisible方法 -->
      <ask-model @changeAskModelVisiable="changeAskModelVisiable"></ask-model>
    </el-dialog>
    <div class="header-content">
      <router-link :to="{ name: 'Home' }">
        <!-- 左上角logo,单击跳转回首页 -->
        <svg
          viewBox="0 0 200 91"
          fill="#0084FF"
          width="64"
          height="30"
        >
          <path
            d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </router-link>
      <!-- 菜单开始 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo menu_border"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">发现</el-menu-item>
        <el-menu-item index="3">话题</el-menu-item>
      </el-menu>
      <!-- 菜单结束 -->
      <!-- 搜索框开始 -->
      <!-- 搜索框主体内容 -->
      <el-input
        placeholder="请输入内容"
        v-model="keywords"
        class="input-with-select"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
        ></el-button>
      </el-input>
      <!-- 提问按钮 -->
      <el-button
        round
        type="primary"
        class="question"
        @click="askModelDisable"
      >提问</el-button>
      <div class="userInfo">
        <!-- 消息提示icon -->
        <i class="el-icon-bell m-r-40 icon-item"></i>
        <!-- 用户信息icon -->
        <i class="el-icon-message m-r-40 icon-item"></i>
        <!-- 下拉菜单 -->
        <el-dropdown
          v-if="isLogin"
          placement="bottom"
          trigger="click"
          class="hand-click"
        >
          <span class="el-dropdown-link logoSpan">
            <img
              src="../assets/img/logo.jpg"
              alt="用户头像"
            />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div>
                <i class="iconfont icon-pikachu-"></i><span>{{name}}</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="goToPersonalPage">
                <i class="iconfont icon-wode"></i><span>我的首页</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div><i class="iconfont icon-shezhi"></i><span>设置</span></div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="logout">
                <i class="iconfont icon-tuichu4"></i><span>退出</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <router-link
          class="singup"
          v-if="!isLogin"
          to="/singup"
        >登录</router-link>
      </div>
      <!-- 搜索框结束 -->
    </div>
  </header>
  <!-- 头部结束 -->
</template>

<script>
import { checkLogin } from '../api/checkLogin'
import { logout } from '../api/logout'
import AskModel from '../components/AskModel'
export default {
  name: 'MainHeader',
  data() {
    return {
      activeIndex: '1', //默认高亮选项
      keywords: '',
      isLogin: false,
      name: '', //用户名
      askModelVisiable: false, //dialog隐藏展示变量
    }
  },
  components: { AskModel },
  mounted() {
    //检查cookies事件
    this.inspectCookies()
  },
  methods: {
    /* 选中菜单触发事件 */
    handleSelect(Index) {
      this.activeIndex = Index
      console.log(Index)
    },
    /* 跳转到用户首页方法 */
    goToPersonalPage() {
      console.log('跳转到用户首页')
    },
    /* 退出事件函数 */
    logout() {
      logout().then((res) => {
        if (res.status === 200) {
          this.$notify({
            title: '成功',
            message: '注销成功',
            type: 'success',
          })
          this.name = ''
          this.$router.push('/singup')
        } else {
          //注销失败提示
          this.$notify({
            title: '失败',
            message: '注销失败',
            type: 'error',
          })
        }
      })
    },
    // cookies事件
    async inspectCookies() {
      await checkLogin().then((res) => {
        if (res.status === 200) {
          // 给name赋值
          this.name = res.name
          //修改登录状态
          this.isLogin = true
        } else {
          // 未登录跳转到登录页
          this.$router.push('/singup')
          //修改登录状态
          this.isLogin = false
        }
      })
    },
    //修改dialog隐藏展示
    changeAskModelVisiable(status) {
      //修改askModelVisiable内容
      this.askModelVisiable = status
    },
    askModelDisable() {
      this.askModelVisiable = true
    },
  },
}
</script>

<style lang="less" scoped>
.el-menu--horizontal > .el-menu-item.is-active {
  font-size: 0.9rem;
}

.el-input-group {
  width: 40%;
}

.el-dropdown-menu__item {
  display: flex;
}

.input-with-select /deep/ .el-input__inner {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

.input-with-select /deep/ .el-input-group__append {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

.main-header {
  position: fixed;
  width: 100%;
  background-clip: content-box;
  -webkit-box-shadow: 0 1px 3px rgb(180 180 180);
  box-shadow: 0 1px 3px rgb(180 180 180);
  //   position: relative;
  z-index: 100;
  min-width: 1000px;
  overflow: hidden;
  background: #fff;
  .header-content {
    display: flex;
    width: auto;
    max-width: 1156px;
    min-width: 1000px;
    padding-left: 0.8rem;
    padding-right: 1.5rem;
    position: relative;
    display: flex;
    height: 60px;
    padding: 0 0.8rem;
    margin: 0 auto;
    -webkit-box-align: center;
    align-items: center;
    transition: transform 0.3s, -webkit-transform 0.3s;
    .menu_border {
      margin: 0 1rem 0 1rem;
    }
    .input-with-select {
      flex: 1;
      margin: 0 2rem 0 2rem;
    }
    .question {
      margin: 0 0.75rem 0 0.75rem;
    }
    .userInfo {
      width: auto;
      margin-left: 1.5rem;
      .icon-item {
        font-size: 1.1rem;
        margin-right: 2rem;
        cursor: pointer;
      }
      .hand-click {
        vertical-align: bottom;
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        .logoSpan {
          width: 1.5rem;
          height: 1.5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .singup {
        font-size: 14px;
        color: #2c3e50;
        -webkit-transition: all 0.1s;
        -moz-transition: all 0.1s;
        -o-transition: all 0.1s;
        transition: all 0.1s;
        &:hover {
          color: lightblue;
          -webkit-transform: scale(1.2);
          -moz-transform: scale(1.2);
          -o-transform: scale(1.2);
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
