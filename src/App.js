import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Router>
      <Nav />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
