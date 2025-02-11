import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import task from './todo'

function App() {
  return (
    <>

      <h1>Vite + React</h1>
      <Device name="Laptop" price="30k"></Device>
      <Device name="Mobile" price="13k"></Device>
      <Device name="Watch" price="3k"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="12" score="85"></Student>
      <Student></Student>
      <Developer></Developer>



    </>
  )
}

function Person() {
  const name = 'sakib';
  const age = 30;
  return <h1>i a student my name is {name} and my age is {age}</h1>
}

// const {score, grade}={score:99,grade:7}

function Student({score=0, grade=1}) {
  return (
    <div className='student'>
      <h2>This is studen</h2>
      <p>Grade:{grade}</p>
      <p>Score:{score}</p>
    </div>
  )

}

function Developer() {
  const developerStyle = {
    border: '2px solid tomato',
    borderRadius: '20px',
    margin: '5px',
    padding: '5px',
  }
  return (
    <div style={developerStyle}>
      <h3>This is developer</h3>
      <p>Name</p>
    </div>
  )
}

function Device(prop) {
  console.log(prop);
  return <h2>This device: {prop.name} and Price {prop.price}</h2>
}







export default App
