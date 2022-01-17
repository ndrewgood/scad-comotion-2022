import React, {useEffect, useState} from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import MobileNav from '../components/mobileNav'
import Footer from '../components/footer'

import '../styles/panels.scss'

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
    description: "SCAD Alumni will discuss life after college and navigating the workforce. We’ll explore the challenges and successes of their journeys and how they achieved their long and short-term goals. Panelists will discuss obtaining proper international work Visas, imposter syndrome, finding your footing in the industry, and learning when to say yes or no to a project."
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
  <main className="faqHero-container">
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
  const [isDesktop, setDesktop] = useState(window.innerWidth > 720);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 720);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Layout>
      <Seo title="Panels - CoMotion 2022" />
      {isDesktop ? <Nav /> : <MobileNav/>}
      <PanelsHero />
      <div id="panels">
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