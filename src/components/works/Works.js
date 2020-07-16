import React, { Component, useEffect, useRef, useState} from 'react';
import { 
    NavLink,
    Switch,
    Link,
    useParams,
    withRouter,
    Route

} from 'react-router-dom';

// IMAGES
import { withLoadState } from '../contexts/LoadStateContext';
import image from "../../assets/images/misc/linkedin-profile-mayer.png";
import finalVersionData from "../../assets/images/data-center-redesign/final-version.gif";
import finalVersionWRLite from "../../assets/images/wr-lite/teacher-exercises.gif";
import finalVersionStudentRoster from "../../assets/images/student-roster/final-version.gif";

import multipleChoice from "../../assets/images/wr-lite/multiple-choice.png";
import comprehension from "../../assets/images/wr-lite/comprehension.png";

import studentSiteMap from "../../assets/images/wr-lite/student-site-map.png";
import teacherSiteMap from "../../assets/images/wr-lite/teacher-site-map.png";

import goalsActionsScreen from "../../assets/images/wr-lite/goals-actions-screen.png";
import scenarioMapping from "../../assets/images/wr-lite/scenario-mapping.png";
import narrativeSummary from "../../assets/images/wr-lite/narrative-summary.png";

import '../../assets/sass/works/works.scss';

class Works extends Component {
    constructor(props) {
        super(props)
        this.wrapperRef = React.createRef();
        this.iconRef = React.createRef();
        this.imageRef = React.createRef();
        this.mainRef = React.createRef();

        // animations
        this.rightContainer = React.createRef();
        this.leftContainer = React.createRef();
        this.nameWrapper = React.createRef();
        this.textWrapper = React.createRef();
        this.delayedText = React.createRef();
        this.textWrapper = React.createRef();
        this.profileRef = React.createRef();
        this.imageContainer = React.createRef();

        // this.props = props
        this.state = {
            works: {
                'work-one': {
                    title: "Reading Comprehension Tool",
                    description_one: "Whooo’s Reading product designed to change the way teachers help students improve reading comprehension skills",
                    type: "Research, Structure, Interaction, Visual, User Feedback"
                },
                'work-two': {
                    title: "Work Numero Dos",
                    description_one: "Descriptive text goes here…Descriptive text goes here…Descriptive text goes here dd.  Descriptive text goes here…ggoes here goes here.",
                    type: "Design | Prototype"
                },
                'work-three': {
                    title: "Work Numero Tres",
                    description_one: "Descriptive text goes here…Descriptive text goes here…Descriptive text goes here dd.  Descriptive text goes here…ggoes here goes here.",
                    type: "Design | Prototype"
                }

            }
        }
    }

    componentDidMount() {
        this.props.context.updateLoaded()
        if( this.props.context.state.lastLocation !== null && this.props.context.state.lastLocation.pathname === '/about' ){
            this.imageContainer.current.classList.toggle('set-up-profile');
        }
        setTimeout(() => {
            // animations
            let textWrapper = this.textWrapper.current;
            textWrapper.classList.toggle('slide-down-works');
            if( this.props.context.state.lastLocation !== null && this.props.context.state.lastLocation.pathname === '/about' ){
                this.imageContainer.current.classList.toggle('animate-from-about');
                console.log("done!")
            }

            this.props.context.setLastLocation(this.props.location)

        });
    }
    handleMenuClick() {
        const wrapper = this.wrapperRef.current;
        const icon = this.iconRef.current;
        const mainRef = this.mainRef.current;
        wrapper.classList.toggle("is-nav-open");
        icon.classList.toggle("is-nav-open");
        mainRef.classList.toggle("is-nav-open");
    }

    handleWork() {
        const image  = this.imageRef.current;
        image.classList.toggle("blurred");
    }

    render() {
        let {path, url } = this.props.match;
        let { history } = this.props;
        return (
            <div className="wrapper">
                <div className='wrapper-main'>
                    <div ref={this.leftContainer} className="left-container-works">
                        <div ref={this.nameWrapper} className="my-name-works">
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
                    <div ref={this.rightContainer} className="right-container-works">
                        <div ref={this.mainRef} className="main-content">
                            <div className='main-empty-'>
                            </div>
                            <div className='main-text'>
                                <div className="text-top"></div>
                                <div ref={this.textWrapper} className="text-container-works">
                                    <p className="my-work">My Work.</p>
                                    <div className='all-works'>
                                        <Link onClick={()=> this.handleWork()} className="no-dec" to={`${url}/work-one`}>
                                            <div className="each-work">
                                                <div className="work-text">
                                                    <p className="main-work-text">Data Center</p>
                                                    <p className="secondary-work-text">Research, Structure, Interaction, Visual</p>
                                                </div>
                                                <div className="work-image-wrapper">
                                                    <img src={ finalVersionData } alt="final-version"/>
                                                </div>
                                            </div>
                                         </Link>
                                        <div className="worker-separator"></div>
                                        <Link onClick={()=> this.handleWork()} className="no-dec" to={`${url}/work-two`}>
                                            <div className="each-work">  
                                                <div className="work-text">
                                                    <p className="main-work-text">Reading Comprehension Tool</p>
                                                    <p className="secondary-work-text">Research, Structure, Interaction, Visual, User Feedback</p>
                                                </div>
                                                <div className="work-image-wrapper">
                                                   <img src={ finalVersionWRLite } alt="final-version"/>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="worker-separator"></div>
                                        <Link onClick={()=> this.handleWork()} className="no-dec" to={`${url}/work-three`}>
                                            <div className="each-work">
                                                <div className="work-text">
                                                    <p className="main-work-text">Student Roster</p>
                                                    <p className="secondary-work-text">Research, Interaction, Visual</p>
                                                </div>
                                                <div className="work-image-wrapper">
                                                    <img src={ finalVersionStudentRoster } alt="final-version"/>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='main-empty-2'>
                            </div>
                        </div>
                        <div ref={this.wrapperRef} className="navigation-works">
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/works'>Work</NavLink></p>
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/about'>About</NavLink></p>
                            <p><a className="nav-link" activeStyle={{ color: 'white' }} 
                                href="https://medium.com/design-ideas-thoughts" target="_blank">Writing</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div ref={this.profileRef} className='floating-profile-work'>
                    <div ref={this.imageContainer} className="profile-image-container">
                        <img ref={ this.imageRef } alt="profile" className="image-prof-works" src={ image } />
                    </div>
                    <div className="profile-image-blank"></div>
                </div>
                <Switch>
                    <Route path={`${path}/:workId`}>
                        <Work  works={this.state.works} imageRef={this.imageRef} history={history}/>
                    </Route>
                </Switch>
            </div>
      
        );
    }
}

function Work({ works, imageRef, history }) {
    let { workId } = useParams();
    let modalRef = useRef(null);
    let workDetailRef = useRef(null);
    let topRef = useRef(null);
    let goTopRef = useRef(null);
    let work = works[workId];
    let [isClose, setClose] = useState(false);

    useEffect(() => {
        workDetailRef.current.addEventListener('scroll', ({target})=>{
            if (target.scrollTop >= 250  && !topRef.current.classList.contains('hide')){
                topRef.current.classList.toggle("hide")
                goTopRef.current.classList.toggle("hide")
            }else if (target.scrollTop < 250 && topRef.current.classList.contains('hide') ){
                topRef.current.classList.toggle("hide")
                goTopRef.current.classList.toggle("hide")
            }
        })
        setTimeout(() => {
            modalRef.current.classList.toggle("is-modal-open")
            

        }, 50);
        let image = imageRef.current;
        if (isClose) {
            if (image.classList.contains("blurred")){
                image.classList.toggle("blurred")
            }
            setTimeout(() => {
                history.goBack();
            }, 500);
        }
        // return clearTimeout(timer);
    }, [isClose]);
    
    const handleClick = () => {
        let image = imageRef.current;
        if (image.classList.contains("blurred")){
            image.classList.toggle("blurred");
        }
        setClose(true);

    }
    const handleScrollUp = () => {
        workDetailRef.current.scrollTo({top: 0, behavior: 'smooth'})
    }
    const goBack = () => {
        setClose(true);
    }

    let path = history.location.pathname;
    if (path == "/works/work-one") {
        console.log("ONE")
        var finalVersionImg = <img src={ finalVersionData } alt="final-version"/>
    } else if (path == "/works/work-two") {
        console.log("TWO")
        var finalVersionImg = <img src={ finalVersionWRLite } alt="final-version"/>
        var introduction = (
            <div className="second-content">
                <div className="section-intro">
                    <h3>INTRODUCTION</h3>
                    <p>
                        Since the beginning, Whooo's Reading (WR) has been great at
                        helping teachers track their students' independent reading and
                        motivating students to read more on their own. While WHooo's Reading
                        did a good job managing and motivating independent reading, we
                        discovered that teachers and schools were most interested in WR
                        because of the questions that ask students about the books the read.
                    </p>
                    <p>
                        Teachers were fed up with the factual-recall multiple choice questions 
                        that programs would ask students. These questions do not prepare students 
                        for a world in which they need to think creatively and analytically 
                        and one in which they can easily google the answer to fact-recall questions. 
                        Moreover, the new standards ask students to synthesize, cite evidence, analyze, 
                        and write and these ‘old-school’ multiple choice assessments 
                        were not cutting it anymore.
                    </p>
                    <p>
                       The best way to help teachers with our program was to improve our reading questions 
                       and assessment content. To make these improvements, we turned to our teachers 
                       for their invaluable feedback and input. 
                    </p>
                </div>
                <div className="double-images-wrapper">
                    <div className="modal-small-img">
                        <img className="red" src={ multipleChoice } alt="multiple-choice-question"/>
                    </div>
                    <div className="modal-small-img green">
                        <img className="green" src={ comprehension } alt="comprehension-question"/>
                    </div>
                </div>
            </div>
        )
        var research = (
            <div className="modal-section grey">
                <div className="modal-justify-left">
                    <p className="news-heading">
                        <h3>RESEARCH, STRATEGY, and CONCEPT</h3>
                    </p>
                    <div className="text">
                        <p className="all-caps news-sub-heading">User Interviews</p>
                        <p>For two weeks we had phone calls with dozens of teachers around the
                            country and learned that a major problem is finding formative
                            assessments that align with the standards and reinforce and the reading
                        </p>
                    </div>
                </div>
                <div className="modal-justify-left">
                    <p className="all-caps news-sub-heading">GENERAL DISCOVERY</p>
                    <div className="news-format">
                        <div className="with-quote">
                            <div className="quoted"><span className="quote-span">&#8220;</span></div>
                            <div className="news-format-left">
                                <p>
                                    I might have a student who is missing a particular skill: 
                                    maybe inferring, drawing conclusions, answering open-ended
                                    questions, main ideas, supporting details, using evidence.
                                    The way I currently handle this is to
                                    introduce a concept to the whole class(e.g main ideas)
                                    then do a lesson on the concept. Then I break them
                                    into groups of 4, so they can start getting practice, and
                                    so they can give support to each other
                                </p>

                                <p>
                                    The worst part of this process is coming up with activities for 
                                    the 3 or 4 person groups and grading them. My expertise is in teaching 
                                    the lesson and helping groups and students understand what was taught. 
                                    I want to hand off coming up with ways to practice the reading skills.
                                </p>
                            </div>
                        </div>
                        <div className="news-format-right">
                            <p>
                                While some sites (e.g. Pinterest) offer graphic
                                organizers and other forms of assessments-- it often 
                                takes many hours to find the right types of reading
                                exercises, and they are rarely engaging for students.
                                In fact nearly very teacher we spoke to brought up some version of this problem
                            </p>
                        </div>
                    </div>
                    <p className="all-caps news-sub-heading">CREATING ASSIGNMENTS</p>
                    <div className="news-format">
                        <div className="with-quote">
                            <div className="quoted"><span className="quote-span">&#8220;</span></div>
                            <div className="news-format-left">
                                <p>
                                    I want to assign exercises for students to work on that’s aligned 
                                    with unit I am focusing on. I want to check up on my computer during the period 
                                    where students are regarding finishing the exercises (I like how google classroom does this).
                                </p>
                                <p>
                                    Its very important for me to be able to assign students exercises 
                                    based on their individual needs.
                                </p>
                            </div>
                        </div>
                        
                        <div className="news-format-right">
                            <p>
                                Teachers want to assign 1-3 exercises that are 
                                aligned with standards that their students can then work on. 
                                Teachers want to assign different assignments to different 
                                groups of students (depending on their specific needs and pace).
                            </p>
                        </div>
                    </div>
                    <p className="all-caps news-sub-heading">DATA</p>
                    <div className="news-format">
                        <div className="with-quote">
                            <div className="quoted"><span className="quote-span">&#8220;</span></div>
                            <div className="news-format-left">
                                <p>
                                    My time is so limited. At the beginning of the year, you have to look at their test scores
                                    from last year or get to know them before you can determine how to group them. I want reports 
                                    that tell me who’s mastering which skill sets. I would still look deep into it, but when I'm short on time, 
                                    I would have the information right at my fingertips.
                                </p>
                                <p>
                                    Both individual and group data are crucial. I would use individual data for small groups, 
                                    and whole class data for informing my instruction.”
                                </p>
                            </div>
                        </div>
                        <div className="news-format-right">
                        <p>
                            Teachers are very short on time. They usually have to look in several places to analyze data to determine 
                            where their students are at. Teachers highly value data that shows outliers: who is totally underperforming 
                            (and needs more hands on attention) and who is over-performing (needs to be challenged). 
                            They want to see this data broken down by skillset comprehension.
                        </p>
                        </div>
                    </div>
                </div>
            </div>  
        )
        var strategy = (
            <div className="modal-section contains-colored-background">
                <div className="modal-justify-left primary-dark-text">
                    <p className="all-caps news-sub-heading">JOBS TO BE DONE FRAMEWORK</p>
                    <p className="jbd-header">When ________ I want to ________ so I can ________.</p>
                    <p>
                        To distill the research down to actionable steps, I plugged the research into the Jobs To Be Done (JBD) framework. 
                        JBD focuses on the triggering event or situation, the motivation and goal, and the intended outcome. 
                        Turning our research into these statements gave us more clarity into the components in our system that 
                        were a part of this job and the relationships and interactions that would be required to facilitate it.
                    </p>
                </div>
                <div className="left-to-full all-blue-background">
                    <div className="middle-section">
                        <div className="basic-session">
                            <p className="primary-white-text">
                                <span className="primary-light-text">
                                SITUATION:</span> When I assign reading and exercises 
                            </p>
                            <p className="primary-white-text">
                                <span className="primary-light-text">MOTIVATION: </span> 
                                I want to find content (texts and questions) in one place (that’s accessible by the students)
                            </p>
                            <p className="primary-white-text">
                                <span className="primary-light-text">RESULT: </span> 
                                So I can spend more time on lesson-prep.
                            </p>
                        </div>
                        <div className="basic-session">
                            <p className="primary-white-text">
                                <span className="primary-light-text">SITUATION: </span> 
                                I am using exercises and questions (from software)
                            </p>
                            <p className="primary-white-text">
                                <span className="primary-light-text">MOTIVATION: </span> 
                                I want higher level thinking exercises 
                            </p>
                            <p className="primary-white-text">
                                <span className="primary-light-text">RESULT: </span> 
                                So I can know my students fully mastering higher-level thinking and reinforce my lessons.
                            </p>
                        </div>
                        <div className="basic-session">
                            <p className="primary-white-text">
                                <span className="primary-light-text">SITUATION: </span> 
                                When I assign reading and exercises
                            </p>
                            <p className="primary-white-text">
                                <span className="primary-light-text">MOTIVATION: </span> 
                                I want my students to enjoy the program
                            </p>
                            <p className="primary-white-text">
                                <span className="primary-light-text">RESULT: </span> 
                                So I can help them develop a love for reading.
                            </p>
                        </div>
                        <div className="basic-session">
                            <p className="primary-white-text">
                                <span className="primary-light-text">SITUATION: </span>
                                When I am assessing student growth
                            </p>
                            <p className="primary-white-text">
                                <span className="primary-light-text">MOTIVATION: </span>
                                I want receive a report (on their strengths and weaknesses)
                            </p>
                            <p className="primary-white-text">
                                <span className="primary-light-text">RESULT: </span>
                                So I can provide them with the necessary support.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='modal-justify-left'>
                    <p><b>USER NEEDS</b></p>
                    <div className="flex-row align-center">
                        <div className="simple-box">
                        </div>
                        <div>
                            <p className="boxed-text primary-dark-text">Teachers <b>need</b> better ways to help students practice and master</p>
                            <p className="boxed-text primary-dark-text">higher-order thinking skills reading comprehension.</p>
                        </div>
                    </div>
                    <div className="flex-row align-center">
                        <div className="simple-box">
                        </div>
                        <div>
                            <p className="boxed-text primary-dark-text">Teachers <b>need</b> to easily find and assign practice work tied explicitly</p>
                            <p className="boxed-text primary-dark-text">to specific standards they are working on in class and the student’s reading level.</p>
                        </div>
                    </div>
                    <div className="flex-row align-center">
                        <div className="simple-box">
                        </div>
                        <div>
                            <p className="boxed-text primary-dark-text">Teachers <b>need</b> to be able to see student progress on assignments.</p>
                            <p className="boxed-text primary-dark-text"></p>
                        </div>
                    </div>
                    <div className="flex-row align-center">
                        <div className="simple-box">
                        </div>
                        <div>
                            <p className="boxed-text primary-dark-text">Teachers <b>need</b> proof and justification on where students are specifically</p>
                            <p className="boxed-text primary-dark-text">struggling in reading comprehension, and methods to remedy those weaknesses</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        console.log("THREE")
        var finalVersionImg = <img src={ finalVersionStudentRoster } alt="final-version"/>
    }

    return (
        <div className="work-modal">
            <div className="left-modal">
                <div className="blurred-modal" onClick={()=> goBack()}></div>
                <div ref={modalRef} className="modal-main">
                    <div ref={workDetailRef} className="work-details">
                        <div ref={topRef} className="top-content" >
                            <span onClick={()=> handleClick()} className="close-modal" to="/works">X</span>
                        </div>
                        <div ref={goTopRef} className="go-to-top hide" onClick={()=> handleScrollUp()}>↑ Go Up</div>
                        <div>
                            <div className="first-content">
                                <div>
                                    <p className="main-work-text">{ work.title }</p>
                                    <p className="secondary-work-text">{ work.description_one }</p>
                                    <p className="works-type"><span>MY ROLE:</span> { work.type }</p>
                                </div>
                                <div className="modal-img-one">
                                    { finalVersionImg }
                                </div>
                            </div>
                            { introduction }
                        </div>
                        { research }
                        { strategy }
                        <div className="modal-section grey">
                            <div className="modal-justify-left structure">
                                <p><b>FLOW and STRUCTURE</b></p>
                                <p>
                                    In the structure phase I wanted to answer three questions: 
                                    <ol>
                                        <li>What could be done specifically within each part of the user experience?</li>
                                        <li>How to accomplish that within the interface?</li>
                                        <li>What was then needed on the page to support this?</li>
                                    </ol>
                                    I used a variety of methods to determine what the teacher’s experience would look like. 
                                    Each method had a slightly different approach. 
                                </p>
                                <p><b>SITE MAPS</b></p>
                                <img className="full-width" src={ studentSiteMap } alt="student-site-map"/>
                                <img className="full-width" src={ teacherSiteMap } alt="teacher-site-map"/>
                            </div>
                            <div className="modal-justify-left framework">
                                <b>SCENARIO MAPPING</b>
                                <p>
                                    Scenario Mapping focused on what a teacher could do at a given point and 
                                    how that would be facilitated.
                                </p>
                                <img className="full-width" src={ scenarioMapping } alt="scenario-mapping" />
                            </div>
                            <div className="modal-justify-left framework">
                                <b>GOALS, ACTIONS, and SCREEN</b>
                                <p>
                                    I created a Goals Actions Screen framework that is a bit more explicit. 
                                    It incorporates the user's goal, the action they will take to achieve that goal, and 
                                    what is needed on the screen to facilitate.
                                </p>
                                <img className="full-width" src={ goalsActionsScreen } alt="goals-actions-screen" />
                            </div>
                            <div className="modal-justify-left framework">
                               <b>NARRATIVE SUMMARY</b>
                               <p>
                                   I plotted out the flow of a user's experience in question/answer format. 
                                   This was the simplest method and I found it surprisingly helpful as well.
                               </p>
                               <img className="full-width" src={ narrativeSummary } alt="narrative-summary" />
                            </div>
                        </div>
                        <div className="modal-section">
                            <div className='left-to-full'>
                                <div className="color-box-sections">
                                    <div>
                                        <h3>LOFI, SKETCHING and ANNOTATING</h3>
                                        <p>Text goes here…</p>
                                    </div>
                                    <div className="grey-boxes">
                                        <div className="box-left-red">

                                        </div>
                                        <div className="box-right-green">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="feedback-box">
                                <h3>FEEDBACK</h3>
                                <p>We did user testing in the office (with non product employees) to get a quick feel for the basic layouts we chose. (FIX)</p>  
                                <p>They preferred Version two for browsing exercises since it was more direct and less clunky; all filters/controls were placed above the exercises. (FIX)</p>
                            </div>
                            <div className='left-to-full'>
                                <div className="dark-section">
                                    <div className="container-left primary-dark-text ">
                                        <p>Teacher Assignments Progress Table</p>
                                        <p>The table on this page simply shows the progress students have made on the teacher's assignment (assigned exercises).</p>
                                    </div>
                                    <div className="grey-box">

                                    </div>
                                </div>
                                <div className="dark-section">
                                    <div className="container-left" >
                                        <h5>INSIGHTS</h5>
                                        <div className="flex-row align-center">
                                           <div className="dot">
                                            </div> 
                                            <div>
                                                <p className="boxed-text primary-dark-text">POINT ON</p>
                                                <p className="boxed-text primary-dark-text">Explanation Text goes here…</p>
                                            </div>
                                        </div>
                                        <div className="flex-row align-center">
                                           <div className="dot">
                                            </div> 
                                            <div>
                                                <p className="boxed-text primary-dark-text">POINT ON</p>
                                                <p className="boxed-text primary-dark-text">Explanation Text goes here…</p>
                                            </div>
                                        </div>
                                        <div className="flex-row align-center">
                                           <div className="dot">
                                            </div> 
                                            <div>
                                                <p className="boxed-text primary-dark-text">POINT ON</p>
                                                <p className="boxed-text primary-dark-text">Explanation Text goes here…</p>
                                            </div>
                                        </div>
                                        <div className="flex-row align-center">
                                           <div className="dot">
                                            </div> 
                                            <div>
                                                <p className="boxed-text primary-dark-text">POINT ON</p>
                                                <p className="boxed-text primary-dark-text">Explanation Text goes here…</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bigger-container">
                                        <div className="overlap-box-left">

                                        </div>
                                        <div className="overlap-box-right">

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="modal-section">
                            <div className="modal-justify-left">
                                <h5>WIREFRAMES</h5>
                                <h6>TEACHER EXERCISES</h6>
                                <div className="wireframe">

                                </div>
                            </div>
                            <div className="modal-justify-left">
                            <h6>STUDENT EXERCISES</h6>
                                <p>The student experience is very simple as the only thing they can do is select and work on exercises.</p>
                                <div className="wireframe">

                                </div>
                            </div>
                            <div className="modal-justify-left">
                                <h6>ASSIGNMENTS</h6>
                                <p>The teacher dashboard has a progress table (bottom right) that shows student progression on their assignment.</p>
                                <div className="wireframe">

                                </div>
                            </div>

                            <div className="bottom-box-content">
                                <h4>FEEDBACK</h4>
                                <div className="bottom-div">
                                    <div className='bottom-content'>
                                        <h5>FILTERING</h5>
                                        <p>Some teachers had trouble finding the exercises they wanted. We came up with several ideas of potential filters:</p>
                                        <p>Filter exercises by learning type (visual, audible, reading, etc)
                                           Filter exercises by prior reading vs. text provided in exercise
                                           Filter exercises by time estimate
                                           Filter exercises by traditional (mostly writing) vs. reward (more creative)
                                           Filter exercises by difficulty level
                                        </p>
                                    </div>
                                    <div className="bottom-content">
                                        <h5>CONSTRAINTS</h5>
                                        <p>Teachers often have 20 or 30 students in their assignment progress table, and maybe only assign 2 exercises. This would create a pretty big discrepancy between the height of the assignments box and the height of the progress table-making it a bit of an awkward experience.</p>
                                    </div>
                                </div>
                                <div className="bottom-div">
                                    <div className='bottom-content'>
                                        <h5>WORDING</h5>
                                        <p>
                                        In the assignment creation, the word "delete" was confusing as it seemed to imply that doing so would delete the exercises (instead of merely deleting the assignment).
                                        </p>
                                    </div>
                                    <div className="bottom-content">
                                        <h5>DIFFERENTIATE</h5>
                                        <p>To start, we only supported the ability to assign exercises to all of a teacher's students at once. There was already a lot of interest in being able to assign groups of students different exercises.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withLoadState(withRouter(Works))