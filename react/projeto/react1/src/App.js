import  React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';
// importando de da pasta Components





//usando props para usar propriedades



function App() {
  
  const [searchText, setSearchText] = useState('');

  function handleSearchInput(novoTexto){
    setSearchText(novoTexto);
  }


  return (
    <>
      <h1>Lista de Trabalho!</h1>

      <SearchBox 
        frasePadrao="Faça sua Busca" 
        onChangeText={handleSearchInput}
      />

      <SearchBox 
        frasePadrao={searchText}
      />

      <hr/>

      Texto procurado: {searchText}

    </>
  );
    
  
}



 

export default App;


