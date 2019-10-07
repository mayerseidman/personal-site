import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.scss';
import Works from './Works';
import StudyOne from './StudyOne';
import StudyTwo from './StudyTwo';
import Navbar from './Navbar';

// import logo from './logo.svg';
// img src={logo}

export default class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = { wordValue: "Designer", currentCount: 10 };
	}

	getChangedText() {
		var words = ["neat", "great", "best", "groovy"];
	    i = (i + 1) % words.length;
	    return words[i];
	}
	changeText() {
	    var text = this.getChangedText();
	    console.log(text);
	    this.setState({ wordValue: text })
	}

	componentDidMount() {
		var intervalIdTimer = setInterval(this.timer.bind(this), 1000);
		var intervalIdScrambler = setInterval(this.changeText.bind(this), 1000);
		this.setState({ intervalIdTimer: intervalIdTimer, intervalIdScrambler: intervalIdScrambler });
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
		var leftContainer = (
			<div className="leftContainer">
				<div className="infoContainer">
					<p className="name">Mayer Seidman</p>
					<span className="circleDivider"></span>
					<p className="title">{ title }</p>
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
			    		<Navbar />
			    	</Router>	
			    </div>
			</div>
		)
	}
}

var i = 0;

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