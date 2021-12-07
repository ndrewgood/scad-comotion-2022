import * as React from "react"
import { Link } from 'gatsby'

import '../styles/nav.scss'

const Nav = ({context}) => {

    return (
        <nav className={"nav-container " + context}>
            <Link to="/">Home</Link>
            <div className="nav-right">

            <div class="box show-front">
                <div class="box__face box__face--front">Link</div>
                <div class="box__face box__face--back"></div>
                <div class="box__face box__face--right"></div>
                <div class="box__face box__face--left"></div>
                <div class="box__face box__face--top"></div>
                <div class="box__face box__face--bottom"></div>
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