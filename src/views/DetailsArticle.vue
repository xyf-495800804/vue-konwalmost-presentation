<template>
  <!-- 最外层loading -->
  <div
    class="article-details"
    v-loading="loading"
  >
    <!-- 头部 -->
    <main-header></main-header>
    <div class="article-wrapper">
      <div class="article-wrapper-max">
        <h1 class="title">{{articleDate.title}}</h1>
        <div class="author-info">
          <div class="avator">
            <img
              src=""
              alt=""
            >
          </div>
          <div class="userinfo">
            <p class="username">
            </p>
            <p class="headline"></p>
          </div>
        </div>
        <!-- 主体内容 -->
        <div
          class="content"
          v-html="articleDate.content"
        >
        </div>
        <!--  <div class="cover">
        <img
          :src="articleDate.cover"
          alt=""
        >
      </div> -->
        <!-- 文章状态 -->
        <list-item-actions></list-item-actions>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles } from '../api/save'
import ListItemActions from '../components/ListItemActions'
import MainHeader from '../components/MainHeader.vue'
export default {
  name: 'DetailArticle',
  data() {
    return {
      loading: true,
      //文章详情
      articleDate: {},
    }
  },
  components: {
    ListItemActions,
    MainHeader,
  },
  mounted() {
    this.getArticle()
  },
  methods: {
    //获取详情数据
    getArticle() {
      let dataList = {
        artcileId: this.$route.params.id,
      }
      //   console.log(this.$route.params.id)
      getArticles(dataList).then((res) => {
        if (res.status === 200) {
          this.loading = false
          this.articleDate = res.data
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.article-details {
  width: 100%;
  height: 100%;
  .article-wrapper {
    padding-top: 70px;
    -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    background: white;
    .article-wrapper-max {
      padding: 16px 0;
      max-width: 1000px;
      min-width: 1000px;
      margin: auto;
      text-align: left;
    }
  }
}
</style>
