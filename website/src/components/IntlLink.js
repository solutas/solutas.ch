import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "react-intl"

import languages from "../data/languages"

const IntlLink = ({ to, intl: { locale }, children, ...props }) => {
  const path = locale === languages.defaultLangKey ? to : `/${locale}${to}`

  return (
    <Link to={path} {...props} activeClassName="active">
      {children}
    </Link>
  )
}

export default injectIntl(IntlLink)
