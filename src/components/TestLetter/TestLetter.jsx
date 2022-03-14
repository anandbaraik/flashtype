import React from 'react'
import "./TestLetter.css";
export default function TestLetter({individualLetterInfo}) {
    let {status} = individualLetterInfo;
    const statusClass = {
        correct: 'test-letter-correct',
        incorrect: 'test-letter-incorrect',
        notAttempted: 'test-letter-not-attempted'
    }[status];
  return (
    <span className={`test-letter ${statusClass}`}>
        {individualLetterInfo.testLetter}
    </span>
  )
}