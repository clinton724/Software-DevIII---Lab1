import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Login () {
  return (
    <div>
      <div className='signup'>
        <h2>Login</h2>
        <form>
          <label className='form-label'>Email</label>
          <input type='text' placeholder='Enter your email address' className='input' name='email' />

          <label className='form-label'>Password</label>
          <input type='text' placeholder='Enter your password' className='input' name='password' />

          <input type='submit' value='Login' />
        </form>
      </div>
    </div>
  )
}

export default Login
