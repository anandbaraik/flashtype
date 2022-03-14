import React from 'react'
import "./TypingChallenge.css"
import TestLetter from '../TestLetter/TestLetter.jsx'
export default function TypingChallenge({
    selectedParagraph,
    timerStarted,
    timeRemaining,
    testInfo
}) {
  return (
    <div className="typeing-challenge">
        <div className="timer-container">
            <p className="time">
                00:
                {
                    (timeRemaining >= 10) ? timeRemaining :
                    `0${timeRemaining}`
                }
            </p>
            <p className="timer-info">
                {!timerStarted && `Start typing to start the test`}
            </p>
        </div>
        <div className="textarea-container">
            <div className="textarea-left">
                <div className="textarea test-paragraph">
                    {
                        testInfo.map((individualLetterInfo, index) => {
                            return <TestLetter individualLetterInfo={individualLetterInfo}
                                key={index}
                            />
                        })
                    }
                </div>
            </div>
            <div className="textarea-right">
                <textarea className="textarea"
                placeholder="Start typing here"></textarea>
            </div>
        </div>
    </div>
  )
}
