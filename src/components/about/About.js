import React,  { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import image from "../../assets/images/linkedin-profile-mayer.png";

import '../../assets/sass/about/about.scss';

class About extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.iconRef = React.createRef();
        this.textWrapper = React.createRef();
    }

    handeleMenuClick() {
        const wrapper = this.wrapperRef.current;
        const icon = this.iconRef.current;
        wrapper.classList.toggle("is-nav-open");
        icon.classList.toggle("is-nav-open");
    }

    componentDidMount() {
        setTimeout(() => {
            let textWrapper = this.textWrapper.current;
            textWrapper.classList.toggle('slide-down-about');
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
                        <div ref={this.iconRef} className="nav-icon" onClick={ () => this.handeleMenuClick()}>
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
                                    <div className='scroable-container'>
                                        <div className="about-details">
                                            <p className="p-over">Descriptive text goes here…Descriptive text goes here escriptive </p>
                                            <p className="p-over">text goes here…Descriptive text goes here…Descriptive text goes </p>
                                            <p className="p-over">here…Descriptive text goes here…</p>
                                        </div>
                                        <div className="about-details">
                                            <p className="emp-text">empathy.</p>
                                            <p className="p-over" >Descriptive text goes here…Descriptive text goes here escriptive </p>
                                            <p className="p-over" >text goes here…Descriptive text goes here…Descriptive text goes </p>
                                            <p className="p-over">here…Descriptive text goes here…</p>
                                        </div>
                                        <div className="about-details">
                                            <p className="emp-text">growth.</p>
                                            <p className="p-over">Descriptive text goes here…Descriptive text goes here escriptive </p>
                                            <p className="p-over">text goes here…Descriptive text goes here…Descriptive text goes </p>
                                            <p className="p-over">here…Descriptive text goes here…</p>
                                        </div>
                                        <div className="about-details">
                                            <p className="emp-text">growth.</p>
                                            <p className="p-over">Descriptive text goes here…Descriptive text goes here escriptive </p>
                                            <p className="p-over">text goes here…Descriptive text goes here…Descriptive text goes </p>
                                            <p className="p-over">here…Descriptive text goes here…</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='main-empty-2'>
                                
                            </div>
                        </div>
                        <div ref={this.wrapperRef} className="navigation-about">
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/works'>Work</NavLink></p>
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/about'>About</NavLink></p>
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/writing'>Writing</NavLink></p>
                        </div>
                    </div>
                </div>
                <div className='floating-profile-a'>
                    <div className="profile-image-container">
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

export default About;