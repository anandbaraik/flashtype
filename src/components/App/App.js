import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import {SAMPLE_PARAGRAPHS} from '../../data/sampleParagraphs';
const __totalTime = 5;
const __defaultState = {
  timerStarted: false,
  timeRemaining: __totalTime,
  words: 0,
  charecters: 0,
  wpm: 0,
  testInfo: [],
};
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";
class App extends React.Component {
  state = __defaultState;
  
  fetchNewFallbackParagraph() {
    const data = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ];
    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
        return {
          testLetter: selectedLetter,
          status: "notAttempted",
        };
      });
      this.setState({...__defaultState, testInfo });
  }

  fetchNewParagraph(){
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
      this.setState({...__defaultState, testInfo });
    });
  }

  componentDidMount() {
    this.fetchNewFallbackParagraph();
  }

  startAgain = () => this.fetchNewFallbackParagraph();

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
    /**
     * 1. Handle the underflow case - all characters should be shown as notAttempted
     * 2. Handle the overflow case - early exit
     * 3. Handle the backspace case
     *      - Mark the [index+1] element as notAttempted
     *        (irrespective of whether the index is less than zero)
     *      - But, don't forget to check for the overflow here
     *        (index + 1 -> out of bound, when index === length-1)
     * 4. Update the status in test info
     *      1. Find out the last character in the inputValue and it's index
     *      2. Check if the character at same index in testInfo (state) matches
     *      3. Yes -> Correct
     *         No  -> Incorrect (Mistake++)
     * 5. Irrespective of the case, characters, words and wpm can be updated
     */
    
    const charecters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = charecters - 1;

    //Under flow case
    if(index < 0) {
      const testInfo = this.state.testInfo;
      testInfo.forEach((currentVal, index, arr) => currentVal.status = "notAttempted");
      this.setState({
        testInfo,
        words : 0,
        charecters,
      });
      return;
    }
    
    //Overflow case
    if(index >= this.state.testInfo.length) {
      this.setState({
        words,
        charecters
      });
      return
    }

    const testInfo = this.state.testInfo;
    //handle backspace case
    if(!(index === this.state.testInfo.length - 1)) {
      testInfo[index+1].status = "notAttempted";
    }
    //check if user has typed correct word
    const status = (inputValue[index] === this.state.testInfo[index].testLetter) ? "correct" : "incorrect";
    testInfo[index].status = status;
    this.setState({
      testInfo,
      words,
      charecters
    })
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
          startAgain={this.startAgain}
        />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
