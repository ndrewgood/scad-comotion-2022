import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import Footer from '../components/footer'

import '../styles/faq.scss'

const PanelsPage = () => (
  <Layout>
    <Seo title="Panels - CoMotion 2022" />
    <Nav />
    <Footer/>
  </Layout>
)

export default PanelsPage