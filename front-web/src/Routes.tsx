import React from 'react';

/*Instalação dos npm install react-router-dom - npm install @types/react-router-dom --dev
Switch -> Junta as rotas da navegação*/ 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './pages/Home';
import Records from './pages/Records';


/*<Route path="/records"> Chamando o endpoint do back-end 
exact -> quando for exatamente a pagina home a ser carregada*/
const Routes = () => (
   <BrowserRouter>
   <Header />
     <Switch>
         <Route path="/" exact>
           <Home/>
         </Route>

         <Route path="/records"> 
           <Records />
         </Route>

     </Switch>
   </BrowserRouter>
);

export default Routes;