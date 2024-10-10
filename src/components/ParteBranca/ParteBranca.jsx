import { Link } from "react-router-dom";
import { TopPart } from "./Style";

const ParteBranca = (props) => (
  <TopPart>
    <div id="titulo">
      <p id='tituloreal'>
        {props.name}
      </p>
      <p id='texto'>
        {props.texto}
      </p>
    </div>
    <div id='botoes'>
      <button>
        Conheça o Time
      </button>
      <button>
        Conheça o Projeto
      </button>
    </div>
  </TopPart>
)

export default ParteBranca;