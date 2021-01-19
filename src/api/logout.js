import request from "../utils/axios";

export function logout() {
  return request("/users/logout", {}, "POST");
}
