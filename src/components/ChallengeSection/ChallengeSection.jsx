import React from "react";
import './ChallengeSection.css';
import TestContainer from '../TestContainer/TestContainer';
const ChallengeSection = () => {
    return(
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a Speed Test Now!
            </h1>
            <TestContainer words={15} charecters={10} wpm={5}></TestContainer>
        </div>
    );
}

export default ChallengeSection;