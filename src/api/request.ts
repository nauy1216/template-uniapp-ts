import request, { FlyResponse } from "flyio";

request.config = {
  baseURL: "http://localhost:5555"
};

request.interceptors.request.use(request => {
  // 全局加载提示 - 展示提示
  wx.showNavigationBarLoading();
  request.headers = {
    "Content-Type": "application/json; charset=utf-8"
  };
  return request;
});

request.interceptors.response.use(
  (response: FlyResponse<any>) => {
    wx.hideNavigationBarLoading();
    return response;
  },
  err => {
    wx.hideNavigationBarLoading();
    return err;
  }
);

export default request;
