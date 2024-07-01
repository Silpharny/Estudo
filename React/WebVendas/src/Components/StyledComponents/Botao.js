import styled from "styled-components";

export const Botao = styled.button `
    background-color: #3f3d46;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 10px 15px;
    margin: 15px;
    width: ${props => props.tamanho || 200}px;
 
    &:hover {
        opacity:60%;
    }

    a {
        text-decoration: none;
        color: white;
    }
`