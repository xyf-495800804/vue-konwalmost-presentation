import request from "../utils/axios";

export function saveArticles(data) {
  return request("/articles/save", data, "POST");
}

export function createArticles(data) {
  return request("/articles/create", data, "POST");
}
