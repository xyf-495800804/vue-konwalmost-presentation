import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* 全局引入elementUI */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
/* 引入pc端适配 */
import "./utils/rem";
/* 引入iconfont字体图标库 */
import "./assets/iconfont/iconfont.css";
/* 引入公共样式 */
import "./assets/css/public.css";
/* 引入axios */
import axios from "axios";
Vue.prototype.$axios = axios;
// 引入拿到cookies组件
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
//引入mockjs
import "../public/mock/mockServer";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
