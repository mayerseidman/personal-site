import React from "react";
import { withLoadState } from "../contexts/LoadStateContext";

// IMAGES
import backgroundIMG from "../../assets/images/transactions/background-img.png";
import problemIMG from "../../assets/images/transactions/problem-img.png";
import understandingUsersImg from "../../assets/images/transactions/understanding-users.png";


import ideationIMG0 from "../../assets/images/transactions/ideation-img.png";
import ideationIMG1 from "../../assets/images/transactions/ideation-img-1.png";
import ideationIMG2 from "../../assets/images/transactions/ideation-img-2.png";
import ideationIMG3 from "../../assets/images/transactions/ideation-img-3.png";
import ideationIMG4 from "../../assets/images/transactions/ideation-img-4.png";
import ideationIMG5 from "../../assets/images/transactions/ideation-img-5.png";
import ideationIMG6 from "../../assets/images/transactions/ideation-img-6.png";
import transactionsGIF from "../../assets/images/transactions.gif";

import finalVersionIMG1 from "../../assets/images/transactions/final-version-1.png";
import finalVersionIMG2 from "../../assets/images/transactions/final-version-2.png";

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
                        The professional platform enables case managers to provide career guidance, track services 
                        provided, and ensure comprehensive management of participant progress.
                    </p>
                    <p>
                        With the <i>Transactions Tracker</i>, case managers can log and track any financial transactions 
                        associated with specific services, such as vendor payments or approved expenses, 
                        streamlining the process of financial management and ensuring transparent accountability.
                    </p>
          <div className="spaced-section">
            <p className="all-caps news-sub-heading">ROLE</p>
            <p>
              Through iterative processes, I focused on addressing user pain points effectively, 
              ensuring that our solution was intuitive and seamless. 
              My contributions involved crafting and refining the user interface and experience, 
              leveraging the collective feedback and ideas generated within the team to continuously improve our product.
            </p>
            <p>
              I spent a lot of time on creating and  refining the structure of the various flows of a 
              financial service, ensuring seamless navigation and user interaction.
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
            Case managers encountered difficulties in efficiently tracking services provided to their constituents 
            that involved funding-related aspects, as our Service Tracker (existing system) lacked the capacity to 
            manage financial services and associated workflows. Additionally, admins needed a way to approve 
            obligations and expenses across different case managers, adding another layer of complexity to the workflow.  
          </p>
          <p>
            With multiple steps required, including tracking service details, obtaining approvals, 
            transitioning from obligation to expense, and securing subsequent approvals, there was a need for 
            a streamlined method to manage these tasks seamlessly.
          </p>
           <div className="spaced-section">
            <p className="all-caps news-sub-heading">PROJECT GOAL</p>
            <p>
             Create an experience that empowers case managers and admins alike in accurately logging, 
             managing, and tracking services, obligations, and expenses for their constituents. 
             Ultimately, this experience aims to provide comprehensive insights into participant 
             progress and facilitate informed decision-making and personalized support for 
             both case managers and admins.
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
                            <li>Users needed a streamlined and efficient tool needed a streamlined 
                            and efficient tool to accurately log, manage, and track services, 
                            obligations, and expenses for their constituents.
                            </li>
                        </ul>
                    </p>
                    <div className="spaced-section">
                        <p className="all-caps news-sub-heading">CHALLENGES</p>
                            <ul>
                                <li>The absence of features for managing obligations, expenses, 
                                and approvals resulted in inefficient processes and 
                                burdens for both case managers and admins.</li>
                            </ul>
                    </div>
                </div>
                <div className="double-images-wrapper">
                    <div className="modal-small-img">
                        <img src={ understandingUsersImg } alt="multiple-choice-question" />
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
            Managing the lifecycle of an obligation or expense involves several stages that can 
            pose challenges in maintaining a seamless workflow. These Stages are:
            <ol>
              <li>
                Creating an obligation from the service
              </li>
              <li>The ability to edit/approve the obligation</li>
              <li>Submitting the obligation as an expense (after obligation is approved) after money has been spent</li>
              <li>The ability to edit/approve the expense</li>
              <li>The ability (by anyone) to mark the task as done</li>
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
            <div className="ideation">
                <div className="second-content grey">
                    <div className="section-intro">
                        <h3>IDEATION and LOFI's</h3>
                        <p>
                            Managing the lifecycle of an obligation or expense involves several stages that can 
                            pose challenges in maintaining a seamless workflow. 
                            <br/>The stages were the following:
                        </p>
                        <ol>
                            <li>
                                Creating an obligation from the service
                            </li>
                            <li>The ability to edit/approve the obligation</li>
                            <li>Submitting the obligation as an expense (after obligation is approved) after money has been spent</li>
                            <li>The ability to edit/approve the expense</li>
                            <li>The ability (by anyone) to mark the task as done</li>
                        </ol>
                        <p>
                            Balancing these various states and flow presented a significant 
                            aspect of the ideation process for the Transactions Tracker.
                        </p>
                    </div>
                    <div className="double-images-wrapper">
                        <div className="modal-small-img">
                            <img className=""
                                src={ ideationIMG0 }
                                alt="ideation-img-1" />
                        </div>
                    </div>
                </div>
                <div className="second-content grey middleContainer transactions">
                    <p className="all-caps news-sub-heading">INFORMATION ARCHITECTURE: SIMPLE TOGGLES AND FILTERS</p>
                    <div className="color-box-sections contentContainer">
                        <div className="grey-boxes">
                            <div className="box-left-red">
                                <img className="full-width" src={ ideationIMG1 } alt="final-version-1" />
                            </div>
                            <div className="box-right-green">
                                <img className="full-width" src={ ideationIMG2 } alt="final-version-2" />
                            </div>
                        </div>
                        <div>
                            <p>
                                In the initial approach, the idea was to present obligations, expenses, and 
                                their respective statuses (pending, rejected, approved) as toggles above the data table for visibility. 
                            </p>
                            <p>
                                However, navigating through multiple toggles to ascertain the status of each item 
                                proved to be cumbersome and inefficient. This method lacked clarity and made it 
                                difficult to quickly determine the current situation and status of an obligation or expense. 
                            </p>
                            <p>
                                We needed to explore alternative solutions that could provide a more intuitive 
                                and streamlined interface for managing the various transactions.
                            </p>
                        </div>
                    </div>
                    <div className="contentContainer">
                        <p className="all-caps news-sub-heading">INFORMATION ARCHITECTURE: SMARTER TOGGLES</p>
                        <div>
                            <img className="full-width" src={ ideationIMG3 } alt="final-version-1" />
                        </div>
                        <div>
                            <p>
                               In refining the interface, we retained the toggle concept but restructured it to provide clearer 
                               direction and reduce nesting. Instead of burying options within 
                               multiple layers (e.g., expenses > pending), we elevated key 
                               actions and statuses to the external level, making them more 
                               accessible and intuitive for users. 
                            </p>
                            <p>
                               This approach ensured that case managers could easily identify and interact with 
                               obligations, expenses, and their corresponding statuses without navigating 
                               through complex layers of toggles. Simplifying the interface and bringing 
                               critical elements to the forefront, improved the experience of managing tasks 
                               and tracking statuses within the Transactions Tracker.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="all-caps news-sub-heading">CONTENT LAYOUT/PAGE STRUCTURE</p>
                        <div className="color-box-sections">
                            <div className="grey-boxes">
                                <div className="box-left-red">
                                    <img className="full-width" src={ ideationIMG4 } alt="final-version-1" />
                                </div>
                                <div className="box-right-green">
                                    <img className="full-width" src={ ideationIMG5 } alt="final-version-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="color-box-sections">
                        <div className="grey-boxes">
                            <div className="box-left-red">
                                <p>
                            Internally, we favoured the simplicity of the table view for its straightforward presentation of transactional data.  
                            </p>
                            <p>
                                However, we opted for a left/right layout that combined the visual appeal of cards 
                                with the functionality of a detailed view. This layout enabled case managers to 
                                simultaneously view transactional information and take actions without 
                                navigating to another page or opening a modal.
                            </p>
                            <p>
                                However, admins would have a table view that would allow them to perform 
                                batch actions and efficiently manage transactions across different case managers.
                            </p>
                            </div>
                            <div className="box-right-green">
                                <img className="full-width" src={ ideationIMG6 } alt="final-version-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderFinalVersion() {
        return (
            <div className="modal-section finalTransactions">
                <h3>FINAL VERSION</h3>
                <div className="color-box-sections">
                    <div className="">
                        <p className="all-caps news-sub-heading">ADMIN VIEW</p>
                        <img className="full-width" src={ finalVersionIMG1 } alt="final-version-3" />
                    </div>
                    <div>
                        <p className="all-caps news-sub-heading">CASE MANAGER VIEW</p>
                        <img className="full-width" src={ finalVersionIMG2 } alt="final-version-3" />
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
                            <b>ENHANCED USABILITY</b>
                            <p>
                                By offering both table and card views, we provided users with flexibility in 
                                visualizing transactional data, catering to different preferences and workflow needs.
                            </p>
                        </div>
                        <div className="bottom-content">
                            <b>CONTINUOUS IMPROVEMENT</b>
                            <p>
                               This project highlighted the importance of ongoing refinement and adaptation to 
                               user needs. Future iterations will focus on further enhancing usability 
                               and addressing emerging user requirements.
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
