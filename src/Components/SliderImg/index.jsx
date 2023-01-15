import { Component} from 'react';

import Card from '../Card';

import card1 from '../../assets/image/card1.png';
import card2 from '../../assets/image/card2.png';
import card3 from '../../assets/image/card3.png';

import './style.css';


class SliderImg extends Component {
    render(){
        return (
            <div className="slider-section">

                <Card 
                img={card3} 
                title="Join in the new DLC with Kratos to learn more about him and his future."/>

                <Card 
                img={card2} 
                title="Be part of the Suicide Squad and kill the Justice League!-Amanda Waller"/>

                <Card
                img={card1}
                title="Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."               
        textLeft/>
        
        </div>
        )}
    }
    export default SliderImg;
