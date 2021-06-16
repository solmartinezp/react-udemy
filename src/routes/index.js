import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../views/Home';
import Login from '../views/Login';
import ScrollToTop from '../components/ScrollToTop/index.js';
import FourOFour from '../views/404';
import Checkout from '../views/Checkout';
import SuccessfulTransaction from "../views/SuccesfulTransaction";

export default function Routes() {
 return (
   <Router>
    <ScrollToTop />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/checkout">
        <Checkout />
      </Route>

      <Route path="/successful_transaction">
        <SuccessfulTransaction />
      </Route>

      <Route>
       <FourOFour />
      </Route>

     </Switch>
   </Router>
 );
}