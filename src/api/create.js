import request from "../utils/axios";

export function userscreate(data) {
  return request("/users/create", data, "POST");
}
