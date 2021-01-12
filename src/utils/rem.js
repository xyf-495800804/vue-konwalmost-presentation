// 设置 rem 函数
function setRem() {
  //  PC端
  console.log("非移动设备");
  // 基准大小
  baseSize = 25;
  let basePc = baseSize / 1920; // 表示1920的设计图,使用100PX的默认值
  let vW = window.innerWidth; // 当前窗口的宽度

  let rem = vW * basePc; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
  document.documentElement.style.fontSize = rem + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem();
};
