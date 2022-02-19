import React, {useEffect, useState} from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import MobileNav from '../components/mobileNav'
import Footer from '../components/footer'
import Banner from '../components/banner'

import '../styles/panels.scss'

export const query = graphql`
  query PanelsPageQuery {
    heroImage: allFile(filter: {relativePath: {eq: "banners/heroPanels.jpg"}}) {
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

const panels = [
  {
    title: "Pushing Ideas Through Collaboration and Discipline Variety",
    speakers: "",
    date: "February 25th",
    time: "2:45pm - 4:00pm EST",
    description: "As creatives, we are always looking for new ways to broaden our horizons and discover new outlooks. In this panel, we explore how working in team collaborations with a variety of skill sets fuel creativity and amplify project scope. Panelists will share how to connect with individuals who utilize a broad range of skill sets,  nurture teams in the workplace and personal projects, and harness a variety of mediums to expand ideas."
  },
  {
    title: "CoMotion Branding Behind the Scenes",
    speakers: "",
    date: "February 25th",
    time: "4:00pm - 5:00pm EST",
    description: "How does a student-only team create a comprehensive event branding package? On this panel, the 9 team leads come together and explain the ins-and-outs of this year’s creation process. Students will discuss creative development, adapting the design for different deliverables, how to communicate in a hybrid setting, and what they learned as a team."
  },
  {
    title: "Alumni Panel",
    speakers: "",
    date: "February 26th",
    time: "2:00pm - 3:15pm EST",
    description: "SCAD Alumni will discuss life after college and navigating the workforce. We’ll explore the challenges and successes of their journeys and how they achieved their long and short-term goals. Panelists will discuss obtaining proper international work Visas, imposter syndrome, finding your footing in the industry, and learning when to say yes or no to a project."
  },
  {
    title: "Expanding Horizons: New Mediums in Motion Media",
    speakers: "",
    date: "February 26th",
    time: "3:15pm - 5:00pm EST",
    description: "In this panel, three studios give insight on their recent groundbreaking projects that combine technology and reality. Each studio will share their projects with behind-the-scenes visuals, how they created the final, and exciting learning moments along the way. There will be a live 15-minute Q&A segment at the end of this panel."
  },
  {
    title: "Exploring ‘The Cliche’",
    speakers: "",
    date: "February 27th",
    time: "2:00pm - 3:15pm EST",
    description: "With inspiration and art surrounding our lives, how can we make original work? In this panel, we will explore the prevalence of cliche, how panelists develop originality in their work, and what they did to enhance creativity. Panelists will provide insight on brainstorming, creating designs, and conceptualizing multimedia ideas when it seems everything has already been done"
  },
]

const PanelsHero = () => (
  <main className="faqHero-container panelsHero">
    <h1>Panels</h1>
  </main>
)

const PanelComponent = ({t, s, d, tm, ds}) => {
  return (
    <div className="panelComponent">
      <div className="top">
        <div className="tl">
          <div className="title">{t}</div>
          <p className="time">{d}<br/>{tm}</p>
          <div className="speakers">{s}</div>
        </div>
        <div className="tr">
          <a className="disable">Watch Panel</a>
        </div>
      </div>
      <p className="description">
        {ds}
      </p>
      <div className="bt">
          <a className="disable">Watch Panel</a>
        </div>
    </div>
  )
}

const PanelsPage = (props) => {
  const { data, errors } = props;

  let heroImage = data.heroImage.edges[0].node.childImageSharp.gatsbyImageData;
  console.log(heroImage)

  return (
    <Layout>
      <Seo title="Panels - CoMotion 2022" />
      <Nav />
      <MobileNav/>
      <Banner title="Panels" imageData={heroImage}/>
      <div id="panels">
        {/* Day 1: https://www.youtube.com/embed/YxRRjm8vZQ8  */}
        {/* Day 2: https://www.youtube.com/embed/rGRJ7SiYRx8  */}
        {/* Day 3: https://www.youtube.com/embed/yE50RHSU5Mw  */}
        {/* <div id="livestream">
          <h2>CoMotion Livestream: Day #</h2>
          <iframe 
            width="560" 
            height="700" 
            src="https://www.youtube.com/embed/YxRRjm8vZQ8" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          <h4>Livestreams</h4>
          <div className="buttonGrid">
            <a className="pink" href="https://youtu.be/YxRRjm8vZQ8" target="_blank"><p>Day 1 Livestream</p></a>
            <a className="pink" href="https://youtu.be/rGRJ7SiYRx8" target="_blank"><p>Day 2 Livestream</p></a>
            <a className="pink" href="https://youtu.be/yE50RHSU5Mw" target="_blank"><p>Day 3 Livestream</p></a>
          </div>
          <h4>Live YouTube Premieres</h4>
          <div className="buttonGrid">
            <a className="blue" href="/" target="_blank"><p>Opening Statement and Title Sequence</p></a>
            <a className="blue" href="/" target="_blank"><p>Student Showcase: Nominees</p></a>
            <a className="blue" href="/" target="_blank"><p>Student Showcase: Winners</p></a>
          </div>
        </div> */}
        <div id="keynote">
          <h2>Keynote Speakers</h2>
          <div id="speakersContainer">
            <a className="speaker speaker1" target="_blank" href="https://hobbes.work">
              <div className="photoContainer">
                <div className="shape" id="shape1"></div>
                <div className="shape" id="shape2"></div>
                <div className="shape" id="shape3"></div>
                <div className="speakerPhoto"></div>
              </div>
              <h3>Eddy Nieto</h3>
            </a>
            <a className="speaker speaker2" target="_blank" href="https://hobbes.work">
              <div className="photoContainer">
                <div className="shape" id="shape4"></div>
                <div className="shape" id="shape5"></div>
                <div className="shape" id="shape6"></div>
                <div className="speakerPhoto"></div>
              </div>
              <h3>Nevin McRay</h3>
            </a>
          </div>
          <p>Eddy Nieto is a director, animator, and designer. Nevin McRay is a producer. Over the past three years, both have helped to lead <a href="https://hobbes.work" target="_blank">Hobbes</a> in applying the principles of motion to emerging technology.</p>
        </div>
        <div>
        <h2 style={{marginTop: "80px"}}>Panels</h2>
        {
          panels.map((el, i) => {
            return (<PanelComponent key={i} t={el.title} s={el.speakers} d={el.date} tm={el.time} ds={el.description} />)
          })
        }
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default PanelsPage