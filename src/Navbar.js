import React from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import './index.scss';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeView: "" };
    }
    changeView(view) {
        this.setState({ activeView: view })
    }
    setClass(route) {
        let { match, location } = this.props;
        var path = location.pathname;
        if (path === "/works/one") {
            return "";
        } else {
            var className = this.state.activeView === route? "selected" : "";
            return className;
        }
    }
    render() {
        var path = this.props.location.pathname;
       if (path === "/works/one") {
            var homeLink = (
                <span>
                    <li className="navItem homeLinkName mobileHide">
                        <Link to="/" onClick={ this.changeView.bind(this, "/") } className={ this.setClass("/") }>Mayer // Designer</Link>
                    </li>
                    <li className="navItem homeLinkName webHide">
                        <Link to="/" onClick={ this.changeView.bind(this, "/") } className={ this.setClass("/") }>Mayer //</Link>
                    </li>
                </span>
            )
        } else {
            var homeLink = (
                <li className="navItem homeLink"><Link to="/" onClick={ this.changeView.bind(this, "/") } className={ this.setClass("/") }>//</Link></li>
            )
        }
        return (
            <div className="navbarContainer">
                <ul className="navbar">
                    { homeLink }
                    <div className="rightLinks">
                        <li className="navItem"><Link to="/works" onClick={ this.changeView.bind(this, "/works") } className={ this.setClass("/works") }>Works</Link></li>
                        <li className="navItem"><Link to="/about">About</Link></li>
                        <li className="navItem"><a href="#">Resume</a></li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default withRouter(Navbar);