import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './Components/CreateToDo'
import { ToDo } from './Components/ToDo'

function App() {

  return (
    <>
    <div>
      <CreateToDo></CreateToDo>
      <ToDo></ToDo>
    </div>
    </>
  )
}

export default App
