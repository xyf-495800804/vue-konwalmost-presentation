<template>
  <div class="list-wrapper">
    <!-- 推荐,关注,热榜 -->
    <MainListNav></MainListNav>
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MainListNav from './MainListNav'
export default {
  name: 'MainListWrapper',
  data() {
    return {}
  },
  components: {
    MainListNav,
  },
}
</script>

<style lang="less" scoped>
</style>
