import { Outlet } from "react-router-dom"

import classess from './App.module.css'


function App() {

  return (
    <div className={classess.app}>
      <h1>Github Finder</h1>
      <Outlet/>
    </div>
  )
}

export default App
 