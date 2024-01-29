import { RouterProvider } from 'react-router-dom';
import router from './router';
import {ToastContainer} from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<>
    <RouterProvider router={router} basename='inventory'/>
    <ToastContainer/>
    </>
  );
}

export default App;
