<template>
  <view class="content">
    聊天
    <u-button type="primary">主要按钮</u-button>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  data() {
    return {
      title: "Hello",
      top: 0,
      list: [
        {
          text: "点赞",
          color: "blue",
          fontSize: 28
        },
        {
          text: "分享"
        },
        {
          text: "评论"
        }
      ],
      show: true
    };
  },
  onLoad() {
    //
  },
  methods: {}
});
</script>

<style></style>
