import styled from "styled-components"

const TopPart = styled.header `
  background-color: rgb(0, 37, 85);
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  #topnav {
    margin-top: 20px;
    display: flex;
    justify-content: center;

  }
  #titulo {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
  }
  p {
    color: white;
    font-size: 11px;
  }
  input {
    border-radius: 7px;
  }

`


export {TopPart}