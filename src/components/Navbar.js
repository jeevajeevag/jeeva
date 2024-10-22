import React from 'react';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      <h1 className="text-xl font-bold">Jeeva</h1>
      <ul className="flex space-x-8 text-gray-300 justify-center flex-1"> {/* Increased space between items */}
        <li>
          <button 
            className="border-b-2 border-transparent hover:border-red-500 transition duration-300"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
        </li>
        <li>
          <button 
            className="border-b-2 border-transparent hover:border-red-500 transition duration-300"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
        </li>
        <li>
          <button 
            className="border-b-2 border-transparent hover:border-red-500 transition duration-300"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
        </li>
        <li>
          <button 
            className="border-b-2 border-transparent hover:border-red-500 transition duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
