import React from 'react';
import './App.css';
import View from './Components/View';
import Register from './Components/Register';
import Update from './Components/Update';
import Springboot from './Components/springboot';
import {  BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Bar from './Components/Bar'
import NavLinks from './Components/NavLiks';
import Home from './Components/Home';
import Signuppage from './Pages/Signuppage';
import Signinpage from './Pages/Signinpage';
import Viewpage from './Pages/Viewpage';
import Updatepage from './Pages/Updatepage';
import NavbarElements from './Components/NavBarElements';
import AddUser from './Components/addUser';
import Detailspage from './Pages/Detailspage';
import DetData from './Components/getData';
import All from './all';


function App() {
  return (
    <div className="App">
      <All/>
      <NavLinks/>
        <Routes>
          <Route path='/home' element = {Home}/>
          <Route path='/Signuppage' element = {Signuppage}/>
          <Route path='/signinpage' element = {<Signinpage/>}/>
          <Route path='/Viewpage' element = {<Viewpage/>}/>
          <Route path='/Updatepage/:id' element = {<Updatepage/>}/>
          <Route path='/springboot' element = {<Springboot/>}/>
          <Route path='/springboot' element = {<Springboot/>}/>
          <Route path='/AddUser' element={<AddUser />} />
          <Route path='/Detailspage/:id' element={<Detailspage />} />
        </Routes>
    </div>
  );
}

export default App;
