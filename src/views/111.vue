<template>
  <div
    class="questions-details"
    v-loading="loading"
  >
    <div class="questions-header">
      <!-- 修改问题dialog -->
      <el-dialog
        title="修改问题"
        :visible.sync="askModelVisiable"
        :modal-append-to-body='false'
      >
        <!-- 调用AskModel组件 -->
        <ask-model
          @changeAskModelVisiable="changeAskModelVisiable"
          @updateQuestions="getQuestion"
          :oldItem="questionData"
        ></ask-model>
      </el-dialog>
      <!-- 页面header内容 -->
      <div class="question-header-content">
        <div class="question-header-main">
          <h1 class="question-header-title">
            <!-- 展示问题标题 -->
            {{questionData.title}}
            <!-- 编辑按钮 -->
            <el-button
              type="text"
              class="gray"
              @click="askModelVisiable=true"
            >
              <!-- 编辑,文字按钮 -->
              <i class="el-icon-edit el-icon--left"></i>
            </el-button>
          </h1>
          <div
            class="question-header-details"
            v-show="showType==='experct'"
            v-if="questionData.excerpt"
          >
            <!-- 问题描述简介 -->
            <span>{{questionData.excerpt}}</span>
            <el-button
              class="btn-no-padding"
              type="text"
              icon="el-icon-arrow-down"
              @click="showType='all'"
            >阅读全文</el-button>
          </div>
          <!-- 问题描述详情展示 -->
          <div
            class="question-header-details"
            v-show="showType==='all'"
            v-if="questionData.excerpt"
          >
            <!-- 问题描述详情 -->
            <div v-html="questionData.discription"></div>
            <el-button
              class="btn-no-padding"
              type="text"
              icon="el-icon-arrow-up"
              @click="showType='experct'"
            >收起</el-button>
          </div>
        </div>
      </div>
      <!-- 问题相关操作按钮 -->
      <div class="question-header-footer">
        <div class="question-header-footer-inner">
          <div class="question-header-footer-main">
            <div class="question-header-btnGroup">
              <!-- 关注问题按钮 -->
              <el-button type="primary">关注问题</el-button>
              <!-- 新建答案按钮 -->
              <el-button
                type="primary"
                plain
                icon="el-icon-edit"
                @click="showAnswerPart"
                :disabled="!currentAnswerEmpty"
              >写回答</el-button>
            </div>
            <div class="question-header-actions">
              <el-button
                class="button"
                type="info"
                plain
              >
                <!-- 邀请回答按钮 -->
                <span class=""></span>邀请回答
              </el-button>
              <!-- 调用listItemActions组件 -->
              <list-item-actions
                class="actions"
                :itemid="questionData.id"
                :type="1"
                :showActionItems="['comment','share','more']"
              ></list-item-actions>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="question-main">
      <div class="question-main-clo">
        <!-- 回答展示框，绑定用户成绩loading -->
        <el-card
          v-loading="authorLoading"
          v-show="answerVisiable"
        >
          <div class="author-info">
            <div class="avatar">
              <!-- 用户头像 -->
              <img
                :src="authorInfo.avatarUrl||''"
                alt=""
              >
            </div>
            <div class="userinfo">
              <!-- 用户名展示 -->
              <p class="username">{{authorInfo.name}}</p>
              <!-- 座右铭展示 -->
              <p class="headline">{{authorInfo.headline}}</p>
            </div>
            <rich-text-editor
              class="with-border"
              ref="richtext"
              :content="answerContent"
              :placeHolder="placeHolder"
              @updateContent="updateContent"
            ></rich-text-editor>
            <div class="clear">
              <!-- 取消按钮,回答框隐藏 -->
              <el-button
                type="default"
                @click="answerVisiable=false"
              ></el-button>
              <!-- 创建问题按钮 -->
              <el-button
                type="primary"
                @click="createAnswer"
              >提交回答</el-button>
            </div>
          </div>
        </el-card>
      </div>
      <div class="question-main-sidebar">
        <!-- 静态侧边栏展示内容 -->
        <sidebar-footer></sidebar-footer>
      </div>
    </div>
  </div>
</template>

<script>
import AskModel from '../components/AskModel'
import ListItemActions from '../components/ListItemActions.vue'
import RichTextEditor from '../components/RichTextEditor.vue'
import SidebarFooter from '../components/SidebarFooter.vue'
export default {
  name: 'DetailQuestions',
  data() {
    return {
      //问题详情
      questionData: {},
      //页面loading
      loading: false,
      //用户loading
      authorLoading: false,
      //回答框是否可见
      answerVisiable: false,
      //评论展示状态
      commenShowType: 'all',
      //问题详情展示状态
      showType: 'experct',
      //修改问题框是否可见
      aswModelVisiable: false,
      //回答问题
      answerContent: '',
      //回答内容简介
      answerExperct: '',
      //回答输入
      placeHolder: '写回答',
      //作者信息
      authorInfo: {},
      //当前作者回答
      currentAnswer: {},
      //默认修改问题框不显示
      askModelVisiable: false,
      //默认新建答案按钮显示
      currentAnswerEmpty: true,
    }
  },
  components: {
    AskModel,
    ListItemActions,
    RichTextEditor,
    SidebarFooter,
  },
  mounted() {
    //获取问题数据
    this.getQuestion()
  },
  methods: {
    //获取问题数据
    getQuestion() {},
    //获取作者信息
    getAuthorInfo() {},
    //创建回答方法
    createAnswer() {},
    //修改问题框状态
    changeAskModelVisiable(status) {
      this.askModelVisiable = status
    },
    //更新回答内容方法
    updateContent(content, contentText) {
      //更新回答内容
      this.answerContent = content
      //更新回答简介内容
      this.answerExperct =
        contentText.length > 100 ? contentText.slice(0, 100) : contentText
    },
    //展示回答框方法
    showAnswerPart() {
      //回答框可见
      this.answerVisiable = true
      //获取用户信息
      this.getAuthorInfo()
    },
  },
}
</script>
