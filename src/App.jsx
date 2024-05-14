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
        <nav>
          {" "}
          <Link to="/" className="logo">
            <img src="./img/EwEb-Dev.png" alt="rasm" />
          </Link>
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
