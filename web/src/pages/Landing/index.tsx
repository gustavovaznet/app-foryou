//LANDING INDEX PAGE

//IMPORTING
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import infoIcon from '../../assets/images/icons/info.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

//LANDING FUNCTION
function Landing(){
    const [totalConnections, setTotalConnections] = useState(0);
    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;
            setTotalConnections(total);
        })
    }, [])
    //RETURN
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Para teachers and students ou simplesmente for you!</h2>
                </div>
                
                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />
                
                <div className="buttons-container">                   
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Aprender
                    </Link>                
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                        Ensinar
                    </Link>
                </div>
                    <span className="total-connections">
                        Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração" />
                    </span>
                    <div>                        
                        <Link to="/about" className="about">
                        <span className="about-us">
                            <img src={infoIcon} alt="Informação" /> Sobre nós 
                         </span>
                        </Link>
                    </div>
            </div>
        </div>
    );
}

export default Landing;
