import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import MobileNav from '../components/mobileNav'
import Footer from '../components/footer'

import '../styles/faq.scss'

const FaqHero = () => (
  <main className="faqHero-container">
    <h1>Frequently Asked Questions</h1>
  </main>
)

const FaqComponent = ({question, answer}) => {
  return (
    <div className="faq-container">
      <div className="faq-question"><p>{question}</p></div>
      <div className="faq-arrow"></div>
      <div className="faq-answer">
        {
          answer.map((node) => {
            if (typeof node === "object") {
              return <p>{node[0]}<a href={node[1][1]}>{node[1][0]}</a>{node[2]}</p>
              // return <p>{node}</p>
            } else {
              return <p>{node}</p>
            }
          })
        }
      </div>
    </div>
  )
}

const FaqPage = (props) => {
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
      <Seo title="FAQ - CoMotion 2022" />
      {isDesktop ? <Nav /> : <MobileNav/>}
      <FaqHero />
      <div style={{backgroundColor: "#f4eedd", padding: "40px 0 80px"}}>
        <FaqComponent 
          question="Is CoMotion virtual or on-ground this year and where are livestreams hosted?"
          answer={[
            "CoMotion 2022 is the second fully virtual CoMotion. All livestreamed events are accessible on YouTube through the ‘Livestreams’ section on our website, scadcomotion.com."
          ]}
        />
        <FaqComponent 
          question="How are virtual Portfolio Reviews hosted during CoMotion 2022?"
          answer={[
            [
              "Portfolio reviews will be conducted via the CoMotion 2022 Discord server. Company attendees can access this server via their itinerary email sent by MOMELove, and students can access this through the MOMELove Club Discord. If you are new to Discord, you can make a free account and look through their ", 
              ["FAQ", "https://support.discord.com/hc/en-us/categories/115000168371"],
              ". Discord supports voice, video, and screen-sharing capabilities."
            ],
            "Company attendees are asked to remain in their respective Voice Channels for their dedicated review times, noted on their itineraries, where students will join the voice channel at their designated times. Our volunteers will post reminders in the #time channel when each review has 5 minutes remaining. Students will be expected to leave at the end of their reviews, otherwise volunteers will move students out of the voice channel."
          ]}
        />
        <FaqComponent 
          question="When and where are my portfolio reviews?"
          answer={[
            "Both students and companies should have been received in an email from MOMELove with the subject line: “CoMotion 2022 Portfolio Reviews.” This email will contain a schedule as well as helpful information regarding the review process."
          ]}
        />
        <FaqComponent 
          question="Do I need to set up special accounts for CoMotion 2022?"
          answer={[
            [
              "All companies and students participating in portfolio reviews must create a free Discord account ", 
              ["here", "https://discord.com/"],
              ". You do not need an account to view the livestreams or panels hosted on YouTube, however you will need an account to participate in YouTube comments."
            ]
          ]}
        />
      </div>
      <Footer/>
    </Layout>
  )
}

export default FaqPage