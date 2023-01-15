import React, { Component } from 'react';
import lock from './../../assets/image/lock.png';
import eye from './../../assets/image/eye.png';

import './style.css';
export default class PassInput extends Component {
  render() {
    return (
      <div className='block'>
          <img src={lock} alt="lock" className='left-img'/>
          <input type="password" placeholder={this.props.placeholder} value={this.props.value}/>
          <img src={eye} alt="eye" className='show-pass'/>
      </div>
    )
  }
}
