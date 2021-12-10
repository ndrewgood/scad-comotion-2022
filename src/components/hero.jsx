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
    const shapeNum = 16
    const posLimit = 30
    const variations = ["circle1", "circle2", "circle3"]
    
    const mouse = useMousePosition();
    const [shapeList, setShapeList] = useState([]);
    const [varList, setVarList] = useState([...variations]);
    const scroll = useScrollPosition();
    const size = useWindowSize();

    const handleMouseClick = () => {
        if(mouse.x < size.width - posLimit && mouse.x > posLimit && mouse.y > posLimit && mouse.y < size.height - posLimit) {
            let arr;
            if (varList.length == 0) {
                arr = [...variations]
            } else {
                arr = [...varList]
            }
            let rand = getRandomInt(arr.length - 1)
            let randVar = arr[rand];
            console.log(rand);
            arr.splice(rand, 1)
            setVarList([...arr]);
            if (shapeList.length >= shapeNum) {
                let arr = [...shapeList];
                arr.shift();
                setShapeList([...arr, {x: mouse.x + scroll.x, y: mouse.y + scroll.y, key: uuidv4(), var: randVar}]);
            } else {
                setShapeList([...shapeList, {x: mouse.x + scroll.x, y: mouse.y + scroll.y, key: uuidv4(), var: randVar}]);
            }
        }
        // console.log(shapeList);

    }
    
    const clearArray = () => {
        if(shapeList.length !== 0){
            setShapeList([]);
        }
    }

    const [perspective, setPerspective] = useState(false);
    const [perspectiveFinished, setPerspectiveFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => setPerspective(true), delay);
        setTimeout(() => setPerspectiveFinished(true), delay + 1300);
        window.addEventListener("resize", clearArray);
        return () => window.removeEventListener("resize", clearArray);
    });



    return (
        <main className="hero-container" onClick={() => handleMouseClick()}>
            <div className="hero-ball-container">
            {
                shapeList.map(shape => {
                    //cheeky lil pythagoras theorem moment here
                    var a = shape.x - size.width/2;
                    var b = shape.y - size.height/2;
                    var c = Math.sqrt( a * a + ((b * b)*3) );
                    let val = c / 4;
                    let z = Math.floor(200 + val);
                    let zString = z.toString();
                    return <div key={shape.key} className={"hero-ball " + shape.var} 
                                style={{
                                    top: shape.y + "px", 
                                    left: shape.x + "px", 
                                    width: val + "px", 
                                    height: val + "px",
                                    zIndex: zString
                                }}></div>
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