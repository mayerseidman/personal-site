import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.scss';
import Works from './Works';
import StudyOne from './StudyOne';
import StudyTwo from './StudyTwo';

// import logo from './logo.svg';
// img src={logo}

export default class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = { };
	}

	render() {
		var leftContainer = (
			<div className="leftContainer">
				<div className="infoContainer">
					<p className="name">Mayer Seidman</p>
					<p className="title">Designer <span className="circleDivider"></span> Developer</p>
				</div>
			</div>
		)
		return (
			<div className="portfolioContainer">
				{ leftContainer }
			    <div className="rightContainer">
		    		<Router>
		    			<Switch>
		    				<Route exact path="/" component={ Home } />
		    				<Route exact path="/works" component={ Works } />
		    				<Route exact path="/works/one" component={ StudyOne } />
		    				<Route exact path="/works/two" component={ StudyTwo } />
		    				<Route exact path="/about" component={ About } />	
		    			</Switch>
			    		<div className="navbarContainer">
				    		<ul className="navbar">
				    			<li className="navItem homeLink"><Link to="/">//</Link></li>
				    			<li className="navItem"><Link to="/works">Works</Link></li>
				    			<li className="navItem"><Link to="/about">About</Link></li>
				    			<li className="navItem"><a href="#">Resume</a></li>
				    		</ul>
				    	</div>
			    	</Router>	
			    </div>
			</div>
		)
	}
}

function Home() {
	return (
		<div className="section homeSection">
			<p>Hi, I’m <span className="firstName">Mayer</span>.</p>
			<p>No, I am not perfect. This quote means a lot to me because I think the details are essential. People can feel the sweat and effort that goes into everything we produce…</p>
			<p>I spend my days as a designer and developer at <a href="" target="_blank">WhooosReading</a>.</p>
			<p>I like creating things that help others and… <a href="" target="_blank">link to github...</a>  </p>
			<p>I enjoy writing about <a href="" target="_blank">UI/UX topics</a>. </p>
			<p>I help others grow and share skills as a moderator in <a href="" target="_blank">React FB Group</a></p>
		</div>
  	);
}


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}