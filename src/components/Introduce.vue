<template>
  <!-- 推荐 -->
  <div class="introduce">
    <!-- 推荐的内容 -->
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from './ListItem'
import { userslist } from '../api/create'
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
    async getList() {
      userslist().then((response) => {
        console.log(response)
      })
    },
  },
}
</script>

<style lang="less" scoped>
</style>
