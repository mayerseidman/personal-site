import React from 'react'
// import './leftContainer.scss';
import './App.scss';
import { withRouter } from "react-router";
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.scss';
import Works from './Works';
import StudyOne from './StudyOne';
import StudyTwo from './StudyTwo';

class RightContainer extends React.Component {
    render() {
    	let { match, location } = this.props;
    	var path = location.pathname;
    	console.log(path)
    	if (path === "/works/one") {
			var className = "expand";		
    	}
    	return (
		    <div className={ "rightContainer " + className }>
				<Switch>
					<Route exact path="/works" component={ Works }/>
					<Route exact path="/works/one" render={(props) => <StudyOne {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
					<Route exact path="/works/two" component={ StudyTwo } />
					<Route exact path="/about" component={ About } />
					<Route exact path="/" component={ Home } />
				</Switch>
				<Navbar location={ path } />
		    </div>	
    	)
    }
}

export default withRouter(RightContainer)

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