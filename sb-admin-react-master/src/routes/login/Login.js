/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import './Login.css';
import history from '../../core/history';

const title = 'Log In';


function submitHandler(e) {
  e.preventDefault();
  history.push('/');
}

function Login(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="login-panel panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"> Log hier in met je E-mail of Gebruikersnaam </h3>
        </div>
        <div className="panel-body">
          <form role="form">
            <fieldset>
              <div className="form-group">
                <input className="form-control" placeholder="E-mail address/ Gebruikersnaam" name="email" type="email" />
              </div>
              <div className="form-group">
                <input className="form-control" placeholder="Wachtwoord" name="password" type="password" />
              </div>
              <div className="remember-me">
                <input className="remember-me-checkbox" name="remember" type="checkbox" value="Remember Me" />
                <label>Onthoud mij</label>
              </div>
              <a href="index.html" className="btn btn-lg btn-success btn-block">Login</a>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}


Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default Login;
