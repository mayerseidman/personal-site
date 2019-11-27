import React, { Component } from "react";
import Webcam from "react-webcam";

export default class WebcamCapture extends React.Component {
  // setRef()webcam => {
  //   this.webcam = Webcam;
  // };

  constructor(props) {
      super(props)
      this.state = { imageSrc: "" }
  }
 
  capture() {
    const imageSrc = this.refs.web.getScreenshot();
    this.setState({ imageSrc: imageSrc })
    this.props.setImage(imageSrc);
  };
 
    render() {
        const videoConstraints = {
          width: 720,
          height: 720,
          facingMode: "user"
        };

        if (this.state.imageSrc) {
            var display = ""
        } else {
            var display = (
                <div className="innerWebcamContainer">
                    <p>Smile and take a pic for your chatbot icon!</p>
                    <Webcam
                        audio={false}
                        height={350}
                        ref="web"
                        screenshotFormat="image/jpeg"
                        width={350}
                        videoConstraints={videoConstraints}
                        className="video"
                    />
                    <button onClick={this.capture.bind(this)}>Capture photo</button>
                </div>
            )
        }

        return (
            <div className="webcamContainer">
                { display }
            </div>
        );  
    }
}  