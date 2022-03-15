import React from "react";
import './ChallengeSection.css';
import TestContainer from '../TestContainer/TestContainer';
const ChallengeSection = ({
    timerStarted,
    timeRemaining,
    words,
    charecters,
    wpm,
    testInfo,
    onInputChange
}) => {
    return(
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a Speed Test Now!
            </h1>
            <TestContainer 
                timerStarted={timerStarted}
                timeRemaining={timeRemaining}
                words={words}
                charecters={charecters}
                wpm={wpm}
                testInfo={testInfo}
                onInputChange={onInputChange}
            />
        </div>
    );
}

export default ChallengeSection;