<template>
  <view class="content">
    <u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import uSearch from "uview-ui/components/u-search/u-search.vue";
export default Vue.extend({
  components: {
    uSearch
  },
  data() {
    return {
      keyword: ""
    };
  },
  onLoad() {
    this.$http.get("/datalist").then(res => {
      console.log(res);
    });
  },
  methods: {}
});
</script>

<style lang="scss"></style>
