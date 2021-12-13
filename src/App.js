import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Exemples from "./Pages/Exemples";
import Home from "./Pages/Home";
import About from "./Pages/About";
import GOT from "./Pages/GOT";
import Blagounette from "./Pages/Blagounette";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exemples" element={<Exemples />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/got" element={<GOT />} />
                    <Route path="/joke" element={<Blagounette/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
