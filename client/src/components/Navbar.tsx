import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/Logo";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useChatContext } from "../context/ChatContext";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { session, signOut } = useAuth();
  const word = session?.user.user_metadata.email[0].toUpperCase() || "?";
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { clearChat } = useChatContext();

  return (
    <nav className="h-16 px-6 w-full fixed top-0 left-0 text-white bg-primary z-10 flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center hover:cursor-pointer">
          <Logo
            primary={theme === "dark" ? "#212121" : "#f6f6f6"}
            secondary={theme === "dark" ? "#f6f6f6" : "#212121"}
            width="24"
          />
          <h1 className="text-xl ml-1 text-secondary font-semibold">
            ResearchGPT
          </h1>
        </div>
      </Link>

      <div className="flex items-center relative">
        <div
          className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <p className="text-primary font-semibold select-none">{word}</p>
        </div>

        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="absolute top-12 right-0 bg-secondary shadow-md rounded-md p-2 w-48 origin-top select-none"
          >
            <div className="flex flex-col">
              <a
                href="https://github.com/karthikeyaspace/research-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:bg-primary/10 p-2 rounded-md flex items-center transition duration-150"
              >
                Source Code
              </a>
              <button
                className="text-primary hover:bg-primary/10 p-2 rounded-md flex items-center transition duration-150"
                onClick={toggleTheme}
              >
                Toggle Theme
              </button>
              {session && (
                <>
                  <button
                    className="text-primary hover:bg-primary/10 p-2 rounded-md flex items-center transition duration-150"
                    onClick={() => {
                      clearChat();
                      setShowMenu(!showMenu);
                    }}
                  >
                    Clear Chat
                  </button>
                  <hr className="my-2 border-primary/20" />
                  <button
                    onClick={() => {
                      signOut();
                      navigate("/");
                    }}
                    className="text-red-500 hover:bg-red-500/10 p-2 rounded-md flex items-center transition duration-150"
                  >
                    Sign out
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
