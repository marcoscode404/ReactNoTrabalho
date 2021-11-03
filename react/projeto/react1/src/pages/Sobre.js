import React from "react";
import styled from "styled-components";

const DivSobre = styled.div`
    background: #ccc;
    width: 100%;
    height: 550px;
    
    color: #000000;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const titulo = styled.h1`

`;




function Sobre() {
    return(
        <DivSobre>
            <h1>pagina sobre</h1>
            <p>testando 123</p>
        </DivSobre>
    );
}

export default Sobre;