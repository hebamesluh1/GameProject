import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Bar from '../../Components/Bar';

export default class UserList extends Component {
    state = {
        name: "",
        allUsers: [],
        isLoading: true,
        isDeleting: false,
    };

    async componentDidMount() {
        try {
        const name = localStorage.getItem("name");
        this.setState({ name });
        const token = localStorage.getItem("token");
        const res = await axios.get('https://react-tt-api.onrender.com/api/users', {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });

        this.setState({ allUsers: res.data });
        this.setState({ isLoading: false });
        } catch (error) {
        console.log(error);
        }
    }
    handleDelete = async (id) => {
        await axios.delete(`https://react-tt-api.onrender.com/api/users/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        });
        this.setState({
        allUsers: this.state.allUsers.filter((user) => user._id !== id),
        });
        this.setState({ isDeleting: false });
        }

    render() {
        return (
        <div>
            <Bar />
            <p>{this.state.name}</p>
            <ol className="users_list">
            <div className="user_title">All Users</div>
            {this.state.isLoading
                ? "Loading .. "
                : this.state.isDeleting
                ? "Deleting.."
                : this.state.allUsers.map((user) => (
                    <li key={user._id}>
                    <NavLink to={`${user._id}`}>
                        <p>{user.email}</p>
                    </NavLink>

                    <button
                        className="delete"
                        onClick={() => this.handleDelete(user._id)}
                    >
                        Delete
                    </button>
                    </li>
                ))}
            </ol>

        </div>
        );
    }

}