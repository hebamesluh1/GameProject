import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


import arrow from '../../assets/image/arrow.png';
import logout from '../../assets/image/logout.png';
import avatar from '../../assets/image/defaultavatar.png';
import home from '../../assets/image/home.png';
import list from '../../assets/image/list.png';

import './style.css';

export default class Menu extends Component {
    state={
        admin:false,
    }
    async componentDidMount() {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://react-tt-api.onrender.com/api/users/profile", {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        console.log(res.data.isAdmin)
        this.setState(
        {admin: res.data.isAdmin,}
        )
    }

    render() {
        return (
            <div className='settings-menu'>
            <div className="setting-menu-inner">
                <div className="setting-links">
                    <img src={home} className="settings-icons" alt='home'/>
                    <Link to="/dashboard">Home
                    <img src={arrow} style={{width:"10px"}} alt="arrow"/>
                    </Link>
                </div>
                <div className="setting-links">
                    <img src={avatar} className="settings-icons" alt='avatar'/>
                    <Link to="/dashboard/profile">See your profile
                    <img src={arrow} style={{width:"10px"}} alt="arrow"/>
                    </Link>
                </div>
                {
                    this.state.admin?(
                        <div className="setting-links">
                        <img src={list} className="settings-icons" alt='list'/>
                        <Link to="/dashboard/userList">UserList
                        <img src={arrow} style={{width:"10px"}} alt="arrow"/>
                        </Link>
                        </div>
                    ):('')
                }
                <div className="setting-links">
                    <img src={logout} className="settings-icons" alt='logout'/>
                    <Link to="/logIn" onClick={this.props.logout}>Logout
                    <img src={arrow} style={{width:"10px"}} alt="arrow"/>
                    </Link>
                </div>
            </div>
        </div>
        )
}}
