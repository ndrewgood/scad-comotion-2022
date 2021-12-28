import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import Footer from '../components/footer'

const AttendeesPage = () => (
  <Layout>
    <Seo title="Home" />
    <Nav/>
    <h1>Attendees Page</h1>
    <Footer/>
  </Layout>
)

export default AttendeesPage