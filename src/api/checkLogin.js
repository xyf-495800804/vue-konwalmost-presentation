import request from "../utils/axios";

export function checkLogin() {
  return request("/users/checkLogin", "GET");
}
