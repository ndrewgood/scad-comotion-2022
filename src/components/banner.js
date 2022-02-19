import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import '../styles/banner.scss'

const Banner = ({imageData, title, specificClass}) => {



    return (
        <div className={specificClass ? "generalBanner " + specificClass : "generalBanner"}>
            <GatsbyImage image={imageData} alt={title} className="bannerImage"/>
            <h1>{title}</h1>
        </div>
    )
}

  
  export default Banner