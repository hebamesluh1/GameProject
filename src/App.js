import NotFound from "./Pages/NotFound";
import React, { Component, Suspense, lazy } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/index";
import Spinner from "./Components/Spinner";

const SignUp = lazy(() => import("./Pages/SignUp"));
const LogIn = lazy(() => import("./Pages/LogIn"));

const Profile = lazy(() => import("./Pages/Profile"));
const UsersList = lazy(() => import("./Pages/UsersList"));
const UserDetails = lazy(() => import("./Pages/UserDetails"));
const Home = lazy(() => import("./Pages/Home"));

export default class App extends Component {
  state = {
    isAuthorized: false,
    isAdmin: false,
  };
  login = () => {
    this.setState({ isAuthorized: true });
  };
  logout = () => {
    this.setState({ isAuthorized: false });
    localStorage.clear();
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ isAuthorized: true });
    }
    const admin = localStorage.getItem("admin");
    if (admin === "true") this.setState({ isAdmin: true });
  }
  admin = () => {
    this.setState({ isAdmin: true });
  };

  render() {
    return (
      <div className="App">
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route index="true" element={<Navigate to="/logIn" />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute
                  isAuthorized={this.state.isAuthorized}
                  logout={this.logout}
                />
              }
              children={[
                <Route index="true" element={<Home />} />,
                <Route path="userList" element={<UsersList />} />,
                <Route path="profile" element={<Profile />} />,
              ]}
            />
            <Route
              path="usersList/:id"
              element={
                this.state.isAdmin ? (
                  <UserDetails />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />

            <Route
              path="/logIn"
              element={
                <>
                  {this.state.isAuthorized ? (
                    <Navigate to="/dashboard" />
                  ) : (
                    <LogIn login={this.login} admin={this.admin} />
                  )}
                </>
              }
            />

            <Route
              path="/signUp"
              element={
                this.state.isAuthorized ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <SignUp login={this.login} />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}
