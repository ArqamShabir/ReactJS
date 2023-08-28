import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './components/Contact';
import ContactHeader from './components/ContactHeader';
import Navigation from './components/Navigation';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <Contact/>
      </main>
  </React.StrictMode>
)
