import { Card } from "./card.jsx";
import * as XLSX from 'xlsx';


const CardT = () => <Card text="test" isBlack={true} />;

const Grid = ({cartas}) => (
  // give colors to the grids
  <div className="container mx-auto">
    <div className="grid grid-cols-5 gap-x-0 gap-y-0 ">
     {cartas}
    </div>
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
      const workbook = XLSX.read(binaryData, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
      setRespostas(excelData.filter((rows) => rows[1] === "Resposta (Branca)").map((rows) => rows[2]));
      setPerguntas(excelData.filter((rows) => rows[1] ==="Pergunta (Preta)").map((rows) => rows[2]));

    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    <div>
      <Grid cartas={perguntas.map((pergunta, index) => <Card key={index} text={pergunta} isBlack={true} />)} />
    </div>
      </div>
  
  );
}

export default Page;