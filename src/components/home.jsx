import React, {Component} from "react";
// import {Carousel} from 'react-responsive-carousel'
import "./home.css"
import makelogo from "./assets/make-dro.png"
import makebg from  "./assets/make-bg.mp4"
import makeicon from "./assets/makeathon-icon.png"
import about1 from "./assets/about-1.jpg"
import about2 from "./assets/about-2.jpg"
import about3 from "./assets/about-3.jpg"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import ReactDOM from 'react-dom'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <video
                    src={makebg}
                    autoPlay loop playsInline muted></video>

                <header className="viewport-header">
                    <img src={makelogo} alt="" />
                </header>

                <main>
                    <div className="about">
                        <div className = "header">
                            <img src={makeicon} alt="" />
                            <h1>Who We Are</h1>
                        </div>
                        <div className="images">
                            {/*<Carousel>*/}
                                <div>
                                    <img src={about1} alt="" />
                                </div>
                                <div>
                                    <img src={about2} alt="" />
                                </div>
                                <div>
                                    <img src={about3} alt="" />
                                </div>
                            {/*</Carousel>*/}
                        </div>
                        <p>Makeathon is a 36-hour long competition where students collaborate within interdisciplinary teams to design and create innovative projects. In the past, participants have created anything from Alexa integration with DoubleMap, an automatic sandwich maker, and even a miniature greenhouse.</p>
                        <p>With the help of our sponsors, we are able to provide students with a platform to innovate and give life to their ideas. During the competition, participants will have access to materials, machinery, as well as the opportunity to learn from industry-leading companies.</p>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
export default Home;
