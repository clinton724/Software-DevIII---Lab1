import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Button () {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/signup')
      .then(Response => {
        console.log(Response.data)
        setData(Response.data)
      })
      .catch(err => { console.log(err) })
  }, [])
  return (
    <ul>
      {
          data.map((item, i) => { return <li key={i}>{item}</li> })
      }
    </ul>
  )
}

export default Button
