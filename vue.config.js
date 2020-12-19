/* eslint-disable */
const path = require("path");
module.exports = {
  configureWebpack: config => {
      config.resolve.alias["@r$"] = path.resolve(process.cwd());
  },
}
