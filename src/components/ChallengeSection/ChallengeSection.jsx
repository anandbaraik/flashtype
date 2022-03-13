import React from "react";
import './ChallengeSection.css';
import TestContainer from '../TestContainer/TestContainer';
const ChallengeSection = ({
    selectedParagraph,
    timerStarted,
    timeRemaining,
    words,
    charecters,
    wpm,
    testInfo
}) => {
    return(
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a Speed Test Now!
            </h1>
            <TestContainer 
                selectedParagraph={selectedParagraph}
                timerStarted={timerStarted}
                timeRemaining={timeRemaining}
                words={words}
                charecters={charecters}
                wpm={wpm}
                testInfo={testInfo}
            />
        </div>
    );
}

export default ChallengeSection;