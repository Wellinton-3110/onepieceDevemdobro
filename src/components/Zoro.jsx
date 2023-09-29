import zoro from "../img/personagem-roronoa-zoro.png";

export function Zoro() {
  return (
    <>
      <main>
        <div>
          <img src={zoro} alt="" />
          <div>
            <i className="logo"></i>
            <h2 className="personagem">Zoro</h2>
            <p className="descricao ">
              Roronoa Zoro, também conhecido como "Caçador de Piratas" Zoro, é o
              combatente dos Piratas do Chapéu de Palha e um ex-caçador de
              recompensas. Ele foi o primeiro membro a juntar-se à tripulação.
              Sua fama como mestre espadachim e sua grande força, juntamente com
              as ações de seu capitão, às vezes levaram os outros a acreditar
              que ele era o verdadeiro capitão da tripulação antes deste obter
              sua primeira recompensa, enquanto algumas pessoas acreditam que
              ele seja o imediato.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
