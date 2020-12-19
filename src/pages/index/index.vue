<template>
  <view class="content">
    loading...
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import { createLog } from "@/utils";
import logo from "./logo";
export default Vue.extend({
  data() {
    return {
      title: "Hello"
    };
  },
  beforeCreate() {
    createLog(this).i("beforeCreate");
  },
  created() {
    createLog(this).i("created");
  },
  beforeMount() {
    createLog(this).i("beforeMount");
  },
  mounted() {
    createLog(this).i("mounted");
  },
  beforeUpdate() {
    createLog(this).i("beforeUpdate");
  },
  updated() {
    createLog(this).i("updated");
  },
  beforeDestroy() {
    createLog(this).i("beforeDestroy");
  },
  destroyed() {
    createLog(this).i("destroyed");
  },
  onLoad() {
    setTimeout(() => {
      // 跳转到首页
      uni.switchTab({
        url: "/pages/home/index",
        success() {
          // 跳转成功后动态设置tabar
          uni.setTabBarItem({
            index: 0,
            text: "new",
            iconPath: "static/imgs/home.png",
            selectedIconPath: "static/imgs/home-select.png"
          });
        }
      });
    });
    createLog(this).i("onLoad");
  },
  onShow() {
    createLog(this).i("onShow");
  },
  onReady() {
    createLog(this).i("onReady");
  },
  onHide() {
    createLog(this).i("onHide");
  },
  onUnload() {
    createLog(this).i("onUnload");
  },
  onResize() {
    createLog(this).i("onResize");
  },
  onPullDownRefresh() {
    createLog(this).i("onPullDownRefresh");
  },
  onReachBottom() {
    createLog(this).i("onReachBottom");
  },
  onTabItemTap() {
    createLog(this).i("onTabItemTap");
  },
  onShareAppMessage() {
    createLog(this).i("onShareAppMessage");
    return {
      title: "分享",
      path: "",
      imageUrl: ""
    };
  },
  onPageScroll() {
    createLog(this).i("onPageScroll");
  },
  onNavigationBarButtonTap() {
    createLog(this).i("onPageScroll");
  },
  onShareTimeline() {
    return {
      /**
       * 自定义标题。默认值：当前小程序名称
       */
      title: "",
      /**
       * 自定义页面路径中携带的参数
       */
      path: "",
      /**
       * 自定义图片路径，可以是本地文件或者网络图片。支持 PNG 及 JPG，显示图片长宽比是 1:1。
       */
      imageUrl: ""
    };
  },
  methods: {}
});
</script>

<style>
.content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
