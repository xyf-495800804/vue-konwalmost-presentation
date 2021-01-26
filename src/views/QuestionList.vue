<template>
  <div class="question-list">
    <!-- 头部 -->
    <main-header></main-header>
    <!-- 主要内容 -->
    <div class="box">
      <div
        class="question-list-container"
        v-for="(item,index) in questionsList"
        :key="index"
      >
        <div class="question-list-container-top">
          <div class="question-list-container-top-img">
            <img
              src="../assets/img/zhihu-logo.png"
              alt=""
            >
          </div>
          <div class="question-list-container-top-p">
            <p>{{item.title}}</p>
          </div>
        </div>
        <div class="question-list-container-center">
          <h2 v-html="item.discription"></h2>
        </div>
        <div class="question-list-container-bottom">
          <el-button
            size="small"
            icon="el-icon-edit"
            class="edit"
            @click="writeAnswer(item.id)"
          >写回答</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import { getListQuestions } from '../api/questions'
export default {
  components: { MainHeader },
  name: 'QuestionList',
  data() {
    return {
      questionsList: [],
    }
  },
  mounted() {
    //获取问题列表
    this.getQuestionList()
  },
  methods: {
    //问题列表事件
    getQuestionList() {
      getListQuestions().then((res) => {
        if (res.status === 200) {
          this.questionsList = res.data
        }
      })
    },
    // 回答详情点击事件
    writeAnswer(id) {
      this.$router.push({
        name: 'detailsQuestions',
        params: {
          id: id,
        },
      })
    },
  },
}
</script>


<style lang="less" scoped>
.question-list {
  width: 100%;
  height: 100%;
  .box {
    width: 100%;
    padding: 70px 0px 20px 0px;
    .question-list-container {
      width: 100%;
      box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
      border-radius: 2px;
      .question-list-container-top {
        padding: 20px 20px 0 20px;
        background: #fff;
        margin: 0 auto;
        max-width: 1000px;
        min-width: 688px;
        display: flex;
        .question-list-container-top-img {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .question-list-container-top-p {
          font-size: 15px;
          color: #8590a6;
        }
      }
      .question-list-container-center {
        padding: 0 20px 0 20px;
        background: #fff;
        margin: 0 auto;
        max-width: 1000px;
        min-width: 688px;
        text-align: left;
        font-size: 18px;
        color: #121212;
      }
      .question-list-container-bottom {
        padding: 15px 20px 20px 20px;
        background: #fff;
        margin: auto;
        max-width: 1000px;
        min-width: 688px;
        text-align: left;
        border-bottom: 2px solid #f6f6f6;
        .edit {
          background: #0066ff;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
