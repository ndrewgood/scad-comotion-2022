import * as React from "react"
import Facebook from '../assets/svg/footer/fb.inline.svg'
import Instagram from '../assets/svg/footer/ig.inline.svg'
import MomeLove from '../assets/svg/footer/mome.png'
import CopyMailTo from "react-copy-mailto";
import Orange from "../assets/images/nav/navbg4.png"

import '../styles/footer.scss'

const Footer = () => {

    return (
        <footer>
            <div className="footer-container">
                <div className="contact">
                    <h3>Contact</h3>
                    <p>
                        For any questions about the event, email MOME Love Co-Presidents Alexandera Marca &amp; Kaleb Sweeney at <CopyMailTo defaultTooltip="Copy" copiedTooltip="Copied" tooltipStyles={{border: "solid 4px #CD6D2A", borderRadius: "0px", borderStyle: "outset", padding: "8px 20px", fontSize: "14px"}} email="momelove@clubs.scad.edu"/>. 
                    </p>
                </div>
                <div className="socialAndCopyright">
                    <ul className="socialLinks">
                        <a href="" target="_blank"><li>
                            <Instagram/>
                        </li></a>
                        <a href="" target="_blank"><li>
                            {/* <img src={MomeLove} alt="MOMELove logo"/> */}
                        </li></a>
                        <a href="" target="_blank"><li>
                            <Facebook/>
                        </li></a>
                    </ul>
                    <p>© MOMELove 2022</p>
                </div>
            </div>
        </footer>
    )
}

  
  export default Footer