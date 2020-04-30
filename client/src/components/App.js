
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";

class App extends Component {
  
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/audit" component={Dashboard} />
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);
