import React from 'react'
import './StudyOne.scss';

class StudyOne extends React.Component {
    render() {
        if (this.props.currentView == "preview") {
            var startStudyLink = (
                <a onClick={ this.props.startStudy }>START THE STUDY!</a>
            )
            var className = "mobileHide"
        }
        var studyContent = (
            <div className="workOuterContainer">
                <div className="webHide startLinkContainer">
                    { startStudyLink }
                </div>
                <div className={ className }>
                    <p className="workTitle">Title One</p>
                    <div className="workContainer">
                        <div className="workContent">
                            blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
                            blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
                            blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
                            blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div>{ studyContent }</div>
        );
    }
}

export default StudyOne