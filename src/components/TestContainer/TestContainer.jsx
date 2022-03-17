import React from 'react'
import './TestContainer.css'
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
export default function TestContainer({
  timerStarted,
  timeRemaining,
  words,
  charecters,
  wpm,
  testInfo,
  onInputChange
}) {
  return (
    <div className="test-container">
    {
      (timeRemaining > 0) ? (
        <div className="typing-challenge">
          <TypingChallengeContainer
            timerStarted={timerStarted}
            timeRemaining={timeRemaining}
            words={words}
            charecters={charecters}
            wpm={wpm}
            testInfo={testInfo}
            onInputChange={onInputChange}
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
