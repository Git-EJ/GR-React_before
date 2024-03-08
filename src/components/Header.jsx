import imageGR from '../img/GR-beige_bleu.png'


function Header() {
    return (

        <header>
            <div className="flip-header">
                <div className="flip-header-inner">
                    <div className="flip-header-front">
                        <div className="tools-front"></div>
                    </div>
                    <div className="flip-header-back" >
                        <div><a href="#pe" className="fhb peinture">Peinture       </a></div>
                        <div><a href="#de" className="fhb decoration">Décoration   </a></div>
                        <div><a href="#pa" className="fhb parements">Parements     </a></div>
                        <div><a href="#pr" className="fhb parquet">Parquet         </a></div>
                        <div><a href="#cu" className="fhb cuisine">Cuisine         </a></div>
                        <div><a href="#sd" className="fhb sdb">Salle de Bain       </a></div>
                        <div><a href="#ve" className="fhb verriere">Verrière       </a></div>
                        <div><a href="#cl" className="fhb cloisons">Cloisons       </a></div>
                        <div><a href="#el" className="fhb electricite">Electricité </a></div>
                        <div><a href="#pl" className="fhb plomberie">Plomberie     </a></div>
                    </div>
                </div>
            </div>

            <div className="gr-header">
                <div className="menu-left">
                    <p><a href="#pe" className="menu-text-decoration peinture">Peinture         </a></p>
                    <p><a href="#pa" className="menu-text-decoration parements">Parements       </a></p>
                    <p><a href="#sd" className="menu-text-decoration sdb">Salle de Bain         </a></p>
                    <p><a href="#ve" className="menu-text-decoration verriere">Verrière         </a></p>
                    <p><a href="#el" className="menu-text-decoration electricite">Electricité   </a></p>
                </div>

                <div id="gr-container">
                    <div id="anim1">
                        <div id="anim2">
                            <div id="anim3">
                                <img className="front face" src={imageGR} alt="Logo GR.png" />
                                <img className="top face" src={imageGR} alt="Logo GR.png" />
                                <img className="left face" src={imageGR} alt="Logo GR.png" />
                                <img className="right face" src={imageGR} alt="Logo GR.png" />
                                <img className="bottom face" src={imageGR} alt="Logo GR.png" />
                                <img className="back face" src={imageGR} alt="Logo GR" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menu-right">
                    <p><a href="#de" className="menu-text-decoration decoration">Décoration </a></p>
                    <p><a href="#pr" className="menu-text-decoration parquet">Parquet       </a></p>
                    <p><a href="#cu" className="menu-text-decoration cuisine">Cuisine       </a></p>
                    <p><a href="#cl" className="menu-text-decoration cloisons">Cloisons     </a></p>
                    <p><a href="#pl" className="menu-text-decoration plomberie">Plomberie   </a></p>
                </div>
            </div>
        </header>

    )
}

export default Header;
