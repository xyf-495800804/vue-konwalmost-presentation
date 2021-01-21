import request from "../utils/axios";

// 保存文章接口(不包括图片)
export function saveArticles(data) {
  return request("/articles/save", data, "POST");
}

// 保存文章(包括图片)
export function createArticles(data) {
  return request("/articles/create", data, "POST");
}

// 删除文章
export function deteleArticles(data) {
  return request("/articles/delete", data, "POST");
}

// 查询单个文章接口
export function getArticles(params) {
  return request("/articles/get", params, "GET");
}

// 查询全部文章的接口
export function getlistArticles() {
  return request("/articles/getlist", "GET");
}

// 修改文章接口
export function updateArticles(data) {
  return request("/articles/update", data, "POST");
}
