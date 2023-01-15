import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Bar from "../../Components/Bar";


export default function UserDetails() {
    const { id } = useParams();
    return <Details id={id} />;
    }

    class Details extends Component {
    state = {
        id: "",
        name: "",
        email: "",
        admin:"",
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
            admin: res.data.isAdmin ? "Yes" : "No" ,
            isLoading: false,
        });
        } catch (error) {
        console.log(error);
        }
    }

    render() {
        return (
        <ul className="users_details">
            <Bar/>
            <h3>{this.state.name} Details: </h3>

            {this.state.isLoading ? (
            "Loading..."
            ) : (
            <li className="details">
                <p>ID :{this.state.id}</p>
                <p>Name :{this.state.name}</p>
                <p>Email :{this.state.email}</p>
                <p>Admin :{this.state.admin}</p>
            </li>
            )}
        </ul>
        );
    }
}