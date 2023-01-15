import React, { Component } from 'react'

import './style.css';

export default class Player extends Component {
    render() {
        return (
        <div className="player">
            <img src={this.props.img} alt="player-img"/>
            <p>{this.props.title}</p>
        </div>
        )
    }
}
