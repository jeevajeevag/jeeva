import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import paperRocketAnimation from '../Assets/Animation - 1728840140560.json'; // Ensure the path is correct

const Projects = () => {
  const lottieContainer = useRef(null);

  // Load Lottie animation
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: lottieContainer.current, // Container for the animation
      animationData: paperRocketAnimation, // Paper rocket animation data
      renderer: 'svg',
      loop: true, // Loop the animation
      autoplay: true, // Autoplay the animation
    });

    return () => {
      animation.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-black text-white flex flex-col md:flex-row justify-between items-start p-12">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-6 text-red-500">Projects</h2>
      
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <ul className="list-disc text-left ml-6 mt-4">
            <li>
              <span className="text-red-500 font-bold">Project 1</span> - React-based dashboard
            </li>
            <li>
              I am currently building my portfolio using React and Tailwind CSS, incorporating interactive animations powered by Lottie
            </li>
            <li>
              <span className="text-red-500 font-bold">Project 2</span> - Gemini AI API Integration:
              <ul className="list-disc ml-6 mt-2">
                <li>Developed a real-time Q&A system using the Gemini AI API</li>
                <li>Automatically generates answers to user queries using AI models</li>
                <li>Handled seamless integration with React for dynamic input/output</li>
              </ul>
            </li>
            <li>
              <span className="text-red-500 font-bold">Project 3</span> - Web scraping tool using Puppeteer:
              <ul className="list-disc ml-6 mt-2">
                <li>Developed a web scraping tool that extracts data from various websites, including Wikipedia</li>
                <li>Implemented features for dynamic content loading and handling complex web structures</li>
                <li>Utilized Puppeteer for automating the web scraping process, ensuring efficiency and accuracy</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side: Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div ref={lottieContainer} className="w-96 h-96"></div> {/* Adjust size as needed */}
      </div>
    </section>
  );
};

export default Projects;
