import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.scss';
import Works from './Works';

// import logo from './logo.svg';
// img src={logo}

export default class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = { };
	}

	render() {
		return (
			<div className="portfolioContainer">
			    <div className="rightContainer">
		    		<Router>
		    			<switch>
		    				<Route exact path="/" component={ Home } />
		    				<Route path="/works" component={ Works } />
		    				<Route path="/about" component={ About } />	
		    			</switch>
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
		<div>Home</div>
  	);
}


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}