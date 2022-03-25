import React from 'react'
import './TryAgain.css';
export default function TryAgain({words, charecters, wpm, startAgain}) {
  
  const url = "http://anandbaraik.github.io/flashtype";
  const stat = `FlashType \nCharacters: ${charecters} \nWords: ${words} \nSpeeds: ${wpm} wpm \nTry to beat me: ${url} \n#flashType #anandbaraik`;

  const copy = () => {
    let textarea = document.createElement('textarea');
    textarea.innerHTML = stat;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    document.body.removeChild(textarea);
    document.querySelector('.shared-notif').style.visibility = 'visible';
    setTimeout(function(){
      document.querySelector('.shared-notif').style.visibility = 'hidden';
    },2500);
  }
  
  if (navigator.share) {
    document.querySelector('.share-btn').style.visibility = 'visible';
  } else {
    setTimeout(function(){
      document.querySelector('.share-btn').style.visibility = 'hidden';
    },0);
  }
  
  const share = () => {
    alert('shared');
  }

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
      <div className='share-btns'>
        <button className="end-btns start-again-btn"
        onClick={() => startAgain()}>
          <span className='mr-5 fs-25'>&#8634;</span>
          Retry
        </button>
        <button className='end-btns tooltip copy-btn'
          onClick={() => copy()}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 115.77 122.88" >
            <g>
              <path d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z">
              </path>
              </g>
          </svg>
          Copy
          <span className="shared-notif">Results copied!🎉</span>
        </button>
        <button className='end-btns share-btn'
          onClick={() => share()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
          </svg>
          Share
        </button>
      </div>
    </div>
  )
}