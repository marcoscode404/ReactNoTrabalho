import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from "./pages/Login";

// verifica se a pessoa está logada ou não
const isLogged = false;

// rest => resto
const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route { ...rest}>
            {isLogged ? children : <Redirect to="/login" />}
        </Route>
    );
};


function App() {
    return (
        <BrowserRouter>
            <header>
                <h1>
                    Meu site ....
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>




                        <li>
                            <Link to="/teste">Viagem</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            {/* /header --> criando os links */}
            <hr/>

           <Switch>

               {/* só apareça a tela home se eu botar a tela exata */}
                <Route exact path="/">
                    <Home/>
                </Route>

                {/* fazendo rota não ser acessivel se o usuario não estiver logado */}
                <PrivateRoute path="/sobre">
                    <Sobre />
                </PrivateRoute>


                {/* ultima rota padrão é usado o * para dizer que aceita tudo que for inserido na url */}
                <Route path="*">
                    <h4>Página não encontrada</h4>
                </Route>


           </Switch>
            {/* criando as rotas */}

            <hr />

            <footer>
                todos os direitos reservados ...
            </footer>



        </BrowserRouter>
    );
}

export default App;