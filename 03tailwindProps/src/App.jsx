import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '/components/Card.jsx'

function App() {
  let num = 0
  function incr(){
    num += 1
    return num
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card username={incr()}/>
      <Card username={incr()}/>  
      <Card username={incr()}/>   
    </>
  )
}

export default App
