/* eslint-disable */
const path = require("path");
module.exports = {
  configureWebpack: config => {
    config.resolve.alias["flyio"] = "flyio/dist/npm/wx";
    // config.devtool = 'source-map'
  }
}

