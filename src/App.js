// react router
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Services from './pages/Services'
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
