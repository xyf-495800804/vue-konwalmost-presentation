import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import Introduce from "../components/Introduce.vue";
import Attention from "../components/Attention.vue";
import HotTopic from "../components/HotTopic.vue";
import SingUp from "../views/SingUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/singup",
    name: "SingUp",
    component: SingUp
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    redirect: "/home/main",
    children: [
      {
        path: "/home/main",
        name: "Main",
        component: Main,
        redirect: "/home/main/introduce",
        children: [
          {
            path: "/home/main/introduce",
            name: "Introduce",
            component: Introduce
          },
          {
            path: "/home/main/attention",
            name: "Attention",
            component: Attention
          },
          {
            path: "/home/main/hottopic",
            name: "HotTopic",
            component: HotTopic
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
