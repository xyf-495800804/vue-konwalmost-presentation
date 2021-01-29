import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import Introduce from "../components/Introduce.vue";
import Attention from "../components/Attention.vue";
import HotTopic from "../components/HotTopic.vue";
import SingUp from "../views/SingUp.vue";
import Register from "../views/Register.vue";
import Editor from "../views/Editor.vue";
import DetailArticles from "../views/DetailsArticle.vue";
import DetailQuestions from "../views/DetailsQuestions.vue";
import QuestionList from "../views/QuestionList.vue";
import Test from "../views/test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/test",
    component: Test
  },
  {
    path: "/singup",
    name: "SingUp",
    component: SingUp
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/editor/:acticleId",
    name: "Editor",
    component: Editor
  },
  {
    path: "/article/:id",
    name: "DetailArticles",
    component: DetailArticles
  },
  {
    path: "/question/answer",
    name: "QuestionList",
    component: QuestionList
  },
  {
    path: "/question/:id",
    name: "detailsQuestions",
    component: DetailQuestions
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
