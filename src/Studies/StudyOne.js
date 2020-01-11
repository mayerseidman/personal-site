import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Magnifier from "react-magnifier";
import Fade from 'react-reveal/Fade';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactTooltip from 'react-tooltip'


import './StudyOne.scss';
import './StudyThree.scss';

import ImageGallery from 'react-image-gallery';
import multipleChoice from '../images/wr-lite/multiple-choice.png';
import comprehension from '../images/wr-lite/comprehension.png';
import questionImg from '../images/wr-lite/question.png';

import jobToBeDone from '../images/wr-lite/job-to-be-done-border.png';

import featuresTable from '../images/wr-lite/features-table.png';
import estimates from '../images/wr-lite/estimates.png';
import trello from '../images/wr-lite/trello.png';

import teacherSiteMap from '../images/wr-lite/teacher-site-map.png';
import teacherSM from '../images/wr-lite/teacher-exercises-sm.png';
import teacherGAS from '../images/wr-lite/teacher-exercises-gas.png';
import teacherAssignmentsSpec from '../images/wr-lite/teacher-assignments-spec.png';
import teacherAssignmentsSpecTwo from '../images/wr-lite/teacher-assignments-spec-two.png';


import studentSiteMap from '../images/wr-lite/student-site-map-two.png';
import studentSM from '../images/wr-lite/student-exercises-sm.png';
import studentGAS from '../images/wr-lite/student-exercises-gas.png';
import studentGASTwo from '../images/wr-lite/student-exercises-gas-two.png';
import studentAssignmentsSpec from '../images/wr-lite/student-assignments-spec.png';

import diagnosticIndivImg from '../images/wr-lite/diagnostic-individuals.png';
import diagnosticGroupImg from '../images/wr-lite/diagnostic-group.png';

import exercisesSkillsetsOne from '../images/wr-lite/exercises-skillsets-one.png';
import exercisesDisplayOne from '../images/wr-lite/exercises-display-one.png';
import teacherAssignmentsTable from '../images/wr-lite/assignments-table.png';
import insightsIndividualLofi from '../images/wr-lite/insights-individual-annotated.png';
import insightsGroupLofi from '../images/wr-lite/insights-group-lofi.png';

import teacherExercisesTwo from '../images/wr-lite/teacher-exercises-two.png';
import studentExercisesTwo from '../images/wr-lite/student-exercises-two.png';

import teacherHomePageTwo from '../images/wr-lite/teacher-homepage-two.png';
import insightsIndividualTwo from '../images/wr-lite/insights-individual-two.png';

import teacherExercisesGif from '../images/wr-lite/teacher-exercises.gif';
import teacherExercisesFinal from '../images/wr-lite/teacher-exercises-final.png';
import teacherHomePageFinal from '../images/wr-lite/teacher-homepage-final.png';
import insightsIndividualFinal from '../images/wr-lite/insights-individual-final.png';
import insightsGroupFinal from '../images/wr-lite/insights-group-final.png';
import studentNewsfeedImg from '../images/wr-lite/newsfeed.png';

// import insightsGroupLofi from '../images/wr-lite/insights-group.png';

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
                <button onClick={ this.props.startStudy }>Start the Study</button>
            )
            var className = "mobileHide"
        }
        if(window.innerWidth <= 800 && window.innerHeight <= 820) {
            var featuresTableImg = <Magnifier className="featuresTableImg lessMarginImg" src={ featuresTable }></Magnifier>
            var teacherScenarioMapImg = <Magnifier src={ teacherSM }></Magnifier>
            var teacherGASImg = <Magnifier src={ teacherGAS }></Magnifier>
            var studentScenarioMapImg = <Magnifier src={ studentSM }></Magnifier>
            var studentGASImg = <Magnifier src={ studentGAS }></Magnifier>
            var lofiInsightsIndividualImg = <Magnifier src={ insightsIndividualLofi }></Magnifier>
            var lofiInsightsGroupImg = <Magnifier className="insightsGroupLofiImg noMargin" src={ insightsGroupLofi }></Magnifier>
            var finalTeacherExercisesImg = <Magnifier src={ teacherExercisesGif }></Magnifier>
        } else {
            var featuresTableImg = <img className="" src={ featuresTable }/>
            var teacherSiteMapImg = <Magnifier src={ teacherSiteMap } className="lessMarginImg" />
            var teacherScenarioMapImg = <img src={ teacherSM } alt=""/>
            var teacherGASImg = <img src={ teacherGAS } alt=""/>
            var studentScenarioMapImg = <img src={ studentSM } alt=""/>
            var studentGASImg = <img src={ studentGAS } alt=""/>
            var lofiInsightsIndividualImg = <img src={ insightsIndividualLofi } alt=""/>
            var lofiInsightsGroupImg = <img className="insightsGroupLofiImg noMargin" src={ insightsGroupLofi } alt=""/>
            var finalTeacherExercisesImg = <img src={ teacherExercisesGif } alt=""/>
        }

        var studyContent = (
            <div className="workOuterContainer">
                <div className="webHide startLinkContainer">
                    { startStudyLink }
                </div>
                <div className={ className }>
                    <div className="workContainer" ref="container">
                        <div className="workContent studyOnePage fadeInBottom">
                                <div className="introContainer workSection">
                                    <p className="workHeader">Intro</p>
                                    <p className="headlineText">How to prepare students to think creatively and analytically in an engaging way?</p>
                                    <p>Since the beginning, Whooo's Reading (WR) has been very good at helping teachers track their students’ independent reading and motivating students to read more on their own. While Whooo's Reading did a good job managing and motivating independent reading, we discovered that teachers and schools were most interested in WR because of the questions that ask students about the books they read.</p>
                                    <img src={ comprehension } alt=""/>
                                
                                    <p>We learned that teachers were fed up with the factual-recall multiple choice questions that programs would ask students.</p>
                                    <img src={ multipleChoice } alt=""/>
                                    <p>Questions like these do not prepare students for a world in which they need to think creatively and analytically and one in which they can easily google the answer to fact-recall questions. Moreover, the new standards ask students to synthesize, cite evidence, analyze, and write and these ‘old-school’ multiple choice assessments were not cutting it anymore. </p>
                                    <p>As a result, we realized that the best way we could continue to help teachers with our program was by improving our reading questions and assessment content. To make these improvements, we turned to our teachers for their invaluable feedback and input.</p>
                                </div>
                           
                            <div className="strategyContainer workSection">
                                <p className="workHeader">Research, Strategy, <span className="andText">and</span> Concept</p>
                                <div className="discoveryContainer">
                                    <ReactTooltip />
                                    <p className="subHeader"><b>General Discovery</b></p>
                                    <p>For two weeks <span className="questionContainer" data-tip="I use 'we' when I collborated or got feedback from others">we<img src={ questionImg } alt=""/></span> had phone calls with dozens of teachers around the country and learned that a major problem is finding formative assessments that align with the standards and reinforce the reading units they teach. While some sites (e.g. Pinterest) offer graphic organizers and other forms of assessments-- it often takes many hours to find the right types of reading exercises, and they are rarely engaging for students. In fact nearly every teacher we spoke to brought up some version of this problem. </p>
                                    <p>
                                        <i>"I might have a student who is missing a particular skill: maybe inferring, drawing conclusions, answering open-ended questions, main ideas, supporting details, using evidence. The way I currently handle this is to introduce a concept to the whole class (e.g. main ideas) then do a lesson on the concept. Then I break them into groups of 4, so they can start getting practice, and so they can give support to each other. 
                                       <br/> <br/> The worst part of this process is coming up with activities for the 3 or 4 person groups and grading them. My expertise is in teaching the lesson and helping groups and students understand what was taught. I want to hand off coming up with ways to practice the reading skills.”</i>
                                    </p>
                                    <p className="subHeader"><b>Creating Assignments</b></p>
                                    <p>Teachers want to assign anywhere between 1-3 exercises that are aligned with standards. They want their students to then work on these exercises. Teachers want to assign different assignments to different groups of students (depending on their specific needs and pace).</p>
                                    <p>
                                        <i>
                                        “I want to assign exercises for students to work on that’s aligned with unit I am focusing on. I want to check up on my computer during the period, where students are regarding finishing the exercises (I like how google classroom does this). 
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
                                    <p>To further distill the research down to actionable steps, we then plugged it into the Jobs To Be Done (JBD) Framework. JBD is focused on the "job" or task a user is trying to accomplish. We were able to turn our research into these statements:</p>
                                    <div>
                                        <div>
                                            <span className="circleDivider"></span>
                                            <p className="subText">
                                                Situation: <span className="highlightedWord">When</span> I assign reading and exercises <br/>
                                                Motivation: <span className="highlightedWord">I want</span> to find content (texts and questions) in one place (that’s accessible by the students) <br/>
                                                Result: <span className="highlightedWord">So I can</span> spend more time on lesson-prep.
                                            </p>
                                        </div>
                                        <div>
                                            <span className="circleDivider"></span>
                                            <p className="subText">
                                                Situation: <span className="highlightedWord">When</span> I am using exercises and questions (from software) <br/>
                                                Motivation: <span className="highlightedWord">I want</span> to have higher level thinking exercises <br/>
                                                Result: <span className="highlightedWord">So I can</span> be sure they are fully mastering higher-level thinking and reinforce my lessons.
                                            </p>
                                        </div>
                                        <div>
                                          <span className="circleDivider"></span>
                                          <p className="subText">
                                              Situation: <span className="highlightedWord">When</span> I am assigning reading and exercises <br/>
                                              Motivation: <span className="highlightedWord">I want</span> the kids to enjoy the program <br/>
                                              Result: <span className="highlightedWord">So I can</span>help them develop a love for reading.
                                          </p>  
                                        </div>
                                        <div>
                                            <span className="circleDivider"></span>
                                            <p className="subText">
                                                Situation: <span className="highlightedWord">When</span> I am assessing student growth <br/>
                                                Motivation: <span className="highlightedWord">I want</span> receive a report (on their strengths and weaknesses) <br/>
                                                Result: <span className="highlightedWord">So I can</span> provide them with the necessary support.
                                            </p> 
                                        </div>
                                    </div>
                                    <p className="summaryText">
                                        When constructing our product plan we focused more on a user's mindset than on traditional personas (based on demographics). As you can see, this framework really cuts to the chase of a user's intentions.
                                    </p>
                                   
                                    <div>
                                        <p className="subHeader">User Needs</p>
                                        <p>Teachers <span className="highlightedWord">need</span> better ways to help students practice and master higher-order thinking skills reading comprehension. </p>
                                        <p>*Teachers <span className="highlightedWord">need</span> to easily find and assign practice work tied explicitly to specific standards they are working on in class and the student’s reading level.</p>
                                        <p>Teachers <span className="highlightedWord">need</span> to be able to see student progress on assignments.</p>
                                        <p>Teachers  <span className="highlightedWord">need</span> proof and justification on where students are specifically struggling in reading comprehension, and methods to remedy those weaknesses. </p>
                                        <p>*After all the research, it became clear that the foundation of our next development would be creating graphic organizers, or "exercises," that students could do on our site. </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="scopeContainer workSection">
                                <p className="workHeader">Scope</p>
                                <div>
                                    <p className="subHeader">Features</p>
                                    <p>We had a very long (over 30 minutes 😀) meeting and discussed the various features we could build to help meet the needs of our users.</p>
                                    { featuresTableImg }
                                    <p className="captionText webHide">Scroll over image to zoom in</p>
                                </div>
                               <div>
                                   <p className="subHeader">Feature Planning</p>
                                   <p>We had many ideas for features and needed to figure out what we could accomplish within the dev cycle. Everyone (product team) estimated the amount of days each feature/task should take. We then took the average sum from everyone's estimates and could forecast how many features we could complete.</p>
                                   <img src={ estimates } alt=""/>
                               </div>
                               <div>
                                   <p className="subHeader">Task Management</p>
                                   <p>We used Trello to manage our team's tasks. Each feature/task had its own card and was assigned to the appropriate person. As we made progress, the cards were moved through the different stages.</p>
                                   <img src={ trello } alt="" className="noMargin" />
                               </div>
                            </div>
                            <div className="structureContainer workSection">
                                <p className="workHeader">Flow <span className="andText">and</span> Structure</p>
                                <p>In our structure phase, we sought to answer three questions:</p>
                                <ol>
                                    <li>What could be done specifically within each part of the user experience?</li>
                                    <li>How to accomplish that within the interface?</li>
                                    <li>What was then needed on the page to support this?</li>
                                </ol>
                                <p className="noteText">
                                    Integrating a user experience framework throughout the entirety of a product's lifecycle was new to us. I tested out a variety of formats in our structure phase to see how they worked and what worked best.
                                </p>
                                <p className="subHeader">Teacher Experience</p>
                                <div className="click-zoom">
                                    <div>
                                        <p className="secondaryHeader">Site Map and Flow</p>
                                        { teacherSiteMapImg }
                                        <p className="captionText mobileHide">Scroll over image to zoom in</p>
                                        <p className="secondaryHeader">Viewing and Editing Exercises</p>
                                        <p>This Scenario Mapping focused mostly on what a teacher could do at a given point and how that would be facilitated.</p>
                                        { teacherScenarioMapImg }
                                    </div>
                                    <div>
                                        <p>I created a Goals Actions Screen (GAS) framework that incorporates the user's goal, what they will do to achieve that goal, and what is needed on the screen for such.</p>
                                        { teacherGASImg }
                                    </div>
                                    <div>
                                        <p className="secondaryHeader">Creating Assignments</p>
                                        <p>Plotting out the flow of a user's experience in question/answer format was the simplest method out of the bunch. Perhaps due to its simplicity and contrast, I found it remarkably helpful.</p>
                                        <img src={ teacherAssignmentsSpec } alt=""/>
                                    </div>
                                    <div>
                                        <p className="secondaryHeader">Viewing Student Progress</p>
                                        <img src={ teacherAssignmentsSpecTwo } alt=""/>
                                    </div>
                                </div>

                                <div>
                                    <p className="subHeader">Student Experience</p>
                                    <div>
                                        <p className="secondaryHeader">Site Map</p>
                                        <Magnifier src={ studentSiteMap } />
                                    </div>
                                   <div>
                                       <p className="secondaryHeader">Viewing Exercises</p>
                                       { studentScenarioMapImg }
                                   </div>
                                   <div>
                                       <p className="secondaryHeader">Entering text details</p>
                                       { studentGASImg }
                                   </div>
                                    <div>
                                        <p className="secondaryHeader">Selecting Exercises</p>
                                        <img src={ studentGASTwo } alt=""/> 
                                    </div>
                                    <div>
                                        <p className="secondaryHeader">Viewing Progress</p>
                                        <img src={ studentAssignmentsSpec } alt=""/>
                                    </div>
                                    <div>
                                        <p className="secondaryHeader">Insights - Individual Student Layer</p>
                                        <img src={ diagnosticIndivImg } alt=""/>
                                    </div>

                                    <div>
                                        <p className="secondaryHeader">Insights - Group Layer</p>
                                        <img src={ diagnosticGroupImg } className="noMargin" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="lofiContainer workSection">
                                <p className="workHeader">Lo-fi</p>
                                <div>
                                    <p className="subHeader">Browsing and Selecting Exercises (for teachers and students)</p>
                                    <p>Two slightly different versions of how to view various skillsets and exercises.</p>
                                    <img src={ exercisesSkillsetsOne } alt=""/>
                                    <img src={ exercisesDisplayOne } alt=""/>
                                </div>
                                <div>
                                    <p className="subHeader">Teacher Assignments Progress Table</p>
                                    <p>The table on this page simply shows the progress students have made on the teacher's assignment (assigned exercises).</p>
                                    <img src={ teacherAssignmentsTable } alt=""/>
                                </div>
                                <div className="insightsLofi">
                                    <p className="subHeader">Individual Insights</p>
                                    { lofiInsightsIndividualImg }

                                    <p className="subHeader">Group Insights</p>
                                    { lofiInsightsGroupImg }
                                </div>
                                <div className="feedbackContainerOne workSection">
                                    <p className="workHeader">Feedback</p>
                                    <p>We did user testing in the office (with non product employees) to get a quick feel for the basic layouts we chose.</p>
                                    <span className="circleDivider"></span>
                                    <p className="subText noMargin">They preferred Version two for browsing exercises since it was more direct and less clunky; all filters/controls were placed above the exercises.</p>
                                </div>
                            </div>
                            <div className="hifiContainer workSection">
                                <p className="workHeader">Hi-fi 1.0</p>
                                <div>
                                    <p className="subHeader">Exercises - Teachers</p>
                                    <img src={ teacherExercisesTwo } alt=""/>

                                    <p className="subHeader">Exercises - Students</p>
                                    <p className="">The student experience is very simple as the only thing they can do is select and work on exercises.</p>
                                    <img src={ studentExercisesTwo } alt=""/>
                                </div>
                                <div>
                                    <p className="subHeader">Assignments - Teachers</p>
                                    <p className="">The teacher dashboard has a progress table (bottom right) that shows student progression on their assignment.</p>
                                    <img src={ teacherHomePageTwo } alt=""/>
                                </div>
                                <div className="feedbackContainerOne workSection">
                                    <p className="workHeader">Feedback</p>
                                    <p>We sent our mockups to multiple teachers for feedback.</p>
                                    <div>
                                        <span className="circleDivider"></span>
                                        <p className="subText">
                                            <span className="bold">Filtering </span> While teachers enjoyed browsing, some had trouble finding the exercises they wanted. We came up with several ideas of potential filters:
                                            <ol>
                                                <li>Filter exercises by learning type (visual, audible, reading, etc.)</li>
                                                <li>Filter exercises by prior reading vs. text provided in exercise</li>
                                                <li>Filter exercises by time estimate</li>
                                                <li>Filter exercises by traditional (mostly writing) vs. reward (more creative)</li>
                                                <li>Filter exercises by difficulty level</li>
                                            </ol>
                                        </p>
                                    </div>
                                    <div>
                                        <span className="circleDivider"></span>
                                        <p className="subText"><span className="bold">Wording</span> In the assignment creation, the word "delete" was confusing as it seemed to imply that doing so would delete the exercises (instead of merely deleting the assignment).</p>  
                                    </div>
                                    <div>
                                        <span className="circleDivider"></span>
                                        <p className="subText"><span className="bold">Sub-group assignments</span> To start, we only supported the ability to assign exercises to all of a teacher's students at once. There was already a lot of interest in being able to assign groups of students different exercises.</p>
                                    </div>
                                    <div>
                                        <span className="circleDivider"></span>
                                        <p className="subText noMargin"><span className="bold">Assignments display</span> Teachers often have 20 or 30 students in their assignment progress table, and maybe only assign 2 exercises. This would create a pretty big discrepancy between the height of the assignments box and the height of the progress table-making it a bit of an awkward experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finalVersion workSection">
                                <p className="workHeader">Final Version</p>
                                <div>
                                    <p className="subHeader">Exercises</p>
                                    <p className="">
                                        After hearing teachers talk again about their use of Pinterest, we decided that mimicking that experience would make their experience on Whooo's Reading that much smoother. 
                                        The exercises-loading animation, buttons and thumbnail image on each exercise were all designed to orient our users to their experience on Pinterest.
                                        We also decided to simplify it and remove the "inactive" exercises section. Meaning, that outside of assignments, teachers would not be able to control the exercises students do (on their own).
                                    </p>
                                    { finalTeacherExercisesImg }
                                    <p className="subHeader">Reusability</p>
                                    <p>
                                        A really neat thing that came out of this was that we used the same board interface (for exercises) for students and teachers. 
                                        This reusability saved us (both design and coding) time and also created a more seamless user experience in two ways: 
                                        <ol>
                                            <li>Teachers showing or helping students with exercises could jump right in and need not learn another interface.</li>
                                            <li>When redesigning the student newsfeed, we used a very similar board layout; capitalizing on students' familiarity of the exercises board.</li>
                                        </ol>
                                        <img src={ studentNewsfeedImg } className="newsfeedImg" alt=""/>
                                    </p>
                                </div>
                                <div>
                                    <p className="subHeader">Assignments</p>
                                    <p className="">We neatly stacked the assignment details on top of the assignments progress table. We also decided to simplify it and remove the frequency component for the first iteration.</p>
                                    <img src={ teacherHomePageFinal } alt=""/>
                                </div>
                                <div>
                                    <p className="subHeader">Individual Insights</p>
                                    <div>
                                        <p className="">This was an alternative version I created while brainstorming. This was mostly to see what else it could look like when focusing on an individual student.</p>
                                        <img src={ insightsIndividualTwo } alt=""/>
                                    </div>
                                    <div>
                                        <img src={ insightsIndividualFinal } alt=""/>
                                    </div>

                                    <div>
                                        <p className="subHeader">Group Insights</p>
                                        <img src={ insightsGroupFinal } className="noMargin" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="workSection finalFeedback">
                                <p className="workHeader">Feedback</p>
                                <div>
                                    <span className="circleDivider"></span>
                                    <p className="subText"><span className="bold">Browsing</span> Teachers generally enjoy the experience of browsing (i.e. we nailed the Pinterest effect).</p>
                                </div>
                                <div>
                                    <span className="circleDivider"></span>
                                    <p className="subText"><span className="bold">Quantity</span> They love that the exercises are creative. They like the drawing and creative exercises the most.</p>
                                </div>
                                <div>
                                    <span className="circleDivider"></span>
                                    <p className="subText"><span className="bold">Quality</span> They love how many exercises there are within grade levels.</p>
                                </div>
                            </div>
                            <div className="workSection">
                                <p className="workHeader">Exercise Content Creation</p>
                                1. show some of the skillsets <br/>
                                2. Talk about mapping standards to skillsets <br/>
                                3. Show the list of exercises <br/>
                                4. Show an actual activity
                            </div>
                            <Link className="regularLink nextStudyLink" to="/works/Studies/StudyTwo">Next Study</Link>
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