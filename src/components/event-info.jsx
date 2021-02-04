import React, {Component} from "react";
// import {Carousel} from 'react-responsive-carousel'
import "./event-info.css"
// import makelogo from "./assets/make-dro.png"
// import makebg from  "./assets/make-bg.mp4"
import makeicon from "./assets/makeathon-icon.png"
// import about1 from "./assets/about-1.jpg"
// import about2 from "./assets/about-2.jpg"
// import about3 from "./assets/about-3.jpg"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import ReactDOM from 'react-dom'

class EventInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="event">
                    <img src={makeicon} className="heading-image" alt={"makeathon" +
                    " logo"} />
                    <h1>Makeathon 2021</h1>
                    <h2>February 5-7, 2021</h2>
                    <div className="competition">
                        <h3 className="competition-header">Two Competitions</h3>
                        <div className="flex-row" style={{width: '50%'}}>
                            <div className="flex-col" style={{width: '45%'}}>
                                <h4>CAD (Computer-Aided Design)</h4>
                                <p>The CAD Competition gives teams the opportunity to design a product using the CAD software and present it to the judges. Teams will have access to CAD tutorials and mentors throughout the competition. Feel free to be as creative as you’d like while building your product or simulation. Strive for a complex yet elegant design, with a focus on manufacturability.
                                </p>
                                 <p>   The goal of this competition is to create an innovative product that solves some problem or serves a purpose. You will create this product in CAD and try to make it as realistic and well constructed as possible. There are no limitations to this competition except that whatever product you make should be made in CAD.
                                </p>
                            </div>
                            <div className="flex-col" style={{width: '45%'}}>
                                <h4>Open Product Design</h4>
                                <p>The OpenProduct Design Competition gives teams the freedom to design and build a physical product without any restrictions. This year, participants can purchase materials on their own that we will reimburse up to $125.</p>

                                <p>The goal of this competition is to create an innovative product that solves some problem or serves a purpose. This product must be physically constructed, but the materials you use are up to you. Materials can be anything from Arduinos and Raspberry Pis to wood planks and metal sheets. The only limitation is the $125 we will reimburse.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="competition">
                        <h3 className="competition-header">Prizes and Judging Criteria</h3>
                        <div className="flex-row" style={{width: '50%'}}>
                            <div className="flex-col" style={{width: '45%'}}>
                                <h4>CAD (Computer-Aided Design)</h4>
                                <p style={{margin: '5px'}}><a href="https://drive.google.com/file/d/1XNbX0k3qZ_hDmMfIslgdP0LiMupSL4Xv/view?usp=sharing"><i>Judging Rubric</i></a>.</p>
                                <div className="bullets">
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p>1st: $700</p>
                                    </div>
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p>2nd: $300</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col" style={{width: '45%'}}>
                                <h4>Open Product Design</h4>
                                <p style={{margin: '5px'}}><a href="https://drive.google.com/file/d/1nVU8fW6mJxjzcjBR5zGVjl-aedR18sHZ/view?usp=sharing"><i>Judging Rubric</i></a>.</p>
                                <div className="bullets">
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p>1st: $700</p>
                                    </div>
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p>2nd: $300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="flex-col" style={{width: '25%'}}>
                            <h4>Autodesk Fusion 360 Award</h4>
                            <p style={{margin: '5px'}}>This is an award given to the two teams that utilize Fusion 360 software the best. You can enter into this award by using Fusion 360 in either competition. If you use Fusion 360, we recommend considering the criteria of your competitions’ rubric along with the criteria of the Fusion 360 award.
                                You can find the judging rubric  <a href="https://docs.google.com/document/d/1yCTgJZe65scYPJXNgOvdxfqZDjuE1Gqg9S3X_iwQmFI/edit?usp=sharing"><i>here</i></a>.</p>
                            <div className="bullets">
                                <div className="makebullet">
                                    <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                    <p>1st: $700</p>
                                </div>
                                <div className="makebullet">
                                    <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                    <p>2nd: $300</p>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className="competition">
                        <h3 className="competition-header-1 competition-header">Event Schedule</h3>
                        <div className="flex-col" style={{width: '80%'}}>
                            <p> All times listed in are in EST </p>
                            <div className="flex-row">
                                <div className="bullets">
                                    <h4>Friday, February 5th</h4>
                                    <hr />
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>12PM-1PM:</b> Opening Ceremony</p>
                                    </div>
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>1PM-7PM:</b> Build Time</p>
                                    </div>
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>7PM-8PM:</b> Autodesk Office Hours</p>
                                    </div>
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>8PM-11:59PM:</b> Build Time</p>
                                    </div>
                                </div>
                                <div className="bullets">
                                    <h4>Saturday, February 6th</h4>
                                    <hr />
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>12AM-10AM:</b> Build Time</p>
                                    </div>
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>10AM-12PM:</b> Autodesk Office Hours</p>
                                    </div>
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>12PM-3PM:</b> Build Time</p>
                                    </div>
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>3PM-5PM</b> Autodesk Office Hours</p>
                                    </div>
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>5PM-11:59PM</b> Autodesk Office Hours</p>
                                    </div>
                                </div>
                                <div className="bullets">
                                    <h4>Sunday, February 7th</h4>
                                    <hr />
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>12AM-11PM:</b> Build Time</p>
                                    </div>
                                    <div className="makebullet">
                                        <img src={makeicon} className="makebulletimg" alt="makeathon logo bullet"/>
                                        <p><b>12PM-4PM:</b> Judging</p>
                                    </div>
                                </div>
                            </div>
                            </div>

                        <br />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default EventInfo;
