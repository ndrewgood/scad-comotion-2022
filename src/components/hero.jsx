import React, { useState, useEffect } from "react"
import { useMousePosition } from "../util/useMousePosition"; 
import { useWindowSize } from '../util/useWindowDimensions';
import { useScrollPosition } from "../util/useScrollPosition";
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../styles/hero.scss'

import Logo from '../assets/images/still-logo.png'
import LogoAnimation from '../assets/videos/logoAnimation_final2.mp4'

// https://stackoverflow.com/questions/45363008/how-can-i-detect-when-video-finished-playing-react 

// Global Variables
const delay1 = 1500;
const delay2 = 1300;


// (ik two randomInt functions is chaotic, don't judge..)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

const Balls = () => {

    const shapeNum = 16
    const posLimit = 30
    const variations = ["circle1", "circle2", "circle3"]
    const duration = 300;

    const mouse = useMousePosition();
    const [shapeList, setShapeList] = useState([]);
    const [count, setCount] = useState(0);
    const [varList, setVarList] = useState([...variations]);
    const scroll = useScrollPosition();
    const size = useWindowSize();

    const [perspectiveFinished, setPerspectiveFinished] = useState(false);

    const shapeSections = [
        {x: getRandomInt2(0, size.width/3),
         y: getRandomInt2(0, (size.height-80)/3)
        },
        {x: getRandomInt2(size.width/3, (size.width/3)*2),
        y: getRandomInt2(0, (size.height-80)/3)
        },
        {x: getRandomInt2((size.width/3)*2, size.width),
        y: getRandomInt2(0, (size.height-80)/3)
        },
        {x: getRandomInt2((size.width/3)*2, size.width),
        y: getRandomInt2((size.height-80)/3, ((size.height-80)/3)*2)
        },
        {x: getRandomInt2((size.width/3)*2, size.width),
        y: getRandomInt2(((size.height-80)/3)*2, (size.height-80))
        },
        {x: getRandomInt2(size.width/3, (size.width/3)*2),
        y: getRandomInt2(((size.height-80)/3)*2, (size.height-80))
        },
        {x: getRandomInt2(0, size.width/3),
        y: getRandomInt2(((size.height-80)/3)*2, (size.height-80))
        },
        {x: getRandomInt2(0, size.width/3),
        y: getRandomInt2((size.height-80)/3, ((size.height-80)/3)*2)
        },
        {x: getRandomInt2(size.width/3, (size.width/3)*2),
        y: getRandomInt2(0, (size.height-80)/3)
        },
        {x: getRandomInt2((size.width/3)*2, size.width),
        y: getRandomInt2((size.height-80)/3, ((size.height-80)/3)*2)
        },
        {x: getRandomInt2(size.width/3, (size.width/3)*2),
        y: getRandomInt2(((size.height-80)/3)*2, (size.height-80))
        },
        {x: getRandomInt2(0, size.width/3),
        y: getRandomInt2((size.height-80)/3, ((size.height-80)/3)*2)
        },
    ]


    const transitionStyles = {
        entering: { backgroundColor: "red" },
        entered:  { backgroundColor: "blue" },
        exiting:  { backgroundColor: "green" },
        exited:  { backgroundColor: "yellow" },
    };
      

    const addBall = (fromMouseClick, section) => {
        if (fromMouseClick) {
            if(mouse.x < size.width - posLimit && mouse.x > posLimit && mouse.y > posLimit && mouse.y < size.height - posLimit) {
                let arr;
                if (varList.length == 0) {
                    arr = [...variations]
                } else {
                    arr = [...varList]
                }
                let rand = getRandomInt(arr.length - 1)
                let randVar = arr[rand];
                arr.splice(rand, 1)
                setVarList([...arr]);
                if (shapeList.length >= shapeNum) {
                    let arr = [...shapeList];
                    arr.shift();
                    setShapeList([...arr, {x: mouse.x + scroll.x, y: mouse.y + scroll.y, key: uuidv4(), var: randVar, width: size.width, height: size.height}]);
                } else {
                    setShapeList([...shapeList, {x: mouse.x + scroll.x, y: mouse.y + scroll.y, key: uuidv4(), var: randVar, width: size.width, height: size.height}]);
                }
            }
        } else {
            let arr;
            if (varList.length == 0) {
                arr = [...variations]
            } else {
                arr = [...varList]
            }
            let rand = getRandomInt(arr.length - 1)
            let randVar = arr[rand];
            arr.splice(rand, 1)
            setVarList([...arr]);
            setShapeList([...shapeList, {x: section.x, y: section.y, key: uuidv4(), var: randVar, width: size.width, height: size.height}]);
        }

    }

    const clearArray = () => {
        if(shapeList.length !== 0){
            setShapeList([]);
        }
    }

 
    useEffect(() => {
        // window.addEventListener("resize", clearArray);
        // return () => window.removeEventListener("resize", clearArray);
        // setTimeout(() => addBallEffect(), delay1 + delay2);
        // const timeout = setTimeout(() => {
        //     addBall(false);
        //   }, 3000);
      
        // return () => clearTimeout(timeout);
        setTimeout(() => setPerspectiveFinished(true), delay1 + delay2);


        let interval = null;
        if (perspectiveFinished && count < 12) {
          interval = setInterval(() => {
            setCount(count => count + 1);
            addBall(false, shapeSections[count]);
          }, 200);
        } else {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
    
    }, [count, shapeList, perspectiveFinished])


    return (
        <TransitionGroup className="hero-ball-container" onClick={() => {addBall(true)}}>
                {
                    shapeList.map(shape => {
                        let x = (shape.x / shape.width) * 100;
                        let y = (shape.y / shape.height) * 100;

                        //cheeky lil pythagoras theorem moment here
                        var a = Math.abs(x - 50);
                        var b = Math.abs(y - 45);
                        var c = Math.sqrt( (a * a)*2 + ((b * b)*3) );
                        let val = map_range(Math.floor(c), 0, 100, 0, 250);
                        let z = Math.floor(200 + val);
                        let zString = z.toString();

                        return (
                            <CSSTransition key={shape.key} timeout={500} classNames="ball">
                                <div key={shape.key} className={"hero-ball " + shape.var} 
                                    style={{
                                        top: y + "vh", 
                                        left: x + "vw", 
                                        width: val + "px", 
                                        height: val + "px",
                                        zIndex: zString
                                    }}></div>
                            </CSSTransition>
                        )
                    })
                }
        </TransitionGroup>    
    )
}

const Hero = () => {



    const [perspective, setPerspective] = useState(false);

    return (
        <main className="hero-container">
            <Balls />

            {/* <img src={Logo} alt="CoMotion 2022 Logo" className={perspective ? "hero-perspectiveImg" : ""} /> */}
            <div className="hero-background">
                <div className="hero-top"></div>
                <div className="hero-right"></div>
                <div className="hero-bottom"></div>
                <div className="hero-left"></div>
            </div>
            <div className={perspective ? "hero-back hero-perspectiveBack" : "hero-back"}></div>
            <video autoPlay muted className={perspective ? "hero-perspectiveVideo" : ""} onEnded={() => setPerspective(true)}>
                <source src={LogoAnimation}  type="video/mp4" />
            </video>
            <div className={perspective ? "hero-backbg hero-perspectiveBack" : "hero-backbg"}></div>

        </main>
    )
}

  
  export default Hero