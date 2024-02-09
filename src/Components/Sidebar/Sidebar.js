import React from "react";
import './Sidebar.css';
import logo from '../../images/icons/logo_Sobe_o_Som.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () =>{
    return (
        <div className="sidebar">
        <nav className="sidebar_nav">
            <div className="logo">
                <a href="">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <ul>
                <li> 
                    <a href="">
                        <span><FontAwesomeIcon icon={faHome} /></span>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                        <span>Buscar</span>
                    </a> 
                </li>
            </ul>
        </nav>

        <div className="library">
            <div className="library_content">
                <button className="library_button">
                    <span className="fabook">
                        <FontAwesomeIcon icon={faBook} />
                    </span>
                    <span>Sua biblioteca</span> 
                </button>
                    <span className="faplus">
                        <button><FontAwesomeIcon icon={faPlus} /></button>
                    </span>
            </div>

            <section className="playlist">
                <div className="playlist_content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É facil, vamos te ajudar</span>  
                    <button className="playlist_button">Criar playlist</button>                  
                </div>
            </section>

            <section className="podcasts">
                <div className="podcasts_content">
                    <span className="text title">Que tal seguir um podcast novo?</span>
                    <span className="text subtitle">Avisaremos você sobre novos episódios.</span>  
                    <button className="podcasts_button">Explore podcasts</button>                  
                </div>
            </section>

            <div className="cookies">
                <a href="">Cookies</a>
            </div>

            <div className="languages">
                <button className="languages_button">
                    <span><FontAwesomeIcon icon={faGlobe} /></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
        </div>
    )
};

export default Sidebar;