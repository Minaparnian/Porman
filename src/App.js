import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route path='/signIn' component={SignIn}></Route>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
