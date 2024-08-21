import React from 'react'
import Login from './pages/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import './global.css'
import { Toast } from 'react-bootstrap';
const App = () => {
  return (
    <>
      <Toast/>
      <Login/>
    </>
  )
}

export default App