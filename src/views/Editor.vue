<template>
  <div class="editor">
    <EditorHeader
      @relaseArticles="relaseArticles"
      :btnDisabled="btnDisabled"
    >
    </EditorHeader>
    <div class="content">
      <!-- 图片上传 -->
      <el-upload
        class="upload-demo img-upload"
        drag
        action="/imgs/upload"
        multiple
        :on-success="uploadSuccess"
        accept=".jpg,.jpeg,.JPG,.JPEG,.png,.PNG"
      >
        <!-- 上传文件触发器 -->
        <div ref="hiddenUpload"></div>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div
          class="el-upload__tip"
          slot="tip"
        >只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <!-- click事件是单击可再次上传 -->
      <!-- <img
        v-if="imgUrl!==''"
        class="olgImg"
        :src="imgUrl"
        alt=""
        @click="$refs.hiddenUpload.click()"
      > -->
      <el-input
        class="content-input"
        v-model="title"
        placeholder="请输入标题(最多五十个字)"
      ></el-input>
      <rich-text-editor
        ref="myQuillEditor"
        :content="content"
        :placeHolder="placeHolder"
        @updateContent="updateContent"
      ></rich-text-editor>
    </div>
  </div>
</template>

<script>
import EditorHeader from '../components/EditorHeader'
import RichTextEditor from '../components/RichTextEditor'
import { createArticles } from '../api/save'
import { imgsUpload } from '../api/imgs'
// 引入图片前缀
import { imgDec } from '../lib/config'
export default {
  name: 'Editor',
  components: {
    EditorHeader,
    RichTextEditor,
  },
  data() {
    return {
      title: '', //标题
      content: '', //文章内容
      contentText: '', //文章简介
      placeHolder: '请输入正文', //输入框placeholder
      btnDisabled: true,
      imgUrl: '',
    }
  },
  watch: {
    title(val, newval) {
      if (
        val != undefined &&
        val.length != 0 &&
        newval != undefined &&
        newval.length != 0
      ) {
        this.btnDisabled = false
      } else {
        this.btnDisabled = true
      }
    },
    content(val, newval) {
      if (
        val != undefined &&
        val.length != 0 &&
        newval != undefined &&
        newval.length != 0
      ) {
        this.btnDisabled = false
      } else {
        this.btnDisabled = true
      }
    },
  },
  mounted() {
    //将富文本的默认图片上传方法改为imgHandler
    this.$refs.myQuillEditor.$refs.textEditor.quill
      .getModule('toolbar')
      .addHandler('image', this.imgHandler)
    /*   console.log(this.$refs.myQuillEditor) */
  },
  methods: {
    //更新文章内容与简介
    updateContent(content, contentText) {
      this.content = content
      this.contentText = contentText
    },
    // 发布按钮执行的事件
    relaseArticles() {
      let dataList = {
        content: this.content,
        excerpt:
          this.contentText.length > 100
            ? this.contentText.slice(0, 100)
            : this.contentText,
        title: this.title,
        creatorId: this.$cookies.get('id'),
        imgUrl: this.imgUrl,
      }
      createArticles(dataList).then((res) => {
        if (res.status === 200) {
          this.$notify({
            title: '成功',
            message: '文章新建成功',
            type: 'success',
          })
          this.title = ''
          this.content = ''
        } else {
          this.$notify({
            title: '错误',
            message: res.err,
            type: 'error',
          })
        }
      })
    },
    // 处理图片上传事件
    imgHandler(image) {
      if (image) {
        //触发上传图片组件的click方法
        this.$refs.hiddenUpload.click()
      }
    },
    //图片上传成功执行的事件
    uploadSuccess(response, file, fileList) {
      if (response.status === 200) {
        //在获取到的路径中增加http前缀
        //根据前缀和文件名拼接链接
        const url = `${imgDec}${response.fileName}`
        const fake = `http://localhost:3000/images/${response.fileName}`
        this.imgUrl = fake
        this.$refs.myQuillEditor.$refs.textEditor.quill.insertEmbed(
          this.$refs.myQuillEditor.$refs.textEditor.quill.getSelection(),
          'image',
          fake
        )
      }
    },
  },
}
</script>

<style lang="less" scoped>
.editor {
  .content {
    min-width: 1000px;
    max-width: 1000px;
    width: auto;
    margin: 50px auto;
    .content-input {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
}
</style>
