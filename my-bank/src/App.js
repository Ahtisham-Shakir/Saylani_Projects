import React from "react";
import Dashboard from "./pages/home/Dashboard";
import Navbar from "./components/navbar/Navbar.component";
import Form from "./components/form/Form.component";
import Transactions from "./pages/transactions/Transactions";
import { useGlobalContext } from "./context";
import Alert from "./components/Alert/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const {alert} = useGlobalContext();
  return (
    <>
      <Router>
        <Navbar />
        {alert.show && <Alert/> }
        <Switch>
          <Route exact path="/"> <Dashboard /> </Route>
          <Route path="/transactions"> <Transactions/> </Route>
          <Route path="/accounts/create"> <Form/> </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;