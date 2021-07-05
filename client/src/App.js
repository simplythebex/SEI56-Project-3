import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home.js'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import DrinkShow from './components/Drink.js'
import DrinksIndex from './components/DrinksIndex.js'
import UserProfile from './components/UserProfile.js'


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* </Switch><Route exact path="/"> */}
          <Route path="/drinks/:id">
            <DrinkShow />
          </Route> 
          <Route path="/drinks">
            <DrinksIndex />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <UserProfile />
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
