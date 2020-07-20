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
import questionOne from "../../assets/images/data-center/question-one.png";
import questionTwo from "../../assets/images/data-center/question-two.png";
import questionThree from "../../assets/images/data-center/question-three.png";

import dashboardOld from "../../assets/images/data-center/dashboard-old.png";
import dataOld from "../../assets/images/data-center/data-old.png";

import newRelic from "../../assets/images/data-center/nr.png";
import classDojo from "../../assets/images/data-center/class-dojo.png";
import controls from "../../assets/images/data-center/controls.png";

import oldStructure from "../../assets/images/data-center/structure-old.png";
import newStructure from "../../assets/images/data-center/structure-new.png";

import dashboardAnnotated from "../../assets/images/data-center/annotation-dashboard.png";
import dataAnnotated from "../../assets/images/data-center/annotation-data.png";

import dashboardHIFIOne from "../../assets/images/data-center/hifi-dashboard-one.png";
import dashboardHIFITwo from "../../assets/images/data-center/hifi-dashboard-two.png";
import dataHIFIOne from "../../assets/images/data-center/hifi-data-one.png";
import dataHIFITwo from "../../assets/images/data-center/hifi-data-two.png";

import dashboardFinal from "../../assets/images/data-center/dashboard-final.gif";
import dataFinal from "../../assets/images/data-center/final-version.gif";

import '../../assets/sass/works/work-two.scss';


class WorkTwo extends React.Component {
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
		                The Whooo's Reading platform is a higher-level thinking alternative to 
		                multiple choice. Students write responses to open-ended questions about books 
		                they have read. Students re-associate reading with joy as they do good work and 
		                enjoy the gamified elements throughout the site.
		            </p>
		            <p>
		                In addition to helping teachers track their students’ independent reading and writing, 
		                Whooo’s reading also provides a significant amount of data on work students have completed.
		            </p>
		            <p>
		            	We heard from many teachers that they enjoyed the data experience. 
		            	However, we wanted to re-explore this experience for two reasons:
		            	<ol>
		            		<li>We knew of usability issues that needed to be fixed. </li>
		            		<li>
		            			We wanted to get a fuller understanding of what data users really wanted and 
		            			how we could better serve their data needs.
		            		</li>
		            	</ol>
		            </p>
		        </div>
		    </div>
		)
	}
	renderInterviews() {
		return (
			<div>
				<div className="modal-justify-left">
				    <p className="news-heading">
				        <h3>RESEARCH, STRATEGY, and CONCEPT</h3>
				    </p>
				    <div className="text">
				    <p>
				    	To get a sufficient amount of feedback I conducted user interviews, 
				    	sent out a survey, and reviewed feedback accumulated since our last release. 
				    </p>
				        <p className="all-caps news-sub-heading">User Interviews</p>
				        <p>
				        	I had phone calls with dozens of teachers around the country to hear 
				        	about their data experience on Whooo’s Reading. I wanted to know what data 
				        	they cared about, how they used it, and when they used it. 
				        </p>
				    </div>
				    <div className="news-format">
				        <div className="with-quote">
				            <div className="quoted"><span className="quote-span">&#8220;</span></div>
				            <div className="news-format-left">
				                <p>
				                   I like to give in-class Whooo’s Reading time for students to do 
				                   work on what they've read. I use data mainly to look at students 
				                   and see if they are able to answer higher level questions.
				                </p>
				            </div>
				        </div>
				        <div className="with-quote second-quote">
				            <div className="quoted"><span className="quote-span">&#8220;</span></div>
				            <div className="news-format-left">
				                <p>
				                	My goal with data is to see the progression of my students. My students are 
				                	required to read daily in class and at home. I look at data daily. The things 
				                	I look at the most are the Text Table and quizzes.
				                </p>
				            </div>
				        </div>
				    </div>
				    <p className="no-margin">
				    	I discovered that with many options to choose from, teachers are most interested in a few types of data and metrics. 
				    	Additionally, teachers use data to keep tabs on their students’ quantitative (goals) and qualitative work. 
				    </p>
				</div>
			</div>
		)
	}
	renderSurvey() {
		return (
			<div>
				<div className="second-content grey survey">
				    <div className="section-intro">
				        <p className="all-caps news-sub-heading">Survey</p>
				        <p>
				           The overwhelming majority of teachers said that finding data was easy or required a little effort.
				        </p>
				    </div>
				    <div className="double-images-wrapper">
				        <div className="modal-small-img">
				            <img src={ questionOne } alt="survey-question-one"/>
				        </div>
				    </div>
				</div>
				<div className="second-content grey survey">
				    <div className="section-intro">
				        <p>
				        	Teachers found data related to student reading and writing comprehension the most essential.
				        </p>
				    </div>
				    <div className="double-images-wrapper">
				        <div className="modal-small-img">
				            <img src={ questionTwo } alt="survey-question-two"/>
				        </div>
				    </div>
				</div>
				<div className="second-content grey survey">
				    <div className="section-intro">
				        <p>
				          	Teachers overwhelmingly responded that they were happy with the breadth of data options.
				        </p>
				    </div>
				    <div className="double-images-wrapper">
				        <div className="modal-small-img">
				            <img src={ questionThree } alt="survey-question-three"/>
				        </div>
				    </div>
				</div>
			</div>
		)
	}
	renderUsability() {
		return (
			<div className="usability">
				<p className="all-caps news-sub-heading">usability</p>
				<p>
					The following were the three most common usability issues I heard from our users:
					<ol>
						<li>
							On the dashboard, teachers wanted to be able to view all of their students across all of 
							their classes. They currently had to spend time toggling through each class.
						</li>
						<li>
							Teachers consistently complained that we did not have certain types of data. 
							Most of the time we indeed had the data but they were unable to find it.
						</li>
						<li>
							Teachers wanted to be able to sort quantitative data with filters such as “top” and “bottom” performers. 
						</li>
					</ol>
				</p>
			</div>
		)
	}
	renderSummary() {
		return (
		    <div className="feedback-box summary">
		        <p className="all-caps news-sub-heading">summary</p>
		        <ul>
		        	<li>We had the right data.</li>
		        	<li>We needed to improve usability.</li>
		        	<li>
		        		Teachers were overwhelmingly most concerned with qualitative data (i.e. quiz answers), 
		        		not quantitative data (i.e. number of questions answered).
		        	</li>
		        </ul>
		    </div>
		)
	}
	renderConcept() {
		return (
		    <div className="second-content concept">
		        <div className="section-intro">
		            <p className="all-caps news-sub-heading">concept</p>
		            <p>
		            	As shown above, our data experience comprised two pages: Teacher Dashboard and Data Page. 
		            	It highlighted the quantitative and qualitative student data available to teachers. 
		            	The dashboard had a table showing student progress toward goals set by the teacher and the 
		            	data page was where teachers could really dive into all of their data. 
		            </p>
		            <img className="full-width" src={ dashboardOld } alt="old-dashboard"/>
		            <img className="full-width lessMargin" src={ dataOld } alt="old-data"/>
		            <p>
		            	I wanted to keep the data page as the hub of the data experience while showing more 
		            	types of data and summaries on the teacher dashboard. This would put more of a focus on reading 
		            	comprehension (qualitative data), enhance the discovery of our data features, and make the data 
		            	experience lighter and more visual.
		            </p>
		            <p>
		            	The data page needed to be “flattened out” and simplified. The experience was cumbersome for a few reasons:
		            	<ol>
		            		<li><span>Each data type (in the dropdown) had numerous subtypes.</span></li>
		            		<li>
		            			There were too many clicks to find what you were looking for (in general and because of 
		            			the usability issues mentioned earlier).
		            		</li>
		            		<li>
		            			The filter dropdowns (controls) made the layout feel denser than it was because of how 
		            			inward facing it was. It felt like you were tunnelling deeper and deeper into the data 
		            			interface and was easy to feel lost in.
		            		</li>
		            	</ol>
		            </p>
		        </div>
		    </div>
		)
	}
	renderInspiration() {
		return (
			<div className="second-content concept">
			    <div className="section-intro">
			    	<h3>INSPIRATION</h3>
			    	<div>
			    		<p className="all-caps news-sub-heading">New Relic</p>
			    		<p>
			    			New Relic has a really insightful dashboard. The snippets of your apps/services provide a current 
			    			overview and reinforces the types of value you can get from their service. 
			    		</p>
			    		<img className="full-width" src={ newRelic } alt="new-relic" />
			    	</div>
			    	<div>
			    		<p className="all-caps news-sub-heading">Class Dojo</p>
			    		<p>
			    			Class Dojo has students laid out simply on the left and clicking on them brings up their 
			    			information on the right. This already felt like a simpler and more frictionless 
			    			way to display the student controls.
			    		</p>
			    		<img className="full-width" src={ classDojo } alt="class-dojo" />
			    	</div>
			    	<div>
			    		<p className="all-caps news-sub-heading">Controls</p>
			    		<p>
			    			Both New Relic and Class Dojo’s controls were wider and filled in (the space above the control 
			    			on hover and click). This made their controls feel a lot more friendly and satisfying to use.
			    		</p>
			    		<img className="full-width" src={ controls } alt="controls" />
			    	</div>
			    </div>
			</div>
		)
	}
	renderResearch() {
		return (
			<div className="modal-section grey contains-colored-background">
			    { this.renderInterviews() }
			    { this.renderSurvey() }
			    { this.renderUsability() }
			    { this.renderSummary() }
			    { this.renderConcept() }
			    { this.renderInspiration() }
			</div>  
		)
	}
	renderStructure() {
		return (
			<div className="modal-section">
			    <div className="modal-justify-left structure">
			        <h3>FLOW and STRUCTURE</h3>
			        <p className="no-margin">
			           The data page showed a wide variety of data and controls and needed to be cleaned up and reorganized.
			        </p>
			        <img className="full-width" src={ oldStructure } alt="old-structure"/>
			        <p>
			        	The new layout took the categories from the dropdown and abstracted them out into top level tabs. 
			        	Each tab is a different data category and has subtypes within it below. 
			        	This reduced the number of data subtypes shown (at any time) to less than five and made 
			        	the controls and flow feel much lighter. This consolidation lightened the experience enough 
			        	that we were able to add a new category as well. 
			        </p>
			        <p>
			        	Instead of finding students within a dropdown, students were brought out to the surface 
			        	level (on the left) and displayed openly. Although there was now a little less room for the 
			        	data content on the right, it was much easier to toggle through classes and students and made 
			        	the experience feel lighter and less tunnelled.
			        </p>
			        <img className="full-width" src={ newStructure } alt="new-structure"/>
			    </div>
			</div>
		)
	}
	renderDasboardAnnotation() {
		return (
			<div>
				<div>
					<p className="all-caps news-sub-heading">dashboard</p>
				   <p>
				   		This dashboard shows several data snippets or digests focused on qualitative data. 
				   		These essentially provide a quick look into many of the qualitative data types that 
				   		can be viewed in full on the data page.
				   </p>
				</div>
				<div className="dark-section">
				    <div className="container-left" >
				        <div>
				           <div className="dot"><span>1</span></div> 
				            <div className="annotationText">
				                <p className="boxed-text primary-dark-text"><b>DATA SNIPPETS</b></p>
				                <p className="boxed-text primary-dark-text">
				                    Each snippet shows a truncated version of the data.  
				                </p>
				            </div>
				        </div>
				        <div>
				           <div className="dot"><span>2</span></div> 
				            <div className="annotationText">
				                <p className="boxed-text primary-dark-text"><b>SEE MORE</b></p>
				                <p className="boxed-text primary-dark-text">
				                    Take a deeper look at the data type (by going to it on the data page).
				                </p>
				            </div>
				        </div>
				        <div>
				           <div className="dot"><span>3</span></div> 
				            <div className="annotationText">
				                <p className="boxed-text primary-dark-text"><b>VARIETY OF DATA</b></p>
				                <p className="boxed-text primary-dark-text">See the variety of Whooo’s Reading data types.</p>
				            </div>
				        </div>
				    </div>
				    <div className="bigger-container">
				       <img src={ dashboardAnnotated } alt="dashboard-annotated" />
				    </div>
				</div>
			</div>
		)
	}
	renderDataAnnotation() {
		return (
			<div>
				<div className="data-annotation">
					<p className="all-caps news-sub-heading">data</p>
				   <p>
				   		The filters and controls were the main things that changed on the data page. 
				   		These changes made the interface more usable and easier to navigate.
				   </p>
				</div>
				<div className="dark-section">
				    <div className="container-left" >
				        <div>
				           <div className="dot"><span>1</span></div> 
				            <div className="annotationText">
				                <p className="boxed-text primary-dark-text"><b>TAB NAVIGATION</b></p>
				                <p className="boxed-text primary-dark-text">
				                    Top level data categories  
				                </p>
				            </div>
				        </div>
				        <div>
				           <div className="dot"><span>2</span></div> 
				            <div className="annotationText">
				                <p className="boxed-text primary-dark-text"><b>CLASSES</b></p>
				                <p className="boxed-text primary-dark-text">
				                    All students are isted and selectable
				                </p>
				            </div>
				        </div>
				        <div>
				           <div className="dot"><span>3</span></div> 
				            <div className="annotationText">
				                <p className="boxed-text primary-dark-text"><b>FILTERS</b></p>
				                <p className="boxed-text primary-dark-text">Data can be sorted by several filters.</p>
				            </div>
				        </div>
				    </div>
				    <div className="bigger-container">
				       <img src={ dataAnnotated } alt="data-annotated" />
				    </div>
				</div>
			</div>
		)
	}
	renderAnnotations() {
		return (
		    <div className='modal-section left-to-full grey'>
		    	<h3>LOFI and SKETCHING</h3>
		        { this.renderDasboardAnnotation() }
		        { this.renderDataAnnotation() }
		    </div>
		)
	}
	renderHIFI() {
		return (
		    <div className="modal-section">
		        <div className="">
		            <h3>WIREFRAMES</h3>
		            <div className="wireframes">
		            	<p className="all-caps news-sub-heading">dashboard</p>
		                <img className="full-width hifi-one" src={ dashboardHIFIOne } alt="dashboard-wireframe" />
		                <img className="full-width" src={ dashboardHIFITwo } alt="dashboard-wireframe" />

	                	<p className="all-caps news-sub-heading">data</p>
	                    <img className="full-width hifi-one" src={ dataHIFIOne } alt="data-wireframe" />
	                    <img className="full-width" src={ dataHIFITwo } alt="data-wireframe" />
		            </div>
		        </div>
			</div>
		)
	}
	renderFinalVersion() {
		return (
			<div className="modal-section final-section">
				<h3>FINAL VERSION</h3>
			    <div className="container">
			       	<p className="all-caps news-sub-heading">dashboard</p>
			        <img className="full-width gif-border" src={ dashboardFinal } alt="dashboard-final"/>
			    </div>
			    <div className="container">
			        <p className="all-caps news-sub-heading">data</p>
			        <img className="full-width gif-border" src={ dataFinal } alt="data-final"/>
			    </div>
			</div>
		)
	}
	renderTakeaways() {
		return (
			<div className="bottom-box-content">
			    <h3>TAKEAWAYS</h3>
			    <div className="bottom-div">
			        <div className='bottom-content'>
			            <b>NAVIGATION</b>
			            <p>
			            	If you have many options, consider using smaller subsets than having long lists of options. 
			            	It is much easier to navigate and find what you are looking for. 
			            </p>
			        </div>
			        <div className="bottom-content">
			            <b>INFORMATION OVERLOAD</b>
			            <p>It is hard to maintain an experience that has an abundance of customization.</p>
			        </div>
			    </div>
			    <div className="bottom-div">
			        <div className='bottom-content'>
			            <b>DISCOVERY</b>
			            <p>
			            	If users don’t know about a feature or data type that you indeed have, then you have a usability problem.
			            </p>
			        </div>
			    </div>
			</div>
		)
	}
	render() {
		return (
			<div className="work-two-container">
				{ this.renderIntroduction() }
				{ this.renderResearch() }
				{ this.renderStructure() }
				{ this.renderAnnotations() }
				{ this.renderHIFI() }
				{ this.renderFinalVersion() }
				{ this.renderTakeaways() }
			</div>
		);
	}
}

export default withLoadState(withRouter(WorkTwo));