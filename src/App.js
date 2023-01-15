
import NotFound from './Pages/NotFound';
import React, { Component } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from './Pages/SignUp';
import LogIn from "./Pages/LogIn";

import Profile from "./Pages/Profile";
import UsersList from "./Pages/UsersList";
import UserDetails from "./Pages/UserDetails";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from './Pages/Home';

export default class App extends Component {
  state = {
    isAuthorized: false,
    isAdmin: false,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ isAuthorized: true });
    }
    const admin = localStorage.getItem("Admin");
    if (admin !== "true") {
      this.setState({ isAdmin: false });
    } else {
      this.setState({ isAdmin: true });
    }
  }

  login = () => this.setState({ isAuthorized: true });

  admin = () => {
    this.setState({ isAdmin: true });
  };

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("Admin");

    this.setState({ isAuthorized: false });
  };

  render() {
    return (
      <div className="App">
        <Routes>
          <Route index="true" element={<Navigate to="/logIn" />} />

          <Route
            path="/logIn"
            element={
              <>
                {!this.state.isAuthorized ? (
                  <Navigate to="/Home" />
                ) : (
                  <LogIn login={this.login} admin={this.admin} />
                )}
              </>
            }
          />

          <Route
            path="/signUp"
            element={
              <>
                {this.state.isAuthorized ? (
                  <Navigate to="/home" />
                ) : (
                  <SignUp login={this.login} />
                )}
              </>
            }
          />

          <Route
            path="/home"
            element={
              <ProtectedRoute
                isAuthorized={this.state.isAuthorized}
                logout={this.logout}
                admin={this.state.isAdmin}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile admin={this.state.isAdmin} />}
          />
          <Route
            path="usersList/:id"
            element={
              this.state.isAdmin ? (
                <UserDetails />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/userslist"
            element={
              this.state.isAdmin ? (
                <UsersList />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          {/* <Route path='/home' element={<Home/>}/> */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    );
  }
}
