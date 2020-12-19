<template>
  <!--view-->
  <view
    v-if="element.type === 'view'"
    :data-mi-id="element.id"
    :style="element.props.style"
    @click="handleclick"
  >
    <template v-if="element.children && element.children.length > 0">
      <element v-for="(child, index) in element.children" :element="child" :key="index"></element>
    </template>
  </view>

  <!--text-->
  <text v-else-if="element.type === 'text'" :data-mi-id="element.id" :style="element.props.style">
    {{ element }}
  </text>

  <!--不存在tag属性, 则认为是文本节点-->
  <text v-else>
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
    handleClick() {
      //
    }
  }
});
</script>
