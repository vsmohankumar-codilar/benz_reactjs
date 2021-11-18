import React, { Component } from 'react';
import './messagecontainer.css';
export default class Messagecontainer extends Component {

    render() {
        return (
            <div className="messagecontainer">
                <h1Welcome to the Mercedes-Benz international website.</h1>
                <p className="paragraph">Exclusive reports and current films: experience a broad range of topics from the
                    fascinating world of Mercedes-Benz. To find out about offers in your location, please go to the local
                    Mercedes-Benz website.</p>
                <p className="paragraph1">This is the International website of Mercedes-Benz AG.</p>
                <p className="paragraph4">Visitors from the U.S., please visit our U.S.website
                    <a href="#mbusa" className ="paragraph3">www.mbusa.com</a>
                    .
                </p>
                <a><input type="submit" value="Bring me to my local website" class="bring"/></a>
            </div>
        )
    }
}