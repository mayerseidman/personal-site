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
import finalVersionSunsets from "../../assets/images/sunsets-are-awesome.gif";

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
		                With the mountains and ocean in view, there are plenty of beautiful sunset views in Vancouver, Canada 
		                (that’s my home). However, I was often unsure if the day’s sunset would be worth heading to the beach or not. 
		                It seemed that really cloudy days did not produce great sunsets but other than that, I had no idea what to expect. 
		                I needed a reliable way of predicting the day's sunset quality.
		            </p>
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
			            <p className="all-caps news-sub-heading">Idea</p>
			            <p>
			            	After some research (hint-Googling), I discovered a really neat service called 
			            	<a href="https://sunsetwx.com/" target="_blank">SunsetWx</a> that uses numerous meteorological 
			            	factors to create sunrise and sunset forecasts. I discovered that they had an API and like that-the project began! 
			            	I wanted to create a web app (called Sunsets Are Awesome) that would do two things:
			            	<ol>
			            		<li>Find and display the user’s sunset forecas.</li>
			            		<li>Allow users to sign up for a daily SMS with their sunset forecast.</li>
			            	</ol>
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
			    </div>
			</div>  
		)
	}
	renderStrategy() {
		return (
			<div className="modal-section contains-colored-background">
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
			        <img className="full-width gif-border" src={ finalVersionSunsets } alt="final-version"/>
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