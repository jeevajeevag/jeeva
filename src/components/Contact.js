import React, { useState, useRef, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import Lottie from 'lottie-web';
import faqAnimation from '../Assets/Animation - 1728825046526.json'; // Ensure this path is correct

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const lottieContainer = useRef(null);

  // Load Lottie animation
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: lottieContainer.current, // Container for the animation
      animationData: faqAnimation, // Your animation data
      renderer: 'svg',
      loop: true, // Loop the animation
      autoplay: true, // Autoplay the animation
    });

    return () => {
      animation.destroy(); // Cleanup on component unmount
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneNumber = '8524074019';
    const message = `
      Name: ${name}
      Email: ${email}
      Comments: ${comments}
    `;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank'); // Open WhatsApp with the message

    // Reset form fields
    setName('');
    setEmail('');
    setComments('');
  };

  return (
    <section id="contact" className="h-screen bg-black flex flex-col md:flex-row justify-center items-start p-10 text-white">
      {/* Left Side: Contact Information and Form */}
      <div className="w-full md:w-1/2 pr-6">
        <h2 className="text-4xl font-bold mb-6 text-red-500">Contact Me</h2>
        <p className="text-xl mb-4">
          I am available for inquiries. Feel free to reach out through any of the following:
          <br />
          <FaPhoneAlt className="inline mr-2" /> <strong>+91 78991 49379</strong> | <strong>+91 85240 74019</strong>
          <br />
          <FaEnvelope className="inline mr-2" /> <strong>jeevajeeva1253@gmail.com</strong>
          <br />
          <FaMapMarkerAlt className="inline mr-2" /> <strong>Chennai, India</strong>
          <br />
          <a
            href="https://www.linkedin.com/in/jeevaganesan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 text-blue-400 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin className="mr-2" /> LinkedIn Profile
          </a>
        </p>

        <form id="contact-form" className="flex flex-col w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            required
          />
          <textarea
            placeholder="Your Message"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="mb-4 p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            required
          />
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all">
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side: Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div ref={lottieContainer} className="w-96 h-96"></div> {/* Adjust size as needed */}
      </div>
    </section>
  );
};

export default Contact;
