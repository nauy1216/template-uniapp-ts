<template>
  <view class="content">
    <u-button type="primary" @click="showToast">wx.showToast</u-button>
    <u-button type="primary" @click="showModal">wx.showModal</u-button>
    <u-button type="primary" @click="showLoading">wx.showLoading</u-button>
    <u-button type="primary" @click="showActionSheet">wx.showActionSheet</u-button>
    <u-button type="primary" @click="showNavigationBarLoading"
      >wx.showNavigationBarLoading</u-button
    >
    <u-button type="primary" @click="setNavigationBarTitle">wx.setNavigationBarTitle</u-button>
    <u-button type="primary" @click="setNavigationBarColor">wx.setNavigationBarColor</u-button>
    <u-button type="primary" @click="hideHomeButton">wx.hideHomeButton</u-button>
    <u-button type="primary" @click="startPullDownRefresh">wx.startPullDownRefresh</u-button>
    <u-button type="primary" @click="getMenuButtonBoundingClientRect"
      >wx.getMenuButtonBoundingClientRect</u-button
    >
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  data() {
    return {};
  },
  methods: {
    showToast() {
      uni.showToast({
        title: "成功",
        icon: "success",
        duration: 2000
      });
    },
    showModal() {
      wx.showModal({
        title: "提示",
        content: "这是一个模态弹窗",
        success(res) {
          if (res.confirm) {
            uni.showToast({
              title: "用户点击确定",
              icon: "none",
              duration: 2000
            });
          } else if (res.cancel) {
            uni.showToast({
              title: "用户点击取消",
              icon: "none",
              duration: 2000
            });
          }
        }
      });
    },
    showLoading() {
      uni.showLoading({
        title: "加载中"
      });
      setTimeout(() => {
        uni.hideLoading();
      }, 2000);
    },
    showActionSheet() {
      uni.showActionSheet({
        itemList: ["A", "B", "C"],
        success(res) {
          console.log(res.tapIndex);
        },
        fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    showNavigationBarLoading() {
      uni.showNavigationBarLoading();
    },
    setNavigationBarTitle() {
      uni.setNavigationBarTitle({
        title: "hello"
      });
    },
    setNavigationBarColor() {
      uni.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: "#ff0000",
        animation: {
          duration: 400,
          timingFunc: "easeIn"
        }
      });
    },
    hideHomeButton() {
      uni.hideHomeButton();
    },
    startPullDownRefresh() {
      uni.startPullDownRefresh({
        success() {
          setTimeout(() => {
            uni.stopPullDownRefresh();
          }, 1000);
        }
      });
    },
    getMenuButtonBoundingClientRect() {
      console.log("getMenuButtonBoundingClientRect", uni.getMenuButtonBoundingClientRect());
    }
  }
});
</script>
<style lang="scss" scoped>
.content {
  padding-top: 50rpx;
}

u-button {
  margin: 20rpx 50rpx;
}
</style>
