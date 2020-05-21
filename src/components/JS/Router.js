import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MainPage from './MainPage';
import About from './About';
import Blog from './Blog';
import Firebas from './Blog/firebase';
import Airbnb from './Blog/airbnb';
export default function CustomRouter() {
    return(
        <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog/firebase-co-nen-dung-cho-ung-dung-lon/">
            <Firebas />
          </Route>
          <Route path="/blog/bnb-giu-chan-user">
            <Airbnb />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          
        </Switch>
      </div>
    </Router>
    )
}


