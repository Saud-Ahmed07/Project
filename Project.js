import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/navbar';
import { useEffect, useState } from 'react';
 
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom"
import Loginbox from './loginbox';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Link to="/Login">Click Here To Login</Link>}/>
        <Route path="/" element={<div>
          <Outlet/>
          </div>}>
          <Route path="Login" element={<Loginbox/>}/>
          <Route path="Sign-Up" element={<CreateAccount/>}/>
        </Route>
        <Route path="/SignedIn" element={<div className="LoggedIn"> Logged In Successfully </div>}/>
        <Route path="/SignedUp" element={<div className="SignedUp"> Thank You For Creating An Account </div>}/>
      </Routes>
    </Router>
    </>
  );
}


export default App