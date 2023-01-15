import React, { Component } from 'react';

import './style.css';

//image 
import mainImg from './../../assets/image/trophy.png';
import cup from '../../assets/image/cup.png';
import circle from '../../assets/image/image1.png';

export default class Trophy extends Component {
    render() {
        return (
        <>
            <div>
                <div className="main-trophy">
                        <img src={mainImg} alt="trophy img" className='trophy-img'/>
                        <img src={cup} alt="cup img" className='cup'/>
                        <img src={circle} alt="circle img" className='circle'/>
                        <p className='last-text'>
                        assassin's creed odyssey
                        <span>last played: 34 hours ago</span>
                        </p>
                        <p className='top-text'>
                        perfect KILL streak
                        <span>You are in the 0.5% </span>
                        </p>
                </div>
            </div>
        </>
        )
    }
}
