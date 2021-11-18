import React, { Component } from 'react';
import Searchbarpic from './searchbar.png';
import './Searchbar.css';



export default class Searchbar extends Component {
    render() {
        return (
            <>
            <div className="searchdiv">
        
            <div className="searchbar">
                <input type="text" placeholder="Iam looking For...."> 
                
                
                 </input>
                 <div className="searchdivimg">
                 <img src={Searchbarpic} alt="searchlogo"></img>
                     </div>
           
            </div>
            </div>
            </>
        )
    }
}
