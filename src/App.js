import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Donate } from './pages/donate/donate';
import { Home } from './pages/home/home';
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <div className="App">
      <Header />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/donate" element={<Donate />}/>
          </Routes>
        </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
