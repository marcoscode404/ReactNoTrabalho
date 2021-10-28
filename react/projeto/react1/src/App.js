import  React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';
// importando de da pasta Components


//usando props para usar propriedades



function App() {
  
const Container =  styled.div`
    margin:0 2px 5px;
    padding: 10px;
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);

    height: 250px;


`;





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


  function addAction(newItem) {
    //atribui valor
    let newList = [ ...list];
    newList.push( {title:newItem, done:false} );
    setList(newList);
  }

// marcando item como feito
  function hangleToggleDone(index) {
    // cria um array com uma nova lista 
    let newList = [ ...list ];
    // inverte o valor da lista de true para false
    newList[index].done = !newList[index].done;
    // salva a nova lista
    setList(newList);
  }



  return (
    <>
      <Container>
        <h1>Lista de Trabalho!</h1>
      </Container>

      <SearchBox 
        frasePadrao="Adicione na lista" 
        onEnter={addAction}
      />

      <hr/>

    {/* para exibir um lista com react se usa o .map */}
    <ul>
      {list.map((item, index)=>(
        <li key={index} onClick={()=>hangleToggleDone(index)}>
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


