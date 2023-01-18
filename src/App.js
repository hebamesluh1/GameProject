
import NotFound from './Pages/NotFound';
import React, { Component } from "react";

import { Routes, Route, Navigate} from "react-router-dom";

import SignUp from './Pages/SignUp';
import LogIn from "./Pages/LogIn";

import Profile from "./Pages/Profile";
import UsersList from "./Pages/UsersList";
import UserDetails from "./Pages/UserDetails";
import Home from './Pages/Home';
import ProtectedRoute from './Components/ProtectedRoute/index';

export default class App extends Component {
  state = {
    isAuthorized: false,
    isAdmin:false,
  };
  login =()=>{
    this.setState({isAuthorized:true});
  }
  logout =()=>{
    this.setState({isAuthorized:false});
    localStorage.clear();
  }
  componentDidMount(){
    const token = localStorage.getItem("token");
    if(token){
      this.setState({isAuthorized:true});
    }
    const admin = localStorage.getItem("admin")
    if(admin === "true") this.setState({isAdmin:true})
  }
  admin = () => {
    this.setState({isAdmin:true})
  }


  render() {
    return (
      <div className="App">
        <Routes>
          <Route index='true' element={<Navigate to="/logIn"/>}/>
          <Route path='/dashboard' element={<ProtectedRoute isAuthorized={this.state.isAuthorized} logout={this.logout}/>} children={
            [
              <Route index="true" element={<Home/>}/>,
              <Route path='userList' element={<UsersList/>}/>,
              <Route path='userDetails' element={<UserDetails/>}/>,
              <Route path='profile' element={<Profile/>}/>,
            ]
          }/>
          <Route path='/logIn' element={
            <>{
              this.state.isAuthorized?
              <Navigate to="/dashboard"/>:
              <LogIn login={this.login} admin={this.admin}/>
            }
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
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    );
  }
}
