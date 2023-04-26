import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import Projects from './pages/Projects/Projects'
import TechStack from './pages/TechStack/TechStack'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/techstack" element={<TechStack/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
