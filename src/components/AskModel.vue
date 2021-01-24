<template>
  <div class="ask-model">
    <!-- 问题标题输入框 -->
    <el-input
      class="ask-model-input"
      placeholder="写下你的问题,准确地描述问题更容易得到解答"
      v-model="title"
      clearable
    >
    </el-input>
    <rich-text-editor
      class="with-border"
      ref="richtext"
      :content="discription"
      :placeHolder="placeHolder"
      @updateContent="updateContent"
    ></rich-text-editor>
    <div class="footer">
      <!-- 确定按钮 -->
      <el-button
        type="primary"
        @click="relaseQuestion"
      >确定</el-button>
      <!-- 取消按钮 -->
      <el-button
        type="danger"
        @click="$emit('changeAskModelVisiable',false)"
      >取消</el-button>
    </div>
  </div>
</template>

<script>
import RichTextEditor from './RichTextEditor.vue'
import { createQuestions, updateQuestions } from '../api/questions'
import _ from 'lodash'
export default {
  props: ['oldItem'],
  components: { RichTextEditor },
  name: 'AskModel',
  data() {
    return {
      title: '', //问题标题
      discription: '', //描述
      excerpt: '', //简介
      placeHolder: '输入问题背景、条件等详情信息(选填)',
    }
  },
  mounted() {
    //首先判断是修改问题还是创建问题
    if (!_.isEmpty(this.oldItem)) {
      // 若是修改问题
      this.title = this.oldItem.title
      this.discription = this.oldItem.discription
      this.$refs.richtext.updateContent(this.discription)
    }
  },
  methods: {
    updateContent(content, contentText) {
      this.discription = content
      //更新描述
      this.excerpt =
        contentText.length > 100 ? contentText.slice(0, 100) : contentText
    },
    relaseQuestion() {
      if (!_.isEmpty(this.oldItem)) {
        //更新
        this.updateContent()
      } else {
        //创建
        this.createQuestion()
      }
    },
    // 清空
    reset() {
      this.title = ''
      this.excerpt = ''
      this.discription = ''
    },
    // 创建问题的接口
    createQuestion() {
      let dataList = {
        // 标题
        title: this.title,
        // 简介
        excerpt: this.excerpt,
        // 描述
        discription: this.discription,
        // 传入作者id
        userId: this.$cookies.get('id'),
      }
      createQuestions(dataList).then((res) => {
        if (res.status === 200) {
          this.$notify({
            title: '成功',
            message: res.msg,
            type: 'success',
          })
          this.reset()
          this.$emit('changeAskModelVisiable', false)
        } else {
          this.$notify.error({
            title: '错误',
            message: '创建问题失败',
          })
        }
      })
    },
    //更新问题的接口
    updateQuestion() {},
  },
}
</script>

<style lang="less" scoped>
.ask-model {
  .ask-model-input {
    background: white;
    color: black;
    margin-bottom: 15px;
  }
  .footer {
    margin-top: 15px;
  }
}
</style>
