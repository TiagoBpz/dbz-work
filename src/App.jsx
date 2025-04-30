import style from "./App.module.css";
import fundo2 from "./assets/images/fundo2.png";
import logo from "./assets/images/image.png";
import { Menu } from "./components/menu";
import { useState } from "react";

function App() {
  const [videoVisivel, setVideoVisivel] = useState(false);
  const [descricaoVisivel, setDescricaoVisivel] = useState(false);

  const toggleVideo = () => {
    setVideoVisivel(!videoVisivel);
    if (descricaoVisivel) setDescricaoVisivel(false);
  };

  const toggleDescricao = () => {
    setDescricaoVisivel(!descricaoVisivel);
    if (videoVisivel) setVideoVisivel(false);
  };

  return (
    <>
      <Menu s1="API" style={{ width: "100%" }} />
      <main>
        <section id="s1" className={style.s1}>
          <div className={style.logoContainer}>
            <img src={logo} alt="Logo" className={style.logoS1} />
          </div>
          <div className={style.butao}>
            <button className={style.buttonLink}>
              <a href="/requisicao">Acessar a API</a>
            </button>
          </div>
        </section>

        <section id="s2" className={style.s2} style={{ backgroundImage: `url(${fundo2})` }}>
          <div className={style.overlay}>
            <div className={style.botoesS2}>
              <button className={style.botaoS2} onClick={toggleVideo}>
                {videoVisivel ? "Fechar vídeo" : "Abertura de Dragon Ball"}
              </button>

              {videoVisivel && (
                <div className={style.videoContainer}>
                  <iframe
                   width="100%"
                   height="400px" 
                   src="https://www.youtube.com/embed/VuY0ABWfjSE?si=jSlSeNs912rLbw96&amp;controls=0" 
                   title="YouTube video player" 
                   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                   ></iframe>
                </div>
              )}

              <button className={style.botaoS2} onClick={toggleDescricao}>
                {descricaoVisivel ? "Fechar descrição" : "Descrição"}
              </button>

              {descricaoVisivel && (
                <div className={style.descricao}>
                  <p>
                    <strong>Dragon Ball - </strong> A trama segue Goku, um menino com rabo de macaco e força sobre-humana,
                     que parte em uma jornada para encontrar as Esferas do Dragão (Dragon Balls)
                      — sete esferas mágicas que, quando reunidas, invocam o dragão Shenlong,
                       capaz de realizar qualquer desejo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
