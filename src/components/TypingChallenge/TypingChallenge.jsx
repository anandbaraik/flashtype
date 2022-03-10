import React from 'react'
import "./TypingChallenge.css"
export default function TypingChallenge({selectedParagraph}) {
  return (
    <div className="typeing-challenge">
        <div className="timer-container">
            <p className="time">
                00:60
            </p>
            <p className="timer-info">
                Start typing to start the test
            </p>
        </div>
        <div className="textarea-container">
            <div className="textarea-left">
                <div className="textarea test-paragraph">
                    {selectedParagraph}
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
