import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  const data = [
    { icon: "🚀", title: "Fast", description: "Get results in seconds" },
    {
      icon: "🧠",
      title: "Intelligent",
      description: "Powered by advanced AI",
    },
    {
      icon: "📚",
      title: "Comprehensive",
      description: "Access vast knowledge",
    },
  ];
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-5xl sm:text-7xl font-bold text-secondary mb-4">
          ResearchGPT
        </h1>
        <p className="text-xl sm:text-2xl text-secondary/60 mb-8 max-w-2xl">
          Revolutionize your research process with AI-powered insights and
          analysis.
        </p>
        <Link to="/login">
          <button className="bg-secondary text-primary font-semibold py-3 px-8 rounded-md text-lg shadow-lg hover:bg-secondary/80 transition duration-300">
            Try it out
          </button>
        </Link>
      </div>

      <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
        {data.map((feature, index) => (
          <div
            key={index}
            className="bg-primary text-secondary p-6 rounded-lg shadow-secondary/40 shadow-[5px_5px_15px_5px]"
          >
            <div className="text-4xl mb-2">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
