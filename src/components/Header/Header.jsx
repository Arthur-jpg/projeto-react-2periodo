import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <div id="elementos">
    
      <Link to="https://www.ibmec.br/">
        <img src="imagens/logo_ibmec.png" alt="Logo ibmec"/>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/fotos">Fotos</Link>
      <Link to="/atletas">Atletas</Link>
      
      { window.sessionStorage.getItem('accessToken')
      ? <Link to="/logout">Logout</Link>
      : <Link to="/login">Login</Link>
      }
      
    </div>
  </Top>
)

export default Header;