import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"
import MobileNav from '../components/mobileNav'
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
    <br/><br/>It is being held remotely on February 25th - 27th, 2022.</p>
  </main>
)

const IndexPage = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 720);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 720);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return(
    <Layout>
      <Seo title="SCAD CoMotion 2022" />
      {isDesktop ? null : <MobileNav context="nav-index"/>}
      <Hero />
      {isDesktop ? <Nav context="nav-index"/> : null}
      <Description />
      <Schedule />
      <CtaGrid />
      <Footer />
    </Layout>
  )
}

export default IndexPage

{/* <StaticImage
src="../images/gatsby-astronaut.png"
width={300}
quality={95}
formats={["auto", "webp", "avif"]}
alt="A Gatsby astronaut"
style={{ marginBottom: `1.45rem` }}
/> */}