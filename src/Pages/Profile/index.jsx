import React, { Component } from 'react';
import Bar from '../../Components/Bar';
import Header from './../../sections/Header';
import ProfileContent from './../../Components/ProfileContent'

import './style.css'

export default class Profile extends Component {
    render() {
        return (
        <div className='profile'>
            <Bar />
            <main>
                <Header />
                <ProfileContent />
            </main>
        </div>
        )
    }
}
