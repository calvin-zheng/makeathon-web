import React, {Component} from "react";
// import {Carousel} from 'react-responsive-carousel'
import "./workshop.css"
import fusionFlyer from "./assets/fusion360.png"
// import makelogo from "./assets/make-dro.png"
// import makebg from  "./assets/make-bg.mp4"
// import makeicon from "./assets/makeathon-icon.png"
// import about1 from "./assets/about-1.jpg"
// import about2 from "./assets/about-2.jpg"
// import about3 from "./assets/about-3.jpg"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import ReactDOM from 'react-dom'

class Workshop extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="event">
                    <img src={fusionFlyer}  alt={"makeathon" +
                    " logo"} style={{marginBottom: "0", width: '30%'}}/>
                    <p style={{width: '40%', fontSize: '24px', marginBottom: '0'}}> Fusion 360 is the world’s first cloud-based 3D CAD, CAM, and CAE platform. It allows teams to work virtually anywhere, with anyone. Fusion 360 is compatible with Macs and PCs.</p>
                    <p style={{width: '40%', fontSize: '24px'}}> Here are the links to the workshops (<a href="https://umich.zoom.us/rec/share/wj2iY24Ef5geLN9_Mc_Ce4wNv8CSQH7PuqY3toRxB_G8SNF-bhgA8aS9oJnRxKQs.1SLhbAFh25IM-G3A">Zoom Workshop</a> and <a href="https://youtu.be/r9SrPiM9m0s"> Generative Design Autodesk Workshop </a>) </p>
                </div>
            </React.Fragment>
        )
    }
}
export default Workshop;
