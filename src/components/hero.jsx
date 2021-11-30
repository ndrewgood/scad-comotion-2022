import * as React from "react"

import '../styles/hero.scss'

const Hero = () => {

    return (
        <main className="hero-container">
            <div className="hero-background">
                <div className="hero-top"></div>
                <div className="hero-right"></div>
                <div className="hero-bottom"></div>
                <div className="hero-left"></div>
            </div>
            <div className="hero-back"></div>
        </main>
    )
}

  
  export default Hero