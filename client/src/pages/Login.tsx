import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import Logo from "../assets/Logo";

const Login: React.FC = () => {
  const { user, loading } = useAuth();
  const { theme } = useTheme();
  const [error, setError] = React.useState<string | null>(null);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-secondary">Loading...</div>
      </div>
    );
  }

  if (user) return <Navigate to="/chat" />;

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-10">
      <div className="w-full max-w-md p-8">
        <div className="mb-12 text-center space-y-8">
          <Logo
            primary={theme === "dark" ? "#212121" : "#f6f6f6"}
            secondary={theme === "dark" ? "#f6f6f6" : "#212121"}
            width="48"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-secondary">
            Sign in to continue
          </h2>
        </div>

        {error && (
          <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">
            {error}
          </div>
        )}

        <div className="space-y-6 mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-3 px-4 flex justify-center border border-secondary/40 rounded-md bg-transparent text-sm text-secondary hover:bg-green-700 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
              <path
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                fill="red"
              />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
