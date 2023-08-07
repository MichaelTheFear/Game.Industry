import React, { useState } from "react";
import { Card } from "./card.jsx";
import * as XLSX from "xlsx";

const Grid = ({ cartas }) => (
  // give colors to the grids
  <div className="container mx-auto">
    <div className="grid grid-cols-5 gap-x-0 gap-y-0 ">{cartas}</div>
  </div>
);

function Page() {
  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryData = e.target.result;
      const workbook = XLSX.read(binaryData, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setRespostas(
        excelData
          .filter((rows) => rows[1] === "Resposta (Branca)")
          .map((rows) => rows[2])
      );
      setPerguntas(
        excelData
          .filter((rows) => rows[1] === "Pergunta (Preta)")
          .map((rows) => rows[2])
      );
    };

    reader.readAsBinaryString(file);
  };
  //class for padding on cards: "p-2"

  const cartas = [
    ...perguntas.map((pergunta, index) => (
      <Card key={index} text={pergunta} isBlack={true} />
    )),
    ...respostas.map((resposta, index) => (
      <Card key={index} text={resposta} isBlack={false} />
    )),
  ];
  return (
    <div>
      <div
        className={
          perguntas.lenght === 0 || respostas.length === 0
            ? "flex justify-center items-center h-screen bg-black text-white"
            : "hidden"
        }
      >
        <div>
          <div className="text-red-600 p-5">
            Caso não tenha lido a pagina anterior, volte e leia as instruções
          </div>
          <div className="flex justify-center items-center">

          <label
            htmlFor="fileInput"
            className=" block bg-slate-950 hover:bg-violet-950 text-white py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer text-center w-1/2"
            >
            Choose a File
          </label>
            <input onChange={handleFileUpload}
              type="file"
              id="fileInput"
              className="hidden"
            />
            </div>
        </div>
      </div>
      <div>
        <Grid cartas={cartas} />
      </div>
    </div>
  );
}

export default Page;
