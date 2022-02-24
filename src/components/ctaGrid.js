import * as React from "react"
import { Link } from "gatsby"

import '../styles/ctaGrid.scss'

const CtaGrid = () => {

    return (
        <main className="ctaGrid">
            <div className="ctaGrid-container">
                <Link to="/attendees" className="cta bg3"><p>Attendees Page</p></Link>
                <Link to="/livestream" className="cta bg1"><p>Livestream Page</p></Link>
                <Link to="/faq" className="cta bg2"><p>FAQ Page</p></Link>
                <Link to="/team" className="cta bg4"><p>Team Page</p></Link>
            </div>
            {/* <div className="ctaGrid-container oneitem">
                <Link to="/faq" className="cta bg2"><p>FAQ Page</p></Link>
            </div> */}

        </main>
    )
}

  
  export default CtaGrid