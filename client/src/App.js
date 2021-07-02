import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home.js'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      
      
      
    </>
  )
}

export default App
