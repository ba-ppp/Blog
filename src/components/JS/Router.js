import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter
  } from "react-router-dom";
import MainPage from './MainPage';
import About from './About';
import Blog from './Blog';
import Firebas from './Blog/firebase';
import Airbnb from './Blog/airbnb';
export default function CustomRouter() {
    return(
      <HashRouter basename="/">
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route exact path="/about/">
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
          
      
    </HashRouter>
    )
}


