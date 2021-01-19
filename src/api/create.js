import request from "../utils/axios";

export function userslist() {
  return request({
    url: "/users/list",
    method: "get"
  });
}
