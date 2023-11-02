import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="card" element={<Card />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
