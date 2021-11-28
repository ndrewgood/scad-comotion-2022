import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'

import '../styles/faq.scss'

const FaqHero = () => (
  <main className="faqHero-container">
    <p>FAQ Hero</p>
  </main>
)

const FaqComponent = ({question, answer}) => {
  return (
    <div className="faq-container">
      <div className="faq-question"><p>{question}</p></div>
      <div className="faq-answer"><p>{answer}</p></div>
    </div>
  )
}

const FaqPage = () => (
  <Layout>
    <Seo title="Home" />
    <Nav />
    <FaqHero />
    <FaqComponent 
      question="What is a good example question?"
      answer="Not sure, but here's a pretty good example answer!"
    />
    <FaqComponent 
      question="What is a good example question?"
      answer="Not sure, but here's a pretty good example answer!"
    />
  </Layout>
)

export default FaqPage