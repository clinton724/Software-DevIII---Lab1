import React from 'react'

function Signup () {
  return (
    <div>
      <h1>Sign-up</h1>
      <div className='signup'>
        <form>
          <label className='form-label'>First name</label>
          <input type='text' placeholder='FirstName' name='FirstName' className='input' />

          <label className='form-label'>Surname</label>
          <input type='text' placeholder='Surname' name='Surname' className='input' />

          <label className='form-label'>Email</label>
          <input type='text' placeholder='example@gmail.com' name='Email' className='input' />

          <label className='form-label'>School</label>
          <input type='text' placeholder='Electrical and Information Engineering' name='School' className='input' />

          <label className='form-label'>Year of Study</label>
          <input type='text' placeholder='1st year' name='YOS' className='input' />

          <label className='form-label'>Password</label>
          <input type='text' name='password' className='input' />

          <label className='form-label'>Confirm Password</label>
          <input type='text' name='Confirm password' className='input' />

          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default Signup
