import React, { Component } from 'react';

import './style.css';

import Bar from '../../Components/Bar';
import Slider from '../../sections/Slider';
import SecondSection from '../../sections/SecondSection';

export default class Home extends Component {
    render() {
        return(
            <div className="home-page">
                <Bar />
                <main>
                    <Slider />
                    <SecondSection />
                </main>
                </div>
        )
    }
}
