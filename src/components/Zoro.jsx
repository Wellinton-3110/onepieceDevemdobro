import zoro from "../img/personagem-roronoa-zoro.png";
import logo from "../img/one-piece-logo.png";
export function Zoro() {
  return (
    <>
      <main id="main-zoro" className="hidden h-[100vh] w-[100vw] relative">
        <div>
          <img
            className="h-[100vh] w-[100%] object-cover z-0"
            src={zoro}
            alt=""
          />
          <div className="z-10 absolute top-0 left-0 h-[100vh] w-[100vw] bg-gradient-to-r from-black/70 to-black/5"></div>
          <div className="flex z-20 flex-col text-[white] top-[30%] w-[60vw] absolute p-5">
            <i className="logo mb-10 h-[110px] w-[300px]">
              <img src={logo} alt="" />
            </i>
            <h2 className="personagem text-[white] text-[25px] mb-5 [font-family: Secular One">
              Roronoa Zoro
            </h2>
            <p className="descricao ">
              também conhecido como "Caçador de Piratas" Zoro, é o combatente
              dos Piratas do Chapéu de Palha e um ex-caçador de recompensas. Ele
              foi o primeiro membro a juntar-se à tripulação. Sua fama como
              mestre espadachim e sua grande força, juntamente com as ações de
              seu capitão, às vezes levaram os outros a acreditar que ele era o
              verdadeiro capitão da tripulação antes deste obter sua primeira
              recompensa, enquanto algumas pessoas acreditam que ele seja o
              imediato.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
