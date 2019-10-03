import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';

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
			    <div className="leftContainer">
			    	<div className="infoContainer">
			    		<p className="name">Mayer Seidman</p>
			    		<p className="title">Designer <span className="circleDivider"></span> Developer</p>
			    	</div>
			    </div>
			    <div className="rightContainer">
		    		<Router>
			    		<Route exact path="/" component={ Home } />
			    		<Route exact path="/works" component={ Works } />
			    		<Route path="/about" component={ About } />
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

function Works() {
	return (
		<div className="section worksSection">
			<div className="leftWorksContainer">
				<div className="studiesTitleContainer">
					<div className="worksCategory">
						<p className="categoryTitle">Title ONE</p>
						<p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>
				<div className="projectsTitleContainer">
					<div className="worksCategory">
						<p className="categoryTitle">Title ONE</p>
						<p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>	
				</div>
				<div className="articlesTitleContainer">
					<div className="worksCategory">
						<p className="categoryTitle">Title ONE</p>
						<p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>	
			</div>
			<div className="rightWorksContainer">
				<div className="studiesLinksContainer">
					<div>
						<a href="#">Link One</a>
						<p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
					</div>
					<div>
						<a href="#">Link Two</a>
						<p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
					</div>
					<div>
						<a href="#">Link Three</a>
						<p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
					</div>
				</div>
				<div className="projectsLinksContainer">
					<a href="#">Link One</a>
					<a href="#">Link One</a>
					<a href="#">Link One</a>
				</div>
				<div className="articlesLinksContainer">
					<a href="#">Link One</a>
					<a href="#">Link One</a>
					<a href="#">Link One</a>
				</div>
			</div>
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