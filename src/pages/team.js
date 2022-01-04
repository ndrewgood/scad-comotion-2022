import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import Footer from '../components/footer'

import '../styles/team.scss'

import test from '../assets/images/team/momelove/test.png'

const momeloveList = [
    {
        name: "Tyler Rispoli",
        role: "President",
        port: "google.com",
        pic: test,
        color: "pink"
    },
    
]

const TeamHero = () => (
  <main className="teamHero-container">
    <h1>CoMotion Team</h1>
  </main>
)

const TeamHeader = ({text, color}) => (
    <div className="team-header">
        <div className={"team-dotsLeft"}></div>
        <h1>{text}</h1>
        <div className={"team-dotsRight"}></div>
    </div>
)

const TeamGrid = ({list}) => (
    <div className="team-photoGrid">
        {
            list.map((i) => {

                let color = i.color == "pink" ? "F3CAFF" : i.color == "blue" ? "5ECAED" : i.color == "green" ? "ABEEBB" : "F3CAFF";

                return (
                    <a href={"https://" + i.port} target="_blank" className="team-picContainer">
                        <img src={i.pic} alt={i.name} style={{border: "12px inset #" + color}} srcset="" />
                        <h3>{i.name}</h3>
                        <p>{i.role}</p>
                    </a>
                )
            })
        }
    </div>
)

const TeamPage = () => (
  <Layout>
    <Seo title="Home" />
    <Nav />
    <TeamHero />
    <div className="team">
        <div className="team-container">
            <TeamHeader text="MOMELove Officers" color="orange"/>
            <TeamGrid list={momeloveList} />
            <TeamHeader text="Branding Team" color="orange"/>
            <TeamGrid list={momeloveList} />
        </div>
    </div>
    <Footer/>
  </Layout>
)

export default TeamPage