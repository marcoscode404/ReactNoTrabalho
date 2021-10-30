import React, { useState, useEffect } from "react";
import styled from "styled-components";


// usando o styled components
const InputText = styled.input`
    border:2px solid   rgba(9,111,224,1);
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width: 93%;
  
`;




function SearchBox(props) {

    // Criando const useState
    const [texto, setTexto] = useState('');

    function handleKeyUp(e) {
        if(e.keyCode == 13) {
            if(props.onEnter) {
                props.onEnter( texto );
            }
            setTexto('');
        }
    }

    return (
        <InputText 
            type="text"
            value={texto}
            onChange={(e)=>setTexto(e.target.value)}
            onKeyUp={handleKeyUp} 
            placeholder={props.frasePadrao ?? "Digite alguma coisa"}
        />
    );
}



export default SearchBox;

