import request from "../utils/axios";

// 创建问题接口
export function createQuestions(data) {
  return request("/questions/create", data, "POST");
}

// 更新问题接口
export function updateQuestions(data) {
  return request("/questions/update", data, "POST");
}

// 查询提问接口
export function getQuestions(data) {
  return request("/questions/get", data, "POST");
}

// 查询列表接口
export function getListQuestions() {
  return request("/questions/getList", {}, "POST");
}
