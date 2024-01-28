import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/about/About";
import Works from "./components/works/Works";
import { Home } from "./components/home";
import LoadStateContext from "./components/contexts/LoadStateContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeLoaded: false,
      lastLocation: null,
    };
  }
  updateLoaded = () => {
    this.setState({ homeLoaded: true });
  };
  setLastLocation = (location) => {
    this.setState({ lastLocation: location });
  };
  render() {
    return (
      <LoadStateContext.Provider
        value={{
          state: this.state,
          updateLoaded: this.updateLoaded,
          setLastLocation: this.setLastLocation,
        }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route path="/works/*" element={<Works />} />
          </Routes>
        </Router>
      </LoadStateContext.Provider>
    );
  }
}

export default App;
