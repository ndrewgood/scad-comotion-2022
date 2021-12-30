import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';

import '../styles/nav.scss'

import Logo from '../assets/images/still-logo.png'


const Nav = ({context}) => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return function cleanup() {
            window.removeEventListener("scroll", handleScroll)
        };
    });


    const handleScroll = () => {
        var mainBounding = document.querySelector('nav').getBoundingClientRect();

        if (mainBounding.top <= 0) {
            if(!sticky){
                setSticky(true);
            }
        } else {
            if(sticky){
                setSticky(false);
            }
        }
    }


    return (
        <nav className={sticky ?  "sticky": null}>
            <div className={sticky ? "nav-container sticky " + context : "nav-container " + context}>
                <div className={sticky ?  "homeLink": "homeLink hidden"}>
                    <Link to="/">
                        <img src={Logo} alt="Comotion 2022 logo"/>
                    </Link>
                </div>
                <div className="nav-right">
                    <div className="wall">
                        <div className="leftWall"></div>
                    </div>
                    <Link className="box bring-forward pattern-1" to="/#schedule">
                        <div className="box__face box__face--front">Schedule</div>
                        <div className="box__face box__face--back"></div>
                        <div className="box__face box__face--right"></div>
                        <div className="box__face box__face--left"></div>
                        <div className="box__face box__face--top">Schedule</div>
                        <div className="box__face box__face--bottom"></div>
                    </Link>
                    <Link className="box bring-forward pattern-2" to="/faq">
                        <div className="box__face box__face--front">FAQ</div>
                        <div className="box__face box__face--back"></div>
                        <div className="box__face box__face--right"></div>
                        <div className="box__face box__face--left"></div>
                        <div className="box__face box__face--top">FAQ</div>
                        <div className="box__face box__face--bottom"></div>
                    </Link>
                    <a className="box bring-back pattern-3" href="https://society6.com/momelove">
                        <div className="box__face box__face--front">Store</div>
                        <div className="box__face box__face--back"></div>
                        <div className="box__face box__face--right"></div>
                        <div className="box__face box__face--left"></div>
                        <div className="box__face box__face--top">Store</div>
                        <div className="box__face box__face--bottom"></div>
                    </a>
                    <div className="wall">
                        <div className="rightWall"></div>
                    </div>
                    {/* <Link to="/">Schedule</Link>
                    <Link to="/faq">FAQ</Link>
                    <a href="https://society6.com/momelove">Store</a> */}
                </div>
            </div>
        </nav>

        // <nav className={"nav-container " + context}>
        //     <Link to="/">Home</Link>
        //     <div className="nav-right">
        //         <Link to="/">Schedule</Link>
        //         <Link to="/faq">FAQ</Link>
        //         <a href="https://society6.com/momelove">Store</a>
        //     </div>
        // </nav>
    )
}

  
  export default Nav