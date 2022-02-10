import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import MobileNav from '../components/mobileNav'
import Footer from '../components/footer'

import '../styles/team.scss'

let yorlie          = 'team/branding/yorlie.png'
let priscilla       = 'team/branding/priscilla.png'
let tiffany         = 'team/branding/tiffany.png'
let aanvik          = 'team/branding/aanvik.png'
let bella           = 'team/branding/bella.png'
let cathy           = 'team/branding/cathy.png'
let wanyi           = 'team/branding/wanyi.png'
let varun           = 'team/branding/varun.png'
let alyssa_k        = 'team/branding/alyssa_k.png'
let sigourney       = 'team/branding/sigourney.png'
let haze            = 'team/branding/haze.png'
let marly           = 'team/branding/marly.png'
let andrew          = 'team/branding/andrew.png'
let jun             = 'team/branding/jun.png'
let josie           = 'team/branding/josie.png'
let greg            = 'team/branding/greg.png'
let samantha        = 'team/branding/samantha.png'
let michael         = 'team/branding/michael.png'
let olivia          = 'team/branding/olivia.png'
let mel_brand       = 'team/branding/mel_brand.png'
let weiqian         = 'team/branding/weiqian.png'
let auralee         = 'team/branding/auralee.png'
let daae            = 'team/branding/daae.png'
let desmond         = 'team/branding/desmond.png'
let matt_brand      = 'team/branding/matt_brand.png'
let king            = 'team/branding/king.png'
let miharu          = 'team/branding/miharu.png'
let brenda          = 'team/branding/brenda.png'
let antara_brand    = 'team/branding/antara_brand.png'
let riley           = 'team/branding/riley.png'
let krista          = 'team/branding/krista.png'
let yuwei           = 'team/branding/yuwei.png'
let isabella        = 'team/branding/isabella.png'
let temp            = 'team/branding/temp.png'
let alywn           = 'team/branding/alywn.png'
let alyssa_m        = 'team/momelove/alyssa_m.png'
let antara_mome     = 'team/momelove/antara_mome.png'
let matt_mome       = 'team/momelove/matt_mome.png'
let alex            = 'team/momelove/alex.png'
let mel_mome        = 'team/momelove/mel_mome.png'
let aidan           = 'team/momelove/aidan.png'
let cora            = 'team/momelove/cora.png'
let claire          = 'team/momelove/claire.png'
let kaleb           = 'team/momelove/kaleb.png'
let marybeth        = 'team/momelove/marybeth.png'

export const query = graphql`
  query TeamPageQuery {
    momeLove: allFile(filter: {relativePath: {regex: "/^team/momelove/"}}) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 80, formats: [WEBP], height: 300)
            }
          }
        }
    }
    branding: allFile(filter: {relativePath: {regex: "/^team/branding/"}}) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 80, formats: [WEBP], height: 300)
            }
          }
        }
    }
  }
`;

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

const TeamGrid = ({list, photos}) => {
    
    return(
        <div className="team-photoGrid">
            {
                list.map((i) => {

                    let color = i.color == "pink" ? "F3CAFF" : i.color == "blue" ? "5ECAED" : i.color == "green" ? "ABEEBB" : "F3CAFF";
                    let profileImage = photos.find(element => element.node.relativePath == i.pic); 
                    console.log(profileImage)

                    return (
                        <a href={"https://" + i.port} target="_blank" className="team-picContainer">
                            <GatsbyImage image={profileImage.node.childImageSharp.gatsbyImageData} alt={i.name} style={{border: "12px inset #" + color}} className="teamImage" srcset="" />
                            <h3>{i.name}</h3>
                            <p>{i.role}</p>
                        </a>
                    )
                })
            }
        </div>
    )
}

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
    const { data, errors } = props;

    let momeObject = data.momeLove;
    let momeArray = Object.values(momeObject)[0];
    console.log(momeArray)

    let brandingObject = data.branding;
    let brandingArray = Object.values(brandingObject)[0];
    console.log(brandingArray)

    const momeloveList = [
        {
            name: "Kaleb Sweeney",
            role: "Co-President",
            port: "ksween22.myportfolio.com",
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
            port: "www.theclairelin.com",
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
            name: "Aidan Carney",
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
            port: "wanyima.com",
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
            name: "Greg Markman",
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
            port: "www.brendaxuecongchen.com",
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
        {
            name: "Michael Karaman",
            role: "Sound Design",
            port: "mikesmotions.com",
            pic: michael,
            color: "pink"
        },
        {
            name: "Alwyn Tay",
            role: "Sound Design",
            port: "vimeo.com/675318785",
            pic: alywn,
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
        },
        {
            name: "Tyler Ferrell",
            role: "",
            port: "mailto:tydeferrell@gmail.com",
            color: "blue"
        },
        {
            name: "Harshitha Suresh",
            role: "",
            port: "www.shadeyartist.com",
            color: "blue"
        },
        {
            name: "Jessica Liou",
            role: "",
            port: "www.behance.net/huahua870204fa",
            color: "blue"
        },
        {
            name: "Nicole Lin",
            role: "",
            port: "nicolelinnn.com",
            color: "blue"
        },
        {
            name: "Andrew Botkin",
            role: "",
            port: "www.behance.net/andrewbotkin1",
            color: "blue"
        },
        {
            name: "Sophia D'Alleva",
            role: "",
            port: "",
            color: "blue"
        },
        {
            name: "Erin O'Donnell",
            role: "",
            port: "www.erinodonnelldesign.com",
            color: "blue"
        },
        {
            name: "Stephanie Sandoval",
            role: "",
            port: "",
            color: "blue"
        },
        {
            name: "Libby Nett",
            role: "",
            port: "libbynett.wixsite.com/my-site-1",
            color: "blue"
        },
        {
            name: "Ningfeng He",
            role: "",
            port: "feng.squarespace.com",
            color: "blue"
        },
        {
            name: "Hannah Berastegui",
            role: "",
            port: "www.hannahberastegui.com",
            color: "blue"
        },
        {
            name: "Colin Horvath",
            role: "",
            port: "www.colinhorvath.xyz",
            color: "blue"
        },
        {
            name: "Ken Hsu",
            role: "",
            port: "www.behance.net/ken2208243f543/projects",
            color: "blue"
        },
        {
            name: "Hsi Ming Wang (Peter)",
            role: "",
            port: "hsimingwang.myportfolio.com/home",
            color: "blue"
        },
        {
            name: "Marisa Rowan",
            role: "",
            port: "www.marisarowan.com/",
            color: "blue"
        },
        {
            name: "Sonyue Li",
            role: "",
            port: "www.marisarowan.com/",
            color: "blue"
        },
        {
            name: "Mengda Li",
            role: "",
            port: "www.alpacaillu.com",
            color: "blue"
        },
        {
            name: "Yining Li",
            role: "",
            port: "yiningli.com/",
            color: "blue"
        },
        {
            name: "Susanna Tung",
            role: "",
            port: "",
            color: "blue"
        },
        
        
    ]

    return(
        <Layout>
            <Seo title="Team - CoMotion 2022" />
            <Nav />
            <MobileNav/>
            <TeamHero />
            <div className="team">
                <div className="team-container">
                    <TeamHeader text="MOMELove Officers" />
                    <TeamGrid list={momeloveList} photos={momeArray}/>
                    <TeamHeader text="Branding Team" />
                    <TeamGrid list={brandingList} photos={brandingArray}/>
                    <TeamHeader text="Volunteers" />
                    <VolunteerGrid list={volunteerList} />
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

export default TeamPage