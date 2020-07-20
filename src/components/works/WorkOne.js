import React, { Component, useEffect, useRef, useState} from 'react';
import { 
    NavLink,
    Switch,
    Link,
    useParams,
    withRouter,
    Route

} from 'react-router-dom';
import { withLoadState } from '../contexts/LoadStateContext';
import Magnifier from "react-magnifier";

// IMAGES
import multipleChoice from "../../assets/images/wr-lite/multiple-choice.png";
import comprehension from "../../assets/images/wr-lite/comprehension.png";

import combinedSiteMaps from "../../assets/images/wr-lite/combined-sitemaps.png";
import studentSiteMap from "../../assets/images/wr-lite/student-site-map.png";
import teacherSiteMap from "../../assets/images/wr-lite/teacher-site-map.png";

import scenarioMapping from "../../assets/images/wr-lite/scenario-mapping.png";
import goalsActionsScreen from "../../assets/images/wr-lite/goals-actions-screen.png";
import narrativeSummary from "../../assets/images/wr-lite/narrative-summary.png";

import lofiOne from "../../assets/images/wr-lite/lofi-one.png";
import lofiTwo from "../../assets/images/wr-lite/lofi-two.png";
import lofiThree from "../../assets/images/wr-lite/lofi-three.png";
import lofisAnnotated from "../../assets/images/wr-lite/lofis-annotated.png";

import teacherExercisesWireframe from "../../assets/images/wr-lite/teacher-exercises.png";
import studentExercisesWireframe from "../../assets/images/wr-lite/student-exercises.png";
import teacherHomePageWireframe from "../../assets/images/wr-lite/teacher-homepage.png";

import assignmentsFinal from "../../assets/images/wr-lite/teacher-homepage-final.png";
import insightsFinal from "../../assets/images/wr-lite/insights-final.png";
import finalVersionWRLite from "../../assets/images/wr-lite/teacher-exercises.gif";

class WorkOne extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	renderIntroduction() {
		return (
		    <div className="second-content">
		        <div className="section-intro">
		            <h3>INTRODUCTION</h3>
		            <p>
		                Since the beginning, Whooo's Reading (WR) has been great at
		                helping teachers track their students' independent reading and
		                motivating students to read more on their own. While WHooo's Reading
		                did a good job managing and motivating independent reading, we
		                discovered that teachers and schools were most interested in WR
		                because of the questions that ask students about the books the read.
		            </p>
		            <p>
		                Teachers were fed up with the factual-recall multiple choice questions 
		                that programs would ask students. These questions do not prepare students 
		                for a world in which they need to think creatively and analytically 
		                and one in which they can easily google the answer to fact-recall questions. 
		                Moreover, the new standards ask students to synthesize, cite evidence, analyze, 
		                and write and these ‘old-school’ multiple choice assessments 
		                were not cutting it anymore.
		            </p>
		            <p>
		               The best way to help teachers with our program was to improve our reading questions 
		               and assessment content. To make these improvements, we turned to our teachers 
		               for their invaluable feedback and input. 
		            </p>
		        </div>
		        <div className="double-images-wrapper">
		            <div className="modal-small-img">
		                <img className="red" src={ multipleChoice } alt="multiple-choice-question"/>
		            </div>
		            <div className="modal-small-img green">
		                <img className="green" src={ comprehension } alt="comprehension-question"/>
		            </div>
		        </div>
		    </div>
		)
	}
	renderResearch() {
		return (
			<div className="modal-section grey">
			    <div className="modal-justify-left">
			        <p className="news-heading">
			            <h3>RESEARCH, STRATEGY, and CONCEPT</h3>
			        </p>
			        <div className="text">
			            <p className="all-caps news-sub-heading">User Interviews</p>
			            <p>For two weeks we had phone calls with dozens of teachers around the
			                country and learned that a major problem is finding formative
			                assessments that align with the standards and reinforce and the reading
			            </p>
			        </div>
			    </div>
			    <div className="modal-justify-left">
			        <p className="all-caps news-sub-heading">GENERAL DISCOVERY</p>
			        <div className="news-format">
			            <div className="with-quote">
			                <div className="quoted"><span className="quote-span">&#8220;</span></div>
			                <div className="news-format-left">
			                    <p>
			                        I might have a student who is missing a particular skill: 
			                        maybe inferring, drawing conclusions, answering open-ended
			                        questions, main ideas, supporting details, using evidence.
			                        The way I currently handle this is to
			                        introduce a concept to the whole class(e.g main ideas)
			                        then do a lesson on the concept. Then I break them
			                        into groups of 4, so they can start getting practice, and
			                        so they can give support to each other
			                    </p>

			                    <p>
			                        The worst part of this process is coming up with activities for 
			                        the 3 or 4 person groups and grading them. My expertise is in teaching 
			                        the lesson and helping groups and students understand what was taught. 
			                        I want to hand off coming up with ways to practice the reading skills.
			                    </p>
			                </div>
			            </div>
			            <div className="news-format-right">
			                <p>
			                    While some sites (e.g. Pinterest) offer graphic
			                    organizers and other forms of assessments-- it often 
			                    takes many hours to find the right types of reading
			                    exercises, and they are rarely engaging for students.
			                    In fact nearly very teacher we spoke to brought up some version of this problem
			                </p>
			            </div>
			        </div>
			        <p className="all-caps news-sub-heading">CREATING ASSIGNMENTS</p>
			        <div className="news-format">
			            <div className="with-quote">
			                <div className="quoted"><span className="quote-span">&#8220;</span></div>
			                <div className="news-format-left">
			                    <p>
			                        I want to assign exercises for students to work on that’s aligned 
			                        with unit I am focusing on. I want to check up on my computer during the period 
			                        where students are regarding finishing the exercises (I like how google classroom does this).
			                    </p>
			                    <p>
			                        Its very important for me to be able to assign students exercises 
			                        based on their individual needs.
			                    </p>
			                </div>
			            </div>
			            
			            <div className="news-format-right">
			                <p>
			                    Teachers want to assign 1-3 exercises that are 
			                    aligned with standards that their students can then work on. 
			                    Teachers want to assign different assignments to different 
			                    groups of students (depending on their specific needs and pace).
			                </p>
			            </div>
			        </div>
			        <p className="all-caps news-sub-heading">DATA</p>
			        <div className="news-format">
			            <div className="with-quote">
			                <div className="quoted"><span className="quote-span">&#8220;</span></div>
			                <div className="news-format-left">
			                    <p>
			                        My time is so limited. At the beginning of the year, you have to look at their test scores
			                        from last year or get to know them before you can determine how to group them. I want reports 
			                        that tell me who’s mastering which skill sets. I would still look deep into it, but when I'm short on time, 
			                        I would have the information right at my fingertips.
			                    </p>
			                    <p>
			                        Both individual and group data are crucial. I would use individual data for small groups, 
			                        and whole class data for informing my instruction.”
			                    </p>
			                </div>
			            </div>
			            <div className="news-format-right">
			            <p>
			                Teachers are very short on time. They usually have to look in several places to analyze data to determine 
			                where their students are at. Teachers highly value data that shows outliers: who is totally underperforming 
			                (and needs more hands on attention) and who is over-performing (needs to be challenged). 
			                They want to see this data broken down by skillset comprehension.
			            </p>
			            </div>
			        </div>
			    </div>
			</div>  
		)
	}
	renderStrategy() {
		return (
			<div className="modal-section contains-colored-background">
			    <div className="modal-justify-left primary-dark-text">
			        <p className="all-caps news-sub-heading">JOBS TO BE DONE FRAMEWORK</p>
			        <p className="jbd-header">When ________ I want to ________ so I can ________.</p>
			        <p>
			            To distill the research down to actionable steps, I plugged the research into the Jobs To Be Done (JBD) framework. 
			            JBD focuses on the triggering event or situation, the motivation and goal, and the intended outcome. 
			            Turning our research into these statements gave us more clarity into the components in our system that 
			            were a part of this job and the relationships and interactions that would be required to facilitate it.
			        </p>
			    </div>
			    <div className="left-to-full all-blue-background">
			        <div className="middle-section">
			            <div className="basic-session">
			                <p className="primary-white-text">
			                    <span className="primary-light-text">
			                    SITUATION:</span> When I assign reading and exercises 
			                </p>
			                <p className="primary-white-text">
			                    <span className="primary-light-text">MOTIVATION: </span> 
			                    I want to find content (texts and questions) in one place (that’s accessible by the students)
			                </p>
			                <p className="primary-white-text">
			                    <span className="primary-light-text">RESULT: </span> 
			                    So I can spend more time on lesson-prep.
			                </p>
			            </div>
			            <div className="basic-session">
			                <p className="primary-white-text">
			                    <span className="primary-light-text">SITUATION: </span> 
			                    I am using exercises and questions (from software)
			                </p>
			                <p className="primary-white-text">
			                    <span className="primary-light-text">MOTIVATION: </span> 
			                    I want higher level thinking exercises 
			                </p>
			                <p className="primary-white-text">
			                    <span className="primary-light-text">RESULT: </span> 
			                    So I can know my students fully mastering higher-level thinking and reinforce my lessons.
			                </p>
			            </div>
			            <div className="basic-session">
			                <p className="primary-white-text">
			                    <span className="primary-light-text">SITUATION: </span> 
			                    When I assign reading and exercises
			                </p>
			                <p className="primary-white-text">
			                    <span className="primary-light-text">MOTIVATION: </span> 
			                    I want my students to enjoy the program
			                </p>
			                <p className="primary-white-text">
			                    <span className="primary-light-text">RESULT: </span> 
			                    So I can help them develop a love for reading.
			                </p>
			            </div>
			            <div className="basic-session">
			                <p className="primary-white-text">
			                    <span className="primary-light-text">SITUATION: </span>
			                    When I am assessing student growth
			                </p>
			                <p className="primary-white-text">
			                    <span className="primary-light-text">MOTIVATION: </span>
			                    I want receive a report (on their strengths and weaknesses)
			                </p>
			                <p className="primary-white-text">
			                    <span className="primary-light-text">RESULT: </span>
			                    So I can provide them with the necessary support.
			                </p>
			            </div>
			        </div>
			    </div>
			    <div className='modal-justify-left'>
			        <p><b>USER NEEDS</b></p>
			        <div className="flex-row align-center">
			            <div className="simple-box">
			            </div>
			            <div>
			                <p className="boxed-text primary-dark-text">Teachers <b>need</b> better ways to help students practice and master</p>
			                <p className="boxed-text primary-dark-text">higher-order thinking skills reading comprehension.</p>
			            </div>
			        </div>
			        <div className="flex-row align-center">
			            <div className="simple-box">
			            </div>
			            <div>
			                <p className="boxed-text primary-dark-text">Teachers <b>need</b> to easily find and assign practice work tied explicitly</p>
			                <p className="boxed-text primary-dark-text">to specific standards they are working on in class and the student’s reading level.</p>
			            </div>
			        </div>
			        <div className="flex-row align-center">
			            <div className="simple-box">
			            </div>
			            <div>
			                <p className="boxed-text primary-dark-text">Teachers <b>need</b> to be able to see student progress on assignments.</p>
			                <p className="boxed-text primary-dark-text"></p>
			            </div>
			        </div>
			        <div className="flex-row align-center">
			            <div className="simple-box">
			            </div>
			            <div>
			                <p className="boxed-text primary-dark-text">Teachers <b>need</b> proof and justification on where students are specifically</p>
			                <p className="boxed-text primary-dark-text">struggling in reading comprehension, and methods to remedy those weaknesses</p>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
	renderStructure() {
		return (
			<div className="modal-section grey">
			    <div className="modal-justify-left structure">
			        <p><b>FLOW and STRUCTURE</b></p>
			        <p>
			            In the structure phase I wanted to answer three questions: 
			            <ol>
			                <li>What could be done specifically within each part of the user experience?</li>
			                <li>How to accomplish that within the interface?</li>
			                <li>What was then needed on the page to support this?</li>
			            </ol>
			            I used a variety of methods to determine what the teacher’s experience would look like. 
			            Each method had a slightly different approach. 
			        </p>
			        <p><b>SITE MAPS</b></p>
			        <img className="full-width" src={ combinedSiteMaps } alt="site-maps"/>
			    </div>
			    <div className="modal-justify-left framework">
			        <b>SCENARIO MAPPING</b>
			        <p>
			            Scenario Mapping focused on what a teacher could do at a given point and 
			            how that would be facilitated.
			        </p>
			        <img className="full-width" src={ scenarioMapping } alt="scenario-mapping" />
			    </div>
			    <div className="modal-justify-left framework">
			        <b>GOALS, ACTIONS, and SCREEN</b>
			        <p>
			            I created a Goals Actions Screen framework that is a bit more explicit. 
			            It incorporates the user's goal, the action they will take to achieve that goal, and 
			            what is needed on the screen to facilitate.
			        </p>
			        <img className="full-width" src={ goalsActionsScreen } alt="goals-actions-screen" />
			    </div>
			    <div className="modal-justify-left framework">
			       <b>NARRATIVE SUMMARY</b>
			       <p>
			           I plotted out the flow of a user's experience in question/answer format. 
			           This was the simplest method and I found it surprisingly helpful as well.
			       </p>
			       <img className="full-width" src={ narrativeSummary } alt="narrative-summary" />
			    </div>
			</div>
		)
	}
	renderSketching() {
		return (
			<div className='modal-section left-to-full'>
			    <div className="color-box-sections">
			        <div className="sketchingTitles">
			            <h3>LOFI and SKETCHING </h3>
			            <b>BROWSING and SELECTING EXERCISES</b>
			        </div>
			        <div className="grey-boxes">
			            <div className="box-left-red">
			                <img className="full-width" src={ lofiOne } alt="lofi-one" />
			            </div>
			            <div className="box-right-green">
			                <img className="full-width" src={ lofiTwo } alt="lofi-two" />
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
	renderAnnotations() {
		return (
		    <div className='left-to-full'>
		        <div className="dark-section">
		            <div className="container-left primary-dark-text">
		                <b>TEACHER ASSIGNMENTS PROGRESS TABLE</b>
		                <p>The table on this page shows the progress students have made on the teacher's assignment (assigned exercises).</p>
		            </div>
		            <div className="bigger-container assignments">
		                <img className="full-width" src={ lofiThree } alt="" />
		            </div>
		        </div>
		        <div className="dark-section">
		            <div className="container-left" >
		                <span className="subtitle"><b>INSIGHTS</b></span>
		                <div>
		                   <div className="dot"><span>1</span></div> 
		                    <div className="annotationText">
		                        <p className="boxed-text primary-dark-text"><b>STUDENTS LIST</b></p>
		                        <p className="boxed-text primary-dark-text">
		                            Students listed by class are changeable here. (One student is selected at any given time.)
		                        </p>
		                    </div>
		                </div>
		                <div>
		                   <div className="dot"><span>2</span></div> 
		                    <div className="annotationText">
		                        <p className="boxed-text primary-dark-text"><b>SKILLSET VALUES</b></p>
		                        <p className="boxed-text primary-dark-text">
		                            A list of the top 3 skillset weaknesses and strengths of the student. 
		                            (One skillset is selected at any given time.)
		                        </p>
		                    </div>
		                </div>
		                <div>
		                   <div className="dot"><span>3</span></div> 
		                    <div className="annotationText">
		                        <p className="boxed-text primary-dark-text"><b>SKILLSET EXAMPLES</b></p>
		                        <p className="boxed-text primary-dark-text">Writing examples of the selected skillset.</p>
		                    </div>
		                </div>
		                <div>
		                    <div className="dot"><span>4</span></div> 
		                    <div className="annotationText">
		                        <p className="boxed-text primary-dark-text"><b>PRACTICE EXERCISES</b></p>
		                        <p className="boxed-text primary-dark-text">Suggested exercises to assign for the skillset currently selected.</p>
		                    </div>
		                </div>
		            </div>
		            <div className="bigger-container">
		               <img className="full-width" src={ lofisAnnotated } alt="lofi-annotated" />
		            </div>
		        </div>
		    </div>
		)
	}
	renderFeedbackAndMore() {
		return (
			<div className="modal-section contains-colored-background">
			    <div className="feedback-box">
			        <h3>FEEDBACK</h3>
			        <p>I did user testing in the office (with non product employees) to get some quick thoughts on the layouts.</p>  
			        <p>
			            The second version was preferred for browsing exercises since it was more direct and less clunky. 
			            All  of the filters/controls were placed above the exercises and could be done in one step.
			        </p>
			    </div>
			    { this.renderAnnotations() }
			</div>
		)
	}
	renderWireframes() {
		return (
		    <div className="modal-section wireframes grey contains-colored-background">
		        <div className="regular">
		            <h3>WIREFRAMES</h3>
		            <span className="subtitle"><b>TEACHER EXERCISES</b></span>
		            <div className="wireframe">
		                <img className="full-width" src={ teacherExercisesWireframe } alt="teacher-exercises-wireframe" />
		            </div>
		        </div>
		        <div className="no-top">
		        <span className="subtitle exercises"><b>STUDENT EXERCISES</b></span>
		            <p>The student experience is quite simple as the only thing they can do is select an exercise to work on.</p>
		            <div className="wireframe">
		                <img className="full-width" src={ studentExercisesWireframe } alt="student-exercises-wireframe" />
		            </div>
		        </div>
		        <div className="no-top">
		            <span><b>ASSIGNMENTS</b></span>
		            <p>The teacher dashboard has a progress table (bottom right) that shows student progression on their assignment.</p>
		            <div className="wireframe">
		                <img className="full-width" src={ teacherHomePageWireframe } alt="teacher-exercises-wireframe" />
		            </div>
		        </div>
			    <div className="bottom-box-content">
			        <h3>FEEDBACK</h3>
			        <div className="bottom-div">
			            <div className='bottom-content'>
			                <b>FILTERING</b>
			                <p>Some teachers had trouble finding the exercises they wanted. We came up with several ideas of potential filters:</p>
			                <p>Filter exercises by learning type (visual, audible, reading, etc)
			                   Filter exercises by prior reading vs. text provided in exercise
			                   Filter exercises by time estimate
			                   Filter exercises by traditional (mostly writing) vs. reward (more creative)
			                   Filter exercises by difficulty level
			                </p>
			            </div>
			            <div className="bottom-content">
			                <b>CONSTRAINTS</b>
			                <p>Teachers often have 20 or 30 students in their assignment progress table, and maybe only assign 2 exercises. This would create a pretty big discrepancy between the height of the assignments box and the height of the progress table-making it a bit of an awkward experience.</p>
			            </div>
			        </div>
			        <div className="bottom-div">
			            <div className='bottom-content'>
			                <b>WORDING</b>
			                <p>
			                In the assignment creation, the word "delete" was confusing as it seemed to imply that doing so would delete the exercises (instead of merely deleting the assignment).
			                </p>
			            </div>
			            <div className="bottom-content">
			                <b>DIFFERENTIATE</b>
			                <p>To start, we only supported the ability to assign exercises to all of a teacher's students at once. There was already a lot of interest in being able to assign groups of students different exercises.</p>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
	renderFinalVersion() {
		return (
			<div className="modal-section final-section">
			    <div className="container">
			        <h3>FINAL VERSION</h3>
			        <b>TEACHER EXERCISES</b>
			        <p>
			            After hearing teachers talk about their use of Pinterest again, I decided that we should use 
			            their knowledge of that interface to our advantage.  By mimicking aspects of that interface we could 
			            make their experience on Whooo's Reading that much smoother. 
			        </p>
			        <p>
			            The loading animation, buttons and thumbnail image on each exercise were all designed to orient users to 
			            their experience on Pinterest. I also decided to simplify it and remove the "inactive" exercises section. 
			            Meaning, that outside of assignments, teachers would not be able to control the exercises students do (on their own).
			        </p>
			        <img className="full-width gif-border" src={ finalVersionWRLite } alt="final-version"/>
			    </div>
			    <div className="container">
			        <b>ASSIGNMENTS</b>
			        <p>
			            I neatly stacked the assignment details on top of the assignments progress table. I also 
			            decided to simplify it and remove the frequency component for the first iteration.
			        </p>
			        <img className="full-width" src={ assignmentsFinal } alt="assignments"/>
			    </div>
			    <div className="container">
			        <b>INSIGHTS</b>
			        <img className="full-width insights gif-border" src={ insightsFinal } alt="insights"/>
			    </div>
			</div>
		)
	}	
	render() {
		return (
			<div>
				{ this.renderIntroduction() }
				{ this.renderResearch() }
				{ this.renderStrategy() }
				{ this.renderStructure() }
				{ this.renderSketching() }
				{ this.renderFeedbackAndMore() }
				{ this.renderWireframes() }
				{ this.renderFinalVersion() }
			</div>
		);
	}
}

export default withLoadState(withRouter(WorkOne));