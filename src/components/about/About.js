import React,  { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import hat from "../../assets/images/about/hat-new-new.gif";
import cooking from "../../assets/images/about/cooking-new.gif";
import music from "../../assets/images/about/drawing-new.gif";
import drawing from "../../assets/images/about/music-new.gif";

import { withLoadState } from '../contexts/LoadStateContext';

import '../../assets/sass/about/about.scss';

const counter = 0;

class About extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.iconRef = React.createRef();
        this.textWrapper = React.createRef();
        this.imageContainer = React.createRef();
        this.prof = React.createRef();
        this.state = { loadedCounter: 0 }
    }

    handleMenuClick() {
        const wrapper = this.wrapperRef.current;
        const icon = this.iconRef.current;
        wrapper.classList.toggle("is-nav-open");
        icon.classList.toggle("is-nav-open");
    }

    componentDidMount() {
        this.props.context.updateLoaded()
        this.props.context.setLastLocation(this.props.location);
        this.imageContainer.current.classList.toggle('set-up-profile-about');
        this.prof.current.classList.toggle('animate-profile');
        setTimeout(() => {
            let textWrapper = this.textWrapper.current;
            textWrapper.classList.toggle('slide-down-about');
            this.imageContainer.current.classList.toggle('animate-from-a')
            this.prof.current.classList.toggle('on-load-profile');
        }, 1200);
    }

    renderLeftContainer() {
        return (
            <div className="left-container-about">
                <div className="my-name-about">
                    <span className="name-mayer"><Link className="plain-link" to="/" >Mayer.</Link></span>
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

    renderNav() {
        return (
            <div ref={this.wrapperRef} className="navigation-about">
                <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/works'>Work</NavLink></p>
                <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/about'>About</NavLink></p>
                <p><a className="nav-link" activeStyle={{ color: 'white' }} 
                    href="https://medium.com/design-ideas-thoughts" target="_blank">Writing</a>
                </p>
            </div>
        )
    }

    handleImageLoaded = () => {
        console.log("loaded")
        this.setState({ loadedCounter: this.state.loadedCounter + 1 });
     }

    renderRightContainer() {
        return (
            <div className="right-container-about">
                <div className="main-content">
                    <div className='main-empty-about'>
                    </div>
                    <div className='main-text'>
                        <div className="text-top"></div>
                        <div ref={this.textWrapper} className="text-container-about">
                            <p className="about-text">About.</p>
                            <div className='scrollable-container'>
                                <div className="about-details">
                                    <p className="emp-text">journey.</p>
                                    <p className="p-over">
                                        With a bachelors in <a className="p-link" 
                                        href="https://en.wikipedia.org/wiki/Talmudic_law" target="_blank" style={{ display: "inline-block" }}>
                                        Talmudic Law</a> and an MBA, 
                                        I was still looking for more. 
                                        I wanted to be a part of a movement and to have a meaningful impact. 
                                    </p>
                                    <p className="p-over">
                                        I joined a coding bootcamp in Austin, TX and left with programming skills
                                        and a growing excitement for technology.
                                    </p>
                                    <p className="p-over">
                                        Shortly after, I worked at an ed-tech startup in San Diego as a full stack developer. 
                                        I was fortunate to be able to help students learn, grow, and reach their potential. 
                                        I was also able to wear multiple hats and became involved with the design of the product. 
                                        I became focused and passionate about design and the rest is history.
                                    </p>
                                    <p className="p-over">
                                        I started working remotely a few years ago and traveled the world (literally). 
                                        I now live in beautiful Vancouver, Canada.
                                    </p>
                                </div>
                                <div className="about-details">
                                    <p className="emp-text">skills.</p>
                                    <p className="p-over">
                                        From UX research through user feedback (after production), I have immersed myself in design and 
                                        am experienced in all design areas.
                                        I enjoy iterating on a product or feature and seeing it through till the end. 
                                        I believe that when you sweat out the details it changes a user's experience and they can feel it too.
                                    </p>
                                    <p className="p-over">
                                        I like using my coding experience and versatility whenever I can. 
                                        I use my coding skills to prototype (Javascript/REACT), make final touches on a product (CSS), 
                                        and deeply understand the workflow of developers (Ruby and Swift).
                                    </p>
                                    <p className="p-over">
                                        I believe it is highly beneficial for everyone on a team (not just product people) to understand why the product acts, looks, 
                                        and feels the way it does.
                                        Whether through <a className="p-link" href="https://medium.com/design-ideas-thoughts" target="_blank">writing </a> or presentations, 
                                        I enjoy sharing my ideas and processes with others.
                                    </p>
                                </div>
                                <div className="about-details">
                                    <p className="emp-text">growth.</p>
                                    <p className="p-over">
                                        I believe that learning and self growth are precious tools we can use to improve ourselves and bring our dreams to life.
                                        Whether <a className="p-link" href="http://instagram.com/mayerseidman" target="_blank">traveling the world</a>, learning a new language, 
                                        or digging into a new design system, I try to grow and learn continually.
                                        In my free time you can find me reading, writing, studying languages, or mixing music.
                                    </p>
                                    <p className="p-over currentInterests">
                                        <div><span className="item">Current Design Book</span><span className="value"> Technically Wrong by Sara Wachter-Boettcher</span></div>
                                        <div><span className="item">Favourite Book</span><span className="value"> Great Expectations by Charles Dickens</span></div>
                                        <span className="item">Languages (by fluency)</span><span className="value"> Hebrew, German, Spanish</span>
                                    </p>
                                </div>
                                <div className="about-details">
                                    <p className="emp-text">creations.</p>
                                    <p className="p-over links">
                                        <a className="mixcloud" 
                                            href="https://www.mixcloud.com/mayer-seidman/" target="_blank">Mixcloud</a>
                                        <a className="regular-link" 
                                            href="https://www.pinterest.com/mayerseidman/projects/" target="_blank">Pinterest</a>
                                        <a className="small" 
                                            href="https://sunsets-are-awesome.herokuapp.com/" target="_blank">Sunsets</a>
                                    </p>
                                </div>
                                <div className="about-details">
                                    <p className="emp-text">links.</p>
                                    <p className="p-over links">
                                        <a className="long" 
                                            href="https://www.instagram.com/mayerseidman/" target="_blank">Instagram</a>
                                        <a className="small" 
                                            href="https://medium.com/design-ideas-thoughts" target="_blank">Medium</a>
                                        <a className="linkedIn" 
                                            href="https://www.linkedin.com/in/mayer-seidman/" target="_blank">LinkedIn</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main-empty-2'>
                        
                    </div>
                </div>
                { this.renderNav() }
            </div>
        )
    }

    renderImageContainer() {
        // if (this.state.loadedCounter < 4) {
        //     var loadingImages = (
        //         <div>
        //             <div className="image-prof-a left">LOADING</div>
        //             <div className="image-prof-a">LOADING</div>
        //             <div className="image-prof-a left lower">LOADING</div>
        //             <div className="image-prof-a lower">LOADING</div>
        //         </div>
        //     )
        // }
        return (
            <div ref={this.prof} className='floating-profile-a'>
                <div ref={this.imageContainer} className="profile-image-container">
                    <img alt="profile" className="image-prof-a left" src={ cooking } 
                        onLoad={ this.handleImageLoaded } />
                    <img alt="profile" className="image-prof-a" src={ music } 
                        onLoad={ this.handleImageLoaded } />
                    <img alt="profile" className="image-prof-a left lower" src={ drawing } 
                        onLoad={ this.handleImageLoaded } />
                    <img alt="profile" className="image-prof-a lower" src={ hat }
                        onLoad={ this.handleImageLoaded } />  
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
                    { this.renderImageContainer() }
                </div>
            </div>
        );
    }
}

export default withLoadState(withRouter(About));