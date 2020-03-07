import React from 'react'
// import './leftContainer.scss';
import '../../assets/sass/app.scss';
import { withRouter } from "react-router";
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import About from '../about/About';
import Home from './Home';
import Works from './Works';
import StudyOne from '../studies/StudyOne';
import StudyTwo from '../studies/StudyTwo';
import StudyThree from '../studies/StudyThree';

class RightContainer extends React.Component {
	startPreview() {
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
			var className = " preview";
			if (path.includes("works/studies/StudyOne") || path.includes("works/studies/StudyTwo") || path.includes("works/studies/StudyThree")) {
				var container = "noContainer";
			} else {
				var container = "outerContainer";
			}
		} else {
	    	if (path.includes("studies")) {
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
		    			<Route exact path="/works/studies/StudyOne" render={(props) => <StudyOne {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
		    			<Route exact path="/works/studies/StudyTwo" render={(props) => <StudyTwo {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
		    			<Route exact path="/works/studies/StudyThree" render={(props) => <StudyThree {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
		    			<Route exact path="/about" component={ About } />
		    			<Route exact path="/" component={ Home } />
		    		</Switch>
		    	</div>
				<Navbar location={ path } closeStudy={ this.props.closeStudy } />
		    </div>	
    	)
    }
}

export default withRouter(RightContainer)