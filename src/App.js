import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { adminRoutes, clientRoutes } from './routes';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
//import Header from './components/Header/Header';
import ProtectedRoutes from './routes/Auth/protectedRoutes.js';

const Header = React.lazy(() => import('./components/Header/Header'));


function App() {
  return (
    <div className="App">
      <h3>Nagad Project setup</h3>    
      <Router>
      <Suspense fallback={<div>Loading</div>}>
				<Header />
			</Suspense>
        <hr />
        <Routes>
        <Route exact path="/home" element={<ProtectedRoutes Component = {Home}/>}/>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/about" element={<About/>} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
