import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import MobileNav from '../components/mobileNav'
import Footer from '../components/footer'

import "../styles/attendees.scss"

const Attendee = props => {

  return(
    <div className="attendee">
      <div className="holder">

      </div>
      <p>Company Name</p>
      <div className="triangles">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}


const AttendeesPage = () => {
  return(
    <Layout>
      <Seo title="Attendees - CoMotion 2022" />
      <Nav />
      <MobileNav/>
      <div className="attendeesHero faqHero-container" >
        <h1>Attendees</h1>
      </div>
      <main className="attendees">
        <div className="attendeesGrid">
          <Attendee/>
          <Attendee/>
          <Attendee/>
          <Attendee/>
          <Attendee/>
          <Attendee/>
          <Attendee/>
          <Attendee/>
          <Attendee/>
          <Attendee/>
        </div>
      </main>
      <Footer/>
    </Layout>
  )
}

export default AttendeesPage