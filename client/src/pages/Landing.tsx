import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Landing = () => {
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
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          className="text-5xl sm:text-7xl font-bold text-secondary mb-4"
        >
          ResearchGPT
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          className="text-xl sm:text-2xl text-secondary/60 mb-8 max-w-2xl"
        >
          Revolutionize your research process with AI-powered insights and
          analysis.
        </motion.p>
        <Link to="/chat">
          <motion.button
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
            className="bg-secondary text-primary font-semibold py-3 px-8 rounded-md text-lg shadow-lg hover:bg-secondary/80 transition duration-300"
          >
            Try it out
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-16 flex flex-wrap justify-center items-center gap-8"
      >
        {data.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
            className="bg-primary text-secondary p-6 rounded-lg shadow-secondary/40 shadow-[5px_5px_15px_5px]"
          >
            <div className="text-4xl mb-2">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Landing;
