import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
const __totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";
class App extends React.Component {
  state = {
    timerStarted: false,
    timeRemaining: __totalTime,
    words: 0,
    charecters: 0,
    wpm: 0,
    testInfo: [],
  };

  componentDidMount() {
    fetch(serviceUrl)
      .then((response) => response.text())
      .then((data) => {
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });
        this.setState({ testInfo });
      });
  }

  startTimer = () => {
    this.setState({timerStarted:true});
      const timer = setInterval(() => {
        if(this.state.timeRemaining > 0) {
          const timeSpent = __totalTime - this.state.timeRemaining;
          const wpm = timeSpent > 0 ? (this.state.words / timeSpent) * __totalTime : 0;
          this.setState({
            timeRemaining: this.state.timeRemaining - 1,
            wpm: parseInt(wpm)
          });
        } else {
          clearInterval(timer);
        }
      }, 1000);
  }

  handleInput = (inputValue) => {
    if(!this.state.timerStarted) this.startTimer();
    console.log(inputValue);
  }
  render() {
    return (
      <div className="app">
        {/* Nav section */}
        <Nav />

        {/* Landing page */}
        <Landing />

        {/* Challenege section */}
        <ChallengeSection
          timerStarted={this.state.timerStarted}
          timeRemaining={this.state.timeRemaining}
          words={this.state.words}
          charecters={this.state.charecters}
          wpm={this.state.wpm}
          testInfo={this.state.testInfo}
          onInputChange={this.handleInput}
        />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
