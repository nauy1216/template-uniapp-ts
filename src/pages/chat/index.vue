<template>
  <view class="content">
    <nav-bar title="聊天"></nav-bar>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/nav-bar/index.vue";
export default Vue.extend({
  components: {
    NavBar
  },
  data() {
    return {
      title: "Hello",
      top: 0
    };
  },
  onLoad() {
    //
  },
  methods: {}
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
