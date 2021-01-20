import request from "../utils/axios";

export function imgsUpload(data) {
  return request("/imgs/upload", data, "POST");
}
