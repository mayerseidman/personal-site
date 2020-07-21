import React, { Component } from 'react';

class Text extends Component {
	state = {
		words: ["", "Dad Jokes", "Doodler", "Brother", "Surfer", "Pescatarian", "Coder", "Human"],
		count: 7,
		intervalId: null,
		delay: this.props.delay || 0
	}

	decrementCount = () => {
		this.setState(prevState => ({...prevState, count: prevState.count - 1}), () => {
			if (this.state.count === 0) {
				clearInterval(this.state.intervalId)
			}
		})

	}

	componentDidMount() {
		console.log(this.state.delay)
		var delay = this.state.delay;
		setTimeout(() => {
			const intervalId = setInterval(this.decrementCount, 1150)
			this.setState({intervalId})
		}, delay)	
	}

	render() {
		if (this.state.count === 0) {
			var word = "UI UX Designer";
		} else {
			var word = this.state.words[this.state.count];
		}
		return word;
	}
}

export default Text;