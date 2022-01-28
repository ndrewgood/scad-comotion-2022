import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import MobileNav from '../components/mobileNav'
import Footer from '../components/footer'

import '../styles/team.scss'

import yorlie from '../assets/images/team/branding/yorlie.png'
import priscilla from '../assets/images/team/branding/priscilla.png'
import tiffany from '../assets/images/team/branding/tiffany.png'
import aanvik from '../assets/images/team/branding/aanvik.png'
import bella from '../assets/images/team/branding/bella.png'
import cathy from '../assets/images/team/branding/cathy.png'
import wanyi from '../assets/images/team/branding/wanyi.png'
import varun from '../assets/images/team/branding/varun.png'
import alyssa_k from '../assets/images/team/branding/alyssa_k.png'
import sigourney from '../assets/images/team/branding/sigourney.png'
import haze from '../assets/images/team/branding/haze.png'
import marly from '../assets/images/team/branding/marly.png'
import andrew from '../assets/images/team/branding/andrew.png'
import jun from '../assets/images/team/branding/jun.png'
import josie from '../assets/images/team/branding/josie.png'
import greg from '../assets/images/team/branding/greg.png'
import samantha from '../assets/images/team/branding/samantha.png'
import michael from '../assets/images/team/branding/michael.png'
import olivia from '../assets/images/team/branding/olivia.png'
import mel_brand from '../assets/images/team/branding/mel_brand.png'
import weiqian from '../assets/images/team/branding/weiqian.png'
import auralee from '../assets/images/team/branding/auralee.png'
import daae from '../assets/images/team/branding/daae.png'
import desmond from '../assets/images/team/branding/desmond.png'
import matt_brand from '../assets/images/team/branding/matt_brand.png'
import king from '../assets/images/team/branding/king.png'
import miharu from '../assets/images/team/branding/miharu.png'
import brenda from '../assets/images/team/branding/brenda.png'
import antara_brand from '../assets/images/team/branding/antara_brand.png'
import riley from '../assets/images/team/branding/riley.png'
import krista from '../assets/images/team/branding/krista.png'
import yuwei from '../assets/images/team/branding/yuwei.png'
import isabella from '../assets/images/team/branding/isabella.png'

import alyssa_m from '../assets/images/team/momelove/alyssa_m.png'
import antara_mome from '../assets/images/team/momelove/antara_mome.png'
import matt_mome from '../assets/images/team/momelove/matt_mome.png'
import alex from '../assets/images/team/momelove/alex.png'
import mel_mome from '../assets/images/team/momelove/mel_mome.png'
import aidan from '../assets/images/team/momelove/aidan.png'
import cora from '../assets/images/team/momelove/cora.png'
import claire from '../assets/images/team/momelove/claire.png'
import kaleb from '../assets/images/team/momelove/kaleb.png'
import marybeth from '../assets/images/team/momelove/marybeth.png'


const momeloveList = [
    {
        name: "Kaleb Sweeney",
        role: "Co-President",
        port: "kalebriver.wixsite.com/mysite-1",
        pic: kaleb,
        color: "blue"
    },
    {
        name: "Alexandera Marca",
        role: "Co-President",
        port: "",
        pic: alex,
        color: "blue"
    },
    {
        name: "MaryBeth Morgan",
        role: "Vice President",
        port: "maryliz.work",
        pic: marybeth,
        color: "blue"
    },
    {
        name: "Matt Paulsen",
        role: "Treasurer",
        port: "www.mattsmotion.com/",
        pic: matt_mome,
        color: "blue"
    },
    {
        name: "Mel Petzoldt",
        role: "Officer",
        port: "melpetz.com",
        pic: mel_mome,
        color: "blue"
    },
    {
        name: "Claire Lin",
        role: "Officer",
        port: "",
        pic: claire,
        color: "blue"
    },
    {
        name: "Antara Ghosh",
        role: "Officer",
        port: "antaraghosh.cargo.site/ ",
        pic: antara_mome,
        color: "blue"
    },
    {
        name: "Cora Keene",
        role: "Officer",
        port: "corakeene.com/",
        pic: cora,
        color: "blue"
    },
    {
        name: "Aiden Carney",
        role: "Officer",
        port: "www.aidancarneydesign.com/",
        pic: aidan,
        color: "blue"
    },
    {
        name: "Alyssa Mackersie",
        role: "Officer",
        port: "amackersiedesign.wixsite.com/my-site",
        pic: alyssa_m,
        color: "blue"
    },

]

const brandingList = [
    {
        name: "Miharu Murai",
        role: "Creative Director",
        port: "miharumurai.com",
        pic: miharu,
        color: "pink"
    },
    {
        name: "Yu Xin King",
        role: "Art Director",
        port: "kingyuxin.myportfolio.com",
        pic: king,
        color: "pink"
    },
    {
        name: "Mel Petzoldt",
        role: "Producer",
        port: "melpetz.com",
        pic: mel_brand,
        color: "pink"
    },
    {
        name: "Matt Paulsen",
        role: "Producer",
        port: "www.mattsmotion.com/",
        pic: matt_brand,
        color: "pink"
    },
    {
        name: "Desmond Du",
        role: "Lead Animator",
        port: "duitbetter.com",
        pic: desmond,
        color: "pink"
    },
    {
        name: "Olivia Trotter",
        role: "Lead 3D Animator",
        port: "www.oliviatrotter.com",
        pic: olivia,
        color: "pink"
    },
    {
        name: "Weiqian Han",
        role: "Lead Graphic Designer",
        port: "weihan20.myportfolio.com",
        pic: weiqian,
        color: "pink"
    },
    {
        name: "Yorlie Avila",
        role: "Lead Designer",
        port: "yorliethavila.myportfolio.com",
        pic: yorlie,
        color: "pink"
    },
    {
        name: "Andrew Goodridge",
        role: "Lead Web Designer",
        port: "ndrewgood.com",
        pic: andrew,
        color: "pink"
    },
    {
        name: "Samantha Woods",
        role: "Lead Documentation",
        port: "samwoodsdesign.com",
        pic: samantha,
        color: "pink"
    },
    {
        name: "Wanyi Ma",
        role: "Animator",
        port: "maviswanyima.myportfolio.com/work",
        pic: wanyi,
        color: "pink"
    },
    {
        name: "Cathy Lin",
        role: "Animator",
        port: "cathylinlin.com",
        pic: cathy,
        color: "pink"
    },
    {
        name: "Greg Markan",
        role: "Animator",
        port: "www.wowgreg.cool",
        pic: greg,
        color: "pink"
    },
    {
        name: "DaAe Kim",
        role: "Animator",
        port: "www.daaekim.com",
        pic: daae,
        color: "pink"
    },
    {
        name: "Marly Koven",
        role: "Animator",
        port: "www.marlykoven.com",
        pic: marly,
        color: "pink"
    },
    {
        name: "Jun Zhou",
        role: "Animator",
        port: "junzhou.art/motion",
        pic: jun,
        color: "pink"
    },
    {
        name: "Brenda Chen",
        role: "Animator",
        port: "vimeo.com/user90426107",
        pic: brenda,
        color: "pink"
    },
    {
        name: "Auralee Mayfield",
        role: "Designer",
        port: "auraleem.com",
        pic: auralee,
        color: "pink"
    },
    {
        name: "Isabella Jean Ranci Ortigosa",
        role: "Designer",
        port: "",
        pic: isabella,
        color: "pink"
    },
    {
        name: "Antara Ghosh",
        role: "Designer",
        port: "antaraghosh.cargo.site",
        pic: antara_brand,
        color: "pink"
    },
    {
        name: "Tiffany Lo",
        role: "Designer",
        port: "motifflo.com",
        pic: tiffany,
        color: "pink"
    },
    {
        name: "Yuwei Liu",
        role: "Designer",
        port: "yuwliu2002b9.myportfolio.com/work",
        pic: yuwei,
        color: "pink"
    },
    {
        name: "Alyssa Kalbus",
        role: "Graphic Designer",
        port: "alyssakalbus.com",
        pic: alyssa_k,
        color: "pink"
    },
    {
        name: "Aanvik Singh",
        role: "Graphic Designer",
        port: "aanvikiguess.com",
        pic: aanvik,
        color: "pink"
    },
    {
        name: "Josie Glassman",
        role: "Graphic Designer",
        port: "josieglassman.design/",
        pic: josie,
        color: "pink"
    },
    {
        name: "Krista Miller",
        role: "Graphic Designer",
        port: "www.kristamillerdesign.com",
        pic: krista,
        color: "pink"
    },
    {
        name: "Bella Shih",
        role: "Graphic Designer",
        port: "bellashih.com",
        pic: bella,
        color: "pink"
    },
    {
        name: "Varun Khatri",
        role: "Web Designer",
        port: "www.thevarunkhatri.com",
        pic: varun,
        color: "pink"
    },
    {
        name: "Haze Nguyen",
        role: "Documentation",
        port: "hazengu.wixsite.com/hazenguyen",
        pic: haze,
        color: "pink"
    },
    {
        name: "Sigourney DuBois Alden",
        role: "Documentation",
        port: "salden20.myportfolio.com/",
        pic: sigourney,
        color: "pink"
    },
    {
        name: "Riley Carson",
        role: "Experiential",
        port: "madebyriley.com",
        pic: riley,
        color: "pink"
    },
    {
        name: "Priscilla Quek",
        role: "Experiential",
        port: "priscillartistry.wixsite.com/priscillaquek",
        pic: priscilla,
        color: "pink"
    },
]

const volunteerList = [
    {
        name: "Tanaya Khadke",
        role: "",
        port: "www.behance.net/tanayakhadke",
        color: "blue"
    },
    {
        name: "Isabelle Kalyn Winarto",
        role: "",
        port: "byisabellek.com",
        color: "blue"
    },
    {
        name: "Tucker Ziegler",
        role: "",
        port: "",
        color: "blue"
    },
    {
        name: "Adriana Melissa Chong García",
        role: "",
        port: "adrianamchongg.wixsite.com/website",
        color: "blue"
    },
    {
        name: "Vladslava Fedchenko",
        role: "",
        port: "vladyslavafedchenko.wixsite.com/vlada",
        color: "blue"
    },
    {
        name: "Harshitha Suresh",
        role: "",
        port: "shadeyartist.com/",
        color: "blue"
    },
    {
        name: "Grace Lawton",
        role: "",
        port: "gracelawtondesign.com",
        color: "blue"
    },
    {
        name: "Meghna Shourie",
        role: "",
        port: "meghnashourie.myportfolio.com/work",
        color: "blue"
    }
]

const TeamHero = () => (
  <main className="teamHero-container">
    <h1>CoMotion Team</h1>
  </main>
)

const TeamHeader = ({text}) => (
    <div className="team-header">
        {/* <div className={"team-dotsLeft"}></div> */}
        <h1>{text}</h1>
        {/* <div className={"team-dotsRight"}></div> */}
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

const VolunteerGrid = ({list}) => (
    <div className="team-volunteerGrid">
        {
            list.map((i) => {
                return (
                    <a href={"https://" + i.port} target="_blank" className="team-volunteer">{i.name}</a>
                )
            })
        }
    </div>
)

const TeamPage = (props) => { 
    return(
        <Layout>
            <Seo title="Team - CoMotion 2022" />
            <Nav />
            <MobileNav/>
            <TeamHero />
            <div className="team">
                <div className="team-container">
                    <TeamHeader text="MOMELove Officers" />
                    <TeamGrid list={momeloveList} />
                    <TeamHeader text="Branding Team" />
                    <TeamGrid list={brandingList} />
                    <TeamHeader text="Volunteers" />
                    <VolunteerGrid list={volunteerList} />
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

export default TeamPage