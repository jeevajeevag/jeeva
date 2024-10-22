import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import waveAnimation from '../Assets/Animation - 1728762071473.json'; // Ensure this path is correct

const Experience = () => {
  const waveContainer = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: waveContainer.current, // Container for the wave animation
      animationData: waveAnimation, // Your wave animation data
      renderer: 'svg',
      loop: true, // Loop the animation
      autoplay: true, // Autoplay the animation
    });

    return () => {
      animation.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <section id="experience" className="relative min-h-screen bg-black text-white flex flex-col justify-start items-start p-12 overflow-hidden">
      
      {/* Background Wave Animation */}
      <div ref={waveContainer} className="absolute top-0 left-0 w-full h-full z-0 opacity-40"></div> {/* Adjust opacity as needed */}
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto"> {/* Restricting content to a max width */}
        <h2 className="text-4xl font-bold mb-6 text-red-500">Work Experience</h2>
        <p className="text-xl max-w-2xl mb-4">
          Software Developer | Freightify | Sept 2022 - Nov 2023
        </p>

        {/* Description Box */}
        <div className="border-2 border-transparent bg-gray-800 p-4 rounded-lg mb-4 w-full max-w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <p className='text-xl'>Description:</p>
          <ul className="list-disc text-left ml-6 mt-4 text-gray-400 space-y-2">
            <li>Conducted CRUD (Create, Retrieve, Update, Delete) operations.</li>
            <li>Managed data operations, including insertion, retrieval, modification, and deletion.</li>
            <li>Developed user interfaces using React for creating, updating, and deleting both single and multiple records with bulk delete capabilities.</li>
            <li>Implemented responsive designs using CSS and HTML for optimal user experiences.</li>
            <li>Utilized TypeScript for improved code maintainability and error checking.</li>
          </ul>
        </div>

        {/* Technologies Box */}
        <div className="border-2 border-transparent bg-gray-800 p-4 rounded-lg mb-4 w-full max-w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-red-500">Technologies</h2>
          <p className="text-xl">
            Front-end: React, HTML, CSS, TypeScript, TailwindCSS, Material UI
          </p>
        </div>

        {/* Frontend Developer Box */}
        <div className="border-2 border-transparent bg-gray-800 p-4 rounded-lg mb-4 w-full max-w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-red-500">Frontend Developer</h2>
          <ul className="list-disc text-left ml-6 mt-4 text-gray-400 space-y-2">
            <li>Utilized HTML, CSS, JavaScript, and React to create fully developed user interfaces.</li>
            <li>Demonstrated in-depth knowledge of React for building interactive and dynamic user interfaces.</li>
            <li>Worked with both Amazon DynamoDB and SQL databases to connect to the backend.</li>
            <li>Developed backend functionality using Node.js with TypeScript.</li>
          </ul>
        </div>

        {/* Additional Responsibilities and Achievements Box */}
        <div className="border-2 border-transparent bg-gray-800 p-4 rounded-lg mb-4 w-full max-w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-red-500">Additional Responsibilities and Achievements</h2>
          <ul className="list-disc text-left ml-6 mt-4 text-gray-400 space-y-2">
            <li>Developed and maintained RESTful APIs to support front-end functionalities.</li>
            <li>Implemented authentication and authorization using JWT and OAuth.</li>
            <li>Conducted unit and integration testing to ensure code quality and reliability.</li>
            <li>Collaborated with designers and product managers to deliver seamless user experiences.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
