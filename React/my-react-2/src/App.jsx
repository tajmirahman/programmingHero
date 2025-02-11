import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './actor'
import Singer from './singer'

function App() {

  const actors = ['Shakib', 'Salman', 'Rubel', 'Omar Sani'];

  const singers = [
    { id: 1, name: 'Aiman', age: 30 },
    { id: 2, name: 'Hridoy', age: 36 },
    { id: 3, name: 'Jems', age: 48 },
    { id:4, name: 'Bachhu', age: 'late' },
  ]


  return (
    <>

      <h1>Vite + React</h1>

      <h3>This is a singer list using map on object</h3>
{/* Here is a problem about key. for check inspact and console */}
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


      <h3>This is a actors list using map on array</h3>

      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }

      <h3>This is a Todo List </h3>
      <Todo task="learn More" isDone={true}></Todo>
      <Todo task="The World is so beautiful" isDone={false}></Todo>
      <Todo task="I do belive any people easily" isDone={true}></Todo>


    </>
  )
}

export default App
