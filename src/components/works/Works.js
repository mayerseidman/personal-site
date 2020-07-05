import React, { Component, useEffect, useRef, useState} from 'react';
import { 
    NavLink,
    Switch,
    Link,
    useParams,
    withRouter,
    Route

} from 'react-router-dom';
import { withLoadState } from '../contexts/LoadStateContext';


import image from "../../assets/images/linkedin-profile-mayer.png";
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

        // this.props = props
        this.state = {
            works: {
                'work-one': {
                    title: "Work Numero Uno",
                    description_one: "Descriptive text goes here…Descriptive text goes here…Descriptive text goes here dd.  Descriptive text goes here…ggoes here goes here.",
                    type: "Design | Prototype"
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
        this.props.context.setLastLocation(this.props.location)
        setTimeout(() => {
            // animations
            let textWrapper = this.textWrapper.current;
            textWrapper.classList.toggle('slide-down-works');
        });
    }
    handeleMenuClick() {
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
                        <div ref={this.iconRef} className="nav-icon" onClick={ () => this.handeleMenuClick()}>
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
                                        <div className="each-work">
                                            <div className="work-text">
                                                <Link onClick={()=> this.handleWork()} className="no-dec" to={`${url}/work-one`}>
                                                    <p className="main-work-text">Work Numero Uno</p>
                                                    <p className="secondary-work-text">Design | Prototype</p>
                                                </Link>
                                            </div>
                                            <div className="work-image-wrapper"></div>
                                        </div>
                                        <div className="worker-separator"></div>
                                        <div className="each-work">
                                            <div className="work-text">
                                                <Link onClick={()=> this.handleWork()} className="no-dec" to={`${url}/work-two`}>
                                                    <p className="main-work-text">Work Numero Dos</p>
                                                    <p className="secondary-work-text">Design | Prototype</p>
                                                </Link>
                                            </div>
                                            <div className="work-image-wrapper"></div>
                                        </div>
                                        <div className="worker-separator"></div>
                                        <div className="each-work">
                                            <div className="work-text">
                                                <Link onClick={()=> this.handleWork()} className="no-dec" to={`${url}/work-three`}>
                                                    <p className="main-work-text">Work Numero Tres</p>
                                                    <p className="secondary-work-text">Design|Prototype</p>
                                                </Link>
                                            </div>
                                            <div className="work-image-wrapper"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='main-empty-2'>
                            </div>
                        </div>
                        <div ref={this.wrapperRef} className="navigation-works">
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/works'>Work</NavLink></p>
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/about'>About</NavLink></p>
                            <p><NavLink className="nav-link" activeStyle={{ color: 'white' }} to='/writing'>Writing</NavLink></p>
                        </div>
                    </div>
                </div>
                <div ref={this.profileRef} className='floating-profile-work'>
                    <div className="profile-image-container">
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

    return (
        <div className="work-modal">
            <div className="left-modal">
                <div className="blurred-modal" onClick={()=> goBack()}></div>
                <div ref={modalRef} className="modal-main">
                    <div ref={workDetailRef} className="work-details">
                        <div ref={topRef} className="top-content" > 
                            <span onClick={()=> handleClick()} className="close-modal" to="/works">← Close</span>
                        </div>
                        <div ref={goTopRef} className="go-to-top hide" onClick={()=> handleScrollUp()}>↑ Go Up</div>
                        <div className="modal-section">
                            <div className="first-content">
                                <div>
                                    <p className="main-work-text">{ work.title }</p>
                                    <p className="secondary-work-text">{ work.description_one }</p>
                                    <p className="works-type">{ work.type }</p>
                                </div>
                                <div className="modal-img-one">

                                </div>
                            </div>
                            <div className="second-content">
                                <div className="section-intro">
                                    <h2>Introduction</h2>
                                    <p>Since the beginning, Whooo's Reading (WR) has been very good at
                                    helping teachers track their students' independent reading and
                                    motivating students to read more on their own. While WHooo's Reading
                                    did a good job managing and motivating independent reading, we
                                    discovered that teachers and schools were most interested in WR
                                    because of the questions that ask students about the books the read.</p>
                                    <br/>
                                    <p>We learned that teachers were fed up with the factual-recall multiple
                                    choice questions that programs would ask students</p>
                                    <br/>
                                    <p>Questions like these do not prepare students for a world i which they
                                    need to think creatively and analytically and one in which they can easily
                                    google the answer to fact-recall questions. Moreover, the new standards
                                    asks students to synthesize, cite evidence, analyze, and write and these
                                    'old-school' multiple choice assessments were not cutting it anymore</p>
                                </div>
                                <div className="double-images-wrapper">
                                    <div className="modal-small-img"></div>
                                    <div className="modal-small-img"></div>
                                </div>
                            </div>
                        </div> 
                        <div className="modal-section">
                            <div className="modal-justify-left">
                                <p className="news-heading">RESEARCH, STRATEGY, and CONCEPT</p>
                                <div>
                                    <p className="all-caps news-sub-heading">User Interviews</p>
                                    <p>For two weeks we had phone calls with dozens of teachers around the</p>
                                    <p>country and learned that a major problem is finding formative</p>
                                    <p>assessments that align with the standards and reinforce and the reading</p>
                                </div>
                            </div>
                            <div className="modal-justify-left">
                                <p className="all-caps news-sub-heading">General Discovery</p>
                                <div className="news-format">
                                    <div className="with-quote">
                                        <div className="quoted"><span className="quote-span">&#8220;</span></div>
                                        <div className="news-format-left">
                                            <p>I might have a student who is missing a particular skill: 
                                            maybe inferring, drawing conclusions, answering open-ended
                                            questions, main ideas, supporting details, using evidence.
                                            The way I currently handle this is to
                                            introduce a concept to the whole class(e.g main ideas)
                                            then do a lesson on the concept. Then I break them
                                            into groups of 4, so they can start getting practice, and
                                            so they can give support to each other</p>
                                        </div>
                                    </div>
                                    <div className="news-format-right">
                                    <p>While some sites (e.g. Pinterest) offer graphic
                                        organizers and other forms of assessments-- it often 
                                        takes many hours to find the right types of reading
                                        exercises, and they are rarely engaging for students.
                                        In fact nearly very teacher we spoke to brought up some version of this problem</p>
                                    </div>
                                </div>
                                <p className="all-caps news-sub-heading">General Discovery</p>
                                <div className="news-format">
                                    <div className="with-quote">
                                        <div className="quoted"><span className="quote-span">&#8220;</span></div>
                                        <div className="news-format-left">
                                            <p>I might have a student who is missing a particular skill: 
                                            maybe inferring, drawing conclusions, answering open-ended
                                            questions, main ideas, supporting details, using evidence.
                                            The way I currently handle this is to
                                            introduce a concept to the whole class(e.g main ideas)
                                            then do a lesson on the concept. Then I break them
                                            into groups of 4, so they can start getting practice, and
                                            so they can give support to each other</p>
                                        </div>
                                    </div>
                                    
                                    <div className="news-format-right">
                                        <p>While some sites (e.g. Pinterest) offer graphic
                                        organizers and other forms of assessments-- it often 
                                        takes many hours to find the right types of reading
                                        exercises, and they are rarely engaging for students.
                                        In fact nearly very teacher we spoke to brought up some version of this problem</p>
                                    </div>
                                </div>
                                <p className="all-caps news-sub-heading">General Discovery</p>
                                <div className="news-format">
                                    <div className="with-quote">
                                        <div className="quoted"><span className="quote-span">&#8220;</span></div>
                                        <div className="news-format-left">
                                            <p>I might have a student who is missing a particular skill: 
                                            maybe inferring, drawing conclusions, answering open-ended
                                            questions, main ideas, supporting details, using evidence.
                                            The way I currently handle this is to
                                            introduce a concept to the whole class(e.g main ideas)
                                            then do a lesson on the concept. Then I break them
                                            into groups of 4, so they can start getting practice, and
                                            so they can give support to each other</p>
                                        </div>
                                    </div>
                                    <div className="news-format-right">
                                    <p>While some sites (e.g. Pinterest) offer graphic
                                        organizers and other forms of assessments-- it often 
                                        takes many hours to find the right types of reading
                                        exercises, and they are rarely engaging for students.
                                        In fact nearly very teacher we spoke to brought up some version of this problem</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="modal-section">
                            <div className="modal-justify-left primary-dark-text">
                                <p>JOBS TO BE DONE FRAM</p>
                                <p>When ________ I want to ________ so I can ________.</p>
                                <p>To further distill the research down to actionable steps, we then plugged it into the Jobs To Be Done (JBD) Framework. JBD is focused on the "job" or task a user is trying to accomplish. We were able to turn our research into these statements:</p>
                                <p>When constructing our product plan we focused more on a user's mindset than on traditional personas (based on demographics). As you can see, this framework really cuts to the chase of a user's intentions [FIX THIS].</p>
                            </div>
                            <div className="left-to-full all-blue-background">
                                <div className="middle-section">
                                    <div className="basic-session">
                                        <p className="primary-white-text"><span className="primary-light-text">SITUATION</span>: When I assign reading and exercises </p>
                                        <p className="primary-white-text"><span className="primary-light-text">MOTIVATION</span>: I want to find content (texts and questions) in one place (that’s accessible by the students)</p>
                                        <p className="primary-white-text"><span className="primary-light-text">RESULT</span>: So I can spend more time on lesson-prep.</p>
                                    </div>
                                    <div className="basic-session">
                                        <p className="primary-white-text"><span className="primary-light-text">SITUATION</span>: When I assign reading and exercises</p>
                                        <p className="primary-white-text"><span className="primary-light-text">MOTIVATION</span> I want to find content (texts and questions) in one place (that’s accessible by the students) </p>
                                        <p className="primary-white-text"><span className="primary-light-text">RESULT</span>: So I can spend more time on lesson-prep.</p>
                                    </div>
                                    <div className="basic-session">
                                        <p className="primary-white-text"><span className="primary-light-text">SITUATION</span>: When I assign reading and exercises</p>
                                        <p className="primary-white-text"><span className="primary-light-text">MOTIVATION</span> I want to find content (texts and questions) in one place (that’s accessible by the students)</p>
                                        <p className="primary-white-text"><span className="primary-light-text">RESULT</span>: So I can spend more time on lesson-prep.</p>
                                    </div>
                                    <div className="basic-session">
                                        <p className="primary-white-text">Situation: <span className="primary-light-text">When I assign reading and exercises</span></p>
                                        <p className="primary-white-text">Motivation: <span className="primary-light-text">I want to find content (texts and questions) in one place (that’s accessible by the students)</span></p>
                                        <p className="primary-white-text">Result: <span className="primary-light-text">So I can spend more time on lesson-prep.</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='modal-justify-left'>
                                <h3>USER NEEDS</h3>
                                <p>text goes here…[FIX]</p>
                                <div className="flex-row align-center">
                                    <div className="simple-box">

                                    </div>
                                    <div>
                                        <p className="boxed-text primary-dark-text">Teachers need better ways to help students practice and master</p>
                                        <p className="boxed-text primary-dark-text">higher-order thinking skills reading comprehension.</p>
                                    </div>
                                </div>
                                <div className="flex-row align-center">
                                    <div className="simple-box">

                                    </div>
                                    <div>
                                        <p className="boxed-text primary-dark-text">Teachers need better ways to help students practice and master</p>
                                        <p className="boxed-text primary-dark-text">higher-order thinking skills reading comprehension.</p>
                                    </div>
                                </div>
                                <div className="flex-row align-center">
                                    <div className="simple-box">

                                    </div>
                                    <div>
                                        <p className="boxed-text primary-dark-text">Teachers need better ways to help students practice and master</p>
                                        <p className="boxed-text primary-dark-text">higher-order thinking skills reading comprehension.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-section">
                            <div className="modal-justify-left">
                                <h4>FLOW and STRUCTURE</h4>
                                <p>Text goes here</p>
                                <div className="grey-boxes">
                                    <div className="grey-box">

                                    </div>
                                    <div className="grey-box">

                                    </div>
                                </div>
                            </div>
                            <div className="modal-justify-left">
                                <div className="grey-boxes">
                                    <div className="empty-box">
                                        <h5>TITLE</h5>
                                        <p>Text goes here…</p>
                                    </div>
                                    <div className="empty-box">
                                        <div className="overlap-box-left">

                                        </div>
                                        <div className="overlap-box-right">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-justify-left">
                                <div className="grey-boxes">
                                    <div className="empty-box">
                                        <h5>TITLE</h5>
                                        <p>Text goes here…</p>
                                    </div>
                                    <div className="empty-box">
                                        <div className="overlap-box-left">

                                        </div>
                                        <div className="overlap-box-right">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-justify-left">
                                <div className="grey-boxes">
                                    <div className="empty-box">
                                        <h5>TITLE</h5>
                                        <p>Text goes here…</p>
                                    </div>
                                    <div className="empty-box">
                                        <div className="overlap-box-left">

                                        </div>
                                        <div className="overlap-box-right">

                                        </div>
                                    </div>
                                </div>
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