import './assets/css/App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { Component } from 'react' ;
class App extends Component{
  render(){
    return (

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/login/signup' element={<Signup/>} />
          <Route exact path='/signup/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    );
  }
  
}

export default App;
