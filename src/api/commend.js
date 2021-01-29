// 登录接口
import request from "../utils/axios";

//添加评论接口
export function commentCreate(data) {
  return request("/comment/create", data, "POST");
}

//查询评论接口
export function commentGet(data) {
  return request("/comment/get", data, "GET");
}

//删除评论接口
export function commentDelete(data) {
  return request("/comment/delete", data, "POST");
}
