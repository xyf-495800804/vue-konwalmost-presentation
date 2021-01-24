<template>
  <div class="list-item-actions">
    <div class="actions">
      <!-- 赞同 -->
      <span>
        <el-button
          v-if="approvalIsable"
          size="mini"
          class="el-icon-caret-top"
          @click="handleApprovalone"
        >关注问题</el-button>
        <el-button
          v-else
          size="mini"
          :class="[{'actions-btn':changeStyleOne&&changeThree}]"
          @click="handleApprovaltwo"
        >已关注</el-button>
        <el-button
          size="mini"
          :class="{'actions-btn':changeStyleTwo&&!changeThree}"
          @click="handleCaretBottom"
        ><i class="el-icon-caret-bottom"></i></el-button>
      </span>
      <!-- 评论 -->
      <span class="actions-item"><i class="iconfont icon-weixin"></i>添加评论</span>
      <!-- 分享 -->
      <span class="actions-item"><i class="iconfont icon-fenxiang"></i>分享</span>
      <!-- 收藏 -->
      <span class="actions-item"><i class="iconfont icon-wodeshoucang"></i>收藏</span>
      <!-- 喜欢 -->
      <span class="actions-item"><i class="iconfont icon-aixin"></i>喜欢</span>
      <!-- 举报 -->
      <span class="actions-item"><i class="iconfont icon-jubao"></i>举报</span>
      <span class="actions-item">...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItemActions',
  data() {
    return {
      /* 默认显示赞同 */
      approvalIsable: true,
      changeStyleOne: false,
      changeStyleTwo: false,
      changeThree: false,
    }
  },
  methods: {
    /* 点击赞同事件 */
    handleApprovalone() {
      this.approvalIsable = false
      this.changeStyleOne = true
      this.changeThree = true
    },
    /* 点击已赞同事件 */
    handleApprovaltwo() {
      this.approvalIsable = true
      this.changeStyleOne = false
    },
    /* 不赞同点击事件 */
    handleCaretBottom() {
      this.changeStyleTwo = !this.changeStyleTwo
      this.changeThree = false
      this.approvalIsable = true
    },
  },
}
</script>

<style lang="less" scoped>
.el-button {
  background-color: #0066ff1a;
  color: #06f;
  font-size: 14px;
}

.list-item-actions {
  width: 100%;
  height: 100%;
  .actions {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    .actions-btn {
      background: #06f;
      color: #ffffff;
    }
    .actions-item {
      cursor: pointer;
      font-size: 14px;
      color: #8590a6;
      margin-left: 24px;
      i {
        margin-right: 5px;
      }
    }
  }
}
</style>
