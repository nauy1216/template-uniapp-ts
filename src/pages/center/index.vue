<template>
  <view
    class="p-center"
    :style="{
      'padding-top': statusBarHeight + 'px'
    }"
  >
    <nav-bar title="个人中心"></nav-bar>
    <view class="p-center__user">
      <image class="p-center__user-img" src="/static/center/user.png"></image>
      <view>
        <view>132****57978105</view>
        <view>勋章墙<u-icon name="arrow-right" color="#ff0000" size="28"></u-icon></view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      // NavBar
    };
  },
  computed: {
    statusBarHeight() {
      return this.$state.global.statusBarHeight;
    }
  },
  onLoad() {
    //
  },
  methods: {}
});
</script>

<style lang="scss">
@include b(center) {
  @include e(user) {
    height: 360rpx;
  }
  @include e(user-img) {
    width: 200rpx;
    height: 200rpx;
  }
}
</style>
