import './App.css';
import Home from './pages/home/home';
import { Routes, Route } from "react-router-dom";
import Categoreis from './pages/categoreis/categoreis';
import AboutUs from './pages/aboutUs/aboutUs';
import { useState } from 'react';
import Language from './pages/language/language';


function App() {

  const [lang, setLang] = useState(JSON.parse(window.localStorage.getItem('lang')) || 'UZ')
  return (
    <>
       <Routes>
        <Route path="/" element={<Home  lang={lang}/>} />
        <Route path="/categoreis" element={<Categoreis lang={lang} />} />
        <Route path="/aboutUS" element={<AboutUs  lang={lang}/>} />
        <Route path="/languages" element={<Language lang={lang} setLang={ setLang} />} />
      </Routes>
    
    </>
  )
}

export default App;
