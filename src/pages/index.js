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
    <div className="description-dots"></div>
    <p>CoMotion is a student-led motion graphics conference at the Savannah College of Art and Design.
    <br/><br/>It is being held remotely on March 18th - 20th, 2021.</p>
  </main>
)

const IndexPage = () => (
  <Layout>
    <Seo title="SCAD CoMotion 2022" />
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