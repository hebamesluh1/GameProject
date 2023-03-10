import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../sections/Header";

export default class ProtectedRoute extends Component {
    render() {
        return (
        <div>
            {this.props.isAuthorized ? (
            <>
                <Header logout={this.props.logout}/>
                <Outlet/>
            </>
            ) : (
            <Navigate to="/logIn" />
            )}
        </div>
        );
    }
}