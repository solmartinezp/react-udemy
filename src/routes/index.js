import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../views/Home';
import Login from '../views/Login';
import ScrollToTop from '../components/ScrollToTop';

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
     </Switch>
   </Router>
 );
}