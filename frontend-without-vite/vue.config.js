const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
    assetsDir: "assets",
    chainWebpack: config => {
        config.plugin("node-polyfill").use(NodePolyfillPlugin);
    }
});
