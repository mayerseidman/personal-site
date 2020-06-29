import React, { Component, useEffect, useRef, useState } from 'react'
import { 
    NavLink,
    Switch,
    Link,
    useParams,
    withRouter,
    Route

} from 'react-router-dom'
import image from "../../assets/images/linkedin-profile-mayer.png"
import '../../assets/sass/works/works.scss';

class Works extends Component {
    constructor(props) {
        super(props)
        this.wrapperRef = React.createRef();
        this.iconRef = React.createRef();
        this.imageRef = React.createRef();
        this.mainRef = React.createRef();
        // this.props = props
        this.state = {
            works: {
                'work-one':{
                    title: "Work Numero Uno",
                    description_one: "Descriptive text goes here…Descriptive text goes here…Descriptive text goes here dd.  Descriptive text goes here…ggoes here goes here.",
                    type: "Design | Prototype"
                }
            }
        }
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
        image.classList.toggle("blurred")
    }

    render() {
        let {path, url } = this.props.match;
        let { history } = this.props;
        return (
            <div className="wrapper">
                <div className='wrapper-main'>
                    <div className="left-container">
                        <div className="my-name">
                            <span className="name-mayer"><Link className="plain-link" to="/" >Mayer.</Link></span>
                        </div>
                        <div ref={this.iconRef} className="nav-icon" onClick={ () => this.handeleMenuClick()}>
                            <div></div>
                        </div>
                        <div className="float-dark-box"></div>
                    </div>
                    <div className="right-container">
                        <div ref={this.mainRef} className="main-content">
                            <div className='main-empty-'>
                                <div className="float-dark-light"></div>
                            </div>
                            <div className='main-text'>
                                <div className="text-container">
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
                                                <p className="main-work-text">Work Numero Dos</p>
                                                <p className="secondary-work-text">Design | Prototype</p>
                                            </div>
                                            <div className="work-image-wrapper"></div>
                                        </div>
                                        <div className="worker-separator"></div>
                                        <div className="each-work">
                                            <div className="work-text">
                                                <p className="main-work-text">Work Numero Tres</p>
                                                <p className="secondary-work-text">Design|Prototype</p>
                                            </div>
                                            <div className="work-image-wrapper"></div>
                                        </div>
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
                <div className='floating-profile'>
                    <div className="profile-image-container">
                        <img ref={ this.imageRef } alt="profile" className="image-prof" src={ image } />
                    </div>
                    <div className="profile-image-blank"></div>
                </div>
                <Switch>
                    <Route path={`${path}/:workId`}>
                        <Work  works={this.state.works} imageRef={this.imageRef} history={history}/>
                    </Route>
                </Switch>
            </div>
      
        )
    }
}

function Work({ works, imageRef, history }) {
    let { workId } = useParams();
    let modalRef = useRef(null)
    let work = works[workId]
    let [isClose, setClose] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            modalRef.current.classList.toggle("is-modal-open")
            

        }, 50)
        let image = imageRef.current;
        if (isClose) {
            if (image.classList.contains("blurred")){
                image.classList.toggle("blurred")
            }
            setTimeout(() => {
                history.goBack();
            }, 500)
        }
        // return clearTimeout(timer);
    }, [isClose])
    
    const handleClick = () => {
        let image = imageRef.current
        if (image.classList.contains("blurred")){
            image.classList.toggle("blurred")
        }
        setClose(true)

    }
    const goBack = () => {
        // modalRef.current.classList.toggle("is-modal-open")
        setClose(true)

        
    }
    return (
        <div className="work-modal">
            <div className="left-modal">
                <div className="blurred-modal" onClick={()=> goBack()}></div>
                <div ref={modalRef} className="modal-main">
                    <div className="work-details">
                        <div className="top-content" > 
                            <span onClick={()=> handleClick()} className="close-modal" to="/works">← Close</span>
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Works)