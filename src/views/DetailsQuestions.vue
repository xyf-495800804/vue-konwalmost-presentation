<template>
  <div
    class="detail-questions"
    v-loading='loading'
  >
    <!-- 头部 -->
    <main-header></main-header>
    <div class="detail-questions-wrapper">
      <div class="detail-question-wrapper-max">
        <h1>{{questionsData.title}}</h1>
        <!-- 主体内容 -->
        <div
          class="content"
          v-html="questionsData.discription"
        >
        </div>
        <!-- 文章状态 -->
        <list-item-question></list-item-question>
        <!-- 赞同数目 -->
        <div class="good">
          关注数:<span>{{number}}</span>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="questions">
      <h4
        v-if="richDisabled"
        @click="changeRichDisabled"
      >暂时还未回答,开始写第一个回答</h4>
      <rich-text-editor
        v-else
        ref="myQuillEditor"
        :content="discription"
        :placeHolder="placeHolder"
        @updateContent="updateContent"
      ></rich-text-editor>
      <div
        class="footer"
        v-show="!richDisabled"
      >
        <!-- 确定按钮 -->
        <el-button
          type="primary"
          @click="relaseQuestion"
        >确定</el-button>
        <!-- 取消按钮 -->
        <el-button
          type="danger"
          @click="close"
        >取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import listItemQuestion from '../components/listItemQuestion'
import RichTextEditor from '../components/RichTextEditor'
import { getQuestions, getListQuestions } from '../api/questions.js'

export default {
  name: 'DetailsQuestions',
  components: {
    MainHeader,
    listItemQuestion,
    RichTextEditor,
  },
  data() {
    return {
      //question数据
      questionsData: {},
      loading: false,
      //赞同数
      number: 0,
      placeHolder: '填写你的回答吧!',
      //默认显示h4
      richDisabled: true,
    }
  },
  mounted() {
    this.getQuestion()
  },
  methods: {
    updateContent(content, contentText) {
      this.discription = content
      //更新描述
      this.excerpt =
        contentText.length > 100 ? contentText.slice(0, 100) : contentText
    },
    getQuestion() {
      let dataList = {
        questionsId: this.$route.params.id,
      }
      getQuestions().then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.questionsData = res.data
        }
      })
    },
    //切换填写框
    changeRichDisabled() {
      this.richDisabled = false
    },
    // 发送回答事件
    relaseQuestion() {},
    //关闭事件
    close() {
      this.richDisabled = true
    },
  },
}
</script>

<style lang="less" scoped>
.detail-questions {
  width: 100%;
  height: 100%;
  .detail-questions-wrapper {
    padding-top: 70px;
    margin-bottom: 25px;
    -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    background: white;
    .detail-question-wrapper-max {
      padding: 16px 0;
      max-width: 1000px;
      min-width: 1000px;
      margin: auto;
      text-align: left;
      .good {
        position: absolute;
        top: 90px;
        right: 325px;
        color: #8590a6;
        span {
          vertical-align: middle;
          color: #121212;
        }
      }
    }
  }
  .questions {
    min-width: 1000px;
    max-width: 1000px;
    margin: 0 auto;
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    padding: 40px;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    .footer {
      margin-top: 20px;
    }
  }
}
</style>
