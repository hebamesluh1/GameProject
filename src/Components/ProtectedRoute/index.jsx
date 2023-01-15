import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Home from "../../Pages/Home";

export default class ProtectedRoute extends Component {
    render() {
        return (
        <div>
            {this.props.isAuthorized ? (
            <>
                <Home logout={this.props.logout} admin={this.props.admin} />

                {/* <Outlet /> */}
            </>
            ) : (
            <Navigate to="/logIn" />
            )}
        </div>
        );
    }
}