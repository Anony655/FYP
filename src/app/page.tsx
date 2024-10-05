"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHeartbeat, FaInfoCircle } from 'react-icons/fa';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const audioRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleStartPrediction = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-center">
          <motion.h1
            variants={textVariants}
            className="text-7xl font-extrabold mb-6 text-white drop-shadow-lg"
          >
            Predict Your Health Journey
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-2xl mb-12 text-white font-semibold"
          >
            Explore Your Health, Discover Insights, Become Your Best Self!
          </motion.p>
        </div>
        <motion.div
          variants={textVariants}
          className="flex space-x-6"
        >
          <button
            onClick={handleStartPrediction}
            className="px-10 py-4 font-bold text-lg rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center"
          >
            <FaHeartbeat className="mr-2" /> Start Prediction
          </button>
          <button className="px-10 py-4 font-bold text-lg rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 transition duration-300 transform hover:scale-105 shadow-lg flex items-center">
            <FaInfoCircle className="mr-2" /> Learn More
          </button>
        </motion.div>
      </motion.div>
      <audio ref={audioRef} src="/path-to-your-health-ambience.mp3" />
    </div>
  );
}
