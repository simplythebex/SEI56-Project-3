import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home.js'
import DrinkShow from './components/Drink.js'


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/drinks/:id">
            <DrinkShow />
          </Route> 
        </Switch>
      </BrowserRouter>
      
      
      
    </>
  )
}

export default App
