import React from 'react'
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbarContainer">
                <ul className="navbar">
                    <li className="navItem homeLink"><Link to="/">//</Link></li>
                    <li className="navItem"><Link to="/works">Works</Link></li>
                    <li className="navItem"><Link to="/about">About</Link></li>
                    <li className="navItem"><a href="#">Resume</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;