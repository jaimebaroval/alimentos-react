import React from 'react';

/* RRD Components */
import { Switch, Route } from 'react-router-dom'

/* Style CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

/* UI Components */
import NavBar from "./components/ui/navbar/Navbar"

/* Pages */
import IndexPage from './components/pages/index/IndexPage'
import FoodsIndex from './components/pages/foods-index/FoodsIndex'


const App = () => {
   return (

      <>

         <NavBar></NavBar>
         <Switch>
            <Route path="/" exact component={IndexPage}></Route>
            <Route path="/alimentos" exact component={FoodsIndex}></Route>
         </Switch>

      </>


   );
}

export default App;