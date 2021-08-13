import React from 'react'
import Header from './components/Header'
import Signup from './components/Signup'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Header} />
          <Route path='/signup' component={Signup} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
