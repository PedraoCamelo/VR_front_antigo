import './App.css'
import Sidebar from "./components/Sidebar"
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import Professores from './pages/Professores'

//1-reaproveitamneto de estrutura com router
import { Outlet } from 'react-router-dom';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  return (
    <div className='column'>
    <Sidebar sidebarToggle={sidebarToggle}/>
    <Dashboard 
    sidebarToggle={sidebarToggle}
    setSidebarToggle={setSidebarToggle} />
    <Outlet/>
    <Footer/>
    </div>
    
    

    
    
  )
}

export default App
