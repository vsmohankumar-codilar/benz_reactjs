import React, { Component } from 'react';
import './paragraphbuttoncss.css';

export default class Paragraphbutton extends Component {
    render() {
        return (
            <div className="messagecontainer">
                <h1>Welcome to the Mercedes-Benz international website.</h1>
                <p>Exclusive reports and current films: experience a broad range of topics from 
                    the fascinating world of Mercedes-Benz. To find out about offers in your location,
                     please go to the local Mercedes-Benz website.
                     <br/>
                     <br/>

                    This is the International website of Mercedes-Benz AG.
                    Visitors from the U.S., please visit our U.S. website <a href="https://www.mbusa.com/" className="link">www.mbusa.com.</a>
                </p>
                <input type="submit" value="Bring me to my local website" className="bring"></input>
                
            </div>
        )
    }
}
