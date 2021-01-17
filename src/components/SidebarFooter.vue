<template>

  <footer class="Footer">
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >刘看山</a>
    <span class="footer-dot"></span>
    <a
      href="#"
      class="footer-item"
    >知乎指南</a>
    <span class="footer-dot"></span>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >知乎协议</a>
    <span class="footer-dot"></span>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >知乎隐私保护指引</a>
    <br>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >应用</a>
    <span class="footer-dot"></span>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >工作</a>
    <span class="footer-dot"></span>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >申请开通知乎机构号</a>
    <br>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >侵权举报</a>
    <span class="footer-dot"></span>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >网上有害信息举报专区</a>
    <br>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >京 ICP 证 110745 号</a>
    <br>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >京 ICP 备 13052560 号 - 1</a>
    <br>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >
      <img
        src="../assets/img/Jlogo.png"
        alt=""
      >
      京公网安备 11010802010035 号
    </a>
    <br>
    <span class="footer-item">互联网药品信息服务资格证书</span>
    <br>
    <span class="footer-item">(京)- 非经营性 - 2017 - 0067</span>
    <br>
    <span class="footer-item">违法和不良信息举报：010-82716601</span>
    <br>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >儿童色情信息举报专区</a>
    <br>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >证照中心</a>
    <br>
    <a
      class="footer-item"
      href="#"
      target="_blank"
    >联系我们</a>
    <span>© 2021 知乎</span>
  </footer>
</template>

<script>
export default {
  name: 'SidebarFooter',
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.Footer {
  position: sticky;
  top: 75px;
  width: 100%;
  height: 100%;
  margin-top: 5px;
  text-align: center;
  font-size: 13px;
  line-height: 2;
  color: #8590a6;
  .footer-item {
    display: inline-flex;
    align-items: center;
    -webkit-box-align: center;
  }
  .footer-dot::after {
    margin: 0 5px;
    content: '\B7';
  }
}
</style>
