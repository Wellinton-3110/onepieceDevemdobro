import nami from "../img/personagem-nami.png";
import logo from "../img/one-piece-logo.png";
import "../styles/nami.css";
export function Nami() {
  return (
    <>
      <main id="main-nami" className="hidden h-[100vh] w-[100vw] relative">
        <div>
          <img
            className="nami h-[100vh] w-[100%] object-cover z-0"
            src={nami}
            alt=""
          />
          <div className="z-10 absolute top-0 left-0 h-[100vh] w-[100vw] bg-gradient-to-r from-black/70 to-black/5"></div>
          <div className="flex z-20 flex-col text-[white] top-[30%] w-[60vw] absolute p-5">
            <i className="logo mb-10 h-[110px] md:h-[90px] sm:h-[70px] w-[300px] md:w-[280px] sm:w-[210px]">
              <img src={logo} alt="" />
            </i>
            <h2 className="personagem text-[white] text-[25px] mb-5 [font-family: Secular One">
              Nami
            </h2>
            <p className="descricao sm:text-[10px] md:text-[13px]">
              é a navegadora dos Piratas do Chapéu de Palha. Ela foi o terceiro
              membro da tripulação e a segunda a entrar, fazendo-o durante o
              Arco Orange Town. Ela é a irmã adotiva de Nojiko, desde que as
              duas ficaram órfãs e foram levadas por Bell-mère.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
