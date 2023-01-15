import React, { Component } from 'react';

import './style.css';

import Bar from '../../Components/Bar';
import Header from '../../sections/Header';
import Slider from '../../sections/Slider';
import SecondSection from '../../sections/SecondSection';

export default class Home extends Component {
    render() {
        return(
            <div className="home-page">
                <Bar />
                <main>
                    <Header />
                    <Slider />
                    <SecondSection />
                </main>
                </div>
        )
    }
}
