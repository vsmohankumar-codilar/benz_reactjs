import React, { Component } from 'react'
import './picturecontainer.css';
import Car1 from './carimage.webp';
import Car2 from './carimage2.webp';
import Car3 from './carimage3.webp';
import Car4 from './carimage4.webp';
import Car5 from './carimage5.webp';
import Car6 from './carimage6.webp';
import Car7 from './carimage7.webp';
import Car8 from './carimage8.webp';
import Car9 from './carimage9.webp';
import Car10 from './carimage10.webp';
import Car11 from './carimage11.webp';
import Car12 from './carimage12.webp';
import Car13 from './carimage13.webp';
import Car14 from './carimage14.webp';
export default class Picturecontainer extends Component {
    render() {
        return (
            <div class="picturecontainer">
                <a href="car"><img src={Car1} alt="cars" className="car1" /></a>
                <a href="car"><img src={Car2} alt="cars" className="car2" /></a>
                <a href="car"><img src={Car3} alt="cars" className="car3" /></a>
                <a href="car"><img src={Car4} alt="cars" className="car4" /></a>
                <a href="car"><img src={Car5} alt="cars" className="car4" /></a>
                <a href="car"><img src={Car6} alt="cars" className="car4" /></a>
                <a href="car"><img src={Car7} alt="cars" className="car4" /></a>
                <a href="car"><img src={Car8} alt="cars" className="car4" /></a>
                <a href="image1"><img src={Car9} alt="cars" className="car4" /></a>
                <a href="car"><img src={Car10} alt="cars" className="car1" /></a>
                <a href="car"><img src={Car11} alt="cars" className="car2" /></a>
                <a href="car"><img src={Car12} alt="cars" className="car3" /></a>
                <a href="car"><img src={Car13} alt="cars" className="car13" /></a>
                <a href="car"><img src={Car14} alt="cars" className="car14" /></a>

                <div class="showmore">
                    <button onclick="#show" class="butt">Show more</button>
                </div>

            </div>

        )
    }
}