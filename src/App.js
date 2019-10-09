import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter, useLocation } from "react-router";
import { createBrowserHistory } from "history";

import './App.scss';
import Works from './Works';
import StudyOne from './StudyOne';
import StudyTwo from './StudyTwo';
import Navbar from './Navbar';
import LeftContainer from './LeftContainer';

// import logo from './logo.svg';
// img src={logo}
const history = createBrowserHistory();

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = { wordValue: "Designer", currentCount: 10 };
	}
	componentDidMount() {
		
	}

	render() {
		var leftContainer = (<LeftContainer history={ history } />)
		return (
			<div className="portfolioContainer">
				<Router history={ history }>
					{ leftContainer }
				    <div className="rightContainer">
		    			<Switch>
		    				<Route exact path="/works" component={ Works } />
		    				<Route exact path="/works/one" component={ StudyOne } />
		    				<Route exact path="/works/two" component={ StudyTwo } />
		    				<Route exact path="/about" component={ About } />
		    				<Route exact path="/" component={ Home } />
		    			</Switch>
			    		<Navbar />
				    </div>
			    </Router>	
			</div>
		)
	}
}

export default App;

function Home() {
	return (
		<div className="section homeSection">
			<p>Hi, I’m <span className="firstName">Mayer</span>.</p>
			<p className="quoteContainer"><span className="quote">"People can feel perfection."</span> - Walt Disney</p>
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