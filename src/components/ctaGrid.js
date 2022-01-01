import * as React from "react"
import { Link } from "gatsby"

import '../styles/ctaGrid.scss'

const CtaGrid = () => {

    return (
        <main className="ctaGrid">
            <div className="ctaGrid-container">
                {/* <Link to="/attendees" className="cta bg1"><p>Attendees Page</p></Link> */}
                <Link to="/faq" className="cta bg2"><p>FAQ Page</p></Link>
            </div>
        </main>
    )
}

  
  export default CtaGrid