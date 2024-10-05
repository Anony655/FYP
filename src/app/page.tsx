'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init();
  }, []);
};

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<{ status: string; explanation: string } | null>(null);

  useAOS();

  useEffect(() => {
    // Add smooth scroll behavior with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href') as string);
        if (target) {
          const headerOffset = 100; // Adjust this value as needed
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulating API call
    setTimeout(() => {
      setPredictionResult({ status: 'normal', explanation: 'Your health indicators are within normal range.' });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-b-lg">
        <nav className="container mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-white hover:text-yellow-300 transition duration-300">
              <span className="text-yellow-300">Health</span>Predict
            </Link>
            <div className="hidden md:flex space-x-6">
              {['Home', 'Predict', 'Data', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white text-lg font-medium hover:text-yellow-300 transition duration-300 ease-in-out group"
                >
                  <span className="relative px-2 py-1 rounded-full overflow-hidden">
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button className="text-white hover:text-yellow-300 transition duration-300 rounded-full p-2 hover:bg-white hover:bg-opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-r from-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/futuristic-health-tech.jpg"
            alt="Futuristic Health Technology"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6" data-aos="fade-up">
          <h1 className="text-7xl font-black mb-6 leading-none">
            Your Future Health,<br />Predicted Today
          </h1>
          <p className="text-3xl mb-10 font-light">Unlock the secrets of your well-being with AI-powered precision.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="#prediction-section" className="bg-white text-indigo-700 px-10 py-4 rounded-full text-xl font-bold hover:bg-indigo-100 transition duration-300 transform hover:scale-105">
              Predict Your Health
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-indigo-700 transition duration-300 transform hover:scale-105">
              Explore the Science
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose HealthPredict?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md" data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Accurate Predictions</h3>
              <p>Our AI-powered model provides highly accurate health predictions based on the latest medical research.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Easy to Use</h3>
              <p>With a user-friendly interface, getting your health predictions is just a few clicks away.</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg shadow-md" data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Secure & Private</h3>
              <p>Your health data is encrypted and protected, ensuring your privacy and security at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Prediction Section */}
      <section id="prediction-section" className="py-20 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Your Personalized Health Predictions</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            </div>
            <div className="mb-6">
              <input type="number" placeholder="Age" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            </div>
            <div className="mb-6">
              <input type="number" placeholder="Heart Rate" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            </div>
            <div className="mb-6">
              <input type="text" placeholder="Blood Pressure" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              {isLoading ? 'Processing...' : 'Get Prediction'}
            </button>
          </form>
          {predictionResult && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-4">Prediction Result</h3>
              <p className={`text-lg ${predictionResult.status === 'normal' ? 'text-green-600' : 'text-red-600'}`}>
                Status: {predictionResult.status}
              </p>
              <p className="mt-2">{predictionResult.explanation}</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 px-4 mb-8" data-aos="fade-right">
              <div className="text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-2">Enter Your Data</h3>
                <p>Provide your health information securely.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8" data-aos="fade-up">
              <div className="text-center">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p>Our model analyzes your health data.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8" data-aos="fade-left">
              <div className="text-center">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Get Predictions</h3>
                <p>Receive personalized health insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-right">
              <p className="text-gray-600 mb-4">&quot;HealthPredict has been a game-changer for me. It&apos;s like having a personal health assistant!&quot;</p>
              <p className="font-semibold">- Sarah J.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
              <p className="text-gray-600 mb-4">&quot;The accuracy of the predictions is impressive. It&apos;s helped me take better care of my health.&quot;</p>
              <p className="font-semibold">- Michael R.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-left">
              <p className="text-gray-600 mb-4">&quot;Easy to use and provides valuable insights. I recommend it to all my friends and family.&quot;</p>
              <p className="font-semibold">- Emily T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
          <p className="text-xl mb-8">Join thousands of users who are already benefiting from HealthPredict&apos;s AI-powered insights.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">HealthPredict</h3>
              <p className="text-sm mb-4">AI-powered health insights</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition duration-300">
                Start Now
              </button>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Home</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">About</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Services</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="hover:text-blue-400 transition duration-300">Facebook</Link>
                <Link href="#" className="hover:text-blue-400 transition duration-300">Twitter</Link>
                <Link href="#" className="hover:text-blue-400 transition duration-300">LinkedIn</Link>
              </div>
              <p className="text-sm">&copy; 2023 HealthPredict. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
