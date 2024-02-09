import React from "react";
import './Main.css';
import Playlist1 from '../../images/playlist/1.jpeg';
import Playlist2 from '../../images/playlist/2.png';
import Playlist3 from '../../images/playlist/3.jpeg';
import Playlist4 from '../../images/playlist/4.jpeg';
import Playlist5 from '../../images/playlist/5.jpeg';
import Playlist6 from '../../images/playlist/6.jpeg';
import Playlist7 from '../../images/playlist/7.jpeg';
import Playlist8 from '../../images/playlist/8.jpeg';
import Playlist9 from '../../images/playlist/9.jpeg';
import Playlist10 from '../../images/playlist/10.jpeg';
import Playlist11 from '../../images/playlist/11.jpeg';
import Playlist12 from '../../images/playlist/12.jpeg';
import Playlist13 from '../../images/playlist/13.jpeg';
import Playlist14 from '../../images/playlist/14.jpeg';
import Playlist15 from '../../images/playlist/15.jpeg';

const Main = () => {
    return (
        <main>
        <div class="main_container">
            <div class="playlist_container">
                <div id="result-playlists">
                        <div class="playlist_text">
                            <h2 class="session">Navegue pelas seções</h2>
                        </div>
    
                        <div class="offer_scroll_container">
                            <div class="offer__list">
                              <section class="offer_list_item">
                                <a href="" class="cards">
                                  <div class="cards card1">
                                    <img src = {Playlist1} alt="" />
                                    <span>Boas festas</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card2">
                                    <img src = {Playlist2} alt="" />
                                    <span>Feitos para você</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card3">
                                    <img src = {Playlist3} alt="" />
                                    <span>Lançamentos</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card4">
                                    <img src = {Playlist4} alt="" />
                                    <span>Creators</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card5">
                                    <img src = {Playlist5} alt="" />
                                    <span>Para treinar</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card6">
                                    <img src = {Playlist6} alt="" />
                                    <span>Podcasts</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card7">
                                    <img src = {Playlist7} alt="" />
                                    <span>Sertanejo</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card8">
                                    <img src = {Playlist8} alt="" />
                                    <span>Samba e pagode</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card9">
                                    <img src = {Playlist9} alt="" />
                                    <span>Funk</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card10">
                                    <img src = {Playlist10} alt="" />
                                    <span>MPB</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card11">
                                    <img src = {Playlist11} alt="" />
                                    <span>Rock</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card12">
                                    <img src = {Playlist12} alt="" />
                                    <span>Hip Hop</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card13">
                                    <img src = {Playlist13} alt="" />
                                    <span>Indie</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card14">
                                    <img src = {Playlist14} alt="" />
                                    <span>Relax</span>
                                  </div>
                                </a>
                            
                                <a href="" class="cards">
                                  <div class="cards card15">
                                    <img src = {Playlist15} alt="" />
                                    <span>Música Latina</span>
                                  </div>
                                </a>
                              </section>
                            </div>
                        </div>
                </div>

                <div id="result_artist" class="hidden">
                    <div class="grid_container">
                      <div class="artist_card" id="">
                        <div class="card_img">
                          <img id="artist_img" class="artist_img" />
                          <div class="play">
                            <span class="fa fa-solid fa-play"></span>
                          </div>
                        </div>
                        <div class="card_text">
                          <a title="Foo Fighters" class="vst" href="">
                            <span class="artist_name" id="artist_name"></span>
                            <span class="artist_categorie">Artista</span>
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
};

export default Main;