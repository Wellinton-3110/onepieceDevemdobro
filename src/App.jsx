import logo from "./img/one-piece-logo.png";
import luffy from "./img/personagem-monkey-d-luffy.png";
import Tluffy from "./img/tripulacao-luffy.png";
import Tzoro from "./img/tripulacao-zoro.png";
import Tsanji from "./img/tripulacao-sanji.png";
import Tnami from "./img/tripulacao-nami.png";
import Tchopper from "./img/tripulacao-chopper.png";

import { Zoro } from "./components/Zoro";
import { Sanji } from "./components/Sanji";
import { Nami } from "./components/Nami";
import { Button } from "./components/Button";

import "./index.css";
import {
  showLuffy,
  showZoro,
  showSanji,
  showNami,
  showChopper,
} from "./functions/show";
import { Chopper } from "./components/Chopper";

function App() {
  return (
    <div className="body">
      <main id="luffy" className="luffy h-[100vh] w-[100vw] relative">
        <div className="">
          <img
            className="h-[100vh] w-[100%] object-cover z-0"
            src={luffy}
            alt=""
          />
          <div className="z-10 absolute top-0 left-0 h-[100vh] w-[100vw] bg-gradient-to-r from-black/70 to-black/5"></div>

          <div className="flex z-20 flex-col text-[white] top-[30%] w-[60vw] absolute p-5">
            <i className="logo mb-10 h-[110px] w-[300px]">
              <img src={logo} alt="" />
            </i>
            <h2 className="personagem text-[white] text-[25px] mb-5 [font-family: Secular One]">
              Monkey D. Luffy
            </h2>
            <p className="descricao ">
              também conhecido como "Luffy do Chapéu de Palha" e comumente como
              "Chapéu de Palha", é o fundador e capitão dos cada vez mais
              infames e poderosos Piratas do Chapéu de Palha, bem como o mais
              poderoso de seus melhores lutadores. Ele deseja encontrar o
              tesouro lendário deixado para trás pelo falecido Gol D. Roger e
              assim se tornar o Rei dos Piratas, o que ajudaria a facilitar um
              sonho desconhecido dele que ele contou apenas para Shanks, seus
              irmãos e tripulação. Ele acredita que ser o Rei dos Piratas
              significa ter a maior liberdade do mundo.
            </p>
          </div>
        </div>
      </main>
      <Zoro />
      <Sanji />
      <Nami />
      <Chopper />

      <ul className="Botoes w-[100px] z-20 flex flex-col items-center justify-center p-2 h-[100vh] top-0 right-0 fixed bg-black/50">
        <Button show={showLuffy} tripulacao={Tluffy} />

        <Button show={showZoro} tripulacao={Tzoro} />
        <Button show={showSanji} tripulacao={Tsanji} />
        <Button show={showNami} tripulacao={Tnami} />
        <Button show={showChopper} tripulacao={Tchopper} />
      </ul>
    </div>
  );
}

export default App;
