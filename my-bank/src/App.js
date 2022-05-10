import React from "react";
import Dashboard from "./pages/home/Dashboard";
import Navbar from "./components/navbar/Navbar.component";
import Form from "./components/form/Form.component";
import Transactions from "./pages/transactions/Transactions";
import { useGlobalContext } from "./context";
import Alert from "./components/Alert/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Accounts from "./pages/accounts/Accounts";

const App = () => {
  const { alert } = useGlobalContext();
  return (
    <>
      <Router>
        <Navbar />
        {alert.show && <Alert />}
        <Routes>

          <Route index path="/" element={<Dashboard />} />
          <Route exact path="/accounts" element={<Accounts />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/accounts/create" element={<Form />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;