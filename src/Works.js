import React from 'react'
import StudyOne from './Studies/StudyOne';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Works extends React.Component {
    render() {
        return (
            <div className="section worksSection">
                <div className="leftWorksContainer">
                    <div className="studiesTitleContainer">
                        <div className="worksCategory">
                            <p className="categoryTitle">Case Studies</p>
                            <p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="projectsTitleContainer">
                        <div className="worksCategory">
                            <p className="categoryTitle">Projects</p>
                            <p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>  
                    </div>
                    <div className="articlesTitleContainer">
                        <div className="worksCategory">
                            <p className="categoryTitle">Articles</p>
                            <p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>  
                </div>
                <div className="rightWorksContainer">
                    <div className="studiesLinksContainer">
                        <div>
                          <Link className="regularLink" to={`${this.props.match.path}/Studies/StudyOne`} onClick={ this.props.changeLeftContainer }>Reading Comprehension Tool</Link>
                            <p className="categoryDescription mobileHide">Research, UI/UX, Visual, User Feedback</p>
                        </div>
                        <div>
                          <Link className="regularLink" to={`${this.props.match.path}/Studies/StudyTwo`}>Student Roster Design</Link>
                            <p className="categoryDescription mobileHide">Research, UI/UX, Visual</p>
                        </div>
                        <div>
                            <Link className="regularLink" to={`${this.props.match.path}/Studies/StudyThree`}>Avatars and E-Commerce Design</Link>
                            <p className="categoryDescription mobileHide">Research, UI/UX, Visual</p>
                        </div>
                        <div>
                           <Link className="regularLink" to={`${this.props.match.path}/Studies/StudyFour`}>Link Four</Link>
                            <p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the</p>
                        </div>
                    </div>
                    <div className="projectsLinksContainer">
                        <a className="regularLink" href="#">Link One</a>
                    </div>
                    <div className="articlesLinksContainer">
                        <a className="regularLink" href="https://medium.com/design-ideas-thoughts/designing-multi-step-processes-bd432bad78dd" target="_blank">Designing Multi-Step Processes</a>
                        <a className="regularLink" href="https://medium.com/design-ideas-thoughts/designing-error-pages-8d82e16e3472" target="_blank">How to Design Better Error Pages</a>
                        <a className="regularLink" href="https://medium.com/design-ideas-thoughts" target="_blank">UI UX Design Publication</a>
                    </div>
                </div>
                { /* workId && <StudyOne workId={workId} /> */ }
            </div>
        );
    }
}

export default Works