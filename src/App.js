import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Work from './components/works/Works';

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = { };
	}
	render() {
    	
		return (
			<div className="portfolioContainer">
				<p>This is home page</p>
				<Work />
			</div>
		)
	}
}

export default App;