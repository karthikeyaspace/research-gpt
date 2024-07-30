import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="dark min-h-screen bg-primary">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
