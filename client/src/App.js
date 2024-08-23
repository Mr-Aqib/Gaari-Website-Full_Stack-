import React from 'react'
import Login from './pages/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import './global.css'
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
      <Toaster/>
      <Login/>
    </>
  )
}

export default App