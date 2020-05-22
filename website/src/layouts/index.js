import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Helmet from "react-helmet"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import "intl"
//import AOS from 'aos';
//import 'aos/dist/aos.css';

const Layout = ({ children, location, i18nMessages, soft }) => {
  /*useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [AOS]);*/

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
              menuLinks {
                name
                link
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
        const { menuLinks } = data.site.siteMetadata;
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
            <div className={soft ? "soft" : ""}>
              <Helmet
                title="solutas"
                meta={[
                  { name: "description", content: "Sample" },
                  { name: "keywords", content: "sample, something" },
                ]}
              />
              <Header
                langs={langsMenu}
                lang={langKey}
                menuLinks={menuLinks}
              />
              {children}
              <Footer />
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
