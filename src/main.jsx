import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './assets/css/index.css'
import App from './App.jsx'
import Header from "./Header.jsx";
import Contact from './Contact.jsx';
import Categories from './Categories.jsx';
import Produits from './Produits.jsx';
import Notfound from "./Notfound.jsx";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<App />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
