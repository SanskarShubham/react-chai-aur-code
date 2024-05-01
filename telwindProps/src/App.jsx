// import { useState } from 'react'
import './App.css'
import Card from './card'
function App() {

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let myObj = {
    name: "Shubham Ojha",
  }
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Let's learn Tailwind CSS and Props</h1>
      <Card myArr={arr} myObj={myObj} btnText="Click me" />
      <Card myArr={arr} myObj={myObj} btnText="Visit me" />
    </>
  )
}

export default App
