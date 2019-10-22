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
        this.state = { isLoading: true, imageSrc: "" };
    }

    setImage(stringSrc) {
        console.log("SET IMAGE BISCH", stringSrc)
        this.setState({ imageSrc: stringSrc })
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
        return (
            <div className="chatSection">
                <Chatbot imageSrc={ this.state.imageSrc } />
                <WebcamCapture setImage={ this.setImage.bind(this) } />    
            </div>
        )
        if (this.state.isLoading) {
            return (
                <div className="aboutLoadingSection">
                    <CircularProgress className="" size={ 100 }/>
                </div>
            )
        } else {
            return (
                <div className="aboutSection">
                    <div className="topContainer">
                        <a>Link One</a><a>Link Two</a>
                        <img className="img" src={ personalImg } alt="profile"/>
                    </div>
                    <div className="textContainer">
                        <p>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        </p>
                        <p>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        </p>    
                    </div>
                    <div className="bottomContainer">
                        <button className="chatButton">Let's Chat</button>
                        <p>Don't worry, this bot does'nt bite.</p>
                    </div>
                </div>
            )
        }
    }
}

export default About