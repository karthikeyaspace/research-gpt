import React, { ReactNode, Suspense, useEffect } from "react";
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
import { ChatProvider } from "./context/ChatContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-secondary">Loading...</div>
      </div>
    );
  }

  return user ? children : null;
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
        <ChatProvider>
          <Router>
            <AppContent />
          </Router>
        </ChatProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
