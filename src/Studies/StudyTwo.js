import React from 'react';
import './StudyOne.scss';
import ImageGallery from 'react-image-gallery';

// Images

import oldOne from '../images/student-roster/old-one.png';
import oldTwo from '../images/student-roster/old-two.png';

import flowStructure from '../images/student-roster/flow-and-structure-2.png';
import lofiImg from '../images/student-roster/lofi.png';
import classDojoOne from '../images/student-roster/class-dojo-one.png';
import classDojoTwo from '../images/student-roster/class-dojo-two.png';

import fullView from '../images/student-roster/full-view.png';
import addClass from '../images/student-roster/add-class.png';
import editClass from '../images/student-roster/edit-class.png';
import addStudents from '../images/student-roster/add-students.png';
import editStudent from '../images/student-roster/edit-student.png';
import fullViewSelected from '../images/student-roster/full-view-selected.png';
import logReading from '../images/student-roster/log-reading.png';
import sendCoins from '../images/student-roster/send-coins.png';
import sendNote from '../images/student-roster/send-note.png';
import usernames from '../images/student-roster/usernames.png';

class StudyTwo extends React.Component {
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
        const imagesTwo = [
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
                original: fullViewSelected,
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
              }
        ];
        const images = [
            {
              original: oldOne
            },
            {
              original: oldTwo,
            },
        ]
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
                                 <p className="headlineText">How can we create one place where teachers can perform a variety of actions? Additionally, how can we enable teachers to perform these actions on behalf of multiple students-easily, all at once, and across different classes?</p>
                                <p>
                                    On Whooo’s Reading’s <i>Student Roster</i>, teachers can do a variety of actions, such as, editing students or class settings, logging reading (for students), sending notes/coins (to students), adding students, adding classes, and retrieving student login information.
                                </p>
                                <p>
                                    Previously, these actions were all on separate pages and their links were spread between the home and settings pages.
                                </p>
                                <ImageGallery items={ images } showFullscreenButton={ false } showPlayButton={ false }
                                    showThumbnails={ false } />
                            </div>
                            <div className="goalsContainer workSection">
                                <p className="workHeader">Goals</p>
                                <div className="goalContainer"> 
                                    <p className="subHeader">Consolidate</p>
                                    <span className="circleDivider"></span>
                                    <p className="subText">Since actions were spread out over a number of pages, to log student reading, add new students, and send a note, teachers had to navigate to multiple pages. Already crunched for time, teachers were losing even more time.</p>
                                </div>
                                <div className="goalContainer"> 
                                    <p className="subHeader">Cleanup Navigation</p>
                                    <span className="circleDivider"></span>
                                    <p className="subText">Navigationally, the groupings of the different actions didn’t seem to have much of a connection; making it hard to know where to go. Additionally, a few actions were placed in a sidebar by themselves (as <i>Quick Links</i>). The groupings were confusing even for regular users of the site.</p>
                                </div>
                                <div className="goalContainer"> 
                                    <p className="subHeader">Batch Functionality</p>
                                    <span className="circleDivider"></span>
                                    <p className="subText">Some of the actions were rigid in that they could only be performed for one or all students.
                                        A teacher wanting to award 5 students (from two classes) 50 points for a good job reading, would have to do this separately for each student. Without support for batch processing (taking action on/for numerous students at once), simple tasks took a long time.</p>
                                </div>
                            </div>
                            <div className="strategyContainer workSection">
                                <p className="workHeader">Research, Strategy, <span className="andText">and</span> Concept</p>
                                 <p>
                                    While doing a competitive analysis, I came across <b>Class Dojo</b>, a highly popular classroom-management tool that is fun, elegant, and easy to use. Their first screen is a list of the teacher’s classes (on little cards). On this page, you can do two things: add more classes and change a class's settings (via the gears icon).
                                </p>
                                <img src={ classDojoOne } alt=""/>
                                <p>
                                    The class card brings you to that classes students page, where you can select (any or all) students and take a variety of the actions (from their toolbar).
                                </p>
                                <img src={ classDojoTwo } alt=""/>
                                <p>We took a similar approach to Class Dojo’s but with a few important twists.</p>
                                <div className="classDojoText">
                                    <p className="subHeader"><b>Similarities to Class Dojo</b></p>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText">Students can be selected and batched for different actions.</p>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText">The batch-able actions are on a toolbar and clicking an action brings down an interface with the relevant forms and details.</p>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText">Clicking on a student or class brings up their information for viewing and editing.</p>
                                </div>
                                <div>
                                    <p className="subHeader">How We Differed and Why</p>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText">Class Dojo has the students of each class nested within that class. To get to a specific student you navigate first to the student's class and then the student. We wanted all of a teacher’s students (across different classes) accessible simultaneously. This way, teachers could perform actions for many students with one click.</p>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText">While Class Dojo has editing student information tucked away, we made it so that clicking on a student card brings up their account information. This was a more intuitive and easier way to access the information.</p>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText">Selecting multiple students posed a problem since clicking on a student triggers an immediate response (in our case, the student information modal). Class Dojo solved this with a "select multiple" action on their toolbar, which then allows you to select multiple students. <br/> We wanted to keep it simple; select students by clicking on them. We added a checkbox on the right corner of each student's card so that the student can be selected without triggering the information modal.</p>
                                </div>
                            </div> 
                            <div className="structureContainer workSection">
                                <p className="workHeader">Flow <span className="andText">and</span> Structure</p>
                                 <p>There were two levels in our structure. The surface level contains classes, students, and the adding classes and students modals. The second level contained the student and class information modals and the action modals triggered after selecting students.</p>
                                <img src={ flowStructure} alt=""/>
                            </div>
                            <div className="lofiContainer workSection">
                                <p className="workHeader">Lo-fi</p>
                                <img src={ lofiImg } alt=""/>
                            </div> 
                            <div className="hifiContainer workSection">
                                <p className="workHeader">Final Version</p>
                                <ImageGallery items={ imagesTwo } showFullscreenButton={ false } showPlayButton={ false }
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
export default StudyTwo