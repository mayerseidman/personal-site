import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ImageGallery from 'react-image-gallery'
import Fade from 'react-reveal/Fade';

// Images
import oldOne from '../../assets/images/owl-shop/old-one.png';
import oldTwo from '../../assets/images/owl-shop/old-two.png';
import gameOne from '../../assets/images/owl-shop/game-one.png';
import gameTwo from '../../assets/images/owl-shop/game-two.png';

import lofiOne from '../../assets/images/owl-shop/lofi-one.png';
import lofiTwo from '../../assets/images/owl-shop/lofi-two.png';
import lofiThree from '../../assets/images/owl-shop/lofi-three.png';
import lofiFour from '../../assets/images/owl-shop/lofi-four.png';
import lofiFive from '../../assets/images/owl-shop/lofi-five.png';

import colorPickerImg from '../../assets/images/owl-shop/color-picker.png';
import finalVersion from '../../assets/images/owl-shop/final.png';
import galleryImg from '../../assets/images/owl-shop/gallery.png';

class StudyThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.refs.container.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        this.refs.container.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);
        let yOffset = window.pageYOffset;
        // if yOffset is > the div on the right's position then call this.props... and send upwards what the stage is into app.js
        // and then pass that stage into leftContainer via state in app.js...


        this.setState({
          transform: itemTranslate
        });
    }
    paneDidMount(node) {
        if (node) {
          node.addEventListener('scroll', () => console.log('scroll!'));
        }
      };
    render() {
        const images = [
            {
                original: oldOne
            },
            {
                original: oldTwo
            },
        ]
        const imagesTwo = [
            {
                original: gameOne
            },
            {
                original: gameTwo
            },
        ]
        const imagesThree = [
            {
                original: lofiThree
            },
            {
                original: lofiFour
            },
        ]
        if (this.props.currentView == "preview") {
            var startStudyLink = (
                <button onClick={ this.props.startStudy }>Start the Study</button>
            )
            var className = "mobileHide"
        }
        var studyContent = (
            <div className="workOuterContainer">
                <div className="webHide startLinkContainer">
                    { startStudyLink }
                </div>
                <div className={ className }>
                    <div className="workContainer studyThreePage" ref="container">
                        <div className="workContent">
                                <div className="introContainer workSection fadeInBottom">
                                
                                     <p className="workHeader">Intro</p>
                                     <p className="headlineText">How can we present accessories (products) and shop (marketplace) interactions in a new and cleaner way?</p>
                                    <p>
                                        Gamification is a cornerstone of the Whooo’s Reading student experience. Students earn coins by answering reading comprehension questions and use them to purchase accessories and other fun items from the <i>Owl Shop</i>.
                                    </p>
                                    <p>Previously, the <i>Owl Shop</i> was a bit cumbersome and not easy to navigate.</p>
                                    <ImageGallery items={ images } showFullscreenButton={ false } showPlayButton={ false }
                                        showThumbnails={ false } />
                              
                                </div>
                            <div className="goalsContainer workSection">
                                <p className="workHeader">Goals</p>
                                <div className="goalContainer"> 
                                    <p className="subHeader">Simplify</p>
                                    <span className="circleDivider"></span>
                                    <p className="subText">The accordion navigation and modal made the experience clunky, constraining, and disorienting. Too purchase or preview one accessory this was the flow: item category > accessory > buy accessory (modal) > close out modal (to try another).</p>
                                </div>
                                <div className="goalContainer"> 
                                    <p className="subHeader">Display More Accessories</p>
                                    <span className="circleDivider"></span>
                                    <p className="subText">Only 5 accessories were viewable at a given time. Again, this contributed to an overall inefficient experience.</p>
                                </div>
                                <div className="requirementsText">
                                    <p className="subHeader">Must Include</p>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText biggerSubText">Student's owlvatar</p><br/>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText biggerSubText">Student's coins total</p><br/>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText biggerSubText">Accessory information: title, price, and description</p><br/>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText biggerSubText">A way for students to preview the accessory</p>
                                </div>
                            </div>
                            <div className="strategyContainer workSection">
                                <p className="workHeader">Research, Strategy, <span className="andText">and</span> Concept</p>
                                <div className="firstContainer">
                                    <p>My only initial thought was that I wanted to keep the basic layout the same; student’s Owlvatar (including the save button underneath it) on the left and the accessories and information on the right.</p>
                                    <p>For inspiration, I looked at two online dress up games; where you essentially dress up and play around with an avatar.</p>
                                    <ImageGallery items={ imagesTwo } showFullscreenButton={ false } showPlayButton={ false }
                                        showThumbnails={ false } />
                                    <br/><p>I noticed several similarities between these two games:</p>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText biggerSubText">The accessory categories are separated from the owlvatar display area-either above or around it.</p><br/>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText biggerSubText">The avatar is prominent.</p><br/>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText biggerSubText">Clicking on an item, shows you a preview of how it will look.</p><br/>
                                    <span className="circleDividerSmall"></span>
                                    <p className="subText biggerSubText">When an accessory is selected, the color picker is easily accessible.</p><br/>
                                </div>
                                <div>
                                    <p className="subHeader">Navigation</p>
                                    <p>
                                        In the second example, the accessories surround the avatar. Although intrigued, I felt it was too crammed and the lack of titles made it unclear what each accessory was. 
                                        I wanted each category to have an icon and a title underneath it, so that the categories would be easily understood. Like the first example, we wanted two rows of icons. By shrinking the icons and trimming down the display I could comfortably fit the icons on two rows.
                                    </p>
                                    <img src={ lofiOne } alt=""/>
                                    <p className="subHeader">Accessories Layout</p>
                                    <p>The first step was to remove our clunky accordion setup and go with a simple grid layout. This simplified the experience and also provided enough space to show eight accessories at once, instead of five. The added space also enabled us to display the title and price tag of each accessory.</p>
                                    <img src={ lofiTwo } alt=""/>
                                    <p>I wanted to continue using a gallery layout to display the additional accessories. This was similar to an e-commerce platform where you see the items in a grid and can cycle through them. </p>
                                    <img src={ galleryImg } alt=""/>
                                    <p>With this grid layout, we could now show the accessory’s description directly underneath it. This was a major improvement over having to click on the accessory and view the description within a modal.</p>
                                    <p className="colonText">The placement of the description was a little tricky though. Placing it only underneath the item selected seemed off for two reasons:</p>
                                    <ol>
                                        <li>When one of the top items was selected, the description would appear between the two rows and disrupted the flow of the interface.</li>
                                        <li className="secondItem">Depending on the item selected, the description would at times appear below the first row and at times appear below both.</li>
                                    </ol>
                                    
                                    <ImageGallery items={ imagesThree } showFullscreenButton={ false } showPlayButton={ false }
                                        showThumbnails={ false } />
                                    <br/><p>I preferred to place the description of the accessory (and the purchasing button) always above the two rows of accessories. To ensure it was clear which accessory was selected, I added a border around it once clicked.</p>
                                    <p className="subHeader">Color-Picker</p>
                                    <p>We used to have a category called colors, that would allow you to change the color of a variety of different owl parts. There were two issues with this:</p>
                                    <img src={ colorPickerImg } alt=""/>
                                    <ol>
                                        <li>It was confusing to have one category that was a style and not a body part (like the rest).</li>
                                        <li>If you wanted to do multiple things, for example, change the wing’s color and place something on the wing, you had to navigate to two separate places. This did not feel intuitive.</li>
                                    </ol>
                                    <p>I consolidated everything related to wings within the wings tab. The color options for the wings, are included below the accessories. I preferred to use little color boxes over our previous color adjustment bar, as it is less distracting and more minimal.</p>
                                    <img src={ lofiFive } className="noMargin" alt=""/>
                                </div>
                            </div>
                            <div className="hifiContainer workSection">
                                <p className="workHeader">Final Version</p>
                                <img src={ finalVersion } alt=""/>
                            </div>
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
export default StudyThree