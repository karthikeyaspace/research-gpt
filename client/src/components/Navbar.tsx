import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <nav className="h-16 w-full fixed top-0 left-0 bg-primary text-white z-10 flex justify-between">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        ai
      </div>
      <button className="bg-red-800 px-4 hover:bg-red-900" onClick={signOut}>
        signout
      </button>
    </nav>
  );
};

export default Navbar;
