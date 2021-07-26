import React from 'react'
import Burger from '../asset/img/burger.png';
export default function Title() {
    return (
        <div className="title_wrapper">
            <img className="title_logo" src={Burger} alt="logo"/>
            <span className="title">Callunch</span>
        </div>
    )
}
