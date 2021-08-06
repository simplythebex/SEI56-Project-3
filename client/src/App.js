import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home.js'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import DrinkShow from './components/Drink.js'
import DrinksIndex from './components/DrinksIndex.js'
import UserProfile from './components/UserProfile.js'
import SuggestDrink from './components/Suggestions/SuggestDrink'
import HeissRoom from './components/Suggestions/HeissRoom.js'
import About from './components/common/About.js'
import ShopDrink from './components/Shopping/ShopDrink.js'
import ShopSuccess from './components/Shopping/ShopSuccess'
import SuggestedDrinkShow from './components/SuggestedDrinkShow.js'
import SuggestionsEdit from './components/SuggestionsEdit.js'



const App = () => {

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/profile/:id/edit">
          <SuggestionsEdit />
        </Route> 
        <Route path="/drinks/:id">
          <DrinkShow />
        </Route> 
        <Route path="/profile/:id">
          <SuggestedDrinkShow />
        </Route> 
        <Route path="/heiss-room">
          <HeissRoom />
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
        <Route path="/suggest-drink">
          <SuggestDrink />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/shop-drink">
          <ShopDrink /> 
        </Route>
        <Route path="/shop-success">
          <ShopSuccess /> 
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
