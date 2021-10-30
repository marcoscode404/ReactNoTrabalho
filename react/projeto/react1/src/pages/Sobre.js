import React from "react";
import styled from "styled-components";

const DivSobre = styled.div`
    background: #ccc;
    width: 100%;
    height: 550px;
    

`;



function Sobre() {
    return(
        <DivSobre>
            <h4>Página Sobre</h4>
            <p>testando 123</p>
        </DivSobre>
    );
}

export default Sobre;