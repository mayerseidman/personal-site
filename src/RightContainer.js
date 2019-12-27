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
    render() {
    	let { match, location } = this.props;
    	var path = location.pathname;

    	// Seudo Check for mobile or web...
		if(window.innerWidth <= 800 && window.innerHeight <= 820) {
			console.log("SWITCH IT UP")
			var className = " preview";
		} else {
			console.log("NNOOPE")
	    	if (path.includes("Studies")) {
				var className = "expand";		
	    	}
	   	}

	   	if (path == "/") {
	   		var className = " fadeInRight";
	   	}

    	return (
		    <div className={ "rightContainer " + className }>
				<Switch>
					<Route exact path="/works" component={ Works }/>
					<Route exact path="/works/Studies/StudyOne" render={(props) => <StudyOne {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
					<Route exact path="/works/Studies/StudyTwo" render={(props) => <StudyTwo {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
					<Route exact path="/works/Studies/StudyThree" render={(props) => <StudyThree {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
					<Route exact path="/about" component={ About } />
					<Route exact path="/" component={ Home } />
				</Switch>
				<Navbar location={ path } closeStudy={ this.props.closeStudy } />
		    </div>	
    	)
    }
}

export default withRouter(RightContainer)