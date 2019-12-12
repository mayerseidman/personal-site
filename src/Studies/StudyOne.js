import React from 'react';
import './StudyOne.scss';
import './StudyThree.scss';

import ImageGallery from 'react-image-gallery';
import multipleChoice from '../images/wr-lite/multiple-choice.png';
import comprehension from '../images/wr-lite/comprehension.png';

import jobToBeDone from '../images/wr-lite/job-to-be-done-border.png';

import featuresTable from '../images/wr-lite/features-table.png';
import estimates from '../images/wr-lite/estimates.png';
import trello from '../images/wr-lite/trello.png';

import teacherSiteMap from '../images/wr-lite/teacher-site-map.png';
import teacherSM from '../images/wr-lite/teacher-exercises-sm.png';
import teacherGAS from '../images/wr-lite/teacher-exercises-gas.png';

import studentSiteMap from '../images/wr-lite/student-site-map-two.png';
import studentSM from '../images/wr-lite/student-exercises-sm.png';
import studentGAS from '../images/wr-lite/student-exercises-gas.png';
import studentGASTwo from '../images/wr-lite/student-exercises-gas-two.png';

// Images


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
                        <div className="workContent studyOnePage">
                            <div className="introContainer workSection">
                                <p className="workHeader">Intro</p>
                                <p className="headlineText">text goes here...</p>
                                <p>Since the beginning, Whooo’s Reading has been very good at helping teachers track their students’ independent reading and motivating students to read more on their own. While Whooo’s Reading did a good job managing and motivating independent reading, we discovered that teachers and schools were most interested in WR because of the questions that ask students about the books they read.</p>
                                <img src={ comprehension } alt=""/>

                                <p>We learned that teachers were fed up with the factual-recall multiple choice questions that programs would ask students.</p>
                                <img src={ multipleChoice } alt=""/>
                                <p>Questions like these do not prepare students for a world in which they need to think creatively and analytically and one in which they can easily google the answer to fact-recall questions. Moreover the new standards ask students to synthesize, cite evidence, analyze, and write and these ‘old-school’ multiple choice assessments were not cutting it anymore. </p>
                                <p>As a result, we realized that the best way we could continue to help teachers with our program was by improving our reading questions and assessment content. To make these improvements, we turned to our teachers for their invaluable feedback and input.</p>
                            </div>
                            <div className="strategyContainer workSection">
                                <p className="workHeader">Research, Strategy, <span className="andText">and</span> Concept</p>
                                <div className="">
                                    <p className="subHeader"><b>General Discovery</b></p>
                                    <p>For two weeks we had phone calls with dozens of teachers around the country and learned that a major problem is finding formative assessments that align with the standards and reinforce the reading units they teach. While some sites (e.g. Pinterest) offer graphic organizers and other forms of assessments-- it often takes many hours to find the right types of reading exercises and they rarely are engaging for students. In fact nearly every teacher we spoke to brought up some version of this problem. </p>
                                    <p>
                                        <i>"I might have a student who is missing a particular skill: maybe inferring, drawing conclusions, answering open ended questions, main ideas, supporting details, using evidence. The way I currently handle this is to introduce a concept to the whole class (e.g. main ideas) then do a lesson on the concept. Then I break them into groups of 4 so they can start getting practice and so they can give support to each other. 
                                       <br/> <br/> The worst part of this process is coming up with activities for the 3 or 4 person groups and grading them. My expertise is in teaching the lesson and helping groups and students understand what was taught. I want to hand off coming up with ways to practice the reading skills.”</i>
                                    </p>
                                    <p className="subHeader"><b>Creating Assignments</b></p>
                                    <p>Teachers want to assign anywhere between 1-3 exercises that are aligned with standards. They want their students to then work on these exercises. Teachers want to assign different assignments to different groups of students (depending on their specific needs and pace).</p>
                                    <p>
                                        <i>
                                        “I want to assign exercises for students to work on that’s aligned with unit I am focusing on. I want to check up on my computer during the period, where students are with regards to finishing the exercises (I like how google classroom does this). 
                                        <br/> <br/>Its very important for me to be able to assign students exercises based on their individual needs.”
                                        </i>
                                    </p>
                                    <p className="subHeader">Data</p>
                                    <p>Teachers are very short on time. They usually have to look in several places to analyze data to determine where their students are at. Teachers highly value data that shows outliers: who is totally underperforming (and needs more hands on attention) and who is over-performing (needs to be challenged). They want to see this data broken down by skillset comprehension.</p>
                                    <p>
                                        <i>“My time is so limited. At the beginning of the year, you have to look at their test scores from last year or get to know them before you can determine how to group them. I want reports that tell me who’s mastering which skill sets. I would still look deep into it, but when I'm short on time, I would have the information right at my fingertips.
                                            <br/> <br/>Both individual and group data are crucial. I would use individual data for small groups, and whole class data for informing my instruction.”</i>
                                    </p>
                                    <p className="subHeader">Jobs To Be Done</p>
                                    <img src={ jobToBeDone } alt=""/>
                                    <p>To further distill our research down to actionable steps, we then plugged it into the Jobs To Be Done Framework. The Jobs To Be Done framework is focused on the "job" or task a user is trying to accomplish. We were able to turn our reasearch into these statements:</p>
                                    <p style={{ "color" : "purple" }}>Maybe talk somewhere about stayed away from typical demographics and focused more on mindset...</p>
                                    <div>
                                        <span className="circleDivider"></span>
                                        <p className="subText">
                                            Situation: <span className="highlightedWord">When</span> I assign reading and exercises <br/>
                                            Motivation: <span className="highlightedWord">I want</span> to find content (texts and questions) in one place (that’s accessible by the students) <br/>
                                            Result: <span className="highlightedWord">So I can</span> spend more time on lesson-prep.
                                        </p>
                                        <span className="circleDivider"></span>
                                        <p className="subText">
                                            Situation: <span className="highlightedWord">When</span> I am using exercises and questions (from software) <br/>
                                            Motivation: <span className="highlightedWord">I want</span> to have higher level thinking exercises <br/>
                                            Result: <span className="highlightedWord">So I can</span> be sure they are fully mastering higher-level thinking and reinforce my lessons.
                                        </p>
                                        <span className="circleDivider"></span>
                                        <p className="subText">
                                            Situation: <span className="highlightedWord">When</span> I am assigning reading and exercises <br/>
                                            Motivation: <span className="highlightedWord">I want</span> the kids to enjoy the program <br/>
                                            Result: <span className="highlightedWord">So I can</span>they develop a love for reading.
                                        </p>
                                        <span className="circleDivider"></span>
                                        <p className="subText">
                                            Situation: <span className="highlightedWord">When</span> I am assessing student growth <br/>
                                            Motivation: <span className="highlightedWord">I want</span> receive a report (on their strengths and weaknesses) <br/>
                                            Result: <span className="highlightedWord">So I can</span> provide them with the necessary support.
                                        </p>
                                    </div>
                                   
                                    <div>
                                        <p className="subHeader">User Needs</p>
                                        <p>Teachers <span className="highlightedWord">need</span> better ways to help students practice and master higher-order thinking skills reading comprehension. </p>
                                        <p>Teachers <span className="highlightedWord">need</span> to easily find and assign exercises tied explicitly to specific standards they are working on in class and the student’s reading level.</p>
                                        <p>Teachers <span className="highlightedWord">need</span> to be able to see student progress on assignments.</p>
                                        <p>Teachers  <span className="highlightedWord">need</span> proof and justification on where students are specifically struggling in reading comprehension, and methods to remedy those weaknesses. </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="scopeContainer workSection">
                                <p className="workHeader">Scope</p>
                                <div>
                                    <p className="subHeader">Features</p>
                                    <p>discuss...</p>
                                    <img src={ featuresTable } alt=""/>
                                </div>
                               <div>
                                   <p className="subHeader">Time Estimates</p>
                                   <p>discuss...</p>
                                   <img src={ estimates } alt=""/>
                               </div>
                               <div>
                                   <p className="subHeader">Task Management</p>
                                   <p>discuss...</p>
                                   <img src={ trello } alt=""/>
                               </div>
                            </div>
                            <div className="structureContainer workSection">
                                <p className="workHeader">Flow <span className="andText">and</span> Structure</p>
                                <p>In our structure phase, we sought to answer these three questions:</p>
                                <ol>
                                    <li>What could be done specifically within each part of the user experience?</li>
                                    <li>How to accomplish that within the interface?</li>
                                    <li>What was then needed on the page to support this?</li>
                                </ol>
                                <p style={{ "color" : "purple" }}>
                                    Mention that since we were still learning about what works for us as a team in UX etc, we tested out a variety of different formats.
                                    Here we used GAS framework and we also wrote out the narrative in full which I also found oddly helpful despite seeming maybe overly simplistic...
                                    Also we used the "flow" images-describe that...via the scenario mapping...
                                </p>
                                <p className="subHeader">Teacher Experience</p>
                                <div className="click-zoom">
                                    <img src={ teacherSiteMap } alt=""/>
                                    <p className="subHeader">Viewing and Editing Exercises</p>
                                    <img src={ teacherSM } alt=""/>
                                    <img src={ teacherGAS } alt=""/>
                                </div>

                                <p className="subHeader">Student Experience</p>
                                <img src={ studentSiteMap } alt=""/>
                                <p className="subHeader">Viewing Exercises</p>
                                <img src={ studentSM } alt=""/>
                                <p className="subHeader">Entering text details</p>
                                <img src={ studentGAS } alt=""/>
                                <p className="subHeader">...</p>
                                <img src={ studentGASTwo } alt=""/>
                                <p>
                                    We used a Goals Actions Screen Framework (I put together) which clearly delineates these different requirements in an easy to understand visual language. 
                                </p>

                            </div>
                            <div className="lofiContainer workSection">
                                <p className="workHeader">Lo-fi</p>
                            </div> 
                            <div className="hifiContainer workSection">
                                <p className="workHeader">Final Version</p>
                               
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