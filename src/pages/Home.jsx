import { useEffect, useState } from "react";
import Base from "./Base";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/Firebase";
import ParteAzul from "../components/ParteAzul/ParteAzul";
import Cartao from "../components/Cartao/Cartao";

const Home = () => {
  const listaDeCartoes = [
    { titulo: "Projeto 1", texto: "Descrição do Projeto 1" },
    { titulo: "Projeto 2", texto: "Descrição do Projeto 2" },
    { titulo: "Projeto 3", texto: "Descrição do Projeto 3" },
    { titulo: "Projeto 4", texto: "Descrição do Projeto 4" },
  ];

  return (
    <Base>
      <ParteAzul
        name="Projeto de Alunos"
        texto="Navegue pelos projetos realizados por alunos da Instituição Brasileira de Mercados e Capitais"
      />
      {listaDeCartoes.map((item, index) => (
        <Cartao key={index} titulo={item.titulo} texto={item.texto} />
      ))}
    </Base>
  );
};

export default Home;
