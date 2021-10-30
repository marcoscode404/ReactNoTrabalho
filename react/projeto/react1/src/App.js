import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

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

                <Route path="/sobre">
                    <Sobre />
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