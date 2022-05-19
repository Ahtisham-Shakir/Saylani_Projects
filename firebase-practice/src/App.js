import './App.css';
import Add from './components/Add';
import Read from './components/Read';
import { ToastContainer } from 'react-toastify';
import Register from './components/Register';

function App() {
  return (
    <> 
    <Add/>
    <Read/>
    <Register/>
    <ToastContainer/>
    </>
  );
}

export default App;
