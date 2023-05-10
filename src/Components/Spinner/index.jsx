import React from 'react'
import './style.css';

const Spinner = () => {
    return (
        <div className="wrapper">

        <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    )
}

export default Spinner