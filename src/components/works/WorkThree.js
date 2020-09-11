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

// IMAGES
import VideoLooper from 'react-video-looper';
import sampleVideo from '../../assets/images/sunsets-are-awesome/sunsets.mp4'

import finalVersionSunsets from "../../assets/images/sunsets-are-awesome/final-version.gif";
import sunsetWXInfo from "../../assets/images/sunsets-are-awesome/sunsetwx-info.png";

import sunsetMountains from "../../assets/images/sunsets-are-awesome/sunset-mountains.png";
import dribbbleImage from "../../assets/images/sunsets-are-awesome/dribbble.png";

import lofisCombined from "../../assets/images/sunsets-are-awesome/lofis-combined.png";
import hifiFirstImage from "../../assets/images/sunsets-are-awesome/hifi-one.png";
import hifiSecondImage from "../../assets/images/sunsets-are-awesome/hifi-two.png";
import hifiThirdImage from "../../assets/images/sunsets-are-awesome/hifi-three.png";
import hifiMobileImage from "../../assets/images/sunsets-are-awesome/hifi-mobile.png";

import oldSMS from "../../assets/images/sunsets-are-awesome/old-sms.png";
import newSMS from "../../assets/images/sunsets-are-awesome/new-sms.png";
import imageWork from "../../assets/images/sunsets-are-awesome/sun-images.png";

class WorkOne extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	renderIntroduction() {
		return (
		    <div className="modal-section">
		        <div className="modal-justify-left">
		            <div className='left-to-full'>
		                <div className="dark-section">
		                    <div className="container-left primary-dark-text">
		                        <b>INTRODUCTION</b>
		                    	<p>
		                    		With the mountains and ocean in view, there are plenty of beautiful sunset views in Vancouver, Canada 
		                    		(that’s my home). However, I was often unsure if the day’s sunset would be worth heading to the beach or not. 
		                    		It seemed that really cloudy days did not produce great sunsets but other than that, I had no idea what to expect. 
		                    		I needed a reliable way of predicting the day's sunset quality.
		                    	</p>
		                    </div>
		                    <div className="bigger-container assignments">
		                        <img src={ sunsetMountains } className="full-width" alt="sunset-mountains"></img>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>  
		)
	}
	renderStrategy() {
		return (
			<div className="modal-section grey">
			    <div className="modal-justify-left">
			        <p className="news-heading">
			            <h3>STRATEGY, and CONCEPT</h3>
			        </p>
			        <div className='left-to-full'>
			            <div className="dark-section">
			                <div className="container-left primary-dark-text">
			                    <b>IDEA</b>
			                	<p>
			                		After doing some research, I discovered a really neat service called 
			                		<a className="text-link" href="https://sunsetwx.com/" target="_blank"> SunsetWx</a> that uses numerous meteorological 
			                		factors to create sunrise and sunset forecasts. I discovered their API and found that it provided a nice amount
			                		of information to work with.
			                	</p>
			                	<p>
			                		I wanted to create a web app that would find and display the user’s sunset forecast. 
			                		I also wanted to allow users to be able to receive a daily text message with their sunset forecast. 
			                		I thought the text message would be helpful as a quick, simple, and consistent way to learn about the upcoming sunset. 
			                	</p>	
			                	<p className="">
			                		Here are the basic tasks I wanted a user to be able to accomplish:
			                		<ol>
			                			<li>Find sunset forecast</li>
			                			<li>View forecasting rubric (based on the API documentation)</li>
			                			<li>Sign up for daily text message</li>
			                			<li>Receive daily text message</li>
			                		</ol>
			                	</p>
			                </div>
			                <div className="bigger-container assignments">
			                   <img src={ sunsetWXInfo } className="full-width" alt="sunset-api-information"></img>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>  
		)
	}
	renderResearch() {
		return (
			<div className='modal-section left-to-full'>
			    <div className="color-box-sections">
			        <div className="sketchingTitles">
			            <h3>RESEARCH</h3>
			        </div>
			        <p>
			        	I looked at a few weather apps and sites for inspiration and to help brainstorm ideas for
			        	what I wanted to create. Here are some of the things I found:
			        </p>
			        <ul>
			        	<li>They were often quite light on information.</li>
			        	<li>The designs often had nice visuals associated with weather-i.e., backgrounds, colors, and images.</li>
			        </ul>
			        <img className="full-width extraMargin" src={ dribbbleImage } alt="dribbble" />
			    </div>
			</div>
		)
	}
	renderSketching() {
		return (
			<div className='modal-section left-to-full grey'>
			    <div className="color-box-sections">
			        <div className="sketchingTitles">
			            <h3>LOFI and SKETCHING </h3>
			        </div>
			        <p>
			        	I did a quick sketch to get a feel for what the layout could look like. I expected 
			        	this experience to be light on information and that I would have plenty of room to play with. 
			        	I felt that the best option was the simple side by side layout. On mobile, this would then stack.
			        </p>
			        <img className="full-width extraMargin" src={ lofisCombined } alt="lofis" />
			    </div>
			</div>
		)
	}
	renderWireframesInitial() {
		return (
		    <div className="modal-section wireframes contains-colored-background">
		        <div className="regular">
		            <h3>WIREFRAMES</h3>
		            <p>
		            	I added two dynamic elements that I thought would tie the experience together nicely and make it more enjoyable. The first, was
		            	to make the sun spin around when the <i>Find My Sunset</i> was clicked or if the sun was clicked directly.
		            	The second, was to adjust the background of the results section (on the right) 
		            	based on the the user’s (forecasted) sunset quality-i.e., <i>Great</i>, would be the most vibrant and 
		            	<i> Poor</i> would be rather dark and gloomy. I used gradients for the background as I 
		            	thought that aligns nicely with the way sunsets happen in nature.
		            </p>
		            <div className="wireframe">
		                <img className="full-width extraMargin" src={ hifiFirstImage } alt="hifi-one" />
		            </div>
		        </div>
			</div>
		)
	}
	renderRevision() {
		return (
			<div className="modal-section contains-colored-background">
			    <div className="feedback-box">
			        <h3>Feedback</h3>
			    	<p>
			        	I showed the mockups to a few potential users and got valuable feedback. They felt that the results section could 
			        	be more dynamic. It fell kind of flat and was missing something.
			    	</p>
			    </div>
			</div>
		)
	}
	renderWireframesFinal() {
		return (
		    <div className="modal-section wireframes contains-colored-background">
		        <div className="regular">
		            <b>INITIAL VERSION</b>
		            <p>
		            	I tried using a real sunset image as the background instead of the gradient. It was nicer to look at and definitely
		            	more engaging. However, there were two issues with this approach:
		            	<ol>
		            		<li>
		            			It was difficult to find images that did not obscure the results content.
		            		</li>
		            		<li>It was also difficult to find images that represented each quality type (<i>Great, Good, Fair, Poor</i>) clearly.</li>
		            		<li>The sun image needed work to fit with the realistic aesthetic.</li>
		            	</ol>
		            </p>
		            <div className="wireframe">
		                <img className="full-width extraMargin" src={ hifiSecondImage } alt="hifi-two" />
		            </div>
		            <div className="secondVersion">
		            	<b>SECOND VERSION</b>
		            	<p>
		            		I found a light image of clouds and decided to use that as the background for the home page. This image worked so well that
		            		I chose to layer the gradients over it for the various quality types. This looked nice and also made the overall experience
		            		more consistent. 
		            	</p>
		            	<div className="wireframe">
		            	    <img className="full-width extraMargin" src={ hifiThirdImage } alt="hifi-three" />
		            	</div>
		            	<div className="wireframe">
		            	    <img className="full-width extraMargin hifiMobile" src={ hifiMobileImage } alt="hifi-mobile" />
		            	</div>
		            </div>
		        </div>
			</div>
		)
	}

	renderSMS() {
		return (
			<div>
				<div className="second-content grey survey">
				    <div className="section-intro">
						<h3>DAILY TEXT MESSAGE</h3>
						<p>
							I constructed a text message
							that had an image (of a city) with the sunset information placed on top of it. 
							The implementation was a bit tricky and required
							several steps:
							<ul>
								<li>Retrieve user's sunset forecast from the API</li>
								<li>Create a PDF and position the image and text on it (<a className="text-link" href="https://github.com/foliojs/pdfkit" target="_blank">PDFKit</a>)</li>
								<li>Take a screenshot of that PDF (<a className="text-link" href="https://github.com/yakovmeister/pdf2image" target="_blank">pdf2image</a>)</li>
								<li>Send the image within the text message via <a className="text-link" href="https://www.twilio.com/" target="_blank">Twilio</a></li>
							</ul>
				        </p>
				    </div>
				    <div className="double-images-wrapper">
				        <div className="modal-small-img">
				            <img src={ oldSMS } alt="survey-question-one"/>
				        </div>
				    </div>
				</div>
				<div className="second-content grey survey">
				    <div className="section-intro">
				        <p>
				        	Although the technical implementation was fun and challenging, the solution was a bit clunky and also unecessary. I realized (and got feedback)
				        	that the current text message was too complicated. It would be far simpler and useful to receive a text message that basically mirrored the sunset forecast 
				        	information shown on the web app.
				        </p>
				    </div>
				    <div className="double-images-wrapper">
				        <div className="modal-small-img">
				            <img src={ newSMS } alt="survey-question-two"/>
				        </div>
				    </div>
				</div>
			</div>
		)
	}

	renderImageWork() {
		return (
			<div className="modal-section final-section">
			    <div className="container">
			        <h3>IMAGE WORK</h3>
			        <p>
			        	I wanted a sun image that would be fun, light, and fit the overall theme of the site (soft shapes like the clouds). Here is the 
			        	evolution of the sun and how it turned out!
			        </p>
			        <div className="wireframe">
		            	<img className="full-width extraMargin" src={ imageWork } alt="hifi-mobile" />
		            </div>
			    </div>
			</div>
		)
	}	

	renderFinalVersion() {
		return (
			<div className="modal-section grey">
			    <div className="container">
			        <h3>FINAL VERSION</h3>
			        <div className="video"><VideoLooper source= { sampleVideo } objectFit="contain" start={ 0 } end={ 10 } /></div> 
			    </div>
			</div>
		)
	}	
	renderTakeaways() {
		return (
			<div className="modal-section contains-colored-background">
			    <div className="feedback-box">
			    	<h3>WHAT I LEARNED</h3>
			        <div className=''>
			            <b>INSPIRATION</b>
			            <p>
			            	Use nature as inspiration-especially when creating something related to it.
			            </p>
			        </div>
			        <div className="">
			            <b>USE CASES</b>
			            <p>Make sure you know what information users really need and how they will use it.</p>
				    </div>
			    </div>
			</div>
		)
	}
	render() {
		return (
			<div className="sunsetsWork">
				{ this.renderIntroduction() }
				{ this.renderStrategy() }
				{ this.renderResearch() }
				{ this.renderSketching() }
				{ this.renderWireframesInitial() }
				{ this.renderRevision() }
				{ this.renderWireframesFinal() }
				{ this.renderSMS() }
				{ this.renderImageWork() }
				{ this.renderFinalVersion() }
				{ this.renderTakeaways() }
			</div>
		);
	}
}

export default withLoadState(withRouter(WorkOne));