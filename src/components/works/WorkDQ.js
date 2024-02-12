import React from "react";
import { withLoadState } from "../contexts/LoadStateContext";

// IMAGES
import backgroundIMG from "../../assets/images/dq/background-img.png";
import problemIMG from "../../assets/images/dq/problem-img.png";
import understandingUsersImg1 from "../../assets/images/dq/understanding-users-1.png";
import understandingUsersImg2 from "../../assets/images/dq/understanding-users-2.png";
import ideationIMG1 from "../../assets/images/dq/ideation-img-1.png";
import ideationIMG2 from "../../assets/images/dq/ideation-img-2.png";
import ideationIMG3 from "../../assets/images/dq/ideation-img-3.png";
import ideationIMG4 from "../../assets/images/dq/ideation-img-4.png";

import finalVersionIMG1 from "../../assets/images/dq/final-version-1.png";
import finalVersionIMG2 from "../../assets/images/dq/final-version-2.png";
import finalVersionIMG3 from "../../assets/images/dq/final-version-3.png";


import combinedSiteMaps from "../../assets/images/wr-lite/combined-sitemaps.png";

import scenarioMapping from "../../assets/images/wr-lite/scenario-mapping.png";
import goalsActionsScreen from "../../assets/images/wr-lite/goals-actions-screen.png";
import narrativeSummary from "../../assets/images/wr-lite/narrative-summary.png";

import lofiOne from "../../assets/images/wr-lite/lofi-one.png";
import lofiTwo from "../../assets/images/wr-lite/lofi-two.png";
import lofiThree from "../../assets/images/wr-lite/lofi-three.png";
import lofisAnnotated from "../../assets/images/wr-lite/lofis-annotated.png";

import teacherExercisesWireframe from "../../assets/images/wr-lite/teacher-exercises.png";
import studentExercisesWireframe from "../../assets/images/wr-lite/student-exercises.png";
import teacherHomePageWireframe from "../../assets/images/wr-lite/teacher-homepage.png";

import assignmentsFinal from "../../assets/images/wr-lite/teacher-homepage-final.png";
import insightsFinal from "../../assets/images/wr-lite/insights-final.png";
import finalVersionWRLite from "../../assets/images/wr-lite/teacher-exercises.gif";

class WorkOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderIntroduction() {
        return (
            <div className="second-content">
                <div className="section-intro">
                    <h3>BACKGROUND</h3>
                    <p>PAIRIN empowers individuals in their professional pursuits by redefining career journeys.</p>
                    <p>
                        The professional platform enables case managers to provide career guidance and to gain valuable 
                        insights into the whereabouts and progress of their constituents. 
                    </p>
                    <p>
                        With <i>Dynamic Querying</i>, case managers could effortlessly extract essential information such 
                        as participant details, addresses, and other pertinent information 
                        from specific groups they have created, streamlining their workflow and enhancing efficiency. 
          </p>
          <div className="spaced-section">
            <p className="all-caps news-sub-heading">ROLE</p>
            <p>
              From conducting in-depth user research to conceptualizing and ideating the redesign strategy, 
              my role encompassed understanding user needs and preferences at every stage. 
              Meticulously crafting the user interface and experience, I ensured that our platform 
              addressed user pain points effectively while delivering an intuitive and seamless solution.
            </p>
            <p>
              A significant portion of the project involved ideating and deciphering how to transform a 
              complex experience into an intuitive and user-friendly one.
            </p>
            <p>
              I worked seamlessly with the engineering team, to user that the user interface and experience 
              were implemented fully and seamlessly.
            </p>
          </div>
        </div>
        <div className="double-images-wrapper">
          <div className="modal-small-img">
            <img
              className=""
              src={ backgroundIMG }
              alt="final-gif"
            />
          </div>
        </div>
      </div>
    );
  }
  renderProblem() {
    return (
      <div className="second-content grey">
        <div className="section-intro">
          <h3>DEFINING THE PROBLEM</h3>
          <p className="all-caps news-sub-heading">THE PROBLEM</p>
          <p>
            The old querying tool lacked the flexibility to chain queries, forcing users into a 
            cumbersome process. Moreover, starting points for queries were rigid, requiring users to 
            create initial groups (elsewhere) before narrowing down—resulting in inefficiencies. We learned of 
            frustrations with the existing system's user experience, highlighting the opportunity for a redesign. 
          </p>
           <div className="spaced-section">
            <p className="all-caps news-sub-heading">PROJECT GOAL</p>
            <p>
              Create a more intuitive and user-friendly dynamic querying tool to help case managers to build 
              smarter and more powerful queries.
            </p>
            <p>
              Create a more intuitive and user-friendly dynamic querying tool to help case 
              managers to build smarter and more powerful queries.
            </p>
          </div>  
        </div>
        <div className="double-images-wrapper">
          <div className="modal-small-img">
            <img
              className=""
              src={ problemIMG }
              alt="problem-img"
            />
          </div>
        </div>
      </div>   
    );
  }
    renderUnderstandingUsers() {
        return (
            <div className="second-content">
                <div className="section-intro">
                    <h3>UNDERSTANDING USERS</h3>
                    <p className="all-caps news-sub-heading">MOTIVATIONS</p>
                    <p>
                        <ul>
                            <li>Users expressed a need for a more flexible, robust, and more intuitive querying experience</li>
                            <li>Users wanted to have a more comprehensive grasp on the full picture in their data exploration</li>
                        </ul>
                    </p>
                    <div className="spaced-section">
                        <p className="all-caps news-sub-heading">CHALLENGES</p>
                            <ul>
                                <li>Users felt limited by the sole entry point, hindering their ability to approach queries from different angles</li>
                                <li>Users struggled to explore relationships between different data points, leading to difficulties in comprehensively understanding the data</li>
                            </ul>
                    </div>
                </div>
                <div className="double-images-wrapper">
                    <div className="modal-small-img">
                        <img src={ understandingUsersImg1 } alt="multiple-choice-question" />
                    </div>
                    <div className="modal-small-img green">
                        <img src={ understandingUsersImg2 } alt="comprehension-question" />
                    </div>
                </div>  
            </div>
        );
    }
  renderStructure() {
    return (
      <div className="modal-section grey">
        <div className="modal-justify-left structure">
          <p>
            <b>FLOW and STRUCTURE</b>
          </p>
          <p>
            In the structure phase I wanted to answer three questions:
            <ol>
              <li>
                What could be done specifically within each part of the user
                experience?
              </li>
              <li>How to accomplish that within the interface?</li>
              <li>What was then needed on the page to support this?</li>
            </ol>
            I used a variety of methods to determine what the teacher’s
            experience would look like. Each method had a slightly different
            approach.
          </p>
          <p>
            <b>SITE MAPS</b>
          </p>
          <img className="full-width" src={combinedSiteMaps} alt="site-maps" />
        </div>
      </div>
    );
  }
  renderIdeation() {
    return (
      <div>
        <div className="second-content grey">
          <div className="section-intro">
            <h3>IDEATION and LOFI's</h3>
            <p>
              We aimed to enhance the user experience to ensure it was accessible even to those with less technical expertise. <br/>
            </p>
            <p>
              This was challenging for two reasons:
            </p>  
              <ol>
                <li>Querying inherently involves a convoluted process</li>
                <li>With added functionality, making the user experience smoother became even more crucial but also more challenging</li>
              </ol>
          </div>
          <div className="double-images-wrapper">
            <div className="modal-small-img">
              <img
                className=""
                src={ ideationIMG1 }
                alt="ideation-img-1"
              />
            </div>
          </div>
        </div>
        <div className="second-content grey middleContainer">
          <div className="section-intro">
            <p className="all-caps news-sub-heading">VIEW & CREATE QUERIES</p>
            <p>
              These screens represent the core functionality of the new tool. The "View Queries" screen not only 
              provides users with a comprehensive overview of existing queries but also offers a range of 
              actions to enhance usability (such as Download, Share, or Refresh queries to name a few). 
            </p>
            <p>
              The Create Query screen empowers users of all levels of technical expertise to effortlessly 
              construct complex queries with ease by providing a range of filtering options, data fields, 
              and logical operators.
            </p>
          </div>
          <div className="double-images-wrapper">
            <div className="modal-small-img">
              <img
                className=""
                src={ ideationIMG2 }
                alt="ideation-img-2"
              />
            </div>
          </div>
        </div>
        <div className="second-content grey">
          <div className="section-intro">
            <p className="all-caps news-sub-heading">QUERY BUILDING</p>
            <p>
              Initially, the approach to query building followed a very literal format, such as 
              "Customers That have Date of Birth Greater Than 1981-01-08," which proved to be overly 
              complex and challenging to grasp.   
            </p>
            <p>
              We found that this approach was not intuitive enough and shifted to a simpler format of 
              "FIELD - CONDITION - VALUE." This new format allowed users to construct queries more 
              naturally without the burden of deciphering complex sentence structures.
            </p>
            <p>
              To further enhance usability and comprehension, the query-building process was broken down into three clear sections:
            </p>
              <ul>
                <li>Selecting a report category (e.g., customers) to set the context</li>
                <li>Choosing filtering criteria with a maximum of four options, following the "FIELD - CONDITION - VALUE" format</li>
                <li>Selecting additional fields to include in the query result, with default fields provided for ease of use</li>
              </ul>
              <p>
            </p>
          </div>
          <div className="double-images-wrapper">
            <div className="modal-small-img">
              <img
                className=""
                src={ ideationIMG3 }
                alt="ideation-img-3"
              />
            </div>
          </div>
        </div>
        <div className="full-queries grey">
          <img
                className="full-width"
                src={ ideationIMG4 }
                alt="ideation-img-4"
              />
        </div>
      </div>  
    );
  }
    renderFinalVersion() {
        return (
            <div className="modal-section">
                <h3>FINAL VERSION</h3>
                <div className="color-box-sections">
                    <div>
                        <p className="all-caps news-sub-heading">CREATE QUERY</p>
                        <img className="full-width" src={ finalVersionIMG1 } alt="final-version-3" />
                    </div>
                    <div className="grey-boxes selectedOccupation">
                        <div className="box-left-red">
                            <p className="all-caps news-sub-heading">VIEW QUERY</p>
                            <img className="full-width" src={ finalVersionIMG2 } alt="final-version-1" />
                        </div>
                        <div className="box-right-green">
                            <p className="all-caps news-sub-heading">SAVE QUERY</p>
                            <img className="full-width" src={ finalVersionIMG3 } alt="final-version-2" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderTakeaways() {
        return (
            <div className="modal-section contains-colored-background">
                <div className="bottom-box-content">
                    <h3>TAKEAWAYS</h3>
                    <div className="bottom-div">
                        <div className="bottom-content">
                            <b>SIMPLICITY and ACCESSIBILITY</b>
                            <p>
                                By simplifying the query-building process and breaking it down into intuitive steps, 
                                we made data exploration more accessible to users of varying technical abilities.
                            </p>
                        </div>
                        <div className="bottom-content">
                            <b>COLLABORATIVE DEVELOPMENT PROCESS</b>
                            <p>
                                Given the novelty of the concept, translating it into a user-friendly tool demanded meticulous 
                                attention to detail and a deep understanding of user needs. Close collaboration ensured 
                                that the design vision was accurately translated into the final product, enabling users to 
                                effortlessly navigate the complexities of data exploration.
                            </p>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
    render() {
        return (
            <div>
                { this.renderIntroduction() }
                { this.renderProblem() }
                { this.renderUnderstandingUsers() }
                { this.renderIdeation() }
                { this.renderFinalVersion() }
                { this.renderTakeaways() }
            </div>
        )
    }
}

export default withLoadState(WorkOne);
