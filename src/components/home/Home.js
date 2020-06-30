import React,{ Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.css';
import image from "../../assets/images/linkedin-profile-mayer.png";

export default class Home extends Component {
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
    }

    componentDidMount() {
        setTimeout(() => {
            let profileRef = this.profileRef.current;
            let imageRef = this.imageRef.current;
            // animations 
            let rightContainer = this.rightContainer.current;
            let leftContainer = this.leftContainer.current;
            let wrapperRef = this.wrapperRef.current;
            let nameWrapper = this.nameWrapper.current;
            let textWrapper = this.textWrapper.current;
            let delayedText = this.delayedText.current;
            profileRef.classList.toggle("is-loaded");
            imageRef.classList.toggle('fade-in');
            // animations
            rightContainer.classList.toggle('slide-in');
            leftContainer.classList.toggle('slide-in-left');
            wrapperRef.classList.toggle('slide-in-nav');
            nameWrapper.classList.toggle('slide-down');
            textWrapper.classList.toggle('slide-down');
            delayedText.classList.toggle('show');
        })
        
    }

    handeleMenuClick() {
        const wrapper = this.wrapperRef.current;
        const icon = this.iconRef.current;
        wrapper.classList.toggle("is-nav-open")
        icon.classList.toggle("is-nav-open")
    }

    render() {
        return (
            <div className="wrapper">
                <div className='wrapper-main'>
                    <div ref={this.leftContainer} className="left-container">
                        <div ref={this.nameWrapper} className="my-name">
                            <span className="name-mayer">Mayer.</span>
                        </div>
                        <div ref={this.iconRef} className="nav-icon" onClick={ () => this.handeleMenuClick()}>
                            <div></div>
                        </div>
                        <div className="float-dark-box"></div>
                    </div>
                    <div ref={this.rightContainer} className="right-container">
                        <div className="main-content">
                            <div className='main-empty-1'>
                                <div className="float-dark-light"></div>
                            </div>
                            <div className='main-text self-align'>
                                <div className="text-top"></div>
                                <div ref={this.textWrapper} className="text-container">
                                    <div className="home-centered-text">
                                        <div>
                                            <p className="large-text">Howdy.</p>
                                            <p className="text-syle">My name is Mayer and I’m a ________</p>
                                            <section ref={this.delayedText} className='text-delayed'>
                                            <p className='text-paragraph text-syle'>I ‘m  a  versatile  problem solver who is </p> 
                                            <p className='text-paragraph text-syle'>passionate about helping people and </p> 
                                            <p className='text-paragraph text-syle'>uncovering emotions within products. </p>
                                            <p>Learn more <span className="link-text"><Link to='/about' className="plain-link">about me</Link></span> or view <span className="link-text"><Link to="/works" className="plain-link">my work</Link></span></p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='main-empty-2'>
                                <div className="float-dark-primary"></div>
                                <div className="float-white-box"></div>
                            </div>
                        </div>
                        <div ref={this.wrapperRef} className="navigation">
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/works'>Work</NavLink></p>
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/about'>About</NavLink></p>
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/writing'>Writing</NavLink></p>
                        </div>
                    </div>
                </div>
                <div ref={this.profileRef} className='floating-profile-home'>
                    <div className="profile-image-container">
                        <img ref={this.imageRef} alt="profile" className="image-prof" src={ image } />
                    </div>
                    <div className="profile-image-blank"></div>
                </div>
            </div>
      
        )
    }
}