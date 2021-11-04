import React from "react";
import { connect } from 'react-redux';

function Login(props) {

    const HandleFelipe = () => {
        props.setName('Felipe')
    }



    return(
        <div>
            <h4>Pagina login</h4>

            O nome é: {props.name}

            <br />
            <button onClick={HandleFelipe}>Trocar nome para Felipe</button>
        </div>
    );
}

const mapStateToProps = state => ({
    name: state.usuario.name
});

const mapDispatchToProps = dispatch => ({
    setName: (newName) => dispatch({
        type: 'SET_NAME',
        payload: {name: newName}
    })
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);