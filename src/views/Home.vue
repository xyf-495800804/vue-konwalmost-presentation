<template>
  <div class="home">
    <!-- 头部组件开始 -->
    <main-header></main-header>
    <!-- 头部组件结束 -->
    <!-- 路由占位符开始 -->
    <router-view></router-view>
    <!-- 路由占位符结束 -->
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader";
export default {
  name: "Home",
  components: {
    MainHeader,
  },
};
</script>
