<template>
  <div class="commend-list">
    <h3
      v-show="richDisabled&&commendList.length==0"
      @click="changeRichDisabled"
    >还未有第一个评论奥,快来填写第一条评论</h3>
    <rich-text-editor
      v-show="!richDisabled||commendList.length!==0"
      ref="myQuillEditor"
      :content="discription"
      :placeHolder="placeHolder"
      @updateContent="updateContent"
    ></rich-text-editor>
    <div
      class="footer"
      v-show="!richDisabled||commendList.length!==0"
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
      v-for="(item,index) in commendList"
      :key="index"
      v-show="commendList!=undefined&&commendList.length>0"
    >
      <h3 v-html="item.content"></h3>
      <div class="questions-answers-btn">
        <el-button
          size="mini"
          class="delete-answer"
          @click="deleteCommend(item.id,item.creatorId)"
        >删除回答</el-button>
      </div>
    </div>
  </div>

</template>

<script>
import RichTextEditor from '../components/RichTextEditor'
import { commentGet, commentCreate, commentDelete } from '../api/commend'
export default {
  name: 'CommendList',
  components: {
    RichTextEditor,
  },
  data() {
    return {
      //默认显示h4
      richDisabled: true,
      placeHolder: '填写你的评论吧!',
      discription: '',
      commendList: [],
    }
  },
  mounted() {
    this.getCommend()
  },
  methods: {
    //获取评论
    getCommend() {
      commentGet({
        targetType: '1',
        targetId: this.$route.params.id,
      }).then((res) => {
        if (res.status == 200) {
          this.commendList = res.data
        }
      })
    },
    updateContent(content, contentText) {
      this.discription = content
      //更新描述
      this.excerpt =
        contentText.length > 100 ? contentText.slice(0, 100) : contentText
    },
    //确定评论函数
    relaseQuestion() {
      let dataList = {
        creatorId: this.$cookies.get('id'),
        targetType: '1',
        targetId: this.$route.params.id,
        content: this.discription,
      }
      commentCreate(dataList).then((res) => {
        if (res.status === 200) {
          this.$notify({
            title: '成功',
            message: '评论创建成功',
            type: 'success',
          })
          this.$refs.myQuillEditor.value = ''
          this.getCommend()
        }
      })
    },
    //取消函数
    close() {},
    //删除评论
    deleteCommend(_id, _creatorId) {
      commentDelete({
        id: _id,
        creatorId: _creatorId,
      }).then((res) => {
        if (res.status === 200) {
          this.$notify({
            title: '成功',
            message: '评论删除成功',
            type: 'success',
          })
          this.getCommend()
        }
      })
    },
    //显示编辑器
    changeRichDisabled() {
      this.richDisabled = false
    },
  },
}
</script>

<style lang="less" scoped>
.commend-list {
  min-width: 1000px;
  max-width: 1200px;
  background: white;
  padding: 35px 35px 100px 35px;
  margin: 25px auto;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  overflow: hidden;
  border-radius: 2px;
  animation: fadeInDown;
  animation-duration: 2s;
  animation-fill-mode: none;
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
</style>
