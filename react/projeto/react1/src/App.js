import  React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';


//Ciclo de vida de um component



function App() {
  


  return (
    <>
      <h1>Olá caro amigo</h1>
      <SearchBox frasePadrao="faça sua busca agora ..."/>
      <SearchBox frasePadrao="Digite seu nome"/>
      <SearchBox />
      <SearchBox />
    </>
  );
    
  
}



 

export default App;


