import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BidPage from "./components/pages/BidPage";

export default function App() {
  return (
    <Router>
      <div className="w-full h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bid/:bidNumber" element={<BidPage />} />
        </Routes>
      </div>
    </Router>
  );
}
