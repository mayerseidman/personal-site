import React from 'react'
import '../../assets/sass/about/about.scss';
import personalImg from '../../assets/images/misc/linkedIn.jpg';
import Chatbot from "./Chatbot";
import WebcamCapture from './WebcamCapture';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, imageSrc: "", currentView: "intro" };
    }

    setImage(stringSrc) {
        this.setState({ imageSrc: stringSrc, currentView: "chat" })
    }

    startChat() {
        if (this.state.imageSrc) {
            this.setState({ currentView: "chat" })
        } else {
            this.setState({ currentView: "bioPic" }) 
        }
    }

    changeView(view) {
        this.setState({ currentView: view })
    }
    
    render() {
        // if (this.state.isLoading) {
        //     return (
        //         <div className="aboutLoadingSection">
        //             <CircularProgress className="" size={ 100 }/>
        //         </div>
        //     )
        // } else {}
            if (this.state.currentView === "intro") {
                var pageContent = (
                    <div className="introContainer">
                        <p>
                            Hi there again! <br/>
                            Feel free to use the chatbot or the links to learn more about me. <br/><br/><span className="tldr">TLDR</span>: I love learning, connecting with others, and the Teenage Mutant Ninja Turtles.
                        </p> 
                        <div className="bottomContainer">
                            <button className="chatButton" onClick={ this.startChat.bind(this) }>Let's Chat</button>
                            <p>Don't worry, this bot won't bite.</p>
                        </div>
                    </div>
                )
            } else if (this.state.currentView === "bioPic") {
                var pageContainer = (
                    <div className="chatSection">
                        <WebcamCapture setImage={ this.setImage.bind(this) } />    
                    </div>
                )
            } else if (this.state.currentView === "chat") {
                var pageContainer = (
                     <div className="topContainer">
                        <Chatbot imageSrc={ this.state.imageSrc } revertDisplay={ this.changeView.bind(this, "intro") } />   
                     </div>
                )
            } else if (this.state.currentView === "hobbies") {
                var pageContent = (
                    <div className="textContainer hobbiesContainer">
                        <div className="innerTextContainer">
                            <p>
                                <span className="bold" role="img" aria-label="Reading">📚 Reading </span>
                                I love diving into a great book. My favourite book genre is non-fiction. I am currently reading The Death and Life of Great American Cities by Jane Jacobs; its about urban and city design.
                                <br/><span className="bold smBold">Favourite Book</span>: Great Expectations by Charles Dickens
                            </p>
                            <p>
                                <span className="bold" role="img" aria-label="Languages">🗣️ Languages </span>Learning languages is always a challenge and also helps me connect with others (especially while traveling).
                                In order of fluency, I speak: English, Hebrew, German, Spanish.
                                My name is actually a Hebrew name as well (it means 'to illuminate').
                                <br/><span className="bold smBold">Favourite Language</span>: Hebrew
                            </p> 
                            <p>
                                <span className="bold" role="img" aria-label="Music">📻 Music </span>
                                I really enjoy the nuances and the details of mixing music. Interested? Feel free to check out my <a className="regularLink" href="https://www.mixcloud.com/mayer-seidman/" target="_blank" rel="noopener noreferrer">Mixcloud</a>.
                                <br/><span className="bold smBold">Favourite Band</span>: Outkast
                            </p>
                        </div>   
                    </div>
                )
            } else if (this.state.currentView === "skills") {
                var pageContent = (
                    <div className="textContainer skillsContainer">
                        <div className="innerTextContainer">
                            <p>
                                <span className="bold" role="img" aria-label="Design">🗂️ Design </span>
                                I have been involved in almost every aspect of design; UX Research, UX Strategy, Lo-fi and Hi-fi Mockups, Copy Writing, User Testing, Design (internal) Critiques, and Email Marketing/AB Testing.
                            </p>
                            <p>As a lead designer I have often done the role of design education from within our team. I have given design talks and breakdowns to non-technical colleagues-helping them understand from a design perspective the product decisions made.</p>
                            <p>
                                <span className="bold" role="img" aria-label="Coding">💻Coding </span>
                                Whether for work or for pleasure I have a lot of experience coding. On the front end, I have experience coding in Javascript (mostly REACT) and CSS. On the back end, I have experience in Ruby and Swift.
                            </p>
                        </div>   
                    </div>
                )
            } else if (this.state.currentView === "journey") {
                var pageContent = (
                    <div className="textContainer journeyContainer">
                        <div className="innerTextContainer">
                            <p>
                                <span className="bold" role="img" aria-label="Journey">🛣️ Journey </span>
                                I got my bachelors in Talmudic Law (I'm totally down to chat with you about this or feel free to <a href="https://lmgtfy.com/?q=what+is+talmudic+law" target="_blank" rel="noopener noreferrer">google it</a>) and then an MBA.
                                Wanting to gain tech skills, I attended a coding bootcamp in Austin, Texas. I left with solid programming skills and an excitement for technology.
                            </p>
                            <p>
                                I got a job as the first technical (non founding) employee at a small startup in San Diego, where I was fortunate to be exposed to all aspects of a company, including design. I fell in love with design and grew into the team design lead.
                            </p>
                            <p>
                                I started working remotely a few years ago. It enabled me to travel the world (literally) and to settle down in beautiful Vancouver, Canada.
                                I am now currently the UI/UX design lead at an Ed-Tech company.
                            </p>
                        </div>   
                    </div>
                )
            }
            if (this.state.currentView === "hobbies" || this.state.currentView === "skills" || this.state.currentView === "journey" || this.state.currentView === "intro") {
                var image = <img className="img" src={ personalImg } alt="profile"/>
                var linksContainer = (
                    <div className="linksContainer">
                        <a className={ this.state.currentView === "hobbies" ? "selected" : "" } onClick={ this.changeView.bind(this, "hobbies") }>Hobbies</a>
                        <a className={ this.state.currentView === "skills" ? "selected" : "" } onClick={ this.changeView.bind(this, "skills") }>Skills</a>
                        <a className={ this.state.currentView === "journey" ? "selected" : "" } onClick={ this.changeView.bind(this, "journey") }>Journey</a>
                        <a className={ this.state.currentView === "chat" ? "selected" : "" } onClick={ this.startChat.bind(this) }>Chat</a>
                    </div>    
                )
                var pageContainer = (
                    <div className="aboutSection fadeInBottom">
                        <div className="topContainer">
                            { linksContainer }
                            <div className="imageContainer">{ image }</div>
                        </div>
                        { pageContent }
                    </div>
                )
            }
        return (
            <div>{ pageContainer }</div>
        )
    }    
}

// <a className={ this.state.currentView == "chat" || this.state.currentView == "intro" ? "selected" : "" } onClick={ this.changeView.bind(this, "intro") }>Chat</a>

export default About