import * as React from "react"
import { Link } from 'gatsby'

import '../styles/nav.scss'

const Nav = ({context}) => {

    return (
        <nav className={"nav-container " + context}>
            <Link to="/">Home</Link>
            <div className="nav-right">
                <div className="wall">
                    <div className="leftWall"></div>
                </div>
                <Link className="box bring-forward" to="/">
                    <div className="box__face box__face--front">link</div>
                    <div className="box__face box__face--back"></div>
                    <div className="box__face box__face--right"></div>
                    <div className="box__face box__face--left"></div>
                    <div className="box__face box__face--top"></div>
                    <div className="box__face box__face--bottom"></div>
                </Link>
                <Link className="box bring-forward" to="/">
                    <div className="box__face box__face--front">link</div>
                    <div className="box__face box__face--back"></div>
                    <div className="box__face box__face--right"></div>
                    <div className="box__face box__face--left"></div>
                    <div className="box__face box__face--top"></div>
                    <div className="box__face box__face--bottom"></div>
                </Link>
                <Link className="box bring-back" to="/">
                    <div className="box__face box__face--front">link</div>
                    <div className="box__face box__face--back"></div>
                    <div className="box__face box__face--right"></div>
                    <div className="box__face box__face--left"></div>
                    <div className="box__face box__face--top"></div>
                    <div className="box__face box__face--bottom"></div>
                </Link>
                <div className="wall">
                    <div className="rightWall"></div>
                </div>
                {/* <Link to="/">Schedule</Link>
                <Link to="/faq">FAQ</Link>
                <a href="https://society6.com/momelove">Store</a> */}
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