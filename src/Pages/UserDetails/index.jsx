import React, { Component } from "react";
import { useParams, Link } from "react-router-dom";
import './style.css';
import axios from "axios";


import Bar from "../../Components/Bar";
import Header from "../../sections/Header";
import Spinner from "../../Components/Spinner";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan } from '@fortawesome/free-solid-svg-icons';


export default function UserDetails() {
    const { id } = useParams();
    return <Details id={id} />;
}

class Details extends Component {
    state = {
        id: "",
        name: "",
        email: "",
        admin: "",
        isLoading: true,
    };

    async componentDidMount() {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.get(`https://react-tt-api.onrender.com/api/users/${this.props.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({
                name: res.data.name,
                email: res.data.email,
                id: res.data._id,
                admin: res.data.isAdmin ? "Yes" : "No",
                isLoading: false,
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="user-details">
                <Bar />
                <Header />
                <main>
                    {this.state.isLoading ? (
                        <div style={{
                            margin: "20% 40%",
                            fontSize: "25px"
                        }}>
                            <Spinner />
                        </div>
                    ) : (
                        <>
                            <Link to="/dashboard/userList" className="back-btn">
                            <FontAwesomeIcon icon={faLessThan} /> 
                                Back
                            </Link>
                            <table>
                                <tr>
                                    <th>name</th>
                                    <td>{this.state.name}</td>
                                </tr>
                                <tr>
                                    <th>email</th>
                                    <td><a href="mailto:">{this.state.email}</a></td>
                                </tr>
                                <tr>
                                    <th>isAdmin</th>
                                    <td>{this.state.admin}</td>
                                </tr>
                            </table>
                        </>
                    )}
                </main>
            </div>
        );
    }
}