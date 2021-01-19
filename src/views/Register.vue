<!-- 注册页面 -->
<template>
  <div class="register">
    <!-- 头部 -->
    <div class="register-page-content">
      <img
        class="register-pahe-logo"
        src="../assets/img/zhihu-logo.png"
        alt=""
      >
      <div class="register-page-zvnmar">
        <h4>注册</h4>
        <form action="">
          <input
            ref="One"
            type="text"
            placeholder="用户名"
            class="input"
            v-model="user"
            @blur="inputOne"
            @focus="inputTwo"
          >
          <input
            ref="Two"
            type="text"
            placeholder="邮箱"
            class="input"
            v-model="email"
            @blur="inputThree"
            @focus="inputFour"
          >
          <input
            ref="Three"
            type="password"
            class="input"
            placeholder="请输入密码"
            v-model="password"
            @blur="inputFive"
            @focus="inputSix"
          >
          <input
            ref="Four"
            type="password"
            class="input"
            placeholder="请再次输入密码"
            v-model="passwords"
            @blur="inputSeven"
            @focus="inputEight"
          >
          <!-- 小眼睛 -->
          <svg
            v-if="eyesDisabled"
            @click="eyesOpenOne"
            class="Zi Zi--Eye Button-zi eyes"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              d="M1 11.5C1 15 7 19 12 19s11-4 11-7.5S17 4 12 4 1 8 1 11.5zm11 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"
              fill-rule="evenodd"
              fill="#8B94A7"
            ></path>
          </svg>
          <svg
            @click="eyesOpenTwo"
            v-else
            class="Zi Zi--EyeSlash Button-zi  eyes"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              d="M17.007 11.504c0 .65-.13 1.26-.36 1.83l3 3.073S23 14.136 23 11.504C23 8.008 17.255 4 11.995 4c-1.4 0-2.741.25-3.982.701l2.161 2.16c.57-.23 1.18-.36 1.831-.36a5.004 5.004 0 0 1 5.002 5.003zM2.57 4.342l2.067 2.075C3.499 7.258 1 9.119 1 11.504c0 3.336 5.79 7.503 11.005 7.503 1.55 0 3.031-.3 4.382-.84l.42.42 2.125 2.118s.782.571 1.314 0-.074-1.305-.074-1.305L3.955 3.183s-.76-.742-1.385-.19c-.626.554 0 1.35 0 1.35zm4.963 4.96l1.55 1.552c-.05.21-.08.43-.08.65 0 1.66 1.341 3.001 3.002 3.001.22 0 .44-.03.65-.08l1.551 1.551c-.67.33-1.41.53-2.2.53a5.004 5.004 0 0 1-5.003-5.002c0-.79.2-1.53.53-2.201zm4.312-.78l3.151 3.152.02-.16c0-1.66-1.34-3.001-3.001-3.001l-.17.01z"
              opacity=".9"
              fill-rule="evenodd"
              fill="#8B94A7"
            ></path>
          </svg>
          <svg
            v-if="eyesDisableds"
            @click="eyesOpenOnes"
            class="Zi Zi--Eye Button-zi eyesOne"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              d="M1 11.5C1 15 7 19 12 19s11-4 11-7.5S17 4 12 4 1 8 1 11.5zm11 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"
              fill-rule="evenodd"
              fill="#8B94A7"
            ></path>
          </svg>
          <svg
            @click="eyesOpenTwos"
            v-else
            class="Zi Zi--EyeSlash Button-zi  eyesOne"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              d="M17.007 11.504c0 .65-.13 1.26-.36 1.83l3 3.073S23 14.136 23 11.504C23 8.008 17.255 4 11.995 4c-1.4 0-2.741.25-3.982.701l2.161 2.16c.57-.23 1.18-.36 1.831-.36a5.004 5.004 0 0 1 5.002 5.003zM2.57 4.342l2.067 2.075C3.499 7.258 1 9.119 1 11.504c0 3.336 5.79 7.503 11.005 7.503 1.55 0 3.031-.3 4.382-.84l.42.42 2.125 2.118s.782.571 1.314 0-.074-1.305-.074-1.305L3.955 3.183s-.76-.742-1.385-.19c-.626.554 0 1.35 0 1.35zm4.963 4.96l1.55 1.552c-.05.21-.08.43-.08.65 0 1.66 1.341 3.001 3.002 3.001.22 0 .44-.03.65-.08l1.551 1.551c-.67.33-1.41.53-2.2.53a5.004 5.004 0 0 1-5.003-5.002c0-.79.2-1.53.53-2.201zm4.312-.78l3.151 3.152.02-.16c0-1.66-1.34-3.001-3.001-3.001l-.17.01z"
              opacity=".9"
              fill-rule="evenodd"
              fill="#8B94A7"
            ></path>
          </svg>
        </form>
        <el-button
          class="btn-register"
          type="primary"
          :disabled='btnDisabled'
          @click="register"
        >注册</el-button>
        <div class="topic">未注册手机验证后自动注册，注册即代表同意<a href="https://www.zhihu.com/term/zhihu-terms">《知乎协议》</a><a href="https://www.zhihu.com/term/privacy">《隐私保护指引》</a></div>
        <!-- 社交账号登录 -->
        <div class="Login-socialLogin">
          <p>社交账号登录</p>
          <div class="item">
            <svg
              class="Zi Zi--WeChat Login-socialIcon"
              fill="#60c84d"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                d="M2.224 21.667s4.24-1.825 4.788-2.056C15.029 23.141 22 17.714 22 11.898 22 6.984 17.523 3 12 3S2 6.984 2 11.898c0 1.86.64 3.585 1.737 5.013-.274.833-1.513 4.756-1.513 4.756zm5.943-9.707c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272z"
                fill-rule="evenodd"
              ></path>
            </svg>
            微信
          </div>
          <div class="item">
            <svg
              class="Zi Zi--QQ Login-socialIcon"
              fill="#50c8fd"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"
                fill-rule="evenodd"
              ></path>
            </svg>
            QQ
          </div>
          <div class="item">
            <svg
              class="Zi Zi--Weibo Login-socialIcon"
              fill="#fb6622"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                fill="#FB6622"
                d="M15.518 3.06c8.834-.854 7.395 7.732 7.394 7.731-.625 1.439-1.673.309-1.673.309.596-7.519-5.692-6.329-5.692-6.329-.898-1.067-.029-1.711-.029-1.711zm4.131 6.985c-.661 1.01-1.377.126-1.376.126.205-3.179-2.396-2.598-2.396-2.598-.719-.765-.091-1.346-.091-1.346 4.882-.551 3.863 3.818 3.863 3.818zM5.317 7.519s4.615-3.86 6.443-1.328c0 0 .662 1.08-.111 2.797.003-.003 3.723-1.96 5.408.159 0 0 .848 1.095-.191 2.649 0 0 2.918-.099 2.918 2.715 0 2.811-4.104 6.44-9.315 6.44-5.214 0-8.026-2.092-8.596-3.102 0 0-3.475-4.495 3.444-10.33zm10.448 7.792s.232-4.411-5.71-4.207c-6.652.231-6.579 4.654-6.579 4.654.021.39.097 3.713 5.842 3.713 5.98 0 6.447-4.16 6.447-4.16zm-9.882.86s-.059-3.632 3.804-3.561c3.412.06 3.206 3.165 3.206 3.165s-.026 2.979-3.684 2.979c-3.288 0-3.326-2.583-3.326-2.583zm2.528 1.037c.672 0 1.212-.447 1.212-.998 0-.551-.543-.998-1.212-.998-.672 0-1.215.447-1.215.998 0 .551.546.998 1.215.998z"
                fill-rule="evenodd"
              ></path>
            </svg>
            微博
          </div>
        </div>
      </div>
    </div>
    <!-- 脚部 -->
    <div class="signup-page-footer">
      <div class="ZhihuLinks">
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >知乎专栏</a>
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >圆桌</a>
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >发现</a>
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >移动应用</a>
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >联系我们</a>
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >来知乎工作</a>
        <a href="javascript:;">注册机构号</a>
      </div>
      <div class="ZhihuRights">
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >© 2021 知乎</a>
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >京 ICP 证 110745 号</a>
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >京 ICP 备 13052560 号 - 1</a>
        <a
          href="javascript:;"
          class="footer-a ZhihuLinks-a"
        >
          <span>
            <img
              class="footer-img"
              src="../assets/img/Jlogo.png"
              alt=""
            >
          </span>
          京公网安备 11010802010035 号
        </a>
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >出版物经营许可证</a>
        <a href="javascript:;">互联网药品信息服务资格证书（京）- 非经营性 - 2017 - 0067</a>
      </div>
      <div class="ZhihuReports">
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >侵权举报</a>
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >网上有害信息举报专区</a>
        <a
          href="javascript:;"
          class="ZhihuLinks-a"
        >儿童色情信息举报专区</a>
        <a href="javascript:;">违法和不良信息举报：010-82716601</a>
      </div>
    </div>
  </div>
</template>

<script>
import { userscreate } from '../api/create'
import md5 from 'md5'
export default {
  name: 'Register',
  data() {
    return {
      eyesDisabled: true,
      eyesDisableds: true,
      user: '',
      email: '',
      password: '',
      passwords: '',
      btnDisabled: true, //注册按钮禁用
    }
  },
  methods: {
    //   开启的眼睛点击事件
    eyesOpenOne() {
      this.eyesDisabled = false
      this.$refs.Three.type = 'text'
    },
    eyesOpenTwo() {
      this.eyesDisabled = true
      this.$refs.Three.type = 'password'
    },
    eyesOpenOnes() {
      this.eyesDisableds = false
      this.$refs.Four.type = 'text'
    },
    eyesOpenTwos() {
      this.eyesDisableds = true
      this.$refs.Four.type = 'password'
    },
    // 用户名获得焦点事件
    inputTwo() {
      this.$message({
        message: '亲,请认真填写用户名',
        type: 'warning',
      })
    },
    /* 用户名失去焦点事件 */
    inputOne() {
      if (this.user != undefined && this.user.length == 0) {
        this.$refs.One.placeholder = '请输入用户名'
      }
    },
    // 邮箱获得焦点事件
    inputFour() {
      this.$message({
        message: '亲,请认真填写邮箱',
        type: 'warning',
      })
    },
    /* 邮箱失去焦点事件 */
    inputThree() {
      if (this.email != undefined && this.email.length == 0) {
        this.$refs.Two.placeholder = '请输入邮箱'
      } else {
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!reg.test(this.email)) {
          this.$notify({
            title: '警告',
            message: '亲,邮箱格式填写不满足!',
            type: 'warning',
          })
        }
      }
    },
    /* 密码获得焦点事件 */
    inputSix() {
      this.$message({
        message: '亲,请认真填写第一次密码',
        type: 'warning',
      })
    },
    /* 密码失去焦点事件 */
    inputFive() {
      if (this.password != undefined && this.password.length == 0) {
        this.$refs.Three.placeholder = '请输入第一次密码'
      } else {
        if (this.password.length < 6 || this.password.length > 18) {
          this.$notify({
            title: '警告',
            message: '亲,密码需在6-18位奥!',
            type: 'warning',
          })
        }
      }
    },
    /* 第二次密码获得焦点事件 */
    inputEight() {
      this.$message({
        message: '亲,请认真填写第二次密码',
        type: 'warning',
      })
    },
    /* 第二次失去焦点事件 */
    inputSeven() {
      if (this.passwords != undefined && this.passwords.length == 0) {
        this.$refs.Four.placeholder = '请输入第二次密码'
      } else if (this.password != this.passwords) {
        this.btnDisabled = true
        this.$message({
          message: '两次密码输入不一致',
          type: 'error',
        })
      } else {
        this.btnDisabled = false
      }
    },
    /* 注册事件 */
    register() {
      if (
        this.user.length == 0 &&
        (this.email.length == 0) &
          (this.password.length == 0) &
          (this.passwords.length == 0)
      ) {
        this.$notify({
          title: '警告',
          message: '亲,请认真填写!',
          type: 'warning',
        })
      } else {
        let dataList = {
          name: this.user,
          pwd: md5(this.password),
          pwdtwo: md5(5),
          email: this.email,
        }
        //注册接口
        userscreate(dataList).then((res) => {
          if (res.status == 201) {
            this.$notify({
              title: '警告',
              message: res.msg,
              type: 'success',
            })
            this.$router.push('/singup')
          }
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.register {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/bg.png');
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: cover;
  overflow: auto;
  box-sizing: border-box;
  .register-page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 688px;
    height: 750.03px;
    .register-pahe-logo {
      width: 6.4rem;
      height: 4.05rem;
      margin-bottom: 24px;
      justify-content: center;
    }
    .register-page-zvnmar {
      width: 356px;
      position: relative;
      padding: 0 24px;
      background: white;
      h4 {
        margin: 0;
        font-size: 16px;
        color: #121212;
        width: 64px;
        height: 64px;
        text-align: center;
        line-height: 64px;
        margin-left: 50%;
        transform: translateX(-50%);
        border-bottom: 4px solid #0066ff;
      }
      .input {
        display: block;
        width: 352px;
        height: 48px;
        margin: 24px 0 0 0;
        border: none;
        border-bottom: 1px solid #ebebeb;
        color: #121212;
        //   color: red;
        font-size: 15px;
        &:focus {
          outline: none;
        }
        ::-webkit-input-placeholder {
          color: #8590ae;
        }
      }
      .eyes {
        position: absolute;
        right: 25px;
        top: 255px;
      }
      .eyesOne {
        position: absolute;
        right: 25px;
        top: 330px;
      }
      .btn-register {
        width: 100%;
        margin-top: 30px;
      }
      .topic {
        padding: 12px 0;
        font-size: 13px;
        color: #808080;
        border-bottom: 1px solid #ebebeb;
      }
      .Login-socialLogin {
        display: flex;
        justify-content: space-between;
        height: 60px;
        line-height: 60px;
        p {
          font-size: 15px;
          color: #8590a6;
        }
        .item {
          font-size: 15px;
          color: #8590a6;
          vertical-align: middle;
          cursor: pointer;
          svg {
            vertical-align: text-bottom;
          }
        }
      }
    }
  }
  .signup-page-footer {
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 2px #999;
    padding-bottom: 20px;
    .ZhihuLinks {
      .ZhihuLinks-a {
        &::after {
          margin: 0 5px;
          content: '\B7';
        }
      }
    }
    .ZhihuRights {
      width: 100%;
      height: 100%;
      .ZhihuLinks-a {
        &::after {
          margin: 0 5px;
          content: '\B7';
        }
      }
      .footer-a {
        span {
          width: 20px;
          height: 20px;
          .footer-img {
            vertical-align: middle;
          }
        }
      }
    }
    .ZhihuReports {
      .ZhihuLinks-a {
        &::after {
          margin: 0 5px;
          content: '\B7';
        }
      }
    }
  }
}
</style>
