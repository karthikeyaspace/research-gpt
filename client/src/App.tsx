import React, { ReactNode, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";


const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { session } = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!session) {
      navigate('/login');
    }
  }, [session, navigate]);

  return session ? children : null;
};


const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="dark min-h-screen bg-primary">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
