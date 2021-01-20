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
            [
              'bold',
              'italic',
              'color',
              'code',
              'font',
              'indent',
              'align',
              'direction',
              'formula',
            ],
            //二级标题、引入、代码库等按钮
            [
              { header: 2 },
              'blockquote',
              'code-block',
              { list: 'ordered' },
              { list: 'bullet' },
            ],
            //插入链接和图片
            ['link', 'image'],
            //清除选中样式内容样式按钮
            ['clean'],
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
