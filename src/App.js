import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import About from "./components/about/About";
import Work from "./components/works/Works";

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = { };
	}
	render() {
    	
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/works" component={Work} />
				</Switch>
			</Router>
		)
	}
}

const Home = () => {
	return (
		<div className="portfolioContainer">
			<p>This is home page</p>
		</div>
	)
}
export default App;