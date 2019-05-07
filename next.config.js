const withCSS = require("@zeit/next-css");
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
let css = withCSS({
  cssLoaderOptions: {
    url: false
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});

css = withSass(css);
module.exports = withImages(css);
