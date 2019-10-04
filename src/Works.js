import React from 'react'
import StudyOne from './StudyOne';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Works extends React.Component {
    render() {
        const { workId } = this.props.match.params;
        return (
            <div className="section worksSection">
                <div className="leftWorksContainer">
                    <div className="studiesTitleContainer">
                        <div className="worksCategory">
                            <p className="categoryTitle">Title ONE</p>
                            <p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="projectsTitleContainer">
                        <div className="worksCategory">
                            <p className="categoryTitle">Title ONE</p>
                            <p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>  
                    </div>
                    <div className="articlesTitleContainer">
                        <div className="worksCategory">
                            <p className="categoryTitle">Title ONE</p>
                            <p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>  
                </div>
                <div className="rightWorksContainer">
                    <div className="studiesLinksContainer">     
                        <div>
                          <Link to={`${this.props.match.path}/one`}>Link One</Link>
                            <p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                        </div>
                        <div>
                            <Link to={`${this.props.match.path}/two`}>Link Two</Link>
                            <p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                        </div>
                        <div>
                           <Link to="/works/3">Link Three</Link>
                            <p className="categoryDescription mobileHide">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                        </div>
                    </div>
                    <div className="projectsLinksContainer">
                        <a href="#">Link One</a>
                        <a href="#">Link One</a>
                        <a href="#">Link One</a>
                    </div>
                    <div className="articlesLinksContainer">
                        <a href="#">Link One</a>
                        <a href="#">Link One</a>
                        <a href="#">Link One</a>
                    </div>
                </div>
                { /* workId && <StudyOne workId={workId} /> */ }
            </div>
        );
    }
}

export default Works