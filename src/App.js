import React, { useState } from 'react';
import './style.css';
import { prompts, replies, alternative, coronavirus } from './constants';
export default function App() {
  const [input, setInput] = useState('');
  //console.log(replies);
  function handleSubmit(e) {
    e.preventDefault();
    //setInput();
    output(e.target.elements.inputVal.value);
  }

  function output(input) {
    let product;

    // Regex remove non word/space chars
    // Trim trailing whitespce
    // Remove digits - not sure if this is best
    // But solves problem of entering something like 'hi1'

    let text = input
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/[\d]/gi, '')
      .trim();
    text = text
      .replace(/ a /g, ' ') // 'tell me a story' -> 'tell me story'
      .replace(/i feel /g, '')
      .replace(/whats/g, 'what is')
      .replace(/please /g, '')
      .replace(/ please/g, '')
      .replace(/r u/g, 'are you');
    console.log('text', text);

    if (compare(prompts, replies, text)) {
      // Search for exact match in `prompts`
      product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!";
    } else if (text.match(/(corona|covid|virus)/gi)) {
      // If no match, check if message contains `coronavirus`
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
      // If all else fails: random alternative
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
    setInput(product);
    console.log(product);
  }

  function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        // if (
        //   promptsArray[x][y].includes(string) ||
        //   string.includes(promptsArray[x][y])
        // ) {
        if (
          new RegExp('\\b' + promptsArray[x][y] + '\\b').test(string) ||
          new RegExp('\\b' + string + '\\b').test(promptsArray[x][y])
        ) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          // Stop inner loop when input value matches prompts
          break;
        }
      }
      if (replyFound) {
        // Stop outer loop when reply is found instead of interating through the entire array
        break;
      }
    }
    return reply;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="inputVal" />
      <button type="submit">Chat</button>
      <br />
      {input}
    </form>
  );
}
