import React,  { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import image from "../../assets/images/linkedin-profile-mayer.png";
import { withLoadState } from '../contexts/LoadStateContext';

import '../../assets/sass/about/about.scss';

class About extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.iconRef = React.createRef();
        this.textWrapper = React.createRef();
        this.imageContainer = React.createRef();
        this.prof = React.createRef();
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
        });
       
    }

    render() {
        return (
            <div className="wrapper">
                <div className='wrapper-main'>
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
                                                With a bachelors in Talmudic Law (link) and an MBA, I was still looking for more. 
                                                I wanted to be a part of a movement and to have a real impact. 
                                            </p>
                                            <p className="p-over">
                                                I joined a coding bootcamp in Austin, TX and left with programming skills
                                                and a growing excitement for technology.
                                            </p>
                                            <p className="p-over">
                                                Shortly after, I was hired at an ed-tech startup in San Diego as a full stack developer. 
                                                I was fortunate to wear multiple hats-including a design one. 
                                                I quickly became focused about design and the rest is history.
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
                                            </p>
                                            <p className="p-over">
                                                I like using my coding experience and versatility whenever I can. 
                                                I use my coding skills to prototype (Javascript/REACT), make final touches on a product (CSS), 
                                                and empathize with developers (Ruby and Swift).
                                            </p>
                                            <p className="p-over">
                                                I believe it is highly beneficial for everyone on the team to understand why the product looks 
                                                and feels the way it does-not just product members. 
                                                Whether through writing (link) or presentations, I enjoy sharing my ideas and process with others.
                                            </p>
                                        </div>
                                        <div className="about-details">
                                            <p className="emp-text">growth.</p>
                                            <p className="p-over">
                                                Growth is of utmost importance to me and I make sure to continually push myself. 
                                                My curiosity and world travel gave me many opportunities to learn about myself and other cultures. 
                                                Learning languages challenges me and also helps me connect with other people. 
                                                In my free time you can find me reading, writing, studying languages, or mixing music.
                                            </p>
                                            <p className="p-over">
                                                Favourite Book: Great Expectations by Charles Dickens <br/>
                                                Current Design Book: Technically Wrong by... <br/>
                                                Languages (by fluency): Hebrew, German, Spanish
                                            </p>
                                            <p className="p-over">here…Descriptive text goes here…</p>
                                        </div>
                                        <div className="about-details">
                                            <p className="emp-text">creations.</p>
                                            <p className="p-over links">
                                                <a href="">Pinterest</a>
                                                <a href="">Mixcloud</a>
                                                <a href="">Sunsets</a>
                                            </p>
                                        </div>
                                        <div className="about-details">
                                            <p className="emp-text">links.</p>
                                            <p className="p-over links">
                                                <a href="">Medium</a>
                                                <a href="">Instagram</a>
                                                <a href="">LinkedIn</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='main-empty-2'>
                                
                            </div>
                        </div>
                        <div ref={this.wrapperRef} className="navigation-about">
                            <p>
                            <NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/works'>Work</NavLink></p>
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/about'>About</NavLink></p>
                            <p><a className="nav-link" activeStyle={{ color: 'white' }} 
                                href="https://medium.com/design-ideas-thoughts" target="_blank">Writing</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div ref={this.prof} className='floating-profile-a'>
                    <div ref={this.imageContainer} className="profile-image-container">
                        <div className="row-gif">
                            <div className="cell-gif">
                                <img alt="profile" className="image-prof-a" src={ image } />
                            </div>
                            <div className="cell-gif">
                                <img alt="profile" className="image-prof-a" src={ image } />
                            </div>
                        </div>
                        <div className="row-gif">
                            <div className="cell-gif">
                                <img alt="profile" className="image-prof-a" src={ image } />
                            </div>
                            <div className="cell-gif">
                                <img alt="profile" className="image-prof-a" src={ image } />
                            </div>
                        </div>
                       
                    </div>
                    <div className="profile-image-blank"></div>
                </div>
            </div>
      
        );
    }
}

export default withLoadState(withRouter(About));