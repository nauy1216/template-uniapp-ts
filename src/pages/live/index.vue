<template>
  <view class="content">
    <mi-navbar title="直播"></mi-navbar>
    <mi-element :element="config"></mi-element>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import config from "./config";
export default Vue.extend({
  data() {
    return {
      config
    };
  },
  onLoad() {
    //
    // eslint-disable-next-line no-undef
    console.log(getApp());
  },
  methods: {}
});
</script>
