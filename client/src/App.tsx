import React, { ReactNode, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { session } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!session) {
      navigate("/login");
    } else setLoading(false);
  }, [session, navigate]);

  if (loading) return <div>Loading..........</div>;

  return session ? children : null;
};

const AppContent: React.FC = () => {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme} min-h-screen bg-primary`}>
      {!isLanding && <Navbar />}
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
      
      <div className="fixed bottom-0 right-0 ">
        <button
          onClick={toggleTheme}
          className="bg-primary border border-secondary/40 p-2 rounded-full m-4"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
