import React, { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { sigIn } from '../features/auth/authSlice'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password, setPassword] = useState('')
    const dispatch=useDispatch()
    const handleLogin = (e) =>
    {
        e.preventDefault()
        const frontendData = {
            myEmail: email,
            myPassword: password
        }
        dispatch(sigIn(frontendData))
    }
  return (
      <>
          <form  className='w-75 bg-white  text-dark p-4 rounded-4'>
             
              <p className='p-0 m-0 fw-bold text-center'>Welcome to login Page</p>
              <div className="form-group text-start">
                
                
                  <label className='text-md text-start my-1' htmlFor="">Email</label>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Valid Email' className='form-control text-sm' />
                  </div >
                 <div className="form-group text-start">
                  <label className='text-md text-start my-1' htmlFor="">Password</label>
                      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Valid Password' className='form-control text-sm' />
                  
              </div>

              <div className=" my-2 d-flex align-items-center justify-content-between">
                  <div className='d-flex gap-1'>
                  <input type="checkbox" name="" id=""/>
                      <label htmlFor="" className='text-sm  fw-bold ' >Remember Me</label>
                  </div>
                  <div>
                    
                          <a href="" className='none-deco text-secondary'>Forgot Password?</a>
                        
                  </div>
              </div> 
              
              <button onClick={handleLogin}  className='btn btn-dark rounded-5   w-100 my-3'>Log in </button>
              <div className='kahli p-5 rounded-5 khali'></div>
              <p className='text-end text-secondary mt-3'>New to the app <a className="a none-deco decoration-0">Signup?</a></p>
          </form>
      </>
  )
}

export default Login