
import './App.css';
import { Route,Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from './pages/Home.jsx';
import Profile from './pages/Profie.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Warehouse from './components/Warehouse.jsx';
import { UserProvider } from './UserContext.jsx'
import axios from "axios";

axios.defaults.baseURL="https://warehouse-jc24.onrender.com";
axios.defaults.withCredentials= true;
axios.defaults.headers['SameSite'] = 'None';

function App() {
  return (
    <UserProvider>
    <div id='root'>
    
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/profile" element={<Profile />} />
            <Route path = "/warehouse" element={<Warehouse/>} />
            <Route index element={<Home/>} />
          </Route>
        </Routes> 
       
    </div>
    </UserProvider>
  );
}

export default App;
