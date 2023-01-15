import React, { Component } from 'react';

import { H2 } from './../../Components/Typography';
import Player from '../../Components/Player';

import './style.css';

import img1 from '../../assets/image/POTTER.png';
import img2 from '../../assets/image/god of war mini.png';
import img3 from '../../assets/image/MINI CRASH.png';
import img4 from '../../assets/image/DYING LIGHT MINI.png';

export default class PlayList extends Component {
    render() {
        return (
            <div className="play-list">
                <H2>Last Played</H2>
                <Player 
                img={img1} 
                title="Hogwarts Legacy 50%"/>

                <Player 
                img={img2} 
                title="God Of War: Ragnarök 72.5%"/>

                <Player 
                img={img3} 
                title="Crash Bandicoot N. Sane Trilogy 34%"/>

                <Player 
                img={img4} 
                title="Dying Light 2 Stay Human 100%"/>
            </div>
        )
    }
}
