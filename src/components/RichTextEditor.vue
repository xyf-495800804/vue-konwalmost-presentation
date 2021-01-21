<template>
  <div>
    <quillEditor
      class="rich-text-editor"
      v-model="value"
      ref="textEditor"
      :options="options"
      @change="updateRichText($event)"
    ></quillEditor>
  </div>
</template>


<script>
//引入Quill插件
import { quillEditor } from 'vue-quill-editor'
import { Quill } from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' //

export default {
  //content代表当前富文本输入框的内容，placeHolder代表富文本输入框的placeholder
  props: ['content', 'placeHolder'],
  name: 'RichTextEditor',
  data() {
    return {
      value: '', //内容变量,
      //Quill配置
      options: {
        //quill调用模块
        modules: {
          // quill上层菜单选项配置
          toolbar: [
            //加粗和倾斜按钮
            ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
            ['blockquote', 'code-block'], // 引用  代码块
            [{ header: 1 }, { header: 2 }], // 1、2 级标题
            [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
            [{ script: 'sub' }, { script: 'super' }], // 上标/下标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            // [{'direction': 'rtl'}],                         // 文本方向
            [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
            [{ font: [] }], // 字体种类
            [{ align: [] }], // 对齐方式
            ['clean'], // 清除文本格式
            ['link', 'image', 'video'], // 链接、图片、视频
          ],
          //编辑配置
          history: {
            //触发change事件的时长
            delay: 1000,
            //delay时内容最大长度
            maxStack: 50,
            //用户模式
            userOnly: false,
          },
        },
      },
    }
  },
  watch: {
    content: function (newVal, oldVal) {
      //置空文章输入框
      this.value = newVal
    },
  },
  components: {
    quillEditor,
  },
  mounted() {
    //更新placeholder内容
    this.$refs.textEditor.quill.root.dataset.placeholder = this.placeHolder
  },
  methods: {
    //更新内容方法
    updateContent(content) {
      //父组件调用此方法来修改content内容
      this.$refs.textEditor.quill.root.innerHTML = content
    },
    //内容修改方法
    updateRichText(content) {
      //调用父组件的updateContent方法，更改父组件内容
      this.$emit('updateContent', content.html, content.text)
    },
  },
}
</script>
