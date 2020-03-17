import React, { Component } from "react";
import '../../assets/sass/about/chatbot.scss';
import personalImg from '../../assets/images/misc/linkedIn.jpg';
import arrowImg from '../../assets/images/misc/arrow.png'

export default class Chatbot extends Component {
    constructor(props) {
        super(props);
             
        this.state = { 
            userMessages: [],
            botMessages: [],
            topic: "Intro",
            subtopic: "...",
            botGreeting: 'Hi there, thanks for coming! What would you like to know more about me?',
            botLoading: false,
            showSoundcloudLinks: false,
            overlayStatus: '',
            timer: {
                minutes: 30,
                seconds: 0,
            }
        }
    }  

    updateTimer() {
        this.setState({
            overlayStatus: 'active'
        })
        
        // var currentMinutes = this.state.timer.minutes * 60;
        // var currentSeconds = this.state.timer.seconds;

        // this.setState({
        //     timer: {
        //         minutes: currentMinutes,
        //         seconds: currentSeconds,
        //     }
        // })
    }

    checkAgain() {
    }

    returnToBeginning() {
        var updatedUserMessagesArr = this.state.userMessages;
        var updatedBotMessagesArr = this.state.botMessages;
        var message = "Here we are again! What else would you like to know?"
        setTimeout(function(){
            this.setState({ 
                topic: "Intro",
                userMessages: updatedUserMessagesArr.concat("Tell me more!"),
                botMessages: updatedBotMessagesArr.concat(message)
            })
        }.bind(this), 500);
    }

    endSegment() {
        var updatedUserMessagesArr = this.state.userMessages;
        var updatedBotMessagesArr = this.state.botMessages;
        var message = "What else would you like to know?"
        setTimeout(function(){
            this.setState({ 
                topic: "Intro",
                userMessages: updatedUserMessagesArr.concat(""),
                botMessages: updatedBotMessagesArr.concat(message)
            })
        }.bind(this), 500);   
    }

    updateUserMessages(optionSelected, topic, subtopic="", text="") {   
        this.setState({ botLoading: true })
        
        if (this.state.botLoading) {
            var botResponse = "..."
        }
        // Create a new array from current user messages
        var updatedUserMessagesArr = this.state.userMessages;

        // Create a new array from current bot messages
        var updatedBotMessagesArr = this.state.botMessages;

        if (!text) {
            text = topic;
        }
        this.setState({
            topic: topic,
            subtopic: subtopic,
            userMessages: updatedUserMessagesArr.concat(text),
            // botLoading: true,
            botMessages: updatedBotMessagesArr.concat(botResponse)
        })

        setTimeout(function(){
            var topic = this.state.topic;
            var subtopic = this.state.subtopic;
            if (topic === "Intro") {
                var botResponse = this.state.botGreeting;
            } else if (topic === "Hobbies") {
                var botResponse = "Ok, kool. What specifically would you like to know more about?";
            } else if (topic === "Reading") {
                if (subtopic === "favourite") {
                    var botResponse = "Yes! My favourite book is Great Expectations by Charles Dickens. I won't spoil it for you :) .";
                } else if (subtopic === "favourite2") {
                    var botResponse = "Yes! My favourite book is Great Expectations by Charles Dickens. I won't spoil it for you :) . \n What else would you like to know about me?";
                } else if (subtopic === "currently-reading") {
                    var botResponse = "I am currently reading The Death and Life of Great American Cities by Jane Jacobs. Its about urban and city design.";
                } else if (subtopic === "currently-reading2") {
                    var botResponse = "I am currently reading The Death and Life of Great American Cities by Jane Jacobs. Its about urban and city design. \n What else would you like to know about me?";
                } else {
                    var botResponse = "I generally like reading non-fiction. When I read fiction I stick to the classics.";
                }
            } else if (topic === "Languages") {
                if (subtopic === "languages") {
                    var botResponse = "“In order of fluency, I speak: English \n Hebrew \n German \n Spanish/French";
                } else if (subtopic === "hebrew") {
                    var botResponse = "I grew up learning basic Hebrew in school! My name is actually a hebrew name as well (it means 'to illuminate')."
                } else if (subtopic === "mandarin") {
                    var botResponse = "Hmm, no. I am not particularly interested in it.";
                } else {
                    var botResponse = "I really enjoy learning languages. It is always a challenge and helps me connect culturally with others (especially while traveling) too!";
                }
            } else if (topic === "Music") {
                if (subtopic === "mixing" || subtopic === "mixing2") {
                    var botResponse = "Yeah I really having fun with it and creating something unique. All kinds of genres."
                    // var str = "Free Web Building Tutorials!";
                    // var result = str.link("https://www.w3schools.com");
                    // document.getElementById("demo").textContent = result;
                    this.setState({ showSoundcloudLinks: true })
                } else if (subtopic === "band" || subtopic === "band2") {
                    var botResponse = "Definitely Outkast."
                    this.setState({ showSoundcloudLinks: false })
                } else {
                    var botResponse = "I am often grooving to something or having fun mixing some tunes."   
                }
            } else if (topic === "Skills") {
                if (subtopic === "design" || subtopic === "design2") {
                    var botResponse = "I have been involved in almost every aspect of design. I have done UX Research, UX Strategy, Lo-fi and Hi-fi Mockups, Copy Writing, User Testing, Design (internal) Critiques, and Email Marketing.";
                } else if (subtopic === "programming" || subtopic === "programming2") {
                    var botResponse = "On the front end, I have experience coding in Javascript (mostly REACT) and CSS. On the back end, I have experience in Ruby and Swift.";
                } else if (subtopic === "other") {
                    var botResponse = "Yes! I have a lot of experience working in small teams where communication and interaction across departments is essential. I have also often done the role of design education from within our team. I have given design talks and breakdowns to non-technical colleagues-helping them understand from a design perspective the product decisions we made.";
                } else {
                    var botResponse = "I am a UI/UX Designer and have coding experience as well (code quite often)."   
                }
            } else if (topic === "Journey") {
                if (subtopic === "start") {
                    var botResponse = "I spent most of my childhood in Pittsburgh. I like school. A lot. I got my bachelors degree in Talmudic Law and then an MBA.";
                } else if (subtopic === "talmud" || subtopic === "talmud2") {
                    var botResponse = "The Talmud is comprehensive written version of the Jewish oral law and the subsequent commentaries on it (stemming back to the 2nd century).";
                } else if (subtopic === "tech" || subtopic === "tech2") {
                    var botResponse = "I wanted to gain some tech skills, so I decided to attend a coding bootcamp in Austin, Texas. I left with solid programming skills and a deep excitement for technology.";
                } else if (subtopic === "afterATX") {
                    var botResponse = "I got a job as the first technical employee at a small startup in San Diego, where I was fortunate to be exposed to all aspects of a company, including design. I fell in love with design and ultimately became the design lead."
                } else if (subtopic === "currentLocation") {
                    var botResponse = "No, I started working remotely a few years ago. It enabled me to travel the world (literally) and to then settle down in beautiful Vancouver, Canada."
                } else {
                    var botResponse = "I am currently a UI/UX design lead at an Ed-Tech company.";   
                }
            }

            // Render user message and bot's loading message
            this.setState({
                userMessages: updatedUserMessagesArr.concat(text),
                // botLoading: true,
                botMessages: updatedBotMessagesArr.concat(botResponse)
            })   
        }.bind(this), 500);
    }

   // showMessages gets fed messages via state which all goes down in updateUserMessages

    showMessages() {
        var userConvo = this.state.userMessages;

        // Show initial bot welcome message
        if (this.state.userMessages.length === 0) {
            return 
        }
        
        var updatedConvo = userConvo.map((data, index)=>{
            var botResponse = this.state.botMessages[index];

            if (this.props.imageSrc) {
                var userBubble = (
                    <div className="userInnerContainer">
                        <UserBubble message={data} key={'u'+index} />
                        <div className="img-avatar-container">
                            <img src={ this.props.imageSrc } className="" alt="avatar" />
                        </div>
                    </div>
                )
            } else {
                var userBubble = (<UserBubble message={data} key={'u'+index} />)
            }

            if (this.state.showSoundcloudLinks) {
                var soundcloudLinks = (
                    <div>
                        <a href="https://soundcloud.com/mayer-seidman/hooked-on-phics">Hip Hop</a>    
                        <a href="https://soundcloud.com/mayer-seidman/11-7-18-full">House</a>
                    </div>
                )
            }

            if (this.state.subtopic === "mixing") {
                var botBubble = (
                    <div>
                        <BotBubble message={botResponse} key={'b'+index} />
                    </div>
                )
            } else {
                var botBubble = (
                    <BotBubble message={botResponse} key={'b'+index} />  
                )
            }
            
            return (
                <div className="conversation-pair" key={'convo' + index}>
                    { userBubble }
                    { botBubble }
                </div>
            )
        });

        return updatedConvo;
    }

    // componentDidMount() {
    //     $(".chatbotContainer").addClass('animate').addClass("fadeInFromBottom");
    // }

    render() {

        return (
            <div id="app-container" className="chatbotContainer">
                <img src={ arrowImg } className="arrowImg" onClick={ this.props.revertDisplay } alt="arrow" />
                <div className="convo-container">
                    <BotBubble message={this.state.botGreeting} key="bot-00" />
                    {this.showMessages()}
                </div>
                <div>
                    <UserInput userMessages = { this.state.userMessages } 
                        updateUserMessages = { this.updateUserMessages.bind(this) }
                        topic={ this.state.topic } subtopic={ this.state.subtopic } />
                    <a className="regularLink backLink mobileHide" onClick={ this.returnToBeginning.bind(this) }>Back to beginning</a>
                    <a className="regularLink backLink webHide mobileBackLink" href="#" onClick={ this.returnToBeginning.bind(this) }>Back</a>                
                </div> 
            </div>
            
        )
    }
}

class UserBubble extends Component {
    render() {
        return (
            <div className="user-message-container">
                <div className="chat-bubble user">{this.props.message}</div>
            </div>
        )
    }
}


class BotBubble extends Component {
    componentDidMount() {
        var lastBubble = this.refs.chatBubble;
        lastBubble.scrollIntoView(true);
    }

    render() {
        return (
            <div className="bot-message-container">
                <div className="img-avatar-container">
                    <img src={ personalImg } className="profileImg" alt="profile" />
                </div>
                
                <div id="demo" className="chat-bubble bot" ref="chatBubble">{this.props.message ? this.props.message : '...'}</div>
            </div>
        )
    }
}

class UserInput extends Component {
    optionSelected(value, topic, subtopic="", text="") {
        if (topic === "Language") {
            this.props.updateUserMessages(value, "Languages", "Languages", text);
        } else {
            this.props.updateUserMessages(value, topic, subtopic, text);
        }
    }
    handleChange(event) {
        if (event.key === 'Enter') {
            var userInput = event.target.value;

            // update state on parent component
            this.props.updateUserMessages(userInput);
            event.target.value = '';
        }
    }

    renderIntroOptions() {
        var optionOne = "Hobbies";
        var optionTwo = "Skills";
        var optionThree = "Journey";
        
        return (
            <div className="categoryOptions">
                <button onClick={ this.optionSelected.bind(this, 1, optionOne) }>{ optionOne }</button>
                <button onClick={ this.optionSelected.bind(this, 1, optionTwo) }>{ optionTwo }</button>
                <button onClick={ this.optionSelected.bind(this, 1, optionThree) }>{ optionThree }</button>    
            </div>
        )
    }
    renderHobbiesOptions() {
        var optionOne = "Reading";
        var optionTwo = "Language";
        var optionThree = "Music";
        return (
            <div className="interestsOptions">
                <button onClick={ this.optionSelected.bind(this, 1, optionOne) }>{ optionOne }</button>
                <button onClick={ this.optionSelected.bind(this, 1, optionTwo) }>{ optionTwo }</button>
                <button onClick={ this.optionSelected.bind(this, 1, optionThree) }>{ optionThree }</button>    
            </div>
        )
    }
    renderReadingOptions() {
        var subtopic = this.props.subtopic;
        if (subtopic === "currently-reading") {
            var optionOneText = "Have a favourite book?";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 2, "Reading","favourite2", optionOneText) } key={ Math.random() }>{ optionOneText }</button>
            )
        } else if (subtopic === "favourite") {
            var optionOneText = "What are you reading now?";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 2, "Reading","currently-reading2", optionOneText) } key={ Math.random() }>{ optionOneText }</button>
            )       
        } else if (subtopic === "favourite2" || subtopic === "currently-reading2") {
            var options = this.renderHobbiesOptions();
        } else {
            var optionOneText = "What are you reading now?"
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 1, "Reading", "currently-reading", optionOneText) }>{ optionOneText }</button>
            )
            var optionTwoText = "Have a favourite book?";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 2, "Reading", "favourite", optionTwoText) }>{ optionTwoText }</button>
            )     
        }
        return (
            <div>
                { options }
                { optionOne }
                { optionTwo }    
            </div>
        )
    }

    renderLanguagesOptions() {
        var subtopic = this.props.subtopic;
        if (subtopic === "languages") {
            var optionOneText = "Hebrew? That’s an exotic one!";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 2, "Languages","hebrew", optionOneText) } key={ Math.random() }>{ optionOneText }</button>
            )
        } else if (subtopic === "hebrew") {
            var options = this.renderHobbiesOptions();
        } else {
            var optionOneText = "What languages do you speak?"
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 1, "Languages", "languages", optionOneText) }>{ optionOneText }</button>
            )  
        }
        return (
            <div>
                { options }
                { optionOne }
            </div>
        )
    }
    renderMusicOptions() {
        var subtopic = this.props.subtopic;
        if (subtopic === "mixing") {
            var optionOneText = "Have a favourite band?";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 2, "Music","band2", optionOneText) } key={ Math.random() }>{ optionOneText }</button>
            )
            var options = (
                <div>{ optionOne }</div>
            )
        } else if (subtopic === "band") {
            var optionTwoText = "Mixing, like DJ-ing?";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 1, "Music", "mixing2", optionTwoText) }>{ optionTwoText }</button>
            )
            var options = (
                <div>{ optionTwo }</div>
            )
        } else if (subtopic === "mixing2" || subtopic === "band2") {
            var options = this.renderHobbiesOptions();
        } else {
            var optionOneText = "Have a favourite band?";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 2, "Music","band", optionOneText) } key={ Math.random() }>{ optionOneText }</button>
            )
            var optionTwoText = "Mixing, like DJ-ing?";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 1, "Music", "mixing", optionTwoText) }>{ optionTwoText }</button>
            )
            var options = (
                <div>
                    { optionOne }
                    { optionTwo }
                </div>
            )
        }
        return (
            <div>
                { options }
            </div>  
        )
    }
    renderSkillsOptions() {
        var subtopic = this.props.subtopic;
        if (subtopic === "design") {
            var optionOneText = "Tell me more about programming.";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 2, "Skills","programming2", optionOneText) } key={ Math.random() }>{ optionOneText }</button>
            )
            var options = (
                <div>{ optionOne }</div>
            )
        } else if (subtopic === "programming") {
            var optionTwoText = "Tell me more about design";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 1, "Skills", "design2", optionTwoText) }>{ optionTwoText }</button>
            )
            var options = (
                <div>{ optionTwo }</div>
            )
        } else if (subtopic === "design2" || subtopic === "programming2") {
            var optionTwoText = "Ever work with non-technical people?";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 1, "Skills", "other", optionTwoText) }>{ optionTwoText }</button>
            )
            var options = (
                <div>{ optionTwo }</div>
            )
        } else if (subtopic === "other") {
            var options = this.renderHobbiesOptions();
        } else {
            var optionOneText = "Tell me more about design";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 2, "Skills","design", optionOneText) } key={ Math.random() }>{ optionOneText }</button>
            )
            var optionTwoText = "Tell me more about coding";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 1, "Skills", "programming", optionTwoText) }>{ optionTwoText }</button>
            )
            var options = (
                <div>
                    { optionOne }
                    { optionTwo }
                </div>
            )
        }
        return (
            <div>
                { options }
            </div>  
        )
    }
    renderJourneyOptions() {
        var subtopic = this.props.subtopic;
        if (subtopic === "afterATX") {
            var optionOneText = "Are you in San Diego now?";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 2, "Journey","currentLocation", optionOneText) } key={ Math.random() }>{ optionOneText }</button>
            )
            var options = (
                <div>{ optionOne }</div>
            )
        } else if (subtopic === "currentLocation") {
            var options = this.renderHobbiesOptions();
        } else if (subtopic === "talmud") {
            var optionTwoText = "How did you end up in tech?";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 1, "Journey", "tech2", optionTwoText) }>{ optionTwoText }</button>
            )
            var options = (
                <div>{ optionTwo }</div>
            )
        } else if (subtopic === "talmud2") {
            var optionTwoText = "Ok. So after the coding bootcamp, then what?";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 1, "Journey", "afterATX", optionTwoText) }>{ optionTwoText }</button>
            )
            var options = (
                <div>
                    { optionOne }
                    { optionTwo }
                </div>
            )
        } else if (subtopic === "tech") {
            var optionOneText = "What happened next?";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 1, "Journey", "afterATX", optionOneText) }>{ optionOneText }</button>
            )
            var optionTwoText = "Talmudic Law? What?";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 1, "Journey", "talmud2", optionTwoText) }>{ optionTwoText }</button>
            )
            var options = (
                <div>
                    { optionOne }
                    { optionTwo }
                </div>
            )
        } else if (subtopic === "tech2") {
            var optionTwoText = "What happened next?";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 1, "Journey", "afterATX", optionTwoText) }>{ optionTwoText }</button>
            )
            var options = (
                <div>
                    { optionTwo }
                </div>
            )
        } else if (subtopic === "start") {
            var optionOneText = "Talmudic Law? What?";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 2, "Journey","talmud", optionOneText) } key={ Math.random() }>{ optionOneText }</button>
            )
            var optionTwoText = "How did you end up in tech?";
            var optionTwo = (
                <button onClick={ this.optionSelected.bind(this, 1, "Journey", "tech", optionTwoText) }>{ optionTwoText }</button>
            )
            var options = (
                <div>
                    { optionOne }
                    { optionTwo }
                </div>
            )
        } else {
            var optionOneText = "What is your story?";
            var optionOne = (
                <button onClick={ this.optionSelected.bind(this, 2, "Journey","start", optionOneText) } key={ Math.random() }>{ optionOneText }</button>
            )
            var options = (
                <div>
                    { optionOne }
                    { optionTwo }
                </div>
            )
        }
        return (
            <div>
                { options }
            </div>  
        )
    }
    render() {
        var topic = this.props.topic;
        if (topic === "Intro") {
            var options = this.renderIntroOptions();
        } else if (topic === "Hobbies") {
            var options = this.renderHobbiesOptions();
        } else if (topic === "Skills") {
            var options = this.renderSkillsOptions();
        } else if (topic === "Journey") {
            var options = this.renderJourneyOptions();
        }
        else if (topic === "Reading") {
            var options = this.renderReadingOptions();
        }
        else if (topic === "Languages") {
            var options = this.renderLanguagesOptions();
        } else if (topic === "Music") {
            var options = this.renderMusicOptions();
        }
        
        return (
            <div className="input-container">
                { options }
            </div>
        )
    }
}


