import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../views/Home';
import Login from '../views/Login';
import ScrollToTop from '../components/ScrollToTop/index.js';
import FourOFour from '../views/404';

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

      <Route>
       <FourOFour />
      </Route>

     </Switch>
   </Router>
 );
}