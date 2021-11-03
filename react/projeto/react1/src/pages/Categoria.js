import React from "react";
import { useLocation } from 'react-router-dom';


function useQuery() {
    return new URLSearchParams( useLocation().search );
}


function Categoria() {

    let query = useQuery();

    let cat = query.get('tipo');

    return (
        <div>
            <h4>Testando categoria</h4>
            Exibindo itens da categoria: {cat}
        </div>
    );
}

export default Categoria;