import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route path='/signin' component={SignIn}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/createproject' component={CreateProject}></Route>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
