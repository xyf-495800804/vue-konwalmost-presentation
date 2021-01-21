<template>
  <div class="list-item">
    <div
      class="list-item-card"
      v-for="(item,index) in IntroduceList"
      :key="index"
      v-loading="loading"
    >
      <!-- 标题 -->
      <div class="tittle">
        <h2>{{item.title}}</h2>
      </div>
      <!-- 展示简介 -->
      <div class="shortCut">
        <!-- 图片 -->
        <div
          class="cover"
          v-show='item.cover'
        >
          <img
            :src="item.cover"
            alt=""
          >
        </div>
        <!-- 展示简介内容 -->
        <div class="experct">

          <span
            class="experct-html"
            v-html="$options.filters.ellipsis(item.content)"
          >
          </span>
          <router-link :to="{name:'DetailArticles',params:{id:item.id}}">
            <el-button
              class="btn-no-padding"
              type="text"
            >阅读全文 <span class="el-icon-arrow-down"></span></el-button>
          </router-link>
        </div>
      </div>
      <!-- 图标 -->
      <ListItemActions></ListItemActions>
    </div>
  </div>
</template>

<script>
import ListItemActions from './ListItemActions'
import { getlistArticles } from '../api/save'
export default {
  name: 'ListItem',
  data() {
    return {
      loading: true,
      IntroduceList: [],
    }
  },
  watch: {
    //路由发生变化重新获取数据
    // $router: 'fetchDate',
  },
  mounted() {
    this.fetchDate()
  },
  methods: {
    /* 获取数据事件 */
    fetchDate() {
      this.loading = true
      getlistArticles().then((res) => {
        if (res.status === 200) {
          this.loading = false
          this.IntroduceList = res.data
        }
      })
    },
  },
  //   过滤器限制文字省略
  filters: {
    ellipsis(value) {
      // js利用正则解析html
      //   /<[^>]+>/g
      //   let valueone = value.replace(/<[^>]+>/g, '')
      if (!value) return ''
      if (value.length > 100) {
        return value.slice(0, 100) + '...'
      }
      return value
    },
  },
  components: {
    ListItemActions,
  },
}
</script>

<style lang="less" scoped>
.list-item {
  width: 100%;
  height: 100%;
  .list-item-card {
    background: #fff;
    text-align: left;
    padding: 20px;
    border-radius: 0;
    overflow: initial;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
    .tittle {
      h2 {
        width: 654px;
        height: 28.8px;
        line-height: 28.8px;
        font-size: 18px;
        margin: 0;
      }
    }
    .shortCut {
      margin-top: 10px;
      display: inline-flex;
      .cover {
        width: 280px;
        height: 100%;
        margin-top: -2px;
        margin-right: 18px;
        margin-bottom: 4px;
        overflow: hidden;
        background-size: cover;
        border-radius: 4px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .experct {
        width: 100%;
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
          PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC,
          WenQuanYi Micro Hei, sans-serif;
        .experct-html {
          width: 100%;
          height: 100%;
          cursor: pointer;
          margin-top: 9px;
          margin-bottom: -4px;
          font-size: 15px;
          line-height: 1.67;
          overflow: hidden;
          word-break: break-word;
          &:hover {
            color: #8590a6;
          }
        }
        .btn-no-padding {
          display: inline-block;
          padding: 0;
          margin-left: 4px;
          color: #175199;
          font-size: 14px;
          &:hover {
            color: #8590a6;
          }
        }
      }
    }
  }
}
</style>
