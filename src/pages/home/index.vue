<template>
  <view class="content">
    首页
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello",
      top: 0
    };
  },
  onLoad() {
    this.$http.get("/datalist");
  },
  methods: {}
});
</script>

<style></style>
