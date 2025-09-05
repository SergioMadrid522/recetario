import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

/* Routes */
import SubirPlatillo from "./admin/components/SubirPlatillo/SubirPlatillo";

function App() {
  return (
    <Router>
      <AppContent/>
    </Router>
  )
}

function AppContent() {
  return (
    <>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/recetario" element={<Main/>} />
          <Route path="/subir-platillo" element={<SubirPlatillo/>} />
        </Routes>
      <Footer/>
    </>
  )
}
export default App;
