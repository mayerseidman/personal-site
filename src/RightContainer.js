import React from 'react'
// import './leftContainer.scss';
import './App.scss';
import { withRouter } from "react-router";
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import About from './About';
import Home from './Home';
import Works from './Works';
import StudyOne from './Studies/StudyOne';
import StudyTwo from './Studies/StudyTwo';
import StudyThree from './Studies/StudyThree';

class RightContainer extends React.Component {
	startPreview() {
		console.log("PREVIEW")
	}
	componentDidMount() {
	  window.addEventListener('resize', this.resize.bind(this))
	}
	componentWillUnmount() {
	  window.removeEventListener('resize', this.resize)
	}
	resize() { 
		this.forceUpdate()
	}
    render() {
    	let { match, location } = this.props;
    	var path = location.pathname;

    	// Seudo Check for mobile or web...
		if(window.innerWidth <= 1075 && window.innerHeight <= 820) {
			console.log("SWITCH IT UP")
			var className = " preview";
			if (path.includes("works/Studies/StudyOne") || path.includes("works/Studies/StudyTwo") || path.includes("works/Studies/StudyThree")) {
				var container = "noContainer";
			} else {
				var container = "outerContainer";
			}
		} else {
			console.log("NNOOPE")
	    	if (path.includes("Studies")) {
				var className = "expand";		
	    	}
	    	var container = "outerContainer";
	   	}

	   	if (path == "/") {
	   		var className = " fadeInRight";
	   	} else if (path == "ab") {}

    	return (
		    <div className={ "rightContainer " + className }>
		    	<div className={ container }>
		    		<Switch>
		    			<Route exact path="/works" component={ Works } render={(props) => <Works {...props} onClick={ this.startPreview.bind(this) } />}/>
		    			<Route exact path="/works/Studies/StudyOne" render={(props) => <StudyOne {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
		    			<Route exact path="/works/Studies/StudyTwo" render={(props) => <StudyTwo {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
		    			<Route exact path="/works/Studies/StudyThree" render={(props) => <StudyThree {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
		    			<Route exact path="/about" component={ About } />
		    			<Route exact path="/" component={ Home } />
		    		</Switch>
		    		<div class="push"></div>
		    	</div>
				<Navbar location={ path } closeStudy={ this.props.closeStudy } />
		    </div>	
    	)
    }
}

export default withRouter(RightContainer)