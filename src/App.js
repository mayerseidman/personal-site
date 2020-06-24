import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./components/about/About";
import Works from "./components/works/Works";
import { Home } from "./components/home";

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = { };
	}
	render() {
    	
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route exact path="/about" component={ About } />
					<Route path="/works" component={ Works } />
				</Switch>
			</Router>
		)
	}
}

export default App;