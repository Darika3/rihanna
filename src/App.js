import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Career from './components/Career';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fenty from './components/Fenty';
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/career' element={<Career />} />
        <Route path='/fenty' element={<Fenty />}/>
      </Routes>
    
    </BrowserRouter>
     </div>
  )
}

export default App