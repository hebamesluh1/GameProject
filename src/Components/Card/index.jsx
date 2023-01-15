import React, { Component } from 'react'

import './style.css';

export default class Card extends Component {
    render() {
        return (
        <div className="card" ref={this.props.ref}>
            <img src={this.props.img} alt="card" />
            <p 
            style={this.props.textLeft?{left:'20px',textAlign:'left',paddingLeft:0,paddingRight:'130px'} :{right:'20px'}}>
                {this.props.title}</p>
        </div>
        )
    }
}
