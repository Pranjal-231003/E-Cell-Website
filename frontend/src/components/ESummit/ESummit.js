
import React from 'react'
import counter from '../assets/ESummit/counter.gif';
import './ESummit.css';


const ESummit = () => {
  return (
    <>
    <div className='main1' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={counter} alt="counter" className='counter'></img>
        <h1 className='centered-text'>
            COMING SOON
    </h1>
    </div>
    </>
  )
}

export default ESummit