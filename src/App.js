import "./index.css"
import "./App.css"
import "./components/Navbar"
import Navbar from "./components/Navbar";


import {Routes,Route, Outlet} from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projets from "./components/Projets";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projets" element={<Projets />} />
        <Route path="experiences" />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Outlet />

    </div>
  );
}
export default App;
