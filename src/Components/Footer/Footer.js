import React from "react";
import './Footer.css';

const Footer = () =>{
    return (
        <footer class="premium">
            <div class="text">
                <p class="premium__title">Testar o Premium de graça</p>
                <p class="premium__subtitle">
                  Inscreva-se para curtir música ilimitada e podcasts só com alguns
                  anúncios. Não precisa de cartão de crédito.
                </p>
            </div>
            <div>
              <button type="button">Inscreva-se grátis</button>
            </div>
        </footer>
    )
};


export default Footer;