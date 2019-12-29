import React from 'react'
// import './leftContainer.scss';
import './App.scss';
import { withRouter } from "react-router";

// Is there a way to access like this -- this.interval - dont use state?

class leftContainer extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { wordValue: "Designer", currentCount: 10, minimized: false };
	}

	getChangedText() {
		var words = ["neat", "great", "best", "groovy"];
	    i = (i + 1) % words.length;
	    return words[i];
	}
	changeText() {
	    var text = this.getChangedText();
	    this.setState({ wordValue: text })
	}

	componentDidMount() {
		var intervalIdTimer = setInterval(this.timer.bind(this), 1000);
		var intervalIdScrambler = setInterval(this.changeText.bind(this), 1000);
		this.setState({ intervalIdTimer: intervalIdTimer, intervalIdScrambler: intervalIdScrambler });

		let { match, location, history } = this.props;
		var path = location.pathname;
		if (path == "/works/one") {
			this.setState({ minimized: true })
		}
	}

	componentWillUnmount() {
	   // use intervalId from the state to clear the interval
	   clearInterval(this.state.intervalIdTimer);
	}

	timer() {
	   // setState method is used to update the state
		var newCount = this.state.currentCount - 1;
		if(newCount >= 0) { 
		  this.setState({ currentCount: newCount });
		} else {
		  clearInterval(this.state.intervalIdTimer);
		  clearInterval(this.state.intervalIdScrambler)
		}
	}
    render() {
    	if (this.state.currentCount == 0) {
    		var title = "UI UX Designer";
    	} else {
    		var title = this.state.wordValue
    	}
    	let { match, location, history } = this.props;
    	var path = location.pathname;
    	if (path.includes("StudyOne")) {
    		var title = "Reading Comprehension Tool";
    		if (this.props.currentView == "preview") {
    			var classNameOne = "minimize"
    			var previewTopClassName = "previewTop"
    			var infoContainer = (
    				<div className={ "infoContainer preview " + previewTopClassName }>
    			    	<p className="title">{ title }</p>
    			        <span className="circleDivider"></span>
    			        <p className="studyPreviewText">Led team in creating several interfaces from scratch, carrying them through the various stages of UX design.</p>
    			        <span className="circleDivider"></span>
    			        <p className="studyRolesText">Research, UI/UX, Visual, User Feedback</p>
    				</div>
    			)	
    		} else if (this.props.currentView == "startStudy") {
    			var classNameOne = "exterminate"
    			var infoContainer = (
    				<div className="infoContainer">
    				    <div>
    				    	<p className="title">{ title }</p>
    				    </div>
    				</div>
    			)
    		}
    	} else if (path.includes("StudyTwo")) {
    		var title = "Student Roster Design";
			if (this.props.currentView == "preview") {
				var classNameOne = "minimize"
				var previewTopClassName = "previewTop"
				var infoContainer = (
					<div className={ "infoContainer preview " + previewTopClassName }>
				    	<p className="title">{ title }</p>
				        <span className="circleDivider"></span>
				        <p className="studyPreviewText">Created a new interface to handle batch processing for teachers and their students.</p>
				        <span className="circleDivider"></span>
				        <p className="studyRolesText">Research, UI/UX, Visual</p>
					</div>
				)	
			} else if (this.props.currentView == "startStudy") {
				var classNameOne = "exterminate"
				var infoContainer = (
					<div className="infoContainer">
					    <div>
					    	<p className="title">{ title }</p>
					    </div>
					</div>
				)
			}
    	} else if (path.includes("StudyThree")) {
			if (this.props.currentView == "preview") {
				var classNameOne = "minimize"
				var previewTopClassName = "previewTop"
				var infoContainer = (
					<div className={ "infoContainer preview " + previewTopClassName }>
				    	<p className="title">Avatars <span className="andText">and</span> E-Commerce Design</p>
				        <span className="circleDivider"></span>
				        <p className="studyPreviewText">Re-designed a fun shop for a better user experience.</p>
				        <span className="circleDivider"></span>
				        <p className="studyRolesText">Research, UI/UX, Visual</p>
					</div>
				)	
			} else if (this.props.currentView == "startStudy") {
				var classNameOne = "exterminate"
				var infoContainer = (
					<div className="infoContainer">
					    <div>
					    <p className="title">Avatars <span className="andText">and</span> E-Commerce Design</p>
					    </div>
					</div>
				)
			}
    	} else {
    		if (path == "/") {
    			var className = " fadeInLeft"
    		}
    		var infoContainer = (
    			<div className={ "infoContainer " + className }>
    				<p className="name">Mayer Seidman</p>
    				<span className="circleDivider"></span>
    				<p className="title">{ title }</p>
    			</div>	
    		)
    	}
    	return (
    		<div className={ "leftContainer " + classNameOne }>
    			<div className="outerContainer">{ infoContainer }</div>
    		</div>
    	)
    }
}

var i = 0;

export default withRouter(leftContainer)