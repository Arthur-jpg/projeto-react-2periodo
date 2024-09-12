import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Ayrton from "../components/Ayrton/Ayrton";



const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */
  

  return (
    <Base>
      <h1>
     Jogadores do Botafogo
      </h1>
      <h5>
        Esse time está atualmente em primeiro lugar no brasileirão ola
      </h5>
      <Ayrton/>
    </Base>

  )
}

export default Home