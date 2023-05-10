import React, { Component, Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../sections/Header";
import Spinner from "../Spinner";

export default class ProtectedRoute extends Component {
    render() {
        return (
            <div>
                {this.props.isAuthorized ? (
                    <>
                        <Header logout={this.props.logout} />
                        <Suspense fallback={<Spinner />}>
                            <Outlet />
                        </Suspense>
                    </>
                ) : (
                    <Navigate to="/logIn" />
                )}
            </div>
        );
    }
}