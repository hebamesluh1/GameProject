import React, { Component } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Bar from '../../Components/Bar';
import Header from './../../sections/Header/index';
import details from '../../assets/image/details.png';
import './style.css';

export default class UserList extends Component {
    state = {
        users: [],
        isLoading: true,
        isDeleting: false,
    };

    token = localStorage.getItem("token");
    async componentDidMount() {
        try {
        const res = await axios.get(
            "https://react-tt-api.onrender.com/api/users",
            {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
            }
        );

        this.setState({ users: res.data });
        this.setState({isLoading: false});
        } catch (error) {
        console.log(error);
        }
    }
    // handleDelete = async (id) => {
    //     await axios.delete(`https://react-tt-api.onrender.com/api/users/${id}`, {
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //     });
    //     this.setState({
    //     allUsers: this.state.allUsers.filter((user) => user._id !== id),
    //     });
    //     this.setState({ isDeleting: false });
    //     }

    render() {
        return (
        <div className="userList">
            <Bar />
            <main>
                <div className="user-list">
                    <h2>USERS LIST</h2>
                    {this.state.isLoading ? (
                    <div style={{
                    margin:"20% 40%",
                    fontSize:"25px"
                    }}>
                    "Loading..."
                    </div>
                ) : (
                    <div className="user-list-box">
                        <table>
                            <tr>
                                <th>id</th>
                                <th>username</th>
                                <th>Admin</th>
                                <th>user details</th>
                                <th>delete</th>
                            </tr>
                            
                                {this.state.users.map((user)=>{
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.isAdmin}</td>
                                        <td><Link to='/userDetails'>
                                        <img src={details} alt="details" width='25px'/>
                                        user details</Link></td>
                                        <td>
                                        <button className="delete">Delete</button>
                                        </td>
                                    </tr>
                                    })}
                        </table>
                    </div>
                )}
                </div>
            </main>
        </div>
        );
    }
}