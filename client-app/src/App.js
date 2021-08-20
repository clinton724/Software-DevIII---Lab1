import React from 'react'
import Header from './components/Header'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
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
          <Route path='/login' component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
