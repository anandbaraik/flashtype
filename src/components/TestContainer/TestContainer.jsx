import React from 'react'
import './TestContainer.css'
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
export default function TestContainer({words, charecters, wpm}) {
  return (
    <div className="test-container">
    <div>
      <TypingChallengeContainer words={words} charecters={charecters} wpm={wpm}>
      </TypingChallengeContainer>
    </div>
      {/* <div className="try-again">
        <TryAgain words={words} charecters={charecters} wpm={wpm}></TryAgain>
      </div> */}
    </div>
  )
}
