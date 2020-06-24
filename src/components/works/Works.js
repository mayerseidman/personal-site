import React, { Component } from 'react';
import '../../assets/sass/works/works.scss';

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div className="workContainer">
            	<div className="topSection">
            		<div className="informationContainer">
            			<p className="workTitle wh">Work Numero Uno</p>
            			<p className="workDescription yel">
            				Descriptive text goes here…Descriptive text goes here…Descriptive text goes here dd. 
            				Descriptive text goes here…ggoes here goes here.
            			</p>
            			<p className="roles wh">MY ROLE: DESIGN | PROTOTYPE</p>
            		</div>
            		<img src="https://via.placeholder.com/300" alt=""/>
            	</div>
            </div>
        )
    }    
}

export default Works