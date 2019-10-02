import React from 'react';
import logo from './logo.svg';
import './App.scss';

// img src={logo}

function App() {
    return (
        <div className="portfolioContainer">
            <div className="leftContainer">
            	<div className="infoContainer">
            		<p className="name bigText">Mayer Seidman</p>
            		<p className="title bigText">Designer <span className="circleDivider"></span> Developer</p>
            	</div>
            </div>
            <div className="rightContainer"></div>
        </div>
    );
}
export default App;
