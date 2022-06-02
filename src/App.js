import "./index.css"
import "./App.css"
import "./components/Navbar"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import {Routes,Route, Outlet} from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projets from "./components/Projets";
import Experiences from "./components/Experiences";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="portfolio" element={<Home />} />
        <Route path="projets" element={<Projets />} />
        <Route path="experiences" element={<Experiences />}/>
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Outlet />
      <Footer />

    </div>
  );
}
export default App;
