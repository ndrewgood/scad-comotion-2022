import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"
import Hero from '../components/hero'
import Schedule from "../components/schedule"
import CtaGrid from "../components/ctaGrid"
import Footer from '../components/footer'

import '../styles/global.scss'
import '../styles/index.scss'
import '../styles/nav.scss'

const Description = () => (
  <main className="description-container">
    <p>description</p>
  </main>
)

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Nav context="nav-index"/>
    <Description />
    <Schedule />
    <CtaGrid />
    <Footer />
  </Layout>
)

export default IndexPage

{/* <StaticImage
src="../images/gatsby-astronaut.png"
width={300}
quality={95}
formats={["auto", "webp", "avif"]}
alt="A Gatsby astronaut"
style={{ marginBottom: `1.45rem` }}
/> */}