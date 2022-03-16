import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './componentes/Menu';
import Home from './componentes/Home';
import Marca from './componentes/marca/Marca';
import Moto from './componentes/moto/Moto';

function App() {
  return (
    <Router>
        <Menu/>
        <Switch>
            <Route exact path="/" render={Home} />
            <Route exact path="/marcas" render={ () => 
              <Marca/>
            } />
            <Route exact path="/motos" render={ () => 
              <Moto/>
            } />            
        </Switch>
    </Router>
  );
}

export default App;
