import React, { Component } from 'react'
import './footer.css';
import Facebook from './face.png';
import Tweet from './twitt.png';
import You from './yout.png';
import Insta from './instgram.png';
import Linkedin from './linkin.png';
import Amg from './logo_amg.svg';
import Daimler from './logo_daimler.svg';
import Smart from './logo_smart.svg';
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p class="follow">Follow us and use the following social media platforms to get in contact with us and to share your passion for the brand, products and services of Mercedes-Benz.</p>

                <div class="social media">
                    <a href="#facebook"><img src={Facebook} height="5%" width="5%" class="social" /></a>
                    <a href="#twitter"><img src={Tweet} height="5%" width="5%" class="social" /></a>
                    <a href="#youtube"><img src={You} height="5%" width="5%" class="social" /></a>
                    <a href="#insta"><img src={Insta} height="5%" width="5%" class="social" /></a>
                    <a href="#link"><img src={Linkedin} height="5%" width="5%" class="social" /></a>
                </div>

                <hr className="line6"></hr>

                <div className="footerimage">
                    <a href="#foot1"><img src={Amg} className="foot" /></a>
                    <a href="#foot2"><img src={Daimler} className="foot" /></a>
                    <a href="#foot3"><img src={Smart} className="foot" /></a>
                </div>


                <hr className="line6"></hr>

                <p className="paragraph2">This is the International website of Mercedes-Benz AG. Visitors from the U.S., please visit our U.S.<a href="#mbusa" className="paragraph3">www.mbusa.com</a>.</p>

                <div className="bot">
                    <a href="#deutsch" class="bot1">Deutsch</a>
                    <a href="#ji" class="bot1">|</a>
                    <a href="#english" class="in">English</a>
                    <a href="#anbieter" class="bot2">Anbieter</a>
                    <a href="#Rechtlichen" class="bot2">Rechtlichen Hinweise</a>
                    <a href="#cookies" class="bot2">Cookies</a>
                    <a href="#datenschutz" class="bot2">Datenschutz</a>
                    <a href="#newfeed" class="bot2">Newfeed(RSS)</a>
                    <a href="#kontakt" class="bot2">Kontakt</a>
                    <a href="#karriere" class="bot2">Karriere</a>
                    <a href="#investor" class="bot2">Investor Relations</a>
                    <a href="#daimler" class="bot2">Daimler AG</a>
                    <a href="#top" class="bot2">Top</a>
                </div>
            </div>
        )
    }
}