import React, { useState, useEffect } from 'react';

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return alphabet[rand(0, alphabet.length - 1)];
}

function getRandomWord(initialWord) {
  var finalWord = '';
  for (var i = 0; i < initialWord.length; i++) {
    finalWord += initialWord[i] === ' ' ? ' ' : getRandomLetter();
  }
  return finalWord;
}

const HackerEffect = () => {
  const [word, setWord] = useState('COMING SOON');
  const [canChange, setCanChange] = useState(false);
  const [globalCount, setGlobalCount] = useState(0);
  const [count, setCount] = useState(0);
  const [isGoing, setIsGoing] = useState(false);
  const [interv, setInterv] = useState(undefined);

  const init = () => {
    if (isGoing) return;

    setIsGoing(true);
    const randomWord = getRandomWord('COMING SOON');
    setWord(randomWord);

    setInterv(setInterval(() => {
      let finalWord = '';
      for (let x = 0; x < 'COMING SOON'.length; x++) {
        if (x <= count && canChange) {
          finalWord += 'COMING SOON'[x];
        } else {
          finalWord += getRandomLetter();
        }
      }
      setWord(finalWord);

      if (canChange) {
        setCount(prevCount => prevCount + 1);
      }

      if (globalCount >= 20) {
        setCanChange(true);
      }

      if (count >= 'COMING SOON'.length) {
        clearInterval(interv);
        setCount(0);
        setCanChange(false);
        setGlobalCount(0);
        setIsGoing(false);
      }

      setGlobalCount(prevGlobalCount => prevGlobalCount + 1);
    }, 50));
  };

  useEffect(() => {
    const wordElement = document.querySelector('h1');
    wordElement.addEventListener('mouseenter', init);

    return () => {
      wordElement.removeEventListener('mouseenter', init);
      clearInterval(interv);
    };
  }, [count, canChange, globalCount, isGoing, interv]);

  return (
    <span>{word}</span>
  );
};

export default HackerEffect;
