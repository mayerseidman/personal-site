import React,{ Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import image from "../../assets/images/misc/profile.png";
import { withLoadState } from '../contexts/LoadStateContext';
import Text from './text'
import '../../assets/sass/home.scss';


import finalVersionData from "../../assets/images/data-center/teachers_experience.png";
import finalVersionWRLite from "../../assets/images/wr-lite/teacher-exercises.gif";
import finalVersionStudentRoster from "../../assets/images/student-roster/final-version.gif";
import finalVersionSunsets from "../../assets/images/sunsets-are-awesome/final-version.gif";


class Home extends Component {
    constructor(props) {
        super(props)
        this.wrapperRef = React.createRef();
        this.iconRef = React.createRef();
        this.imageRef = React.createRef();
        this.profileRef = React.createRef();
        this.rightContainer = React.createRef();
        this.leftContainer = React.createRef();
        this.leftMyWork = React.createRef();
        this.nameWrapper = React.createRef();
        this.navContainer = React.createRef();
        this.textWrapper = React.createRef();
        this.delayedText = React.createRef();
        this.imageContainer = React.createRef();
    }
    componentDidMount() {
        let rightContainer = this.rightContainer.current;
        let leftContainer = this.leftContainer.current;
        let wrapperRef = this.wrapperRef.current; 
        let nameWrapper = this.nameWrapper.current;
        let leftMyWork = this.leftMyWork.current;
        let navContainer = this.navContainer.current;
        let profileRef = this.profileRef.current;
        let textWrapper = this.textWrapper.current;
        let delayedText = this.delayedText.current;
        let imageRef = this.imageRef.current;
        
        if (!this.props.context.state.homeLoaded) {
            rightContainer.classList.toggle('animate-right-container');
            leftContainer.classList.toggle('animate-left-container');
            wrapperRef.classList.toggle('animate-navigation');
            navContainer.classList.toggle('animate-my-name');
            nameWrapper.classList.toggle('animate-my-name');
            profileRef.classList.toggle('animate-profile-home');
            textWrapper.classList.toggle("main-slow");
            delayedText.classList.toggle("main-delayed-text");
            leftMyWork.classList.toggle("animate-navigation");
            imageRef.classList.toggle('animate-image-prof');
            var delay = 0;
            // mobile animations
            profileRef.classList.toggle('animate-profile')

            this.props.context.updateLoaded();
        } else {
            var delay = 1000;
            if(this.props.context.state.lastLocation.pathname === '/about'){
                profileRef.classList.toggle('is-loaded')
                this.imageContainer.current.classList.toggle('set-up-profile');
            } else {
                profileRef.classList.toggle("is-loaded");
            }
            textWrapper.classList.toggle('delayed-main');
            delayedText.classList.toggle("slow-delayed-text");
            wrapperRef.classList.toggle('slide-in-nav-fast');
            navContainer.classList.toggle('animate-my-name');

            // mobile animations
            profileRef.classList.toggle('animate-profile')
        }
        
        setTimeout(() => {
            profileRef = this.profileRef.current;
            imageRef = this.imageRef.current;
            // animations 
            rightContainer = this.rightContainer.current;
            leftContainer = this.leftContainer.current;
            wrapperRef = this.wrapperRef.current;
            nameWrapper = this.nameWrapper.current;
            navContainer = this.navContainer.current;
            leftMyWork = this.leftMyWork.current;

            textWrapper = this.textWrapper.current;
            delayedText = this.delayedText.current;
            if (!this.props.context.state.lastLocation){
                profileRef.classList.toggle("is-loaded");
                textWrapper.classList.toggle('slide-down');
                wrapperRef.classList.toggle('slide-in-nav');
                //navContainer.classList.toggle('slide-in-nav');
                imageRef.classList.toggle('fade-in');

                // mobile
                profileRef.classList.toggle('on-load-profile');

            } else {
                if (this.props.context.state.lastLocation.pathname === '/about') {
                    this.imageContainer.current.classList.toggle('animate-from-about')
                }
                textWrapper.classList.toggle("slide-down-slower");

                profileRef.classList.toggle('on-load-profile-fast');
            }
           
           
            // animations
            rightContainer.classList.toggle('slide-in');
            leftContainer.classList.toggle('slide-in-left');
            leftMyWork.classList.toggle('slide-in-nav');
            
            nameWrapper.classList.toggle('slide-down');
            navContainer.classList.toggle('slide-down');
            
            delayedText.classList.toggle('show');
            // mobile 
            
            this.props.context.setLastLocation(this.props.location)
        }, delay)
    }
    
    handleWork() {
        const image  = this.imageRef.current;
        image.classList.toggle("blurred");
    }

    handleMenuClick() {
        const navContainer = this.navContainer.current;
        const icon = this.iconRef.current;
        navContainer.classList.toggle("is-nav-open");
        icon.classList.toggle("is-nav-open");
        this.profileRef.current.classList.toggle("hide-profile");
    }
    renderLeftContainer() {
        return (
            <div ref={this.leftContainer} className="left-container-home">
                <div ref={this.nameWrapper} className="my-name-home">
                    <span className="name-mayer">Mayer.</span>
                </div>

                <ul ref={this.navContainer} className="top-nav">
                    <li><NavLink className="nav-link" activeStyle={{ color: 'black' }} to='/about'>About</NavLink></li>
                    <li><NavLink className="nav-link" activeStyle={{ color: 'black' }} to='/works'>Work</NavLink></li>
                    <li><a className="nav-link" activeStyle={{ color: 'black' }} 
                    href="https://medium.com/design-ideas-thoughts" target="_blank">Blog</a></li>
                </ul>


                <div ref={this.iconRef} className="nav-icon" onClick={ () => this.handleMenuClick()}>
                    <div></div>
                </div>

            </div>
        )
    }
    renderAside() {
        return (
            <div ref={this.wrapperRef} className="right-aside">
                        <Link className="no-dec" to={`/works/data-experience`}>
                            <div className="side-nav-content">
                                <img src={ finalVersionData } alt="final-version" height="250px"/>
                                <div className="dark-area">
                                    <h4>Teacher Data Experience</h4>
                                    <p>Improving classroom data for teachers </p>
                                </div>
                            </div>
                        </Link>
                        

                        <Link className="no-dec" to={`/works/sunsets-are-awesome`}>
                            <div className="side-nav-content">
                                <img src={ finalVersionSunsets } alt="final-version" height="250px"/>
                                <div className="dark-area">
                                    <h4>Sunsets are Awesome</h4>
                                    <p>Discovering the daily sunset forecast </p>
                                </div>
                            </div>
                        </Link>

                        <Link className="no-dec" to={`/works/data-experience`}>
                            <div className="side-nav-content">
                                <img src={ finalVersionData } alt="final-version" height="250px"/>
                                <div className="dark-area">
                                    <h4>Reading Comprehension Tool</h4>
                                    <p>Improving classroom data for teachers </p>
                                </div>
                            </div>
                        </Link>
            </div>
        )
    }

    renderContent() {
        if (!this.props.context.state.homeLoaded) {
            var delay = 5000;
        } else {
            var delay = 2000;
        }
        const title =  <Text delay={ delay } />
        return (
            <div className="main-content">
                <div className='main-empty-1'>  
                </div>
                <div className='main-text self-align'>
                    <div className="text-top">
                    </div>

                    <div ref={this.leftMyWork} className="text-top-work">
                        <h4>MY WORK.</h4>
                    </div>

               

                    <div ref={this.textWrapper} className="text-container marginTopM">
                        <div className="home-centered-text">
                            <div>
                                <p className="large-text">Howdy! <br/>
                                    I’m Mayer and I’m a UI UX  Designer.</p>
                                {/* <p className="text-style intro-text">I'm Mayer and I'm a 
                                    <span className="highlighted-word"> { title }.</span>
                                </p> */}
                                <section ref={this.delayedText} className='text-delayed'>
                                <p className='text-paragraph text-style'>
                                I’m passionate about Ed-Tech and self learning.
                                </p>
                                {/* <p className="learn-more">Learn more <span className="link-text">
                                    <Link to='/about' className="plain-link">about me</Link></span> or view <span className="link-text">
                                    <Link to="/works" className="plain-link">my work</Link></span>
                                </p> */}
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className='main-empty-2'>
                       
                    </div>
                </div>

            </div>
        )
    }
    renderRightContainer() {
        return (
            <div ref={this.rightContainer} className="right-container-home">
                { this.renderContent() }
                { this.renderAside() }
            </div>
        )
    }

    renderImageContainer() {
        return (
            <div ref={this.profileRef} className='floating-profile-home'>
                <div ref={this.imageContainer} className="profile-image-container">
                    <img ref={this.imageRef} alt="profile" className="image-prof" src={ image } />
                </div>
                <div className="profile-image-blank"></div>
            </div>
        )
    }
    render() {
        return (
            <div className="wrapper">
                <div className='wrapper-main'>
                    { this.renderLeftContainer() }
                    { this.renderRightContainer() }
                </div>
                { this.renderImageContainer() }
            </div>
        )
    }
}
var i = 0;
export default withLoadState(withRouter(Home));