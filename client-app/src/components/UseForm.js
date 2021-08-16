import { useState, useEffect } from 'react'

const useForm = (validate) => {
  const [values, setValues] = useState({
    firstName: '',
    surname: '',
    email: '',
    school: '',
    yearOfStudy: '',
    password: '',
    password2: ''
  })

  const [errors, setErros] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    const checkErrors = validate(values)

    if (checkErrors === false) {
      fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then((result) => result.json())
        .then((info) => { console.log(info) })
    } else setErros(checkErrors)
  }

  return { handleChange, values, handleSubmit, errors }
}

export default useForm
