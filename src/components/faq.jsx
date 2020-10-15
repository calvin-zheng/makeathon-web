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
                            The event which typically took place in person in the Duderstadt Center, will be hosted partially virtually this year if need be. Participants will be able to pick up materials from the Duderstadt Center and use the machinery on a reservation basis. We aim to host a public-health informed event and hence will have limited teams use the design space at once while rotating between teams at regular intervals.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">Where is Makeathon?</p>
                        <p className = "answer">
                            Makeathon is tentatively scheduled for February 5-7, 2021. The current location is to be determined based on COVID-19 safety guidelines from the University of Michigan.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">Who can participate in Makeathon?</p>
                        <p className = "answer">
                            Makeathon is open to all college students and all majors - not just the University of Michigan
                            - ranging from undergraduates to PhD. However, participants must be over the age of 18.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">How many people can be on a team?</p>
                        <p className = "answer">
                            Teams should be comprised of 2-6 people.
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
                            No worries! We are planning to match people into teams at the beginning of the event.
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
                            That being said, any useful files (CAD, code, etc.) and documentation is highly encouraged.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">How much does it cost for me to participate in Makeathon?</p>
                        <p className = "answer">
                            Makeathon is <b>FREE</b> for all participants. The event will encompass food, material, and tool costs.
                            However, teams from further away will be responsible for lodging and miscellaneous expenses.
                            If you have specific materials in mind, shoot us an email and we will do our best to facilitate.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">How long is Makeathon?</p>
                        <p className = "answer">
                            The event is continuous from <b>Friday, February 5th</b> through <b>Sunday, February 7th</b>.
                            Teams are free to go home and get some rest.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">What training do I need to participate in Makeathon?</p>
                        <p className = "answer">
                            There will be workshops leading up to the event - for updates, follow our <a href="https://www.facebook.com/mpoweredmakeathon" target="_blank">Facebook</a> page.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">What equipment will be available to use?</p>
                        <p className = "answer">
                            Check back later for updates on the equipment we will be providing.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">I’m not from UofM - Ann Arbor. What should I bring?</p>
                        <p className = "answer">
                            We’ll be sending out detailed info of what to bring, but it’ll basically be sleepover stuff - sleeping bag, a change of clothes, deodorant, etc.
                        </p>
                    </div>
                    <div className = "question-outer">
                        <p className = "question">I’m not from UofM - Ann Arbor. What should I bring?</p>
                        <p className = "answer">
                            We’ll be sending out detailed info of what to bring, but it’ll basically be sleepover stuff - sleeping bag, a change of clothes, deodorant, etc.
                        </p>
                    </div>

                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FAQ;
