/*
使用mockjs提供mock数据接口
 */

import Mock from "mockjs";
import author from "./author.json";

/* 返回作者的接口 */
Mock.mock("/author", {
  code: 200,
  data: author,
  message: "成功"
});

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
