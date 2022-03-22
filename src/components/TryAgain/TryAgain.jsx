import React from 'react'
import './TryAgain.css';
export default function TryAgain({words, charecters, wpm, startAgain}) {
  const url = "http://anandbaraik.github.io/flashtype";
  const stat = `FlashType \n\nCharacters: ${charecters}, \nWords: ${words}, \nSpeeds: ${wpm} wpm \nTry to beat me: ${url} \n#flashType #anandbaraik`;
  return (
    <div data-aos="fade-up" className="try-again-container">
      <h1>Test Results</h1>
      <div className="result-container">
        <p>
          <strong> Characters: </strong>
            {charecters}
        </p>
        <p>
          <strong>Words: </strong>
          {words}
        </p>
        <p>
          <strong> Speeds </strong>
          {wpm} wpm
        </p>
      </div>
      <div>
        <button className="end-btns start-again-btn"
        onClick={() => startAgain()}>
          Retry
        </button>
        <button className="end-btns share-btn"
          onClick={() => {
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${url}`,
              "facebook-share-dialog",
              "width=800, height=600"
            )
          }}>
          Share
        </button>
        <button className="end-btns tweet-btn"
          onClick={() => {
            window.open(
              `https://twitter.com/intent/tweet?text=${stat}`,
              "twitter",
              "width=800, height=600"
            )
          }}>
          Tweet
        </button>
      </div>
    </div>
  )
}