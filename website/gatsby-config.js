/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const languages = require("./src/data/languages");

module.exports = {
  siteMetadata: {
    title: `Livebeam,.me`,
    languages,
    menuLinks: [
      {
        name: "home",
        link: "/"
      },
      {
        name: "for-enterprise",
        link: "/enterprise"
      },
      {
        name: "for-small-business",
        link: "/kmu"
      },
      {
        name: "products",
        link: "/products"
      }
    ]
  },
  plugins: [ 
    require.resolve(`./soluneo-plugin`),
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/ // See below to configure properly
        }
      }
    },    
    {
    resolve: `gatsby-plugin-sass`,
    options: {
      postCssPlugins: [require("autoprefixer")],
      precision: 6,
    },
  },  
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      defaultLayouts: {
        default: require.resolve("./src/layouts/de.js"),
      },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/pages`,
    },
  },
  `gatsby-transformer-remark`,
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
