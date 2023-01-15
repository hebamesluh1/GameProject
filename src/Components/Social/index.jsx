import React, { Component } from 'react'
import './style.css';
export default class Social extends Component {
    render() {
        return (
        <img 
        src={this.props.img} 
        alt={this.props.title} 
        className="social-img"/>
        )
    }
}
