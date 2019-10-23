import React from 'react'
import './About.scss';
import personalImg from './linkedIn.jpg';
import CircularProgress from '@material-ui/core/CircularProgress'
import Chatbot from "./Chatbot";
import Webcam from "react-webcam";
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
        this.setState({ currentView: "bioPic" })
    }
    
    componentDidMount() {
        setTimeout(
            function() {
             this.setState({ isLoading: false });
            }.bind(this),
           800
        );
    }
    render() {
        if (this.state.isLoading) {
            return (
                <div className="aboutLoadingSection">
                    <CircularProgress className="" size={ 100 }/>
                </div>
            )
        } else {
            if (this.state.currentView == "intro") {
                var pageContent = (
                    <div className="aboutSection">
                        <div className="topContainer">
                            <a>Link One</a><a>Link Two</a>
                            <img className="img" src={ personalImg } alt="profile"/>
                        </div>
                        <div className="textContainer">
                            <div className="innerTextContainer">
                                <p>
                                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                                </p>
                                <p>
                                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                                </p> 
                            </div>   
                        </div>
                        <div className="bottomContainer">
                            <button className="chatButton" onClick={ this.startChat.bind(this) }>Let's Chat</button>
                            <p>Don't worry, this bot does'nt bite.</p>
                        </div>
                    </div>
                )
            } else if (this.state.currentView == "bioPic") {
                var pageContent = (
                    <div className="chatSection">
                        <WebcamCapture setImage={ this.setImage.bind(this) } />    
                    </div>
                )
            } else if (this.state.currentView == "chat") {
                var pageContent = (
                    <Chatbot imageSrc={ this.state.imageSrc } />   
                )
            }
        }
        return (
            <div>{ pageContent }</div>
        )
    }
}

export default About