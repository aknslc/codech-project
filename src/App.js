// react router
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Services from './pages/Services'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
