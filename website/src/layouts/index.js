import React from "react"
import PropTypes from "prop-types"
import Header from "../components/Header"
import Helmet from "react-helmet"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import "intl"

const Layout = ({ children, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname
        const { langs, defaultLangKey } = data.site.siteMetadata.languages
        const langKey = getCurrentLangKey(langs, defaultLangKey, url)
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, "/")
        const langsMenu = getLangs(
          langs,
          langKey,
          getUrlForLang(homeLink, url)
        ).map(item => ({
          ...item,
          link: item.link.replace(`/${defaultLangKey}/`, "/"),
        }))
        return (
          <IntlProvider locale={langKey} messages={i18nMessages}>
            <div>
              <Helmet
                title="livebeam"
                meta={[
                  { name: "description", content: "Sample" },
                  { name: "keywords", content: "sample, something" },
                ]}
              />
              <Header langs={langsMenu} lang={langKey} />

              {children}
            </div>
          </IntlProvider>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
