import React from 'react'
import "./TypingChallengeContainer.css";
export default function TypingChallengeContainer({words, charecters, wpm}) {
  return (
    <div data-aos="fade-up" className="typing-challenge-container">
        {/* details card */}
        <div className="details-container">
            <div className="details-card">
                <div className="card-value">
                    {words}
                </div>
                <div className="card-name">
                    Words
                </div>
            </div>
            <div className="details-card">
                <div className="card-value">
                    {charecters}
                </div>
                <div className="card-name">
                    Charecters
                </div>
            </div>
            <div className="details-card">
                <div className="card-value">
                    {wpm}
                </div>
                <div className="card-name">
                    Wpm
                </div>
            </div>
        </div>
        {/* challenege card */}
    </div>
  )
}
