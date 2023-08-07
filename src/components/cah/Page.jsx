import React from "react";
// css class for width can
const Page = () => (
  <div className="flex justify-center items-center h-screen bg-slate-950 text-white">
    <div className="w-1/3">
      Criador de cartas do Card Agaisnt Humanity, <br />
      <span className="text-red-600">LEIA ATENTAMENTE AS INSTRUÇÕES</span>
      <br />
      <ol>
        <li>
          Crie um arquivo de Excel com a{" "}
          <span className="text-yellow-300">SEGUNDA </span>
          coluna sendo o tipo da carta escrito{" "}
          <span className="text-red-600">EXATAMENTE</span> assim:
          <br />
          <br />
          <span>Pergunta (Preta)</span> ou <span>Resposta (Branca)</span> <br />
          <br />
          <span className="text-red-600">
            Se não estiver escrito exatamente assim não irá funcionar
          </span>
          <br />
          <br />
          <span className="text-blue-400">
            E a terceira coluna sendo o texto da carta
          </span>
          <br />
          <br />
        </li>
        <li className="text-green-600">
          {" "}
          Passo 1: Abra o arquivo de cartas do CAH no excel
        </li>
        <br />
        <li className="text-purple-600">
          Passo 2: Clique com o botão direito do mouse e clique em IMPRIMIR
          <span className="text-red-600">
            {" "}
            Se você utilizar o salvar em pdf não irá funcionar
          </span>{" "}
          Para efetivamente salvar em pdf é só escolher a opção de salvar em pdf
          quando clicar em imprimir
        </li>
      </ol>
      <br />
      <br />
      <div className="flex justify-center items-center">
      <div className="flex justify-center items-center bg-white hover:bg-slate-950 text-black hover:text-white transition-colors duration-300 shadow-md rounded-lg text-3xl w-1/2 h-16">
        <a href="/cah/card-creator">Simbora</a>
      </div>
      </div>
    </div>
  </div>
);

export default Page;
