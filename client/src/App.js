import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home.js'
import DrinksIndex from './components/DrinksIndex.js'


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/drinks">
            <DrinksIndex />
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
