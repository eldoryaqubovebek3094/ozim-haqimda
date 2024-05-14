import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Servis from "./components/Servis";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/" className="logo">
          EwEb
        </Link>
        <header>
          <h1> O'zim Haqimda</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/servis">Servises</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servis" element={<Servis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
