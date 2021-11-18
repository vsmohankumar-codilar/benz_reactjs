import React, { Component } from 'react';
import Logo1 from './mlogo1.webp';
import Logo2 from './mlogo2.webp';
import Logo3 from './mlogo3.webp';
import './containerimagecss.css';
export default class Containerimage extends Component {
    render() {
        return (
            <div className="imagecontainer">
                <div className='under-imagecontainer'><img src={Logo1} alt="logo" className="mercedesme"></img></div>
               <div className='under-imagecontainer'> <img src={Logo2} alt="logo" className="mercedesme"></img></div>
               <div className='under-imagecontainer'> <img src={Logo3} alt="logo" className="mercedesme"></img></div>

                
            </div>
        )
    }
}
