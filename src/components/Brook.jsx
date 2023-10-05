import brook from "../img/personagem-brook.png";
import logo from "../img/one-piece-logo.png";

import "../styles/brook.css";
export function Brook() {
  return (
    <>
      <main id="main-brook" className="hidden h-[100vh] w-[100vw] relative">
        <div className="">
          <img
            className="brook h-[100vh] w-[100%] object-cover z-0"
            src={brook}
            alt=""
          />
          <div className="z-10 absolute top-0 left-0 h-[100vh] w-[100vw] bg-gradient-to-r from-black/70 to-black/5"></div>
          <div className="flex z-20 flex-col text-[white] top-[30%] w-[60vw] absolute p-5">
            <i className="logo mb-10 h-[110px] md:h-[90px] sm:h-[70px] w-[300px] md:w-[280px] sm:w-[210px]">
              <img src={logo} alt="" />
            </i>
            <h2 className="personagem text-[white] text-[25px] mb-5 [font-family: Secular One">
              Brook
            </h2>
            <p className="descricao [line-height:19px] text-[13px] sm:text-[9px] md:text-[11px]">
              Brook é o Músico dos Piratas do Chapéu de Palha. Ele é um
              esqueleto que os Chapéus de Palha encontraram a bordo de um navio
              fantasma depois de entrarem no Triângulo Florian. Ele é um usuário
              de Akuma no Mi que comeu a Yomi Yomi no Mi, o que o torna um
              pseudo-imortal por causa de seus poderes. Ele é o nono membro do
              Bando do Chapéu de Palha, e o oitavo a se juntar à tripulação de
              Luffy. Ele é também um dos dois Espadachins a bordo de seu atual
              navio, o outro sendo Zoro. Ele preenche o cargo do tão esperado
              músico que Luffy queria para sua tripulação desde que sua jornada
              começou. Brook foi nomeado pela marinha como um dos comandantes de
              Luffy, Sua recompensa atual é de 383.000.000 bellys.
            </p>
          </div>
          <audio
            className="absolute h-7 z-20 w-[20vw] bottom-[3vh] left-[50%] translate-x-[-50%]"
            controls
            autoPlay
          >
            <source src="../../src/songs/binks-no-sake.mp3" type="audio/mp3" />
          </audio>
        </div>
      </main>
    </>
  );
}
