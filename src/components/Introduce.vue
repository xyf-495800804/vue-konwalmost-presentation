<template>
  <!-- 推荐 -->
  <div class="introduce">
    <!-- 推荐的内容 -->
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from './ListItem'
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
      const { data } = await this.$axios.get('/api/author.json')
      console.log(data)
    },
  },
}
</script>

<style lang="less" scoped>
</style>
