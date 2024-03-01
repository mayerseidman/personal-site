import React from "react";
import { withLoadState } from "../contexts/LoadStateContext";

// IMAGES
import backgroundImg from "../../assets/images/my-career/background-img.png";
import problemImg from "../../assets/images/my-career/problem-img.png";
import understandingUsersImg1 from "../../assets/images/my-career/understanding-users-1.png";
import understandingUsersImg2 from "../../assets/images/my-career/understanding-users-2.png";
import ideationIMG1 from "../../assets/images/my-career/ideation-img-1.png";
import ideationIMG2 from "../../assets/images/my-career/ideation-img-2.png";
import ideationIMG3 from "../../assets/images/my-career/ideation-img-3.png";
import finalVersionIMG1 from "../../assets/images/my-career/final-version-1.png";
import finalVersionIMG2 from "../../assets/images/my-career/final-version-2.png";
import finalVersionIMG3 from "../../assets/images/my-career/final-version-3.png";
import metricsIMG1 from "../../assets/images/my-career/metrics-1.png";
import metricsIMG2 from "../../assets/images/my-career/metrics-2.png";

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
                    <p>
                        PAIRIN empowers individuals in their professional pursuits by redefining career journeys. 
                    </p>
                <p>
                    The participant platform enables individuals to receive career guidance, 
                    skills development and other community services through one easy-to-implement and easy-to-use solution.
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
                        I worked seamlessly with the engineering team, to user that the user interface and experience 
                        were implemented fully and seamlessly.
                    </p>
                </div>  
            </div>
            <div className="double-images-wrapper">
                <div className="modal-small-img">
                    <img
                        className=""
                        src={ backgroundImg }
                        alt="background-img"
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
                        The Occupation Finder provided a structured approach for users to explore occupations based on industry 
                        or keyword searches, but fell short in addressing the diverse needs of a significant user segment. 
                    </p>
                    <p>
                        It failed to cater to a substantial portion of our user base. A considerable number of our users faced 
                        difficulty navigating the complex landscape of career options, struggling to identify suitable roles or 
                        understand their qualifications in relation to available job opportunities.
                    </p>
                    <div className="spaced-section">
                        <p className="all-caps news-sub-heading">PROJECT GOAL</p>
                        <p>
                            Provide a more comprehensive career guidance solution, that would empower our users with the information 
                            and support needed to make informed decisions about their professional journey.
                        </p>
                    </div>
                </div>
                <div className="double-images-wrapper">
                    <div className="modal-small-img">
                        <img
                            className=""
                            src={ problemImg }
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
                            <li>Users expressed a strong desire for more personalized guidance in their career exploration journey</li>
                            <li>The need for clarity on qualifications and skills required for specific occupations emerged as a common motivation</li>
                        </ul>
                    </p>
                    <p className="all-caps news-sub-heading">CHALLENGES</p>
                    <ul>
                        <li>The old Occupation Finder was perceived as overwhelming, especially by recent graduates and career changers</li>
                        <li>Users faced difficulties in relating their skills to suitable job opportunities</li>
                    </ul>
                </div>
                <div className="double-images-wrapper">
                    <div className="modal-small-img">
                        <img
                            src={ understandingUsersImg1 }
                            alt="multiple-choice-question"
                        />
                    </div>
                    <div className="modal-small-img green">
                        <img
                            src={ understandingUsersImg2 }
                            alt="comprehension-question"
                        />
                    </div>
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
                        <p className="all-caps news-sub-heading">OCCUPATION MATCHING</p>
                        <p>
                            Instead of using our old open-ended search approach, we created an experience that would take data from 
                            the user and return personalized occupation matching. This would allow us to match occupations to our 
                            users based on data from the following inputs: <br/>
                            <ol>
                                <li>Work Experience (if applicable)</li>
                                <li>Education Experience (if applicable)</li>
                                <li>Career Clusters Survey</li>
                                <li>Job Skills Intake</li>
                            </ol>
                        </p>
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
                        <p className="all-caps news-sub-heading">EMPTY STATE</p>
                        <p>
                          First time users arriving on the page, who have not yet added any of the inputs did not know what 
                          to do and would be looking at no results or results that were not really ‘matches’, i.e. ones that 
                          they were not suited for. 
                        </p>
                        <p>
                          I created an Empty State widget that simplified the steps needed to take and made the results minimally 
                          visible until the first input was added. This helped orient the user to what the page would look 
                          like and incentivized them to move forward.
                        </p>
                        <div className="spaced-section">
                            <p className="all-caps news-sub-heading">INPUTS</p>
                            <p>
                              As the process went on we discovered more inputs we would be using to create the ‘matches’ and different 
                              nuances to add-for example, buttons for adding inputs, updating inputs, and viewing inputs. 
                              Additionally, we decided that there would be no set order for inputs, allowing users to update any field at any time based on their preferences.
                            </p>
                        </div>
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
                        <p className="all-caps news-sub-heading">MATCH SCORE DISPLAY</p>
                        <p>
                          To convey three tiers of matches—Great, Good, and OK, I carefully considered color choices and 
                          aimed to create an experience reminiscent of consulting a magical crystal ball or a wise genie, 
                          offering insights with positivity and enchantment.  
                        </p>
                        <p>
                          Tooltips were used to offer users additional context and insights, providing a deeper 
                          understanding of the factors contributing to each match tier.
                        </p>
                        <p className="all-caps news-sub-heading">Ok Match (40-65%):</p>
                            <ul>
                                <li><b>Color</b>: Tinge of reddish-gray</li>
                                <li><b>Rationale</b>: A subtle touch of red invokes the essence of a crystal ball, offering neutral insights without 
                                introducing negative connotations.</li>
                            </ul>
                        <p>
                        </p>
                        <p className="all-caps news-sub-heading">Good Match (65-85%):</p>
                        <ul>
                            <li><b>Color</b>: Gentle gray</li>
                            <li><b>Rationale</b>: Gray, a neutral and balanced color, complements the magical theme, conveying good matches with a touch of enchantment</li>
                        </ul>
                        <p className="all-caps news-sub-heading">Excellent Match (85-100%):</p>
                        <ul>
                            <li><b>Color</b>: Subtle green with a visual ribbon</li>
                            <li><b>Rationale</b>: Green, symbolizing growth and excellence, aligns with the magical theme. The visual ribbon adds a touch of distinction, making these stand out as exceptional matches</li>
                        </ul>
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
            </div>  
        );
    }
    renderFinalVersion() {
        return (
            <div className="modal-section">
                <h3>FINAL VERSION</h3>
                <div className="color-box-sections">
                    <div className="grey-boxes">
                        <div className="box-left-red">
                            <p className="all-caps news-sub-heading">EMPTY STATE</p>
                            <img className="full-width" src={ finalVersionIMG1 } alt="final-version-1" />
                        </div>
                        <div className="box-right-green">
                            <p className="all-caps news-sub-heading">REGULAR STATE</p>
                            <img className="full-width" src={ finalVersionIMG2 } alt="final-version-2" />
                        </div>
                    </div>
                    <div>
                        <p className="all-caps news-sub-heading selectedOccupation">SELECTED OCCUPATION</p>
                        <img className="full-width" src={ finalVersionIMG3 } alt="final-version-3" />
                    </div>
                </div>
            </div>
        );
    }
    renderMetrics() {
        return (
            <div className="modal-section grey">
                <h3>METRICS</h3>
                <div className="color-box-sections">
                    <div className="grey-boxes">
                        <div className="box-left-red">
                            <p className="all-caps news-sub-heading">TIME SPENT</p>
                            <img className="full-width" src={ metricsIMG1 } alt="final-version-1" />
                        </div>
                        <div className="box-right-green">
                            <p className="all-caps news-sub-heading">DROP OFF RATE</p>
                            <img className="full-width" src={ metricsIMG2 } alt="final-version-2" />
                        </div>
                    </div>
                    <div className="metricsText">
                        <p>
                            Our redesign efforts have yielded significant improvements in user engagement and 
                            retention within the Occupation Finder. 
                        </p>
                        <p>
                            Prior to the redesign, users spent an average of 3 minutes exploring the tool, with a substantial 
                            30% drop-off after the initial use. Post-redesign, these metrics experienced a remarkable 
                            transformation, with the average time spent soaring to 8 minutes and a notable decrease in 
                            drop-off rates to just 10% after the first use. 
                        </p>
                        <p>
                            These statistics underscore the positive impact of our enhancements, showcasing a more compelling
                            and user-friendly experience that captivates and retains users for extended periods.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    renderTakeaways() {
        return (
            <div className="modal-section contains-colored-background">
                <div className="bottom-box-content">
                    <h3>TAKEAWAYS</h3>
                    <div className="bottom-div">
                        <div className="bottom-content">
                            <b>USER-CENTRIC FOCUS</b>
                            <p>
                                By consistently placing the end user in the spotlight, we ensured that every design 
                                decision was rooted in addressing their specific requirements. This user-centric 
                                focus became the driving force behind the redesign and ensured that the end product 
                                resonated deeply with our users.
                            </p>
                        </div>
                        <div className="bottom-content">
                            <b>NAVIGATING REDESIGN CHALLENGES</b>
                            <p>
                                Embarking on a redesign journey introduces its own set of challenges, particularly 
                                the need to think beyond the familiar and delve deep into innovative territories. 
                                We embraced a balance between intuitive design thinking and data-driven validatio to ensure
                                that our redesign was a success. 
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
                { this.renderMetrics() }
                { this.renderTakeaways() }
            </div>
        );
    }
}

export default withLoadState(WorkOne);
