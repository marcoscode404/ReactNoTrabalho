import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";


//criando function Home
function Home(props){

    //criando variavel que pode ser alterada o valor
    let history = useHistory();

    const handleButton = () => {
        setTimeout(() => {
            history.replace('/sobre');
        }, 2000);
    };


    const handleMarcos = () => {
       props.setName('Marcos');
    };


    //aumentar o contador
    const handleIncrement = () => {
        props.increment();
    };




    return(
        <div>
            <h4>Pagina Home</h4>

            NOME: {props.name} <br /> <br />
            CONTAGEM: {props.contador}

            <br /> <br />
            <button onClick={handleMarcos}>Setar Nome para Marcos</button>
            <button onClick={handleIncrement}>+1</button>


            <br /> <br />
            <button onclick={handleButton}>Ir para a página SOBRE</button>
        </div>
    );
}



const mapStateToProps = (state) => {
    return {
        name: state.usuario.name,
        contador: state.usuario.contador
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (newName) => dispatch({
            type: 'SET_NAME',
            payload: { name:newName }
        }),
        increment: () => dispatch({
            type: 'INCREMENT_CONTADOR'
        })
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);


// export default Home;