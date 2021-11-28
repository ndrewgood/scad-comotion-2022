import * as React from "react"
import { Link } from 'gatsby'

import '../styles/nav.scss'

const Nav = ({context}) => {

    return (
        <nav className={"nav-container " + context}>
            <Link to="/">Home</Link>
            <div className="nav-right">
                <Link to="/">Schedule</Link>
                <Link to="/faq">FAQ</Link>
                <a href="https://society6.com/momelove">Store</a>
            </div>
        </nav>
    )
}

  
  export default Nav