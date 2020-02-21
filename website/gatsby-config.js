/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const languages = require("./src/data/languages");

module.exports = {
  siteMetadata: {
    title: `Livebeam,.me`,
    languages
  },
  plugins: [ 
    {
    resolve: `gatsby-plugin-sass`,
    options: {
      postCssPlugins: [require("autoprefixer")],
      precision: 6,
    },
  },  
  `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      }
    }
  ]
}
