import React, { Component } from 'react'

import './style.css'

export default class Input extends Component {
    render() {
        return (
            <div className='Input-box'>
                <label htmlFor={this.props.type}>{this.props.children}</label>
                <input
                    id={this.props.type}
                    type={this.props.type} 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.handleChange} 
                    value={this.props.value} 
                    name={this.props.name} 
                />
            </div>
        )
    }
}
