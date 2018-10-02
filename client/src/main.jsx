import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App.jsx';
import Navigation from './components/Navigation.js';

class Main extends Component {


 render() {


   return (
    <BrowserRouter>
     <div>
       <Navigation />

       <Switch>

         <Route exact path='/' component={App} />
         <Route path='/calendar' component={Calendar} />

       </Switch>

    </div>
  </BrowserRouter>
   );
 }
}

export default Main;
