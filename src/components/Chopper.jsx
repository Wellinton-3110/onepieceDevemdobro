import chopper from "../img/personagem-tony-chopper.png";
import logo from "../img/one-piece-logo.png";

export function Chopper() {
  return (
    <>
      <main id="main-chopper" className="hidden h-[100vh] w-[100vw] relative">
        <div>
          <img
            className="h-[100vh] w-[100%] object-cover z-0"
            src={chopper}
            alt=""
          />
          <div className="z-10 absolute top-0 left-0 h-[100vh] w-[100vw] bg-gradient-to-r from-black/70 to-black/5"></div>
          <div className="flex z-20 flex-col text-[white] top-[30%] w-[60vw] absolute p-5">
            <i className="logo mb-10 h-[110px] w-[300px]">
              <img src={logo} alt="" />
            </i>
            <h2 className="personagem text-[white] text-[25px] mb-5 [font-family: Secular One">
              Chopper
            </h2>
            <p className="descricao ">
              Tony Tony Chopper é uma rena. Ele é o médico da tripulação dos
              Piratas do Chapéu de Palha. Chopper é uma rena que, após comer a
              Hito Hito no Mi, adquiriu a habilidade de se transformar e
              raciocinar como os humanos.Ele é o sexto membro e um dos poucos
              membros da tripulação que nasceu na Grand Line, numa ilha chamada
              Drum. Por ter sido confundido como mascote, a recompensa atual de
              sua captura é de apenas 1000 bellys. mesmo sendo considerado
              "Mascote" pela marinha, ele foi nomeado um dos comandantes do
              Luffy, sendo assim seguindo a lógica da sua recompensa o 9°
              Comandante.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
