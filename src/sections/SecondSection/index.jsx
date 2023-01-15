import React, { Component } from 'react'
import PlayList from '../../Components/PlayList';
import { H2 } from './../../Components/Typography';
import Trophy from './../../Components/Trophy';


import friend from '../../assets/image/friends.png';

import './style.css';



export default class SecondSection extends Component {
    render() {
        return (
        <div className='second-section'>
            <PlayList />
            <div className="trophy">
                <H2>most recent trophy</H2>
                <Trophy />
            </div>
            <div className="friends">
                <H2>friends</H2>
                <img src={friend} alt="friend" />
            </div>  
        </div>
        )
    }
}
