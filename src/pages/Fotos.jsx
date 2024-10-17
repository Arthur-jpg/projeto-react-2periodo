import { useParams } from "react-router-dom";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/computadores.json";
import Protegida from "./Protegida";

const Fotos = () => {
  const { id } = useParams();

  let dadosFiltrados;
  // filter: vai percorrer os elementos que o resultado da função seja true
  // const dadosFiltrados = id ? dados.filter((elemento) => elemento.id === parseInt(id)) : dados;
  if (id) {
    dadosFiltrados = dados.filter((elemento) => elemento.id === parseInt(id));
  } else {
    dadosFiltrados = dados;
  }
 
  return (
      
        <ListContainer>
          {dadosFiltrados.map(
            (el, index) => (
              <FotoCard 
                key={index}
                titulo={el.nome}
                src={`${process.env.PUBLIC_URL}${el.url}`}
                link_original={el.link_original}
                agradecimento={el.agradecimento}
              />
              )
          )}
        </ListContainer>
       
 )
};

export default Fotos;