import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import MobileNav from '../components/mobileNav'
import Footer from '../components/footer'
import Banner from '../components/banner'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import exampleImage from '../assets/images/nav/navbg1.png'
import exampleImage2 from '../assets/images/nav/navbg2.png'
import sympImg from '../assets/images/process/symp.png'
import igSticker1 from '../assets/images/process/deliverables/insta-sticker/1.gif'
import igSticker2 from '../assets/images/process/deliverables/insta-sticker/2.gif'

import '../styles/process.scss'

export const query = graphql`
  query ProcessPageQuery {
    processTitle: allFile(filter: {relativePath: {regex: "/^process/title/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 80, formats: [WEBP], height: 400)
          }
        }
      }
    }
    processDesign: allFile(filter: {relativePath: {regex: "/^process/design/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 80, formats: [WEBP], height: 400)
          }
        }
      }
    }
    processDeliverables: allFile(filter: {relativePath: {regex: "/^process/deliverables/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 90, formats: [WEBP], height: 600)
          }
        }
      }
    }
    processWeb: allFile(filter: {relativePath: {regex: "/^process/web/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 90, formats: [WEBP], height: 600)
          }
        }
      }
    }
    processBroadcast: allFile(filter: {relativePath: {regex: "/^process/broadcast/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 90, formats: [WEBP], height: 600)
          }
        }
      }
    }
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

const GatsbyHoverImage = ({initial, hover, photos}) => {

  let initialImage = photos.find(element => element.node.relativePath == initial); 
  let hoverImage = photos.find(element => element.node.relativePath == hover); 

  return(
    <div className="hoverImage">
      <GatsbyImage className="initalImage" image={initialImage.node.childImageSharp.gatsbyImageData}/>
      <GatsbyImage className="onHoverImage" image={hoverImage.node.childImageSharp.gatsbyImageData}/>
    </div>
  )
}

const TitleSection = ({titleImages}) => {

  return (
    <div id="titlesequence" className="processSection">
      <ProcessBanner title="Title Sequence"/>
      <iframe width="670" height="377" src="https://www.youtube.com/embed/NQv6MuHlaCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>We centered our design around the idea of 2.5 dimensional space. This design language embodies the essence of motion graphics through its fluid and flexible nature. Within this boundless space, we were able to reflect upon our innovative and experimental field that keeps pushing us to evolve. Join us to embrace and celebrate the limitless possibilities of what we can achieve with motion media.</p>
      <h4>Style Frames</h4>
      <div className="three-grid">
        <GatsbyHoverImage initial="process/title/final/5.png" hover="process/title/concept/2-1.jpg" photos={titleImages}/>
        <GatsbyHoverImage initial="process/title/final/8.png" hover="process/title/concept/2-2.jpg" photos={titleImages}/>
        <GatsbyHoverImage initial="process/title/final/11.png" hover="process/title/concept/2-3.jpg" photos={titleImages}/>
        <GatsbyHoverImage initial="process/title/final/14.png" hover="process/title/concept/3-1.jpg" photos={titleImages}/>
        <GatsbyHoverImage initial="process/title/final/16.jpg" hover="process/title/concept/3-2.jpg" photos={titleImages}/>
        <GatsbyHoverImage initial="process/title/final/17.png" hover="process/title/concept/3-3.jpg" photos={titleImages}/>
        <GatsbyHoverImage initial="process/title/final/18.png" hover="process/title/concept/3-4.jpg" photos={titleImages}/>
        <GatsbyHoverImage initial="process/title/final/19.png" hover="process/title/concept/3-5.jpg" photos={titleImages}/>
        <GatsbyHoverImage initial="process/title/final/24.jpeg" hover="process/title/concept/3-8.jpg" photos={titleImages}/>
        <GatsbyHoverImage initial="process/title/final/27.png" hover="process/title/concept/4-2.jpg" photos={titleImages}/>

      </div>
    </div>
  )
}

const DesignSection = ({designImages}) => {

  const twoTexture1 = designImages.find(element => element.node.relativePath == "process/design/2d-textures/1.png");
  const twoTexture2 = designImages.find(element => element.node.relativePath == "process/design/2d-textures/2.png");
  const twoTexture3 = designImages.find(element => element.node.relativePath == "process/design/2d-textures/3.png");

  const threeTexture1 = designImages.find(element => element.node.relativePath == "process/design/3d-textures/1.jpg");
  const threeTexture2 = designImages.find(element => element.node.relativePath == "process/design/3d-textures/2.png");
  const threeTexture3 = designImages.find(element => element.node.relativePath == "process/design/3d-textures/3.jpg");

  const typeStudy1 = designImages.find(element => element.node.relativePath == "process/design/type-study/1.png"); 
  const typeStudy2 = designImages.find(element => element.node.relativePath == "process/design/type-study/2.png"); 
  const typeStudy3 = designImages.find(element => element.node.relativePath == "process/design/type-study/3.png");

  const logoAnim1 = designImages.find(element => element.node.relativePath == "process/design/logo-anim/3.png"); 
  const logoAnim2 = designImages.find(element => element.node.relativePath == "process/design/logo-anim/2.png"); 
  const logoAnim3 = designImages.find(element => element.node.relativePath == "process/design/logo-anim/1.png"); 

  

  return (
    <div id="designprocess" className="processSection">
      <ProcessBanner title="Design Process"/>
      <div className="three-grid">
        <GatsbyImage image={twoTexture1.node.childImageSharp.gatsbyImageData}/>
        <GatsbyImage image={twoTexture2.node.childImageSharp.gatsbyImageData}/>
        <GatsbyImage image={twoTexture3.node.childImageSharp.gatsbyImageData}/>
        <GatsbyImage image={threeTexture1.node.childImageSharp.gatsbyImageData}/>
        <GatsbyImage image={threeTexture2.node.childImageSharp.gatsbyImageData}/>
        <GatsbyImage image={threeTexture3.node.childImageSharp.gatsbyImageData}/>
      </div>
      <h4>Type Studies</h4>
      <div className="odd-one-out">
        <div className="two-grid">
          <GatsbyImage image={typeStudy1.node.childImageSharp.gatsbyImageData}/>
          <GatsbyImage image={typeStudy2.node.childImageSharp.gatsbyImageData}/>
        </div>
        <GatsbyImage image={typeStudy3.node.childImageSharp.gatsbyImageData} className="lastImage"/>
      </div>
      <h4>Student Showcase Title Cards</h4>
      <div className="two-grid titleCard">
        <GatsbyHoverImage initial="process/design/title-cards/final-title-cards/1.png" hover="process/design/title-cards/concept-art/1.jpg" photos={designImages}/>
        <GatsbyHoverImage initial="process/design/title-cards/final-title-cards/3.png" hover="process/design/title-cards/concept-art/2.jpg" photos={designImages}/>
        <GatsbyHoverImage initial="process/design/title-cards/final-title-cards/2.png" hover="process/design/title-cards/concept-art/3.png" photos={designImages}/>
        <GatsbyHoverImage initial="process/design/title-cards/final-title-cards/4.png" hover="process/design/title-cards/concept-art/4.png" photos={designImages}/>
      </div>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/680856919?h=aa02ad04c3" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      <h4>Logo Animation Process</h4>
      <div className="three-grid">
        <GatsbyImage image={logoAnim1.node.childImageSharp.gatsbyImageData}/>
        <GatsbyImage image={logoAnim2.node.childImageSharp.gatsbyImageData}/>
        <GatsbyImage image={logoAnim3.node.childImageSharp.gatsbyImageData}/>
      </div>
    </div>
  )
}

const DeliverableSection = ({deliverablesImages}) => {
  const igGrid1 = deliverablesImages.find(element => element.node.relativePath == "process/deliverables/insta-grid/1.jpg"); 
  const igGrid2 = deliverablesImages.find(element => element.node.relativePath == "process/deliverables/insta-grid/2.jpg"); 
  const igGrid3 = deliverablesImages.find(element => element.node.relativePath == "process/deliverables/insta-grid/3.png"); 

  const faceFinal = deliverablesImages.find(element => element.node.relativePath == "process/deliverables/ar-face-filter/final/1.png"); 
  const faceRealFinal = deliverablesImages.find(element => element.node.relativePath == "process/deliverables/ar-face-filter/workingFinal/1.png"); 

  const ar1realFinal = deliverablesImages.find(element => element.node.relativePath == "process/deliverables/ar-postcard/realFinal/1.png"); 
  const ar2realFinal = deliverablesImages.find(element => element.node.relativePath == "process/deliverables/ar-postcard/realFinal/2.png"); 

  const campusImg = deliverablesImages.find(element => element.node.relativePath == "process/deliverables/campus-poster/1.png"); 

  return (
    <div id="deliverables" className="processSection">
      <ProcessBanner title="Deliverables"/>
      <div className="odd-one-out">
        <div className="two-grid">
          <GatsbyImage image={igGrid1.node.childImageSharp.gatsbyImageData}/>
          <GatsbyImage image={igGrid2.node.childImageSharp.gatsbyImageData}/>
        </div>
        <GatsbyImage image={igGrid3.node.childImageSharp.gatsbyImageData} className="lastImage"/>
        <div className="two-grid">
          <img src={igSticker1} alt="CoMotion 2022 Instagram Gif" />
          <img src={igSticker2} alt="CoMotion 2022 Instagram Gif" />
        </div>
      </div>
      <h4>AR Face Filters</h4>
      <div className="two-grid titleCard tallImageGrid1">
        <GatsbyImage image={faceFinal.node.childImageSharp.gatsbyImageData}/>
        <GatsbyImage image={faceRealFinal.node.childImageSharp.gatsbyImageData}/>
      </div>
      <h4>AR Postcard</h4>
      <div className="two-grid titleCard tallImageGrid2">
        <GatsbyHoverImage initial="process/deliverables/ar-postcard/staticFinal/1.png" hover="process/deliverables/ar-postcard/staticFinal/1.png" photos={deliverablesImages}/>
        <GatsbyImage image={ar1realFinal.node.childImageSharp.gatsbyImageData}/>
        <GatsbyHoverImage initial="process/deliverables/ar-postcard/staticFinal/2.png" hover="process/deliverables/ar-postcard/staticFinal/2.png" photos={deliverablesImages}/>
        <GatsbyImage image={ar2realFinal.node.childImageSharp.gatsbyImageData}/>
      </div>
      <h4>Campus Poster Ad</h4>
      <GatsbyImage className="center" image={campusImg.node.childImageSharp.gatsbyImageData}/>

    </div>
  )
}

const BroadcastSection = ({broadcastImages}) => {
  const zoomBgImg = broadcastImages.find(element => element.node.relativePath == "process/broadcast/zoom/one.png"); 

  const lsMort1 = broadcastImages.find(element => element.node.relativePath == "process/broadcast/livestream-mortises/1.jpg"); 
  const lsMort2 = broadcastImages.find(element => element.node.relativePath == "process/broadcast/livestream-mortises/2.jpg"); 

  const preLs1 = broadcastImages.find(element => element.node.relativePath == "process/broadcast/pre-livestream-bg/1.jpg"); 

  const wn1 = broadcastImages.find(element => element.node.relativePath == "process/broadcast/winner-nominees/1.png"); 
  const wn2 = broadcastImages.find(element => element.node.relativePath == "process/broadcast/winner-nominees/2.png");

  return (
    <div id="broadcastpackage" className="processSection">
      <ProcessBanner title="Broadcast Package"/>
      <h4>Zoom Background Image</h4>
      <GatsbyImage className="centerImage" image={zoomBgImg.node.childImageSharp.gatsbyImageData}/>
      <h4>Stream Mortises and Pre Livestream Background</h4>
      <div className="odd-one-out">
      <GatsbyImage className="lastImage" image={preLs1.node.childImageSharp.gatsbyImageData}/>
        <div className="two-grid"> 
        <GatsbyImage image={lsMort1.node.childImageSharp.gatsbyImageData}/>
        <GatsbyImage image={lsMort2.node.childImageSharp.gatsbyImageData}/>
        </div>
      </div>
      <h4>Winner and Nominee Title Cards</h4>
      <div className="two-grid">
      <GatsbyImage image={wn1.node.childImageSharp.gatsbyImageData}/>
      <GatsbyImage image={wn2.node.childImageSharp.gatsbyImageData}/>
      </div>
    </div>
  )
}

const WebSection = ({webImages}) => {

  return (
    <div id="webdesign" className="processSection">
      <ProcessBanner title="Web Design"/>
    </div>
  )
}

const ProcessPage = (props) => {
  const { data, errors } = props;

  let heroImage = data.heroImage.edges[0].node.childImageSharp.gatsbyImageData;
  console.log(heroImage)

  let titleImages = data.processTitle.edges;
  let designImages = data.processDesign.edges;
  let deliverablesImages = data.processDeliverables.edges;
  let broadcastImages = data.processBroadcast.edges;
  let webImages = data.processWeb.edges;

  // console.log(titleImages);
  // console.log(designImages);
  // console.log(deliverablesImages);
  // console.log(broadcastImages);
  // console.log(webImages);

  return(
    <Layout>
      <Seo title="Process - CoMotion 2022" />
      <Nav />
      <MobileNav/>
      <Banner title="Process Page" imageData={heroImage} specificClass="processBanner"/>
      <ProcessNav/>
      <main className="process">
        <div className="processContainer">
          <div className="welcome processSection">
            <p>Welcome to the process page for CoMotion 2022! As you scroll through this page you’ll find information showcasing the creation process for all deliverables made by the CoMotion branding team.  We are proud of all the hard work and determination that went into this event. We hope you enjoy this behind the scenes look at CoMotion 2022! -CoMotion 2022 Documentary Team</p>
          </div>
          <div className="processSection symposium">
            <img src={sympImg} alt="" srcset="" />
            <div className="sympContent">
              <h3>CoMotion 2022 Edited Symposium</h3>
              <p>Editors: Kagan Marks, Scott Sandifer</p>
              <a target="_blank" href="https://drive.google.com/file/d/1w-N-91809dD4ei9Z0-UMHyWZWhUur8hn/view?usp=sharing">Click here to view the CoMotion 2022 Symposium</a>
            </div>
          </div>
          <TitleSection titleImages={titleImages}/>
          <DesignSection designImages={designImages}/>
          <DeliverableSection deliverablesImages={deliverablesImages}/>
          <BroadcastSection broadcastImages={broadcastImages}/>
          {/* <WebSection webImages={webImages}/> */}
        </div>
      </main>
      <Footer/>
    </Layout>
  )
}

export default ProcessPage