import React, { useEffect } from 'react';
import counter from '../assets/ESummit/counter.gif';
import './ESummit.css';

const ESummit = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const handleMouseOver = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, 30);
    };

    const h1Element = document.querySelector(".centered-text");
    const h1Element2 = document.querySelector(".centered-text2");

    if (h1Element) {
      h1Element.addEventListener("mouseover", handleMouseOver);

      return () => {
        h1Element.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, []);
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const handleMouseOver = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, 30);
    };


    const h1Element2 = document.querySelector(".centered-text2");

    if (h1Element2) {
      h1Element2.addEventListener("mouseover", handleMouseOver);

      return () => {
        h1Element2.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, []);

  return (
    <>
      <div className='main1' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={counter} alt="counter" className='counter'></img>
        <h1 className='centered-text' data-value="COMING ">
          COMING
        </h1>  <h1 className='centered-text2' data-value="SOON">
          SOON
        </h1>
      </div>
    </>
  );
};

export default ESummit;
