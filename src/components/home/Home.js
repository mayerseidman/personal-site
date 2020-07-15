import React,{ Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import image from "../../assets/images/linkedin-profile-mayer.png";
import { withLoadState } from '../contexts/LoadStateContext';
import '../../assets/sass/home.scss';

class Home extends Component {
    constructor(props) {
        super(props)
        this.wrapperRef = React.createRef();
        this.iconRef = React.createRef();
        this.imageRef = React.createRef();
        this.profileRef = React.createRef();
        this.rightContainer = React.createRef();
        this.leftContainer = React.createRef();
        this.nameWrapper = React.createRef();
        this.textWrapper = React.createRef();
        this.delayedText = React.createRef();
        this.imageContainer = React.createRef();
        this.state = { wordValue: "UI UX Designer", currentCount: 8 };
    }

    getChangedText() {
        console.log("CHANGE")
        var words = ["Human", "Doodler", "Brother", "Dad-jokes", "Pescatarian", "Surfer", "Coder"];
        i = (i + 1) % words.length;
        return words[i];
    }
    changeText() {
        var text = this.getChangedText();
        console.log(text)
        this.setState({ wordValue: text })
    }
    timer() {
        var newCount = this.state.currentCount - 1;
        console.log(this.state.currentCount, newCount)
        if(newCount >= 0) { 
          this.setState({ currentCount: newCount });
        } else {
          clearInterval(this.state.intervalIdTimer);
          clearInterval(this.state.intervalIdScrambler)
        }
    }
    componentDidMount() {
        let rightContainer = this.rightContainer.current;
        let leftContainer = this.leftContainer.current;
        let wrapperRef = this.wrapperRef.current; 
        let nameWrapper = this.nameWrapper.current;
        let profileRef = this.profileRef.current;
        let textWrapper = this.textWrapper.current;
        let delayedText = this.delayedText.current;
        let imageRef = this.imageRef.current;
        
        if (!this.props.context.state.homeLoaded) {
            rightContainer.classList.toggle('animate-right-container');
            leftContainer.classList.toggle('animate-left-container');
            wrapperRef.classList.toggle('animate-navigation');
            nameWrapper.classList.toggle('animate-my-name');
            profileRef.classList.toggle('animate-profile-home');
            textWrapper.classList.toggle("main-slow");
            delayedText.classList.toggle("main-delayed-text");
            imageRef.classList.toggle('animate-image-prof');


            // mobile animations
            profileRef.classList.toggle('animate-profile')

            this.props.context.updateLoaded();
        }else {
            if(this.props.context.state.lastLocation.pathname === '/about'){
                profileRef.classList.toggle('is-loaded')
                this.imageContainer.current.classList.toggle('set-up-profile');
            }else{
                profileRef.classList.toggle("is-loaded");
            }
            textWrapper.classList.toggle('delayed-main');
            delayedText.classList.toggle("slow-delayed-text");
            wrapperRef.classList.toggle('slide-in-nav-fast');

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

            textWrapper = this.textWrapper.current;
            delayedText = this.delayedText.current;
            if (!this.props.context.state.lastLocation){
                profileRef.classList.toggle("is-loaded");
                textWrapper.classList.toggle('slide-down');
                wrapperRef.classList.toggle('slide-in-nav');
                imageRef.classList.toggle('fade-in');

                // mobile
                profileRef.classList.toggle('on-load-profile');

            } else {
                if(this.props.context.state.lastLocation.pathname === '/about'){
                    this.imageContainer.current.classList.toggle('animate-from-about')
                }
                textWrapper.classList.toggle("slide-down-slower");

                profileRef.classList.toggle('on-load-profile-fast');
            }
           
           
            // animations
            rightContainer.classList.toggle('slide-in');
            leftContainer.classList.toggle('slide-in-left');
            
            nameWrapper.classList.toggle('slide-down');
            
            delayedText.classList.toggle('show');
            // mobile 
            
            this.props.context.setLastLocation(this.props.location)
        })
        var intervalIdTimer = setInterval(this.timer.bind(this, 1000));
        var intervalIdScrambler = setInterval(this.changeText.bind(this, 1000));
        this.setState({ intervalIdTimer: intervalIdTimer, intervalIdScrambler: intervalIdScrambler });
    }

    componentWillUnmount() {
       // use intervalId from the state to clear the interval
       clearInterval(this.state.intervalIdTimer);
    }

    handleMenuClick() {
        const wrapper = this.wrapperRef.current;
        const icon = this.iconRef.current;
        wrapper.classList.toggle("is-nav-open");
        icon.classList.toggle("is-nav-open");
        this.profileRef.current.classList.toggle("hide-profile");
    }
    renderLeftContainer() {
        return (
            <div ref={this.leftContainer} className="left-container-home">
                <div ref={this.nameWrapper} className="my-name-home">
                    <span className="name-mayer">Mayer.</span>
                </div>
                <div ref={this.iconRef} className="nav-icon" onClick={ () => this.handleMenuClick()}>
                    <div></div>
                </div>
                <div className="float-dark-box"></div>
                <div className="float-dark-light"></div>
                <div className="float-dark-primary"></div>
                <div className="float-white-box"></div>
            </div>
        )
    }

    renderRightContainer() {
        if (this.state.currentCount === 0) {
            var title = "UI UX Designer";
        } else {
            var title = this.state.wordValue;
        }
        return (
            <div ref={this.rightContainer} className="right-container-home">
                <div className="main-content">
                    <div className='main-empty-1'>  
                    </div>
                    <div className='main-text self-align'>
                        <div className="text-top"></div>
                        <div ref={this.textWrapper} className="text-container">
                            <div className="home-centered-text">
                                <div>
                                    <p className="large-text">Howdy.</p>
                                    <p className="text-style">My name is Mayer and I'm a { title }.</p>
                                    <section ref={this.delayedText} className='text-delayed'>
                                    <p className='text-paragraph text-style'>I'm a versatile problem solver passionate</p> 
                                    <p className='text-paragraph text-style'>about helping people and uncovering</p> 
                                    <p className='text-paragraph text-style'>emotions within products. </p>
                                    <p className="learn-more">Learn more <span className="link-text">
                                        <Link to='/about' className="plain-link">about me</Link></span> or view <span className="link-text">
                                        <Link to="/works" className="plain-link">my work</Link></span>
                                    </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main-empty-2'>
                        
                    </div>
                </div>
                <div ref={this.wrapperRef} className="navigation-home">
                    <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/works'>Work</NavLink></p>
                    <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/about'>About</NavLink></p>
                    <p><a className="nav-link" activeStyle={{ color: 'white' }} 
                        href="https://medium.com/design-ideas-thoughts" target="_blank">Writing</a>
                    </p>
                </div>
            </div>
        )
    }

    renderImage() {
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
                { this.renderImage() }
            </div>
        )
    }
}
var i = 0;
export default withLoadState(withRouter(Home));