import luffy from "./img/personagem-monkey-d-luffy.png";
import { Zoro } from "./components/Zoro";
import "./index.css";

function App() {
  return (
    <div className="body">
      <main>
        <div>
          <img src={luffy} alt="" />
          <div>
            <i className="logo"></i>
            <h2 className="personagem [font-family: Secular One]">Luffy</h2>
            <p className="descricao ">
              Monkey D. Luffy, também conhecido como "Luffy do Chapéu de Palha"
              e comumente como "Chapéu de Palha", é o fundador e capitão dos
              cada vez mais infames e poderosos Piratas do Chapéu de Palha, bem
              como o mais poderoso de seus melhores lutadores. Ele deseja
              encontrar o tesouro lendário deixado para trás pelo falecido Gol
              D. Roger e assim se tornar o Rei dos Piratas, o que ajudaria a
              facilitar um sonho desconhecido dele que ele contou apenas para
              Shanks, seus irmãos e tripulação. Ele acredita que ser o Rei dos
              Piratas significa ter a maior liberdade do mundo.
            </p>
          </div>
        </div>
      </main>
      <Zoro />
      <ul className="Botoes"></ul>
    </div>
  );
}

export default App;
