import React from 'react'
// import './leftContainer.scss';
import './App.scss';
import { withRouter } from "react-router";

class leftContainer extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { wordValue: "Designer", currentCount: 10, minimized: false };
	}

	getChangedText() {
		var words = ["neat", "great", "best", "groovy"];
	    i = (i + 1) % words.length;
	    return words[i];
	}
	changeText() {
	    var text = this.getChangedText();
	    this.setState({ wordValue: text })
	}

	componentDidMount() {
		var intervalIdTimer = setInterval(this.timer.bind(this), 1000);
		var intervalIdScrambler = setInterval(this.changeText.bind(this), 1000);
		this.setState({ intervalIdTimer: intervalIdTimer, intervalIdScrambler: intervalIdScrambler });

		let { match, location, history } = this.props;
		var path = location.pathname;
		if (path == "/works/one") {
			this.setState({ minimized: true })
		}
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
    	let { match, location, history } = this.props;
    	var path = location.pathname;
    	if (path === "/works/one") {
    		var infoContainer = (
    			<div className="infoContainer">Case study stuff goes here...</div>
    		)
    		if (this.props.currentView == "preview") {
				var className = "minimize"    			
    		} else if (this.props.currentView == "startStudy") {
    			var className = "exterminate"
    		}
    	} else {
    		var infoContainer = (
    			<div className="infoContainer">
    				<p className="name">Mayer Seidman</p>
    				<span className="circleDivider"></span>
    				<p className="title">{ title }</p>
    			</div>	
    		)
    	}
    	return (
    		<div className={ "leftContainer " + className }>
    			{ infoContainer }
    		</div>
    	)
    }
}

var i = 0;

export default withRouter(leftContainer)