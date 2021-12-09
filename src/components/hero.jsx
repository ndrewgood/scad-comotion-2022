import React, { useState, useEffect } from "react"
import { useMousePosition } from "../util/useMousePosition"; 
import { useWindowSize } from '../util/useWindowDimensions';
import { useScrollPosition } from "../util/useScrollPosition";
import { v4 as uuidv4 } from 'uuid';


import '../styles/hero.scss'

import Logo from '../assets/images/still-logo.png'

// https://stackoverflow.com/questions/45363008/how-can-i-detect-when-video-finished-playing-react 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const Hero = () => {

    const delay = 1500;
    const mouse = useMousePosition();
    // console.log(mouse.x + ", " + mouse.y);
    const [shapeList, setShapeList] = useState([]);
    const scroll = useScrollPosition();
    const size = useWindowSize();
    // console.log(size.width + ", " + size.height);

    const handleMouseClick = () => {
        if(mouse.x < size.width - 30 && mouse.x > 30 && mouse.y > 30 && mouse.y < size.height - 30) {
            setShapeList([...shapeList, {x: mouse.x + scroll.x, y: mouse.y + scroll.y, key: uuidv4()}]);
        }

    }

    const [perspective, setPerspective] = useState(false);
    const [perspectiveFinished, setPerspectiveFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => setPerspective(true), delay);
        setTimeout(() => setPerspectiveFinished(true), delay + 1300);

    }, []);



    return (
        <main className="hero-container" onClick={() => handleMouseClick()}>
            <div className="hero-ball-container">
            {
                shapeList.map(shape => {
                    return <div key={shape.key} className="hero-ball" style={{top: shape.y + "px", left: shape.x + "px"}}></div>
                })
            }
            </div>
            <img src={Logo} alt="CoMotion 2022 Logo" className={perspective ? "hero-perspectiveImg" : ""} />
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