import React from 'react'
import './StudyOne.scss';
import rosterImg from './lofi5.png'
import fullView from './images/student-roster/full-view.png'
import addClass from './images/student-roster/add-class.png'
import editClass from './images/student-roster/edit-class.png'
import addStudents from './images/student-roster/add-students.png'
import editStudent from './images/student-roster/edit-student.png'
import logReading from './images/student-roster/log-reading.png'
import sendCoins from './images/student-roster/send-coins.png'
import sendNote from './images/student-roster/send-note.png'
import usernames from './images/student-roster/usernames.png'
import ImageGallery from 'react-image-gallery';

class StudyOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.refs.container.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        this.refs.container.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);
        let yOffset = window.pageYOffset;
        // if yOffset is > the div on the right's position then call this.props... and send upwards what the stage is into app.js
        // and then pass that stage into leftContainer via state in app.js...


        this.setState({
          transform: itemTranslate
        });
    }
    paneDidMount(node) {
        if (node) {
          node.addEventListener('scroll', () => console.log('scroll!'));
        }
      };
    render() {
        const images = [
              {
                original: fullView
              },
              {
                original: addClass,
              },
              {
                original: editClass,
              },
              {
                original: addStudents
              },
              {
                original: editStudent,
              },
              {
                original: logReading,
              },
              {
                original: sendCoins,
              },
              {
                original: sendNote,
              },
              {
                original: usernames,
              },
        ];
        if (this.props.currentView == "preview") {
            var startStudyLink = (
                <a onClick={ this.props.startStudy }>START THE STUDY!</a>
            )
            var className = "mobileHide"
        }
        var studyContent = (
            <div className="workOuterContainer">
                <div className="webHide startLinkContainer">
                    { startStudyLink }
                </div>
                <div className={ className }>
                    <div className="workContainer" ref="container">
                        <div className="workContent">
                            <div className="introContainer workSection">
                                 <p className="workHeader">Intro</p>
                                 <p className="headlineText">The text goes here and then goes like this and then goes like this!</p>
                                 <p>
                                     blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
                                </p>
                            </div>
                            <div className="goalsContainer workSection">
                                <p className="workHeader">Goals</p>  
                                 <p>
                                    short general description of challenge
                                </p>
                                <div className="goalContainer">
                                    <p>Title</p>
                                    IMG
                                    <p>goal text goes here...</p>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="strategyContainer workSection">
                                <p className="workHeader">Research, Strategy, <span className="andText">and</span> Concept</p>
                                 <p>
                                     blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
                                </p>
                            </div> 
                            <div className="structureContainer workSection">
                                <p className="workHeader">Flow <span className="andText">and</span> Structure</p>
                                 <p>
                                     blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
                                </p>
                            </div>
                            <div className="lofiContainer workSection">
                                <p className="workHeader">Lo-fi Mockups</p>
                                 <p>
                                     blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
                                </p>
                                <img src={ rosterImg } alt=""/>
                            </div> 
                            <div className="hifiContainer workSection">
                                <p className="workHeader">Hi-fi Mockups</p>
                                 <p>
                                     blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
                                </p>
                                <ImageGallery items={ images } showFullscreenButton={ false } showPlayButton={ false }
                                    showThumbnails={ false } />
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div>{ studyContent }</div>
        );
    }
}

export default StudyOne