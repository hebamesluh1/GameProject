import React, { Component } from 'react'
import './style.css';
export default class Error extends Component {
    render() {
        return (
            <div className={this.props.className}>{this.props.children}</div>
        )
    }
}
