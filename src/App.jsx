import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount] =useState(15)


  // let count  = 5

  const addValue = () => {
    count = count + 1
    // console.log("Add Value",Math.random())
    // console.log("New Count", count)
    setCount(count <20 ? count+1:20)

  }
  const decreaseValue = () => {
    // count = count - 1
    // console.log("Decrease Value", Math.random())
    // console.log("New Count", count)
    setCount(count > 0 ? count-1:0)
  }
  
  return (
    <>
       <h1>Aaj Tera Bhai React Sikhega</h1>
       <h2>Counter value: {count}</h2>


       <button onClick={addValue}>Add Value</button>
       <br />
       <button onClick={decreaseValue}>decrease Value</button>
    </>
  )
}

export default App
