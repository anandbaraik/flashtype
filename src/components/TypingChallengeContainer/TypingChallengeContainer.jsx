import React from 'react'
import "./TypingChallengeContainer.css";
import TypingChallenge from '../TypingChallenge/TypingChallenge';
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
        <TypingChallenge selectedParagraph={`Some posit the thickset timer to be less than shaken. A methane of the deodorant is assumed to be a snappish cold. The toeless blanket comes from a learned clover. A hollow command is an island of the mind. In recent years, the whity snowboard comes from a bijou cause. If this was somewhat unclear, a discoid pig without trials is truly a bulb of smacking zephyrs. Few can name a luscious honey that isn't a deuced guilty. Before undercloths, siameses were only capitals. Some assert that few can name a sunfast edger that isn't a smectic laura.`}></TypingChallenge>
    </div>
  )
}
