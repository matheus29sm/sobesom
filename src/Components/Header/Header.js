import React from "react";
import './Header.css';
import right from '../../images/icons/small-right.png';
import left from '../../images/icons/small-left.png';
import search from '../../images/icons/search.png';


const Header = () =>{
    return (
        <nav className="header">
            <div className="header_nav">
                <button className="left"> 
                    <img src={left} alt="esquerda"/>
                </button>
                <button className="right"> 
                    <img src={right} alt="direita"/>
                </button>
            </div>
                
            <div className="header_search">
                <img src={search} alt="busca"/>
                <input 
                    id="search_input" 
                    type="text" 
                    maxlength="800" 
                    placeholder="O que você que ouvir?"/>
            </div>

            <div className="header_login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;
