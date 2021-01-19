<template>
  <!-- 推荐 -->
  <div class="introduce">
    <!-- 推荐的内容 -->
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from './ListItem'
import {} from '../api/create'
export default {
  name: 'Introduce',
  components: {
    ListItem,
  },
  data() {
    return {}
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {},
  },
}
</script>

<style lang="less" scoped>
</style>
