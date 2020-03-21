import React from "react"
import Layout from "../components/layout.js"
import Intro from "../components/intro.js"
import Infos from "../components/infos.js"
import Transports from "../components/transports.js"
import Hebergements from "../components/hebergements"

import "../styles/main.less"

const IndexPage = () => (
  <Layout state="home">
    <Intro />
    <Infos />
    <Transports />
    <Hebergements />
  </Layout>
)

export default IndexPage
