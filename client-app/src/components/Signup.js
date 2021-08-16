import React from 'react'
import useForm from './UseForm'
import { Link } from 'react-router-dom'
import Validate from './Validate'
import '../App.css'

function Signup () {
  const { handleChange, values, handleSubmit, errors } = useForm(Validate)

  return (
    <div>
      <div className='signup'>
        <h2>Create your account by filling out the information below.</h2>
        <form onSubmit={handleSubmit}>
          <label className='form-label'>First name</label>
          <input type='text' placeholder='FirstName' className='input' name='firstName' value={values.firstName} onChange={handleChange} />
          {errors.firstName && <h5 className='error'>{errors.firstName}</h5>}

          <label className='form-label'>Surname</label>
          <input type='text' placeholder='Surname' className='input' name='surname' value={values.surname} onChange={handleChange} />
          {errors.surname && <h5 className='error'>{errors.surname}</h5>}

          <label className='form-label'>Email</label>
          <input type='email' placeholder='example@gmail.com' className='input' name='email' value={values.email} onChange={handleChange} />
          {errors.email && <h5 className='error'>{errors.email}</h5>}

          <label className='form-label'>School</label>
          <input type='text' placeholder='Electrical and Information Engineering' className='input' name='school' value={values.school} onChange={handleChange} />
          {errors.school && <h5 className='error'>{errors.school}</h5>}

          <label className='form-label'>Year of Study</label>
          <input type='text' placeholder='1st year' className='input' name='yearOfStudy' value={values.yearOfStudy} onChange={handleChange} />
          {errors.yearOfStudy && <h5 className='error'>{errors.yearOfStudy}</h5>}

          <label className='form-label'>Password</label>
          <input type='text' className='input' name='password' value={values.password} onChange={handleChange} />
          {errors.password && <h5 className='error'>{errors.password}</h5>}

          <label className='form-label'>Confirm Password</label>
          <input type='text' className='input' name='password2' value={values.password2} onChange={handleChange} />
          {errors.password2 && <h5 className='error'>{errors.password2}</h5>}

          <input type='submit' value='Sign up' />
          <p>Already have an account? Login <Link to='/login'>here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup
