import React, { Component } from 'react';
import Bar from '../../Components/Bar';
import ProfileContent from './../../Components/ProfileContent'

import './style.css'

export default class Profile extends Component {
    render() {
        return (
        <div className='profile'>
            <Bar />
            <main>
                <ProfileContent />
            </main>
        </div>
        )
    }
}
