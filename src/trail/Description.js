import React, { Component } from 'react'
import './description.css';
import Petrol from './petrol.png';
export default class Description extends Component {
    render() {
        return (
            <div className="description">
                <div class="threesentence">
                    <a href="#petrol">
                        <img src={Petrol} alt="petrol" height="100%" width="1%" className="new4"></img> </a>
                    <p class="threesen">Kraftstoffverbrauch kombiniert</p>
                    <p class="threesen">CO₂-Emissionen kombiniert</p>
                    <p class="threesen">Stromverbrauch im kombinierten Testzyklus</p>
                </div>


                <div className="para1">
                    <p><sup>1</sup> Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt. Es handelt sich um die
                        „NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 1 Durchführungsverordnung (EU) 2017/1153. Die Kraftstoffverbrauchswerte
                        wurden auf Basis dieser Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG
                        ermittelt. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen
                        CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die
                        CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen
                        Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
                    </p>
                </div>

                <div className="para1">
                    <p><sup>4</sup> Angaben zu Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind vorläufig und wurden vom
                        Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens ermittelt und in
                        NEFZ-Werte korreliert. Eine EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen Werten liegen noch
                        nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.
                    </p>
                </div>


                <div className="para1">
                    <p><sup>6</sup>Stromverbrauch und Reichweite wurden auf der Grundlage der VO 692/2008/EG ermittelt. Stromverbrauch und
                        Reichweite sind abhängig von der Fahrzeugkonfiguration. Weitere Informationen zum offiziellen
                        Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem
                        „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen
                        Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil
                        Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.

                    </p>
                </div>

                <div className="para1">
                    <p><sup>7</sup> Angaben zu Stromverbrauch und Reichweite sind vorläufig und wurden vom Technischen Dienst für das
                        Zertifizierungsverfahren nach Maßgabe der UN/ECE-Regelung Nr. 101 ermittelt. Die EG-Typgenehmigung und eine
                        Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und
                        den amtlichen Werten sind möglich.

                    </p>
                </div>

                <div className="para1">
                    <p><sup>8</sup>Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe der jeweils anwendbaren
                        Zertifizierungsmethode ermittelt. Es liegen bislang weder bestätigte Werte vom TÜV noch eine
                        EG-Typgenehmigung noch eine Konformitätsbescheinigung mit amtlichen Werten vor. Abweichungen zwischen den
                        Angaben und den amtlichen Werten sind möglich.</p>
                </div>
            </div>
        )
    }
}