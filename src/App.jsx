import { useState } from 'react'
import words from './data/words.json'
import './App.css'

function App() {
  var quotes = words.commonWords;

  const getRandomWords = (numWords) => {
    var listWords = [];
    for (var i = 0; i < numWords; i++) {
      listWords.push(quotes[Math.floor(Math.random()*quotes.length)])
    }
    
    return listWords.join(" ")
  }

  const getWordTest = (numWords) => {
    setDisplayText(getRandomWords(numWords))
  }

  const checkAccuracy = (e) => {
    console.log(e.target.value);
  }

  const [displayText, setDisplayText] = useState(getRandomWords(50));

  return (
    <>
      <h1>Typing Test</h1>
      <p>{displayText}</p>
      <input type="text" onChange={checkAccuracy}></input><br /><br />
      <button onClick={() => getWordTest(50)}>50 word test</button><button onClick={() => getWordTest(100)}>100 word test</button>
    </>
  )
}

export default App
