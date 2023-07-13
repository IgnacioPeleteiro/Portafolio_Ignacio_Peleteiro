import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/main'
import Trabajo from './components/Trabajo'
import Project from './components/Project'
import Contacto from './components/Contacto'

function App() {

  return (
      <div>
        <Sidenav/>
        <Main/>
        <Trabajo/>
        <Project/>
        <Contacto/>
      </div>

  )
}

export default App
