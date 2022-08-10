import React from 'react'

export default function StartScreen(props) {
  return (
    <div className='start-container' >
        <p className='intro-text'>
        Welcome to Rock/Paper/Scissors Challenge
        </p>
        <button onClick={()=>props.handleClick()} >Play</button>
        </div>

  )
}
