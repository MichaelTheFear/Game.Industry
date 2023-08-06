import React from "react";

const Page = () => (
  <div>
    Criador de cartas do Card Agaisnt Humanity, como usar:
    <ol>
        <li>
        Crie um arquivo de Excel com a segunda coluna sendo o tipo da carta escrito exatamente assim: <br />
        <span>Pergunta (Preta)</span> ou <span>Resposta (Branca)</span> <br />
        <span>Se não estiver escrito exatamente assim não irá funcionar</span>
        E a terceira coluna sendo o texto da carta
        </li>
      <li>Abra o arquivo de cartas do CAH no excel</li>
      <li>
        Clique com o botão direito do mouse e clique em IMPRIMIR
        <span> Se você utilizar o salvar em pdf não irá funcionar</span> Para
        salvar em pdf é só escolher a opção de salvar em pdf quando clicar em
        imprimir
      </li>

    </ol>
  </div>
);

export default Page;
