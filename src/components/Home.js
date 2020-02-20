
import React from 'react'
import '../assets/sass/app.scss';
import { withRouter } from "react-router";
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import About from './about/About';
import Works from './Works';
import StudyOne from './studies/StudyOne';
import StudyTwo from './studies/StudyTwo';
import StudyThree from './studies/StudyThree';

class Home extends React.Component {
    render() {
    	let { match, location } = this.props;
    	var path = location.pathname;

    	if(window.innerWidth <= 800 && window.innerHeight <= 820) {
			if (path == "/") {
				var className = " fadeInLeft";
			}
		}
	   	
	   	return (
	   		<div className={ "section homeSection fadeInBottom " + className }>
    		<div className="">
    			<p>Hi, I’m <span className="firstName">Mayer</span>.</p>
    			<p className="quoteContainer mobileHide"><span className="quote">"People can feel perfection."</span> - Walt Disney</p>
    			<p className="mobileHide">No, I am not perfect. This quote means a lot to me though, because I think the details are essential. People can feel the sweat and effort that goes into everything we produce.</p>
    	
    			<p>I spend my days as a designer at <a className="regularLink" href="https://www.whooosreading.org/" target="_blank">WhooosReading</a>.</p>
    			<p>I like creating things that are <a className="regularLink" href="https://github.com/mayerseidman" target="_blank">fun and help others.</a></p>
    			<p>I enjoy writing about <a className="regularLink" href="https://medium.com/design-ideas-thoughts" target="_blank">UI/UX topics</a>.</p>
    			<p>I help others grow and share skills as a moderator in a <a className="regularLink" href="https://www.facebook.com/groups/JSLive/" target="_blank">Javascript FB Group</a>.</p>
    		</div>
    	</div>
	   	)
    }
}

export default Home;