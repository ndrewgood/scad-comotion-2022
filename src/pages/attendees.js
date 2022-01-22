import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import MobileNav from '../components/mobileNav'
import Footer from '../components/footer'

import FirstAveMachine from '../assets/images/attendees/1stavemachine.png'
import AlignedMedia from '../assets/images/attendees/Alignedmedia.png'
import AllOfItNow from '../assets/images/attendees/AllOfItNow.png'
import AntidoteStudio from '../assets/images/attendees/anitidotestudio.png'
import AwesomeInc from '../assets/images/attendees/awesomeinc.png'
import BlackMath from '../assets/images/attendees/BlavkMath.png'
import Blockntackle from '../assets/images/attendees/Blockntackle.png'
import Brandnewschool from '../assets/images/attendees/brandnewschool.png'
import Buck from '../assets/images/attendees/Buck.png'
import Charlieco from '../assets/images/attendees/Charlieco.png'
import Cycymymy from '../assets/images/attendees/cycymymy.png'
import Dash from '../assets/images/attendees/dash.png'
import Eido from '../assets/images/attendees/Eido.png'
import EnvoySquare from '../assets/images/attendees/Envoy_square.png'
import Fern from '../assets/images/attendees/fern.png'
import Fivestone from '../assets/images/attendees/fivestone.png'
import Framestore from '../assets/images/attendees/framestore.png'
import Gareso from '../assets/images/attendees/Gareso.png'
import GiantAnt from '../assets/images/attendees/Giantant.png'
import GoldenWolf from '../assets/images/attendees/Goldenwolf.png'
import Gretel from '../assets/images/attendees/Gretel.png'
import Gunner from '../assets/images/attendees/Gunner.png'
import Hobbes from '../assets/images/attendees/Hobbes.png'
import HueNCry from '../assets/images/attendees/huencry.png'
import IdentityVisuals from '../assets/images/attendees/ivstudio.png'
import Laundry from '../assets/images/attendees/laundry.png'
import Lucid from '../assets/images/attendees/lucid_square.png'
import Meister from '../assets/images/attendees/meister.png'
import Meptik from '../assets/images/attendees/maptik.png'
import NextNow from '../assets/images/attendees/nextnow.png'
import Psyop from '../assets/images/attendees/psyop.png'
import Ravie from '../assets/images/attendees/ravie.png'
import Sarofsky from '../assets/images/attendees/sarosky.png'
import Scholar from '../assets/images/attendees/scholar.png'
import SiblingRivalry from '../assets/images/attendees/siblingrivalry.png'
import Smt from '../assets/images/attendees/SMT_square.png'
import Snowday from '../assets/images/attendees/Snowday.png'
import State from '../assets/images/attendees/state.png'
import TheMill from '../assets/images/attendees/themill.png'
import TheNewBlank from '../assets/images/attendees/thenewblank.png'
import TrollBack from '../assets/images/attendees/trollback.png'
import Tencent from '../assets/images/attendees/lightspeed_quantumstudio.png'
import WeberShandwick from '../assets/images/attendees/webershandwick.png'

import "../styles/attendees.scss"

const Attendee = props => {
  console.log(props.logo)
  return(
    <a href={props.link} target="_blank" className="attendee">
      <div className="holder">
        <img src={props.logo} alt={props.name}/>
      </div>
      <p>{props.name}</p>
      <div className="triangles">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
    </a>
  )
}


const AttendeesPage = () => {
  const companies = [
    {
      name: '1stAveMachine',
      logo: FirstAveMachine,
      link: "https://www.1stavemachine.com"
    },
    {
      name: 'Aligned Media',
      logo: AlignedMedia,
      link: "https://www.alignedmedia.com/"
    },
    {
      name: 'All Of It Now',
      logo: AllOfItNow,
      link: "https://allofitnow.com/"
    },
    {
      name: 'Antidote Studio',
      logo: AntidoteStudio,
      link: "https://antidotestudio.tv"
    },
    {
      name: 'Awesome, Inc.',
      logo: AwesomeInc,
      link: "https://www.awesomeinc.com/"
    },
    {
      name: 'Black Math',
      logo: BlackMath,
      link: "https://blackmath.com/"
    },
    {
      name: 'Block and Tackle',
      logo: Blockntackle,
      link: "https://www.blockandtackle.tv"
    },
    {
      name: 'Brand New School (LA&NY)',
      logo: Brandnewschool,
      link: "https://brandnewschool.com/"
    },
    {
      name: 'Buck',
      logo: Buck,
      link: "https://buck.co/"
    },
    {
      name: 'Charlie Company',
      logo: Charlieco,
      link: "http://www.charlieco.tv"
    },
    {
      name: 'Cycymymy',
      logo: Cycymymy,
      link: "https://www.cycymymy.com"
    },
    {
      name: 'Dash',
      logo: Dash,
      link: "https://www.dashstudio.net"
    },
    {
      name: 'Eido',
      logo: Eido,
      link: "https://www.eido.net"
    },
    {
      name: 'Envoy',
      logo: EnvoySquare,
      link: "https://www.weareenvoy.com/"
    },
    {
      name: 'Fern',
      logo: Fern,
      link: "https://www.fern.team"
    },
    {
      name: 'Fivestone Studios',
      logo: Fivestone,
      link: "https://fivestonestudios.com/"
    },
    {
      name: 'Framestore',
      logo: Framestore,
      link: "https://www.framestore.com/?language=en"
    },
    {
      name: 'Gareso',
      logo: Gareso,
      link: "https://gareso.com/"
    },
    {
      name: 'Giant Ant',
      logo: GiantAnt,
      link: "https://www.giantant.ca/"
    },
    {
      name: 'Golden Wolf',
      logo: GoldenWolf,
      link: "https://goldenwolf.tv/"
    },
    {
      name: 'Gretel',
      logo: Gretel,
      link: "https://gretelny.com"
    },
    {
      name: 'Gunner',
      logo: Gunner,
      link: "https://www.gunner.work"
    },
    {
      name: 'Hobbes',
      logo: Hobbes,
      link: "https://hobbes.work/"
    },
    {
      name: 'Hue & Cry',
      logo: HueNCry,
      link: "https://www.hueandcry.tv"
    },
    {
      name: 'Identity Visuals',
      logo: IdentityVisuals,
      link: "https://iv.studio"
    },
    {
      name: 'Laundry',
      logo: Laundry,
      link: "https://www.laundrymat.tv"
    },
    {
      name: 'Lucid',
      logo: Lucid,
      link: "https://lucid.fyi/"
    },
    {
      name: 'Meister',
      logo: Meister,
      link: "https://meister.tv/"
    },
    {
      name: 'Meptik',
      logo: Meptik,
      link: "https://www.meptik.com"
    },
    {
      name: 'NEXT/NOW',
      logo: NextNow,
      link: "https://nextnowagency.com/"
    },
    {
      name: 'Psyop',
      logo: Psyop,
      link: "https://www.psyop.com/"
    },
    {
      name: 'Ravie',
      logo: Ravie,
      link: "https://www.ravie.co/"
    },
    {
      name: 'Sarofsky',
      logo: Sarofsky,
      link: "https://www.sarofsky.com/"
    },
    {
      name: 'Scholar',
      logo: Scholar,
      link: "https://www.helloscholar.com/"
    },
    {
      name: 'Sibling Rivalry',
      logo: SiblingRivalry,
      link: "https://siblingrivalry.com/"
    },
    {
      name: 'SMT Creative Studio',
      logo: Smt,
      link: "https://www.smt.com/"
    },
    {
      name: 'Snowday',
      logo: Snowday,
      link: "https://www.snowday.studio/"
    },
    {
      name: 'StateDesign',
      logo: State,
      link: "http://statedesign.tv"
    },
    {
      name: 'The Mill',
      logo: TheMill,
      link: "https://www.themill.com"
    },
    {
      name: 'The New Blank',
      logo: TheNewBlank,
      link: "https://thenewblank.com"
    },
    {
      name: 'Tencent',
      logo: Tencent,
      link: "https://www.lqstudios.com/"
    },
    {
      name: 'Trollbäck',
      logo: TrollBack,
      link: "https://trollback.com"
    },
    {
      name: 'Weber Shandwick',
      logo: WeberShandwick,
      link: "https://www.webershandwick.com/"
    }
  ]

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
          
          {
            companies.map((company) => {
              return(
                <Attendee name={company.name} logo={company.logo} link={company.link}/>
              )
            })
          }
        </div>
      </main>
      <Footer/>
    </Layout>
  )
}

export default AttendeesPage