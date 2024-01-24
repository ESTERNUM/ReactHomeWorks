import React from 'react'
import useTimer from '../hooks/UseTimer'

const Timer = () => {
   const {time, start, stop, reset} =  useTimer()
  return (
    <div>
      <h2>{time}</h2>
      <p>The timer is start:</p>
      <button onClick={start}>Start</button>
      <p>The timer is stop:</p>
      <button onClick={stop}>Stop</button>
      <p>The timer is reset:</p>
      <button onClick={reset}>Resert</button>   
    </div>
  )
}

export default Timer
