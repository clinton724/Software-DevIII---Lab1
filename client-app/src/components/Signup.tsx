import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import '../App.css'

type Inputs = {
  FirstName: string,
  Surname: string,
  Email: string,
  password: string,
  YearOfStudy: string,
  School: string
};

function Signup () {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
    fetch('http://localhost:3000/api/signup' , {
     method: "POST",
     headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data)
})
.then((result) => result.json())
.then((info) => { console.log(info); })
  };

  return (
    <div>
      <div className='signup'>
        <h2>Create your account by filling out the information below.</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='form-label'>First name</label>
          <input type='text' placeholder='FirstName' className='input' {...register("FirstName")} />

          <label className='form-label'>Surname</label>
          <input type='text' placeholder='Surname' className='input' {...register("Surname")} />

          <label className='form-label'>Email</label>
          <input type='text' placeholder='example@gmail.com' className='input' {...register("Email")}/>

          <label className='form-label'>School</label>
          <input type='text' placeholder='Electrical and Information Engineering' className='input'  {...register("School")}/>

          <label className='form-label'>Year of Study</label>
          <input type='text' placeholder='1st year' className='input' {...register("YearOfStudy")}/>

          <label className='form-label'>Password</label>
          <input type='text' className='input' {...register("password")}/>

          <label className='form-label'>Confirm Password</label>
          <input type='text' name='Confirm password' className='input' />

          <input type='submit' value='Sign up' />
          <p>Already have an account? Login <Link to="/login">here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup
