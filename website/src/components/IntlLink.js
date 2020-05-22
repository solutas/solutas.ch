import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "react-intl"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import languages from "../data/languages"

const IntlLink = ({ to, intl: { locale }, children, ...props }) => {
  const path = locale === languages.defaultLangKey ? to : `/${locale}${to}`

  return (
    <AniLink fade to={path} {...props} activeClassName="active" hex="#DD851B">
      {children}
    </AniLink>
  )
}

export default injectIntl(IntlLink)
