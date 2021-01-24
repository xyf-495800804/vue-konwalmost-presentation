<template>
  <div class="list-nav-card">
    <el-card class="box-card">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo list-menu"
        mode="horizontal"
        text-color="#121212"
        active-text-color="#06f"
        @select="handleSelect"
      >
        <el-menu-item
          index="1"
          class="list-menu-item"
        >
          <router-link to="/home/main/introduce">推荐</router-link>
        </el-menu-item>
        <el-menu-item
          index="2"
          class="list-menu-item"
        >
          <router-link to="/home/main/attention">关注</router-link>
        </el-menu-item>
        <el-menu-item
          index="3"
          class="list-menu-item"
        >
          <router-link to="/home/main/hottopic">热榜</router-link>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MainListNav',
  data() {
    return {
      activeIndex: '1',
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    /* 菜单切换事件 */
    handleSelect(key, keyPath) {
      this.activeIndex = key
    },
    fetch() {
      var cur_path = this.$route.path //获取当前路由
      //   var routers = this.$router.options.routes // 获取路由对象
      if (cur_path == '/home/main/introduce') {
        this.activeIndex = '1'
      } else if (cur_path == '/home/main/attention') {
        this.activeIndex = '2'
      } else {
        this.activeIndex = '3'
      }
    },
  },
}
</script>

<style lang="less" scoped>
.el-card /deep/ .el-card__body {
  padding: 0;
}

.list-nav-card /deep/ .el-card.is-always-shadow {
  box-shadow: none;
}

.list-nav-card {
  .box-card {
    .list-menu {
      font-weight: 500;
      .list-menu-item {
        font-size: 16px;
      }
    }
  }
}
</style>
