<template>
  <div class="list-item">
    <div
      class="list-item-card"
      v-for="(item,index) in IntroduceList"
      :key="index"
    >
      <!-- 标题 -->
      <div class="tittle">
        <h2>{{item.titele}}</h2>
      </div>
      <!-- 展示简介 -->
      <div class="shortCut">
        <!-- 图片 -->
        <div class="cover">
          <img
            src="../assets/img/mb.jpg"
            alt=""
          >
        </div>
        <!-- 展示简介内容 -->
        <div class="experct">

          <span
            class="experct-html"
            v-html="item.content"
          ></span>
          <el-button
            class="btn-no-padding"
            type="text"
          >阅读全文 <span class="el-icon-arrow-down"></span></el-button>

        </div>
      </div>
      <!-- 图标 -->
      <ListItemActions></ListItemActions>
    </div>
  </div>
</template>

<script>
import ListItemActions from './ListItemActions'
export default {
  name: 'ListItem',
  data() {
    return {
      IntroduceList: [
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
        {
          titele:
            '【自制】你的下一个显示器,可能是个充电宝??DIY超迷你便携显示器【硬核】',
          imgSrc: '../assets/img/mb.jpg',
          content:
            'May： 是我妹妹！！！ 从小就好看！从小就特别喜欢拍照，家里当时好多好多她拍的大头贴，白眼.jpg ，各种被人家要，被好多小男生暗恋明恋，从小就是班花，跟她出门百分之九十都会被夸，被问眼睛是割的吗？头发',
        },
      ],
    }
  },
  mounted() {
    /*  this.getList() */
  },
  methods: {
    /* 获取数据事件 */
    /*  getList() {
      for (let i = 0; i < 10; i++) {
        this.IntroduceList.push()
      }
    }, */
  },
  //   过滤器限制文字省略
  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 100) {
        return value.slice(0, 100) + '...'
      }
      return value
    },
  },
  components: {
    ListItemActions,
  },
}
</script>

<style lang="less" scoped>
.list-item {
  width: 100%;
  height: 100%;
  .list-item-card {
    background: #fff;
    text-align: left;
    padding: 20px;
    border-radius: 0;
    overflow: initial;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
    .tittle {
      h2 {
        width: 654px;
        height: 28.8px;
        line-height: 28.8px;
        font-size: 18px;
        margin: 0;
      }
    }
    .shortCut {
      margin-top: 10px;
      display: inline-flex;
      .cover {
        width: 190px;
        height: 105px;
        margin-top: -2px;
        margin-right: 18px;
        margin-bottom: 4px;
        overflow: hidden;
        background-size: cover;
        border-radius: 4px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .experct {
        width: 446px;
        height: 99.6px;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
          PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC,
          WenQuanYi Micro Hei, sans-serif;
        .experct-html {
          width: 100%;
          height: 100%;
          cursor: pointer;
          margin-top: 9px;
          margin-bottom: -4px;
          font-size: 15px;
          line-height: 1.67;
          overflow: hidden;
          word-break: break-word;
          &:hover {
            color: #8590a6;
          }
        }
        .btn-no-padding {
          display: inline-block;
          padding: 0;
          margin-left: 4px;
          color: #175199;
          font-size: 14px;
          &:hover {
            color: #8590a6;
          }
        }
      }
    }
  }
}
</style>
