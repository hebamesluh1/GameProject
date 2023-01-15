import React, { Component } from 'react'


//image
import logo from './../../assets/image/LogoGame.png';
import like from './../../assets/image/Like.png';
import setting from './../../assets/image/Setting.png';
import puzzle from './../../assets/image/Puzzle.png';
import sun from './../../assets/image/Sun-one.png';
import moon from './../../assets/image/Moon.png';

//style
import './style.css';

export default class Bar extends Component {
    render() {
        return (
            <>
                <div className="bar">
                    <div className="logo">
                        <img src={logo} alt="logo-game" />
                    </div>
                    <div className="menu">
                                <img src={like} alt="like" />
                                <img src={setting} alt="setting" />
                                <img src={puzzle} alt="puzzle" />
                    </div>
                    <div className='theme'>
                    {/* className={`theme ${
                        this.props.theme === "default" ? "btn_theme-default" : "btn_theme-dark"
                        }`}
                    onClick={() =>
                        this.props.changeTheme(this.props.theme === "default" ? "dark" : "default")
                    } */}
                        <ul>
                            <li>
                                <img src={moon} alt="moon" />
                            </li>
                            <li>
                                <img src={sun} alt="sun" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="line-bar">
                </div>
            </>
        )
    }
}
