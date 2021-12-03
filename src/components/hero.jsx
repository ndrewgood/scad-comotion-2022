import React, { useState, useEffect } from "react"

import '../styles/hero.scss'

const Hero = () => {

    const [perspective, setPerspective] = useState(false);

    useEffect(() => {
        setTimeout(() => setPerspective(true), 1500);
      });

    return (
        <main className="hero-container">
            <p className={perspective ? "hero-perspectiveP" : ""}>(Logo Animation)</p>
            <div className="hero-background">
                <div className="hero-top"></div>
                <div className="hero-right"></div>
                <div className="hero-bottom"></div>
                <div className="hero-left"></div>
            </div>
            <div className={perspective ? "hero-back hero-perspectiveBack" : "hero-back"}></div>
        </main>
    )
}

  
  export default Hero