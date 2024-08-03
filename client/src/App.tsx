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
import NotFound from "./pages/NotFound";

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
  const isNotLanding = pathname === "/login" || pathname === "/chat";
  const { theme } = useTheme();

  return (
    <div className={`${theme} min-h-screen bg-primary`}>
      {isNotLanding && <Navbar />}
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
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
