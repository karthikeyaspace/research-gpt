import React, { useState } from "react";
import { signIn, signUp, signInWithGoogle } from "../services/api";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/Logo.tsx";
import { useTheme } from "../context/ThemeContext.tsx";

const Login: React.FC = () => {
  const { session } = useAuth();
  if (session) return <Navigate to="/chat" />;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [login, setLogin] = useState(true);
  const {theme} = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (login) {
      const { user, error } = await signIn(formData.email, formData.password);
      if (error) setError(error.message);
      else console.log(user, "signIn data");
    } else {
      const { user, error } = await signUp(formData.email, formData.password);
      if (error) setError(error.message);
      else console.log(user);
    }
  };

  const handleGoogleSingIn = async () => {
    const { error } = await signInWithGoogle();
    if (error) setError(error.toString());
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-10">
      <div className="w-full max-w-md p-8">
        <div className="mb-12 text-center  space-y-24 ">
        <Logo
          primary={theme === "dark" ? "#212121" : "#f6f6f6"}
          secondary={theme === "dark" ? "#f6f6f6" : "#212121"}
          width="48"
        />
          <h2 className="mt-6 text-3xl font-extrabold text-secondary">
            {login ? "Welcome back" : "Create an account"}
          </h2>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-sm bg-transparent text-secondary placeholder-gray-500 focus:outline-none sm:text-sm border border-secondary/40"
            placeholder="Email address*"
            onChange={handleChange}
          />
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-3 rounded-sm bg-transparent text-secondary placeholder-gray-500 focus:outline-none sm:text-sm border border-secondary/40"
            placeholder="Password*"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-green-700 hover:bg-green-500 focus:outline-none"
          >
            Continue
          </button>
        </form>

        <div className="space-y-6 mt-6">
          <div className="text-center text-sm px-2 text-secondary/40">
            {login ? "Don't have an account?" : "Already have an account?"}
            <span
              className="text-green-600 hover:text-green-500 ml-1 hover:cursor-pointer"
              onClick={() => setLogin(!login)}
            >
              {login ? "Sign Up" : "Sign In"}
            </span>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-secondary/40"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-primary text-gray-500">OR</span>
            </div>
          </div>

          <div>
            <button
              className="w-full py-3 px-4 flex justify-center border border-secondary/40 rounded-md bg-transparent text-sm text-secondary"
              onClick={handleGoogleSingIn}
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
    </div>
  );
};

export default Login;
