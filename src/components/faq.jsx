import React, {Component} from "react";
import "./faq.css"

class FAQ extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="bg-image"></div>
                <div className="faq">
                    <h1>FAQ</h1>
                <div className = "questions">
                    <div className = "question-outer">
                        <p className = "question">What is Makeathon about?</p>
                        <p className = "answer">
                            Makeathon is a 36-Hour Prototyping and Design Competition held annually at the University of Michigan. We aim to bring together the University’s brightest and most creative students and give them the tools they need to build something truly amazing.
                        </p>
                    </div>

                    <div className = "question-outer">
                        <p className = "question">How is the event going to be affected due to COVID-19?</p>
                        <p className = "answer">
                            The event which typically took place in person in the Duderstadt Center, will be hosted virtually this year. Participants will be able to compete in either our CAD (Computer-Aided Design) Competition or our Open Product Design Competition. If your team chooses the Open Product Design Competition you will purchase your own materials that we will reimburse you up to $125.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">Where is Makeathon?</p>
                        <p className = "answer">
                            Makeathon is scheduled for February 5-7, 2021. The event will be held virtually this year.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">Who can participate in Makeathon?</p>
                        <p className = "answer">
                            Makeathon is open to all college students and all majors - from the University of Michigan
                            - ranging from undergraduates to PhD. However, participants must be over the age of 18.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">How many people can be on a team?</p>
                        <p className = "answer">
                            Teams should be comprised of 1-6 people.
                            Feel free to work with as many people as you are comfortable with in that range!
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">Can we register as a team?</p>
                        <p className = "answer">
                            You and all your teammates should register individually!
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">What if I don't have a team?</p>
                        <p className = "answer">
                            No worries! There will be a channel on Slack that you can use to meet and find team members!
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">I don't have an idea yet. What should I do?</p>
                        <p className = "answer">
                            Keep those creative juices flowing. If you still don’t have an idea at the time of the event,
                            our sponsoring partners will be on-board to help brainstorm and mentor projects.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">I’m a beginner. Should I still participate?</p>
                        <p className = "answer">
                            Don’t worry! We encourage people of all skill levels to come and learn! We have tons of mentors,
                            teachers, and experienced makers to help out. Our main goal is to provide resources and focus on
                            everyone learning something new at the weekend!
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">Should I be starting on my project right now?</p>
                        <p className = "answer">
                            Nope! In the spirit of Makeathon, we’re asking participants to avoid bringing projects that have already been started.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">How much does it cost for me to participate in Makeathon?</p>
                        <p className = "answer">
                            Makeathon is <b>FREE</b> for all participants. The event will encompass material costs.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">How long is Makeathon?</p>
                        <p className = "answer">
                            The event is continuous from <b>12 PM EST, Friday, February 5th</b> through <b>12 PM EST, Sunday, February 7th</b>. After the competition is complete, there will be judging from 12-4PM EST.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">What training do I need to participate in Makeathon?</p>
                        <p className = "answer">
                            There will be workshops leading up to the event - for updates, follow our <a href="https://www.facebook.com/mpoweredmakeathon">Facebook</a>, <a href="https://www.linkedin.com/in/mpowered-makeathon/">Linkedin</a>, and <a href="https://www.instagram.com/umichmakeathon/">Instagram</a> page.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">What equipment will be available to use?</p>
                        <p className = "answer">
                            Since this is a virtual event, you can use any tools and equipment that you own. Additionally, you are able to purchase another $125 worth of materials that we will reimburse you for, given that you present your project for judging.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">Can we purchase materials that cost more than the reimbursement amount and only get reimbursed for $125 worth? </p>
                        <p className = "answer">
                            To keep the competition as fair as possible we will have to limit the cost of your materials to $125.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">How do we get reimbursed for the materials we purchase?</p>
                        <p className = "answer">
                            After you present your product, we will ask for the total amount your team spent along with the receipts. We will then reimburse you accordingly.
                        </p>
                    </div>

                    <div className = "question-outer">
                        <p className = "question">What is the Fusion 360 Award and how do I compete for it?</p>
                        <p className = "answer">
                            The Fusion 360 Award is sponsored by Autodesk, who will be judging and presenting this award to the two teams at Makeathon that best utilize their Fusion 360 software. All teams that utilize the Fusion 360 Software in their product are eligible for this award.
                        </p>
                    </div>


                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FAQ;
