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
        <div class="updata">
          <el-button
            v-show="zzid==questionsData.creatorId"
            size="small"
            class="updata-btn"
            @click="updataQuestion($route.params.id)"
          >更新问题</el-button>
        </div>
        <!-- 提问弹出层 -->
        <el-dialog
          class="dialog"
          title="更新问题"
          :visible.sync="askModelVisiable"
          :modal-append-to-body="false"
        >
          <!-- 调用askmodel组件,绑定changeaskmodelVisible方法 -->
          <ask-model
            @changeAskModelVisiable="changeAskModelVisiable"
            :oldItem="oldItem"
            ref="askModel"
          ></ask-model>
        </el-dialog>
      </div>
    </div>
    <!--  -->
    <div class="questions">
      <h4
        v-if="richDisabled&&answerList.length==0"
        @click="changeRichDisabled"
      >暂时还未回答,开始写第一个回答</h4>
      <rich-text-editor
        v-if="!richDisabled||answerList.length!==0"
        ref="myQuillEditor"
        :content="discription"
        :placeHolder="placeHolder"
        @updateContent="updateContent"
      ></rich-text-editor>
      <div
        class="footer"
        v-if="!richDisabled||answerList.length!==0"
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
      <div
        class="questions-answers"
        v-show="answerList!=undefined&&answerList"
        v-for="(item,index) in answerList"
      >
        <h3 v-html="item.content"></h3>
        <div class="questions-answers-btn">
          <el-button
            v-show="item.creatorId==$cookies.get('id')"
            size="mini"
            class="updata-answer"
            @click="updataAnswers(item.id,item.creatorId)"
          >更新回答</el-button>
          <el-button
            v-show="item.creatorId==$cookies.get('id')"
            size="mini"
            class="delete-answer"
            @click="delterAnswers(item.id,item.creatorId)"
          >删除回答</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import listItemQuestion from '../components/listItemQuestion'
import RichTextEditor from '../components/RichTextEditor'
import AskModel from '../components/AskModel'
import { getQuestions } from '../api/questions.js'
import {
  createAnswers,
  getIdAnswers,
  deleteAnswers,
  getOnlyIdAnswers,
  updataAnswers,
} from '../api/answers'

export default {
  name: 'DetailsQuestions',
  components: {
    MainHeader,
    listItemQuestion,
    RichTextEditor,
    AskModel,
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
      askModelVisiable: false, //dialog隐藏展示变量
      oldItem: {},
      zzid: '',
      discription: '',
      //回答数组列表
      answerList: [],
      updataId: '',
      //更新的列表
      updataList: {},
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
      this.zzid = this.$cookies.get('id')
      let dataList = {
        questionsId: this.$route.params.id,
      }
      getQuestions(dataList).then((res) => {
        if (res.status === 200) {
          this.questionsData = res.data
          let dataList = {
            id: this.$route.params.id,
          }
          getIdAnswers(dataList).then((res) => {
            this.answerList = res.data
          })
        }
      })
    },

    //切换填写框
    changeRichDisabled() {
      this.richDisabled = false
    },
    // 发送回答事件
    relaseQuestion() {
      if (this.updataId) {
        let dataList = {
          creatorId: this.updataList.creatorId,
          answerId: this.updataId,
          content: this.discription,
          excerpt: this.excerpt,
        }
        updataAnswers(dataList).then((res) => {
          if (res.status === 200) {
            this.$refs.myQuillEditor.value = ''
            //立即更新
            let dataList = {
              id: this.$route.params.id,
            }
            getIdAnswers(dataList).then((res) => {
              this.answerList = res.data
            })
            this.$notify({
              title: '成功',
              message: '回答修改成功',
              type: 'success',
            })
          }
        })
      } else {
        let dataList = {
          creatorId: this.$cookies.get('id'),
          targetId: this.$route.params.id,
          content: this.discription,
          excerpt: this.excerpt,
        }
        createAnswers(dataList).then((res) => {
          if (res.status === 200) {
            this.richDisabled = true
            //清空填写的输入框
            this.$refs.myQuillEditor.value = ''
            //立即更新
            let dataList = {
              id: this.$route.params.id,
            }
            getIdAnswers(dataList).then((res) => {
              this.answerList = res.data
            })
          }
        })
      }
    },
    //关闭事件
    close() {
      this.richDisabled = true
    },
    //更新问题事件
    updataQuestion(_id) {
      this.askModelVisiable = true
      this.oldItem = {
        id: _id,
        creatorId: this.questionsData.creatorId,
        excerpt: this.questionsData.excerpt,
      }
    },
    //修改dialog隐藏展示
    changeAskModelVisiable(status) {
      //修改askModelVisiable内容
      this.askModelVisiable = status
      this.$refs.askModel.reset()
    },
    //更新回答事件
    updataAnswers(_id, _creatorId) {
      let dataList = {
        id: _id,
      }
      getOnlyIdAnswers(dataList).then((res) => {
        if (res.status === 200) {
          let excerpt = res.data[0].excerpt
          this.$refs.myQuillEditor.value = excerpt
          this.updataId = res.data[0].id
          this.updataList = res.data[0]
        }
      })
    },
    //删除回答事件
    delterAnswers(_id, _creatorId) {
      let dataList = {
        answerId: _id,
        userId: _creatorId,
      }
      deleteAnswers(dataList).then((res) => {
        if (res.status === 200) {
          this.$notify({
            title: '成功',
            message: '回答删除成功',
            type: 'success',
          })
          //立即更新
          let dataList = {
            id: this.$route.params.id,
          }
          getIdAnswers(dataList).then((res) => {
            this.answerList = res.data
          })
        }
      })
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
    .detail-question-wrapper-max {
      position: relative;
      padding: 16px 0;
      max-width: 1000px;
      min-width: 1000px;
      padding: 40px;
      margin: auto;
      text-align: left;
      background: white;
      .good {
        position: absolute;
        top: 15px;
        right: 140px;
        color: #8590a6;
        span {
          vertical-align: middle;
          color: #121212;
        }
      }
      .updata {
        position: absolute;
        top: 60px;
        right: 140px;
        .updata-btn {
          background: #0066ff;
          color: #ffffff;
        }
      }
      .dialog {
        text-align: center !important;
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
    .questions-answers {
      text-align: left;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin-top: 20px;
      .questions-answers-btn {
        .updata-answer {
          background: #0066ff;
          color: #ffffff;
        }
        .delete-answer {
          background: #0066ff;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
