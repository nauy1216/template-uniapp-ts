import { Fly, FlyResponse } from "flyio";
import { Log } from "@/utils";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HFly = require("flyio/dist/npm/wx");

const request: Fly = new HFly();
request.config = {
  baseURL: "http://localhost:5555"
};

request.interceptors.request.use(request => {
  Log.info(`Req[${request.method}] ${request.url}`);
  uni.showLoading({
    mask: true,
    title: "loading..."
  });
  request.headers = {
    "Content-Type": "application/json; charset=utf-8"
  };
  return request;
});

request.interceptors.response.use(
  (response: FlyResponse<any>) => {
    Log.info(`Res[${response.request.method}] ${response.request.url}`, response.data);
    uni.hideLoading();
    return response;
  },
  err => {
    wx.hideNavigationBarLoading();
    return err;
  }
);

export default {
  get<T = unknown>(url: string, data?: any) {
    return new Promise<T>(resolve => {
      request.get(url, data).then(res => {
        resolve(res.data);
      });
    });
  },
  post<T = unknown>(url: string, data?: any) {
    return new Promise<T>(resolve => {
      request.post(url, data).then(res => {
        resolve(res.data);
      });
    });
  }
};
