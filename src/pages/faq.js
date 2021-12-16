import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import Footer from '../components/footer'

import '../styles/faq.scss'

const FaqHero = () => (
  <main className="faqHero-container">
    <p>FAQ Hero</p>
  </main>
)

const FaqComponent = ({question, answer}) => {
  return (
    <div className="faq-container">
      <div>
        <div className="faq-question"><p>{question}</p></div>
      </div>
      <div className="faq-answer">
        {
          answer.map((node) => {
            return(
              <p>{node}</p>
            )
          })
        }
      </div>
    </div>
  )
}

const FaqPage = () => (
  <Layout>
    <Seo title="Home" />
    <Nav />
    <FaqHero />
    <FaqComponent 
      question="Is CoMotion going to be held virtually this year?"
      answer={["Yes! CoMotion 2021 will be the first all-virtual CoMotion. Everything will be accessible from our website, scadcomotion.com."]}
    />
    <FaqComponent 
      question="When and where are my Portfolio Reviews? With whom am I reviewing?"
      answer={["Everyone who was selected for the virtual Portfolio Reviews during CoMotion 2021 should have received an email from MOMELove with the subject line: 'CoMotion 2021 Portfolio Review.' This email will have your review schedule as well as helpful information regarding the review process."]}
    />
    <FaqComponent 
      question="How will the virtual Portfolio Reviews work during CoMotion 2021?"
      answer={["Portfolio reviews will be conducted via the CoMotion 2021 Discord server that attendees can access from their itinerary email and students can access through the MOMELove Club Discord.", "Attendees are asked to hang out in their respective Voice Chats for the portion of the day dedicated to portfolio reviews, whereas students will come in and out of those rooms. Our volunteers will be posting announcements in the #time channel 5 minutes before each review time is over, and will enter the Voice Channel at the end of each review to check in. Our server can handle everyone screensharing, but we recommend having the student’s website pulled up on their end to share their screen."]}
    />
    <FaqComponent 
      question="Why are we using Discord for the CoMotion 2021 Portfolio Reviews?"
      answer={["We are aware that Discord may be a brand new platform to use besides Zoom or Slack, however, due to the capabilities of remote officers and volunteers, Discord’s large-group setting with the ability to break into smaller sections and general accessibility is the best option for overseeing portfolio reviews."]}
    />
    <Footer/>
  </Layout>
)

export default FaqPage