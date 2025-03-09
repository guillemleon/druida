import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./pages/home";
import AboutContainer from "./pages/about";
import ContactContainer from "./pages/contact";
import DesignContainer from "./pages/design";
import IllustrationContainer from "./pages/illustration";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
        <Route path="/design" element={<DesignContainer />} />
        <Route path="/illustration" element={<IllustrationContainer />} />
        <Route path="*" element={<div>NOT FOUND</div>} /> {/* Page 404 */}
      </Routes>
    </Router>
  );
};

export default App;
