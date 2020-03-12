import React from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import '../../assets/sass/index.scss';
import resume from '../../assets/design-resume.pdf';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeView: "" };
    }
    changeView(view) {
        this.setState({ activeView: view })
        this.props.closeStudy()
    }
    setClass(route) {
        let { location } = this.props;
        var path = location.pathname;
        if (path.includes("Studies")) {
            return "";
        } 
        else {
            var className = this.state.activeView === route? "selected" : "";
            return className;
        }
    }
    render() {
        var path = this.props.location.pathname;
       if (path.includes("Studies")) {
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
                        <li className="navItem"><Link to="/about" onClick={ this.changeView.bind(this, "/about") } className={ this.setClass("/about") }>About</Link></li>
                        <li className="navItem"><a href={ resume } target="_blank" rel="noopener noreferrer">Resume</a></li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default withRouter(Navbar);