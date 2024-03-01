
//Declare o estilo do fomulário aqui

import styled from "styled-components";

export const Botao = styled.button`
    background-color: darkorange;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 10px;

    &:hover{
        cursor: pointer;
        background-color: white;
        color: darkorange;
    }
`