import request from "../utils/axios";

// 创建回答接口
export function createAnswers(data) {
  return request("/answer/create", data, "POST");
}

// 删除回答接口
export function deleteAnswers(data) {
  return request("/answer/delete", data, "POST");
}

// 更新回答接口
export function updataAnswers(data) {
  return request("/answer/updata", data, "POST");
}

//根据questions_id查找问题
export function getIdAnswers(data) {
  return request("/answer/getId", data, "POST");
}

// 根据回答的id查找
export function getOnlyIdAnswers(data) {
  return request("/answer/getOnlyId", data, "POST");
}
