/* eslint-disable */
const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
        patterns: [path.resolve(process.cwd(), "src/style/bem.scss")]
    });
}

module.exports = {
  configureWebpack: config => {
      config.resolve.alias["@r$"] = path.resolve(process.cwd());
  },
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => addStyleResource(config.module.rule("scss").oneOf(type)));
  }
}
