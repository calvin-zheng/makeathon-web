import React, {Component} from "react";
import "./navbar.css"
import makeBanner from "./assets/makeathon-splash-logo-transparent.png"
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.forceUpdate = this.forceUpdate.bind(this);
    }
    render() {
        return (
            <React.Fragment>
                <nav className = "navbar">
                    <div className = "nav-items">
                        <img src={makeBanner} id="banner" alt=''/>
                        <ul>
                            {/*<li>APPLY</li>*/}
                            <li><Link to ="/faq">FAQ</Link></li>
                            {/*<li>SPONSORS</li>*/}
                            <li><Link to ="/team">OUR TEAM</Link></li>
                            <li><Link to ="/">ABOUT</Link></li>
                        </ul>
                    </div>
                </nav>

            </React.Fragment>
        )
    }
}

export default NavBar;
