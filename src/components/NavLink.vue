<template>
  <div class="draft">
    <!-- 我的收藏,我关注的问题,我的邀请,站务中心,我的余额-->
    <el-card class="box-card">
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <i class="iconfont icon-wodeshoucang "></i>
            我的收藏
          </span>
          <span class="num">0</span>
        </a>
        <a href="#">
          <span class="text">
            <i class="iconfont icon-wenti "></i>
            我关注的问题
          </span>
          <span class="num">2</span>
        </a>
        <a href="#">
          <span class="text">
            <i class="iconfont icon-yaoqing "></i>
            我的邀请
          </span>
          <span class="num">343</span>
        </a>
        <a href="#">
          <span class="text">
            <i class="iconfont icon-yue "></i>
            我的余额
          </span>
        </a>
        <a href="#">
          <span class="text">
            <i class="iconfont icon-xinxi "></i>
            站务中心
          </span>
        </a>
        <a href="#">
          <span class="text">
            <i class="iconfont icon-kefubangzhu "></i>
            帮助中心
          </span>
        </a>
        <a href="#">
          <span class="text">
            <i class="iconfont icon-banquan-kuai "></i>
            版权服务中心
          </span>
        </a>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.el-card /deep/ .el-card__body {
  padding: 8px 0 8px 0;
}

.draft {
  /* position: sticky;
  top: 75px; */
  width: 100%;
  height: 100%;
  .box-card {
    width: 100%;
    height: 100%;
    .nav-link {
      display: flex;
      flex-direction: column;
      a {
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #8590a6;
        .num {
          height: 28px;
          background: #f6f6f6;
          text-align: center;
          line-height: 28px;
          font-size: 12px;
          //   padding: 6px 10px;
          padding: 0 10px 0 10px;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
