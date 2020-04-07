import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Places from './places/pages/Places';
import Users from './users/pages/Users';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <MainNavigation />
          <main>
            <Switch>
              <Route path="/places" component={Places} exact />
              <Route path="/users" component={Users} exact />
              <Redirect to="/" />
            </Switch>  
          </main>
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
