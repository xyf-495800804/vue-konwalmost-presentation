<template>
  <!-- 主要内容部分 -->
  <div class="main-content">
    <div class="list">
      <!-- 调用列表组件 -->
      <main-list-wrapper></main-list-wrapper>
    </div>
    <!-- 侧边栏部分 -->
    <div class="sidebar">
      <main-sidebar></main-sidebar>
    </div>
  </div>
</template>

<script>
import MainListWrapper from '../components/MainListWrapper'
import MainSidebar from '../components/MainSidebar'
export default {
  name: 'Main',
  components: {
    MainListWrapper,
    MainSidebar,
  },
}
</script>

<style lang="less" scoped>
.main-content {
  display: flex;
  -webkit-box-align: start;
  align-items: flex-start;
  width: 1000px;
  padding: 0 0.8rem;
  margin: auto;
  .list {
    margin-top: 70px;
    flex-shrink: 0;
    margin-right: 0.5rem;
    margin-bottom: 0;
    width: 694px;
  }
  .sidebar {
    margin-top: 70px;
    -webkit-box-flex: 1;
    flex: 1 1;
    font-size: 0.7rem;
  }
}
</style>
