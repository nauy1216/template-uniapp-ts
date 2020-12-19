const fs = require('fs')
const path = require("path")
const elements = require("../src/components/element/define-element.js")

let events = {}
let template = `<template>\n`
const children = `
<template v-if="element.children && element.children.length > 0">
  <element v-for="(child, index) in element.children" :element="child" :key="index"></element>
</template>
`
let script = `<script lang="ts">
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
  methods: {`
elements.forEach((ele, index) => {
  template += `
  <!--${ele.desc}-->
  <${ele.tag} v-${index !== 0?'else-':''}if="element.type === '${ele.tag}'" :data-mi-id="element.id" `
  ele.props.forEach(prop => {
    template += ` :${prop}="element.props.${prop}" `
  })
  ele.events.forEach(type => {
    if (events[type])  return
    events[type] = true
    let methodName = `handle${type[0].toUpperCase() + type.slice(1)}`
    template += ` @${type}="${methodName}" `
    script += `${methodName}(ev) {
      console.log("props", this.element, ev);
    },`
  })
  template += `>
    ${!ele.hasChildren? "": ele.tag === 'text'? '{{ element }}': children}
  </${ele.tag}>\n\n`
})
template += `
  <!--不存在tag属性, 则认为是文本节点-->
  <text v-else>
    {{ element }}
  </text>
</template>`
script += `
  }
})
</script>`

const sfc = `${template}

${script}`

fs.writeFileSync(path.resolve(process.cwd(), 'src/components/element/element.vue'), sfc)

