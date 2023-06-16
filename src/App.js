import './App.css';
import Login from './Login';
//import AdminHome from './Admin/AdminHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './User/Homepage';
import Register from './Register';
import AdminUserPage from './Admin/AdminUserPage';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/AdminUserPage' element={<AdminUserPage/>}/>
      <Route path='/homepage' element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
