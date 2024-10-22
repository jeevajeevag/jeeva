import React, { useEffect, useState, useRef } from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import profileImage from '../Assets/file (4).png'; // Import your image here
import Lottie from 'lottie-web';
import loadingAnimation from '../Assets/Animation - 1728762071473.json'; // Import your animation JSON

const About = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lottieContainer = useRef(null); // Create a ref for the Lottie container

  // Array containing the same image repeated four times
  const images = [profileImage, profileImage, profileImage, profileImage];

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setIsTextVisible(true);
    }, 100); // Delay for text animation

    return () => {
      clearTimeout(textTimer);
    };
  }, []);

  // Set up auto-slide for the image every 3 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through the images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(slideTimer); // Cleanup interval on component unmount
  }, [images.length]);

  // Lottie animation setup
  useEffect(() => {
    if (lottieContainer.current) {
      Lottie.loadAnimation({
        container: lottieContainer.current, // The DOM element where the animation will be rendered
        animationData: loadingAnimation, // The animation JSON data
        renderer: 'svg', // Render type
        loop: true, // Should the animation loop
        autoplay: true, // Should the animation start automatically
      });
    }

    return () => {
      Lottie.destroy(); // Cleanup the Lottie animation on component unmount
    };
  }, []);

  return (
    <section id="about" className="relative bg-black text-white min-h-screen flex flex-col md:flex-row items-center">
      {/* Blurred background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/path-to-your-image.png"  // Replace with your background image path
          alt="hero-background" 
          className="w-full h-full object-cover blur-lg opacity-50"
        />
      </div>

      {/* Lottie animation container positioned on the top-right */}
      <div ref={lottieContainer} className="absolute top-0 right-0 w-48 h-48 p-4"></div>

      {/* Content on the left */}
      <div className="relative z-10 max-w-5xl w-full md:w-1/2 p-4 md:p-10 text-left">
        <h1 className={`text-5xl font-extrabold tracking-wide transition-opacity duration-1000 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
          Hi, I'm Jeeva,
        </h1>
        <p className={`text-lg mt-6 text-gray-400 transition-opacity duration-1000 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
          "A software developer with 1 year of Internship experience in scalable website and application development, proficient in both front-end and back-end skills. Demonstrates strong interpersonal skills, innovation, and openness to new ideas."
        </p>
        <div className="mt-8 flex space-x-4">
          {/* GitHub icon linking to your GitHub profile */}
          <a 
            href="https://github.com/your-github-profile" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub size={30} />
          </a>
          <button className="border border-red-600 text-red-600 px-6 py-2 rounded-lg font-bold" aria-label="Get more info about Jeeva">More Info</button>
        </div>

        {/* Education Section */}
        <h2 className="text-4xl font-bold text-white mt-12 mb-8">Education</h2>
        <div className="p-4 bg-red-400 shadow-lg rounded-md">
          <h3 className="text-2xl font-semibold">Bachelor of Science in Information Technology</h3>
          <p className="text-gray-600">Vels University - 2019 to 2022 | CGPA: 7.5</p>
        </div>
      </div>

      {/* Image section with auto-sliding */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center p-4">
        <div className="w-96 h-96 relative">
          <div className="w-full h-full overflow-hidden relative">
            {/* Image slideshow */}
            <div
              className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`, // Move to the current image
              }}
            >
              {/* Repeat the same image 4 times */}
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`slide-${index}`}
                  className="inline-block w-full h-full object-contain rounded-full" // Image style
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
