import sanji from "../img/personagem-sanji.png";
import logo from "../img/one-piece-logo.png";

export function Sanji() {
  return (
    <>
      <main id="main-sanji" className="hidden h-[100vh] w-[100vw] relative">
        <div>
          <img
            className="h-[100vh] w-[100%] object-cover z-0"
            src={sanji}
            alt=""
          />
          <div className="z-10 absolute top-0 left-0 h-[100vh] w-[100vw] bg-gradient-to-r from-black/70 to-black/5"></div>
          <div className="flex z-20 flex-col text-[white] top-[30%] w-[60vw] absolute p-5">
            <i className="logo mb-10 h-[110px] w-[300px]">
              <img src={logo} alt="" />
            </i>
            <h2 className="personagem text-[white] text-[25px] mb-5 [font-family: Secular One">
              Sanji
            </h2>
            <p className="descricao ">
              conhescido como Vinsmoke Sanji, e também é o cozinheiro dos
              Piratas do Chapéu de Palha, assim como um antigo chefe de cozinha
              do Baratie. Ele também é o terceiro filho e a quarta criança da
              Família Vinsmoke, tornando-o um príncipe do Reino Germa, até que
              ele oficialmente os renunciou duas vezes. Apesar de Sanji
              renunciar ao seu sobrenome Vinsmoke, o Governo Mundial o rotula
              como parte de seu nome em seu pôster de procurado.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
