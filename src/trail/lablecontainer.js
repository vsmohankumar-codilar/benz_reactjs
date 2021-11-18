import React, { Component } from 'react'
import './lablecontainer.css';
import Mlogoa from './mlogo1.webp';
import Mlogob from './mlogo2.webp';
import Mlogoc from './mlogo3.webp';
export default class Lablecontainer extends Component {
    render() {
        return (
            <div className="lablecontainer">
                    <a href="image"><img src={Mlogoa} alt="image" className="img" /></a>
                    <a href="image"><img src={Mlogob} alt="image" className="img" /></a>
                    <a href="image"><img src={Mlogoc} alt="image" className="img" /></a>
            </div>

        )
    }
}