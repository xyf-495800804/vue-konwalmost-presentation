// 登录接口
import request from "../utils/axios";

export function login(data) {
  return request("/users/login", data, "POST");
}
