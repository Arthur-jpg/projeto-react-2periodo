import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: white;
  display: flex;
  flex-direction: row;
  margin: 0;
  border-radius: 10px;
  a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    background-color: var(--background);
    text-decoration: none;
    font-weight: bold;
    color: var(--detalhe);
    text-transform: uppercase;
    /*border-radius: .3em;*/
    &:hover{
      background-color: rgb(50,50,50);
      color: rgb(255, 255, 255);
    }
  }
  img {
    width: 30px
  }
`

export {Top}