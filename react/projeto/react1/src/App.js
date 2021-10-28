import  React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import SearchBox from './components/SearchBox';
// importando de da pasta Components


//usando props para usar propriedades



function App() {
  
  const [searchText, setSearchText] = useState('');

  // criando const de listas
  const [list, setList] = useState([]);

  useEffect(()=>{

    // Array com 3 objetos  / done signica feito ou não feito
    setList([
      {title:'comprar o bolo', done:false},
      {title:'batata', done:true},
      {title:'comprar leite', done:false}
     
    ]);


  }, []);




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

      <hr/>

    {/* para exibir um lista com react se usa o .map */}
    <ul>
      {list.map((item, index)=>(
        <li key={index}>
          {item.done && 
            <del>{item.title}</del>  
          }
          {!item.done &&
            item.title
          }
        </li>
      ))}
    </ul>


    </>
  );
    
  
}



 

export default App;


