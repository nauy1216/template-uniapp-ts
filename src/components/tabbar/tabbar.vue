<template>
  <u-tabbar v-model="current" :list="list" :mid-button="true"></u-tabbar>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      current: 0,
      list: [
        {
          iconPath: "home",
          selectedIconPath: "home-fill",
          text: "首页",
          count: 2,
          isDot: true,
          customIcon: false
        },
        {
          iconPath: "photo",
          selectedIconPath: "photo-fill",
          text: "放映厅",
          customIcon: false
        },
        {
          iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
          selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
          text: "发布",
          midButton: true,
          customIcon: false
        },
        {
          iconPath: "play-right",
          selectedIconPath: "play-right-fill",
          text: "直播",
          customIcon: false
        },
        {
          iconPath: "account",
          selectedIconPath: "account-fill",
          text: "我的",
          count: 23,
          isDot: false,
          customIcon: false
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
@import "./tabbar.scss";
</style>
