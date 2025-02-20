// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import React from 'react'
import './App.css'
// import './'
function App() {
  return (
    <div>
     <Router>
     
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/navbar' element={<Navbar />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
