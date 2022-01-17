import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Sling as Hamburger } from 'hamburger-react'
import { Transition } from 'react-transition-group';

import '../styles/mobileNav.scss'

import Logo from '../assets/images/still-logo.png'

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
//   opacity: 0,
  transform: "translateY(-320px)"
}

const transitionStyles = {
  entering: { 
    //   opacity: 1,
      transform: "translateY(0px)" 
    },
  entered:  { 
    //   opacity: 1, 
      transform: "translateY(0px)"
    },
  exiting:  { 
    //   opacity: 0,
      transform: "translateY(-320px)" 
    },
  exited:  { 
    //   opacity: 0,
      transform: "translateY(-320px)"
    },
};

const MobileNav = ({context}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <nav className="mobileNav">
                <Link to="/" className='logoLink'>
                    <img src={Logo} alt="Comotion 2022 logo"/>
                </Link>
                <div className='hamburger-holder'>
                    <Hamburger
                        rounded 
                        size={24}
                        toggled={isOpen} 
                        toggle={setOpen} />
                </div>
            </nav>
            <Transition 
                in={isOpen}
                timeout={duration} >
                {state => (
                    <ul className="navItems" style={{ ...defaultStyle, ...transitionStyles[state]}}>
                        <Link to="/#schedule"><li className='first'>Schedule</li></Link>
                        <Link to="/panels"><li className='second'>Panels</li></Link>
                        <Link to="/faq"><li className='third'>FAQ</li></Link>
                        <a href="https://society6.com/momelove"><li className='fourth'>Store</li></a>
                    </ul>
                )}
            </Transition>   
        </>
    )
}

export default MobileNav