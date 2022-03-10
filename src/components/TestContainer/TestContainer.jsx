import React from 'react'
import './TestContainer.css'
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
export default function TestContainer({words, charecters, wpm}) {
  const remainingTime = 30;
  return (
    <div className="test-container">
    {
      (remainingTime > 0) ? (
        <div className="typing-challenge">
          <TypingChallengeContainer words={words} charecters={charecters} wpm={wpm}>
          </TypingChallengeContainer>
        </div>
      ): (
        <div className="try-again">
          <TryAgain words={words} charecters={charecters} wpm={wpm}></TryAgain>
        </div>
      )
    }
    </div>
  )
}
