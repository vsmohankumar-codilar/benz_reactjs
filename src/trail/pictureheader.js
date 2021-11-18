import React, { Component } from 'react'
import './pictureheader.css';
import pic1 from './news.png';
import pic2 from './staricon.jpeg';
import pic3 from './play.png';
export default class Pictureheader extends Component {
    render() {
        return (
            <div class="pictureheader">
                <a href="#news" class="new1"><img src={pic1} alt="image" className="pic1" height="2%" width="2%"/></a>
                <a href="#new">New</a>
                <a href="#popular" class="new1"><img src={pic2} alt="image" className="pic1" height="2%" width="2%"/></a>
                <a href="#popular">Popular</a>
                <a href="#video" class="new3"><img src={pic3} alt="image" className="pic3" height="2%" width="2%"/></a>
                <a href="videos">Videos</a>
            </div>
        )
    }
}