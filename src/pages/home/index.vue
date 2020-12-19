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
import uSearch from "uview-ui/components/u-search/u-search.vue";
import uTabs from "uview-ui/components/u-tabs/u-tabs.vue";
export default Vue.extend({
  components: {
    uSearch,
    uTabs
  },
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
    statusBarHeight() {
      return this.$state.global.statusBarHeight;
    }
  },
  onLoad() {
    this.$http.get("/datalist").then(res => {
      console.log(res);
    });
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
    height: 44px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20rpx;
  }
}
</style>
