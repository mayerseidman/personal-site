import React from 'react'
import './About.scss';
import personalImg from './linkedIn.jpg';
import CircularProgress from '@material-ui/core/CircularProgress'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
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
                    <CircularProgress className="" size={100}/>
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