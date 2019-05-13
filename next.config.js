const withCSS = require("@zeit/next-css");
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
require("react-svg-loader");

let css = withCSS({
  cssLoaderOptions: {
    url: false
  },
  webpack(config, options) {
   /* config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });*/
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "react-svg-loader",
          options: {
            jsx: true // true outputs JSX tags
          }
        }
      ]
    })
    return config;
  }
});

css = withSass(css);
module.exports = withImages(css);
