<template>
  <view
    v-if="element.type === 'view'"
    data-mi-uuid="element.uuid"
    :style="element.props.style"
    @click="handleClick"
  >
    <template v-if="element.children && element.children.length > 0">
      <element v-for="(child, index) in element.children" :element="child" :key="index"></element>
    </template>
  </view>
  <text v-else-if="!element.type">
    {{ element }}
  </text>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    element: {
      type: [Object, String],
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log("props", this.element);
  },
  methods: {
    handleClick(e) {
      console.log("handleClick", e);
    }
  }
});
</script>

<style lang="scss" scoped></style>
