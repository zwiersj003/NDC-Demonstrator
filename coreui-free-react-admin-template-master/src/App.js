import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss'
import 'react-table/react-table.css'
import 'toastr/build/toastr.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'rc-slider/assets/index.css'

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
