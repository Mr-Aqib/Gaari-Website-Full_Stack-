import React from 'react'

const Login = () => {
  return (
      <>
          <form  className='w-75 bg-white  text-dark p-4 rounded-4'>
             
              <p className='p-0 m-0 fw-bold text-center'>Welcome to login Page</p>
              <div className="form-group text-start">
                
                
                  <label className='text-md text-start my-1' htmlFor="">UserName</label>
                  <input type="text" placeholder='Enter Valid Email' className='form-control text-sm' />
                  </div >
                 <div className="form-group text-start">
                  <label className='text-md text-start my-1' htmlFor="">Password</label>
                      <input type="password" placeholder='Enter Valid Password' className='form-control text-sm' />
                  
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
              
              <button className='btn btn-dark rounded-5  w-100 my-3'>Log in </button>
              <div className='kahli p-5 rounded-5 khali'></div>
          </form>
      </>
  )
}

export default Login