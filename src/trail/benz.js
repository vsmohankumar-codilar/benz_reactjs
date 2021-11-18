import React, { Component } from 'react';
import Image from './logo.svg';
import Logo from './searchic.png';
import './benzcss.css';

export default class Benz extends Component {
    render() {
        return (
           <> 
            <div className="benzmain">
                <div className="image">
                    <img src={Image} alt="logo"></img>
                </div>
                <div className="claim">
                    <p>mercedes Benz</p>
                </div>
                <div class="privacy">
            <div class="info">
            <a class="icon">i</a>
            </div>
            <a  class="prov" href="privacy">Provider/Privacy Statement </a>
            <a href="deutsch">Deutsch</a>
        </div> 
                <div className="menu">
                <a href="#company">Company</a>
        <a href="vehilcles">Vehicles</a>
        <a href="design">Design</a>
        <a href="innovation">Innovation</a>
        <a href="Museum & History">Museuem&History</a>
        <a href="sports">Sports</a>
        <a href="events">Events</a>
        <a href="lifestyle">LifeStyle</a>
        <a href="search" class="search">
        <img src={Logo} alt="logo" ></img></a>
        </div>
        </div>
           </>
        )
    }
}
