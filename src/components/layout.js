/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import MyUtils from "../Utils/myutils"

import Header from "./header.js"
import Navigation from "./navigation.js"

var animateClass = MyUtils.displayName

const Layout = props => (
  <div id="main" className={animateClass}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Mariage Marina et Yann</title>
      <link
        href="https://fonts.googleapis.com/css?family=Cormorant:300,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lora|Montserrat:900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <Navigation />
    <div id="container">{props.children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
