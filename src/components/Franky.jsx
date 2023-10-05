import franky from "../img/personagem-franky.png";
import logo from "../img/one-piece-logo.png";
export function Franky() {
  return (
    <>
      <main id="main-franky" className="hidden h-[100vh] w-[100vw] relative">
        <div>
          <img
            className="h-[100vh] w-[100%] object-cover z-0"
            src={franky}
            alt=""
          />
          <div className="z-10 absolute top-0 left-0 h-[100vh] w-[100vw] bg-gradient-to-r from-black/70 to-black/5"></div>
          <div className="flex z-20 flex-col text-[white] top-[30%] w-[60vw] absolute p-5">
            <i className="logo mb-10 h-[110px] md:h-[90px] sm:h-[70px] w-[300px] md:w-[280px] sm:w-[210px]">
              <img src={logo} alt="" />
            </i>
            <h2 className="personagem text-[white] text-[25px] mb-3 [font-family: Secular One">
              Franky
            </h2>
            <p className="descricao text-[14px] sm:h-[45vh] sm:w-[50vw] sm:text-[10px] md:text-[12px] sm:overflow-scroll">
              Franky é o carpinteiro dos Piratas do Chapéu de Palha. Ele é um
              cyborg de 36 anos de Water 7 e foi introduzido na história como o
              líder da Família Franky, um grupo de desmantelamento de navios.
              Ele foi originalmente chamado de "Cutty Flam" até trocar seu nome
              original por seu apelido a pedidos de Iceburg para esconder sua
              identidade. Franky e seus seguidores foram inicialmente
              introduzidos como antagonistas do Arco Water 7 contra os Chapéus
              de Palha até as circunstâncias forçá-los a se tornarem aliados. A
              pedido da Família Franky, Franky foi permitido se juntar aos
              Chapéu de Palha para realizar seu sonho de criar e dirigir um
              navio capaz de dar a volta ao mundo, o Thousand Sunny. Ele é o
              oitavo membro da tripulação dos Chapéus de Palha e o sétimo a se
              juntar ao bando de Luffy. Ele também é o segundo membro a ser um
              ex-antagonista (o primeiro sendo Nico Robin). Ele tem uma
              recompensa de 394,000,000 bellys. Ele é originário do South Blue,
              de onde saiu 32 anos atrás como uma criança de apenas quatro anos
              de idade. Franky ainda foi considerado pela marinha um dos 9°
              comandantes de Luffy, sendo o 6° Comandante, seguindo a lógica da
              sua recompensa.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
