import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import image from "../../assets/images/linkedin-profile-mayer.png"

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.wrapperRef = React.createRef();
        this.iconRef = React.createRef()
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
                    <div className="left-container">
                        <div className="my-name">
                            <span className="name-mayer">Mayer.</span>
                        </div>
                        <div ref={this.iconRef} className="nav-icon" onClick={ () => this.handeleMenuClick()}>
                            <div></div>
                        </div>
                        <div className="float-dark-box"></div>
                    </div>
                    <div className="right-container">
                        <div className="main-content">
                            <div className='main-empty-1'>
                                <div className="float-dark-light"></div>
                            </div>
                            <div className='main-text'>
                                <div className="text-container">
                                    <p className="large-text">Howdy.</p>
                                    <div>
                                        <p className="text-syle">My name is Mayer and I’m a ________</p>
                                        <p className='text-paragraph text-syle'>I ‘m  a  versatile  problem solver who is </p> 
                                        <p className='text-paragraph text-syle'>passionate about helping people and </p> 
                                        <p className='text-paragraph text-syle'>uncovering emotions within products. </p>
                                    </div>
                                    <div>
                                    <p>Learn more <span className="link-text"><a>about me</a></span> or view <span className="link-text"><a>my work</a></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='main-empty-2'>
                                <div className="float-dark-primary"></div>
                            </div>
                        </div>
                        <div ref={this.wrapperRef} className="navigation">
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/works'>Work</NavLink></p>
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/about'>About</NavLink></p>
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/writing'>Writing</NavLink></p>
                        </div>
                    </div>
                </div>
                <div className='floating-profile-home'>
                    <div className="profile-image-container">
                        <img alt="profile" className="image-prof" src={ image } />
                    </div>
                    <div className="profile-image-blank"></div>
                </div>
            </div>
      
        )
    }
}