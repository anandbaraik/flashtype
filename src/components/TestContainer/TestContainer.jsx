import React from 'react'
import './TestContainer.css'
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
export default function TestContainer({
  selectedParagraph,
  timerStarted,
  timeRemaining,
  words,
  charecters,
  wpm,
  testInfo
}) {
  const remainingTime = 30;
  return (
    <div className="test-container">
    {
      (remainingTime > 0) ? (
        <div className="typing-challenge">
          <TypingChallengeContainer
            selectedParagraph={selectedParagraph}
            timerStarted={timerStarted}
            timeRemaining={timeRemaining}
            words={words}
            charecters={charecters}
            wpm={wpm}
            testInfo={testInfo}
          />
        </div>
      ): (
        <div className="try-again">
          <TryAgain 
            words={words}
            charecters={charecters}
            wpm={wpm}
            />
        </div>
      )
    }
    </div>
  )
}
