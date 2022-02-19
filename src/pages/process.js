import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import MobileNav from '../components/mobileNav'
import Footer from '../components/footer'
import Banner from '../components/banner'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import exampleImage from '../assets/images/nav/navbg1.png'
import exampleImage2 from '../assets/images/nav/navbg2.png'

import '../styles/process.scss'

export const query = graphql`
  query ProcessPageQuery {
    heroImage: allFile(filter: {relativePath: {eq: "banners/heroFAQ.jpg"}}) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [JPG], quality: 100)
            }
          }
        }
    }
  }
`;

const ProcessNav = (props) => {
  return(
    <div className="processNav">
      <ul>
        <AnchorLink to="/process#titlesequence">
          <li>Title Sequence</li>
        </AnchorLink>
        <AnchorLink to="/process#designprocess">
          <li>Design Process</li>
        </AnchorLink>
        <AnchorLink to="/process#deliverables">
          <li>Deliverables</li>
        </AnchorLink>
        <AnchorLink to="/process#broadcastpackage">
          <li>Broadcast Package</li>
        </AnchorLink>
        <AnchorLink to="/process#webdesign">
          <li>Web Design</li>
        </AnchorLink>
      </ul>
    </div>
  )
}

const ProcessBanner = (props) => {
  return(
    <div className="processBanner">
      <h3>{props.title}</h3>
    </div>
  )
}

const HoverImage = (props) => {
  return(
    <div className="hoverImage">
      <img className="initalImage" src={props.initial}/>
      <img className="onHoverImage" src={props.hover}/>
    </div>
  )
}

const ProcessPage = (props) => {
  const { data, errors } = props;

  let heroImage = data.heroImage.edges[0].node.childImageSharp.gatsbyImageData;
  console.log(heroImage)

  return(
    <Layout>
      <Seo title="FAQ - CoMotion 2022" />
      <Nav />
      <MobileNav/>
      <Banner title="Process Page" imageData={heroImage} specificClass="processBanner"/>
      <ProcessNav/>
      <main className="process">
        <div className="processContainer">
          <div className="welcome processSection">
            <p>Welcome to the process page for CoMotion 2022! As you scroll through this page you’ll find information showcasing the creation process for all deliverables made by the CoMotion branding team.  We are proud of all the hard work and determination that went into this event. We hope you enjoy this behind the scenes look at CoMotion 2022! -CoMotion 2022 Documentary Team</p>
          </div>
          <div id="titlesequence" className="processSection">
            <ProcessBanner title="Title Sequence"/>
            <iframe width="670" height="377" src="https://www.youtube.com/embed/NQv6MuHlaCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>We centered our design around the idea of 2.5 dimensional space. This design language embodies the essence of motion graphics through its fluid and flexible nature. Within this boundless space, we were able to reflect upon our innovative and experimental field that keeps pushing us to evolve. Join us to embrace and celebrate the limitless possibilities of what we can achieve with motion media.</p>
            <h4>Style Frames</h4>
            <div className="four-grid">
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
            </div>
          </div>
          <div id="designprocess" className="processSection">
            <ProcessBanner title="Design Process"/>
            <div className="three-grid">
              <img src={exampleImage2}/>
              <img src={exampleImage2}/>
              <img src={exampleImage2}/>
              <img src={exampleImage2}/>
              <img src={exampleImage2}/>
              <img src={exampleImage2}/>
            </div>
            <h4>Type Studies</h4>
            <div className="odd-one-out">
              <div className="two-grid">
                <img src={exampleImage2}/>
                <img src={exampleImage2}/>
              </div>
              <img src={exampleImage2} className="lastImage"/>
            </div>
            <h4>Student Showcase Title Cards</h4>
            <div className="two-grid titleCard">
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
            </div>
            <iframe width="670" height="377" src="https://www.youtube.com/embed/NQv6MuHlaCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h4>Logo Animation Process</h4>
            <div className="three-grid">
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
            </div>
          </div>
          <div id="deliverables" className="processSection">
            <ProcessBanner title="Deliverables"/>
            <div className="odd-one-out">
              <div className="two-grid">
                <img src={exampleImage2}/>
                <img src={exampleImage2}/>
              </div>
              <img src={exampleImage2} className="lastImage"/>
              <div className="two-grid">
                <img src={exampleImage2}/>
                <img src={exampleImage2}/>
              </div>
            </div>
            <h4>AR Face Filters</h4>
            <div className="two-grid titleCard">
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <img src={exampleImage2}/>
            </div>
            <h4>AR Postcard</h4>
            <div className="two-grid titleCard">
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <img src={exampleImage2}/>
              <HoverImage initial={exampleImage} hover={exampleImage2}/>
              <img src={exampleImage2}/>
            </div>
            <h4>Campus Poster Ad</h4>
            <img className="centerImage" src={exampleImage2}/>
          </div>
          <div id="broadcastpackage" className="processSection">
            <ProcessBanner title="Broadcast Package"/>
          </div>
          <div id="webdesign" className="processSection">
            <ProcessBanner title="Web Design"/>
          </div>
        </div>
      </main>
      <Footer/>
    </Layout>
  )
}

export default ProcessPage