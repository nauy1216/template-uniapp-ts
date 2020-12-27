<template>
  <view class="p-home">
    <view
      class="p-home__top"
      :style="{
        'padding-top': statusBarHeight + 'px'
      }"
    >
      <u-search
        shape="square"
        input-align="center"
        :show-action="false"
        placeholder="搜索你要的商品"
        disabled
        search-icon="search"
        v-model="keyword"
        style="width: 460rpx;"
      ></u-search>
    </view>
    <!-- <u-button type="primary" @click="handleClick">主要按钮</u-button> -->
    <u-tabs
      :item-width="500"
      :list="list"
      :is-scroll="false"
      :current="current"
      @change="change"
    ></u-tabs>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      keyword: "",
      list: [
        {
          name: "推荐"
        },
        {
          name: "食品"
        },
        {
          name: "百货",
          count: 5
        },
        {
          name: "手机"
        },
        {
          name: "男装"
        },
        {
          name: "鞋包"
        },
        {
          name: "内衣"
        },
        {
          name: "电器"
        }
      ],
      current: 0
    };
  },
  computed: {
    statusBarHeight(): number {
      return this.$state.global.statusBarHeight;
    }
  },
  onLoad() {
    // this.$http.get("/datalist").then(res => {
    //   console.log(res);
    // });
  },
  methods: {
    change(index) {
      this.current = index;
    },
    handleClick() {
      //
    }
  }
});
</script>

<style lang="scss">
@include b(home) {
  @include e(top) {
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 44px;
    padding: 0 20rpx;
  }
}
</style>
