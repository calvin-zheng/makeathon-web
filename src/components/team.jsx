import React, {Component} from "react";
import makebg from "./assets/make-bg.mp4";
import makelogo from "./assets/make-dro.png";
import makeicon from "./assets/makeathon-icon.png";
import dharivi from "./assets/Dharivi.jpg";
import tajes from "./assets/Tajes-Khanna.jpg";
import nathan from "./assets/nathan-tsiang.jpg";
import ethan from "./assets/ethan-deguire.png";
import ellen from "./assets/ellen-li.jpg";
import devansh from './assets/devansh.jpg';
import tanushree from './assets/Tanushree.jpg';
import vinnie from './assets/vinnie-larrson.jpeg';

import "./team.css"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="team">
                    <h1>OUR TEAM</h1>
                    <p>Meet the People of Makeathon!</p>
                    <div className="directors">
                        {/*<div className="director">*/}
                        {/*    <img src={dharivi} alt="Dharivi" />*/}
                        {/*    <p className="name"> Dharivi Bansal </p>*/}
                        {/*    <p classname="blurb">*/}
                        {/*        I am a rising sophomore in Computer Engineering with an interest in an Entrepreneurship minor. Outside of MPowered Entrepreneurship, I am involved in Michigan Neuroprosthetics and am on the International Center Student Council.*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div className="director">
                            <img src={dharivi} alt="Dharivi"/>
                            <img className="makeicon" src={makeicon} alt={makeicon} />
                            <p className="name"> Dharivi Bansal </p>
                            <p className="title">Director of Makeathon</p>
                            <p className="blurb">
                                I am a sophomore in Computer Engineering
                                with an interest in an Entrepreneurship minor.
                                Outside of MPowered Entrepreneurship, I am
                                involved in Michigan Neuroprosthetics and am on
                                the International Center Student Council.
                            </p>
                        </div>
                        <div className="director">
                            <img src={tajes} alt="Tajes"/>
                            <img className="makeicon" src={makeicon} alt={makeicon} />
                            <p className="name"> Tajes Khanna </p>
                            <p className="title">Director of Makeathon</p>
                            <p className="blurb">
                                I am a sophomore studying Computer Science and I am also interested in a finance minor. Outside of MPowered, I am involved in numerous computer science clubs including Michigan Hackers.
                            </p>
                        </div>
                    </div>
                    <h2>Talent Members</h2>
                    <div className="talents-1">
                        <div className="talent">
                            <img src={nathan} alt="Nathan"/>
                            <img className="makeicon" src={makeicon} alt={makeicon} />
                            <p className="name"> Nathan Tsiang </p>
                        </div>
                        <div className="talent">
                            <img src={ethan} alt="Ethan"/>
                            <img className="makeicon" src={makeicon} alt={makeicon} />
                            <p className="name"> Ethan Deguire </p>
                        </div>
                        <div className="talent">
                            <img src={ellen} alt="Ellen"/>
                            <img className="makeicon" src={makeicon} alt={makeicon} />
                            <p className="name"> Ellen Li </p>
                        </div>

                    </div>
                    <div className="talents-1">
                        <div className="talent">
                            <img src={devansh} alt="Devansh"/>
                            <img className="makeicon" src={makeicon} alt={makeicon} />
                            <p className="name"> Devansh Kohli </p>
                        </div>
                        <div className="talent">
                            <img src={tanushree} alt="Tanushree"/>
                            <img className="makeicon" src={makeicon} alt={makeicon} />
                            <p className="name"> Tanushree Parasramka </p>
                        </div>
                        <div className="talent">
                            <img src={vinnie} alt="Ethan"/>
                            <img className="makeicon" src={makeicon} alt={makeicon} />
                            <p className="name"> Vinnie Larrson </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
export default Home;
