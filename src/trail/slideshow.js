import React, { Component } from 'react';
import Benz1 from './1.webp';
import Benz2 from './2.webp';
import Benz3 from './3.webp';
import Benz4 from './4.webp';
import Benz5 from './5.webp';
import Benz6 from './6.webp';
import './slideshow.css';
export default class Slideshow extends Component {
    render() {
       return(
        <div className="slideshow">
        <ol className="show">
            <li id="slide1" tabindex="0" className="slides">
                <div className="container">
                    <a href="#slide6" className="containerback">Go to last slide</a>
                    <a href="#slide2" className="containernext">Go to next slide</a>
                    <a href="benz1"><img src={Benz1} alt="Benzcar" className="benz" /></a>
                </div>
            </li>
            <li id="slide2" tabindex="0" className="slides">
                <div className="container">
                    <a href="#slide1" className="containerback">Go to previous slide</a>
                    <a href="#slide3" className="containernext">Go to next slide</a>
                    <a href="benz2"><img src={Benz2} alt="Benzcar" className="benz" /></a>
                </div>
            </li>
            <li id="slide3" tabindex="0" className="slides">
                <div className="container">
                    <a href="#slide2" className="containerback">Go to previous slide</a>
                    <a href="#slide4" className="containernext">Go to next slide</a>
                    <a href="benz3"><img src={Benz3} alt="Benzcar" className="benz" /></a>
                </div>
            </li>
            <li id="slide4" tabindex="0" className="slides">
                <div className="container">
                    <a href="#slide3" className="containerback">Go to previous slide</a>
                    <a href="#slide5" className="containernext">Go to next slide</a>
                    <a href="benz4"><img src={Benz4} alt="Benzcar" className="benz" /></a>
                </div>
            </li>
            <li id="slide5" tabindex="0" className="slides">
                <div className="container">
                    <a href="#slide4" className="containerback">Go to previous slide</a>
                    <a href="#slide6" className="containernext">Go to next slide</a>
                    <a href="benz5"><img src={Benz5} alt="Benzcar" className="benz" /></a>
                </div>
            </li>
            <li id="slide6" tabindex="0" className="slides">
                <div className="container">
                    <a href="#slide5" className="containerback">Go to previous slide</a>
                    <a href="#slide1" className="containernext">Go to next slide</a>
                    <a href="benz6"><img src={Benz6} alt="Benzcar" className="benz" /></a>
                </div>
            </li>
        </ol>
    </div>
       )
    }
}
