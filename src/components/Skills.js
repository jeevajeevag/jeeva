import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import flymanAnimation from '../Assets/Animation - 1728888055567.json'; // Second animation

const Skills = () => {
  const animationContainer2 = useRef(null); // For the second animation

  useEffect(() => {
    // Load the second animation (flymanAnimation)
    const animation2 = Lottie.loadAnimation({
      container: animationContainer2.current,
      animationData: flymanAnimation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    // Clean up on unmount
    return () => {
      animation2.destroy();
    };
  }, []);

  // Function to generate animated skill bars with percentages
  const SkillBar = ({ skill, percentage }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white">{skill}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2">
        <div
          className="bg-red-500 h-2 rounded-full animate-moving-bar"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen bg-black text-white flex flex-col md:flex-row justify-between items-center p-12">
      {/* Left Side: Flyman Animation */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div ref={animationContainer2} className="w-80 h-80"></div> {/* Flyman Animation */}
      </div>

      {/* Right Side: Skills Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-6 text-red-500">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Programming Languages */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-red-500 font-semibold">Programming Languages</h3>
            <SkillBar skill="JavaScript" percentage={85} />
            <SkillBar skill="TypeScript" percentage={80} />
            <SkillBar skill="Java" percentage={75} />
          </div>

          {/* Web Technologies */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-red-500 font-semibold">Web Technologies</h3>
            <SkillBar skill="React JS" percentage={90} />
            <SkillBar skill="Node JS" percentage={85} />
            <SkillBar skill="Redux" percentage={80} />
            <SkillBar skill="HTML 5" percentage={95} />
            <SkillBar skill="CSS 3" percentage={90} />
          </div>

          {/* Libraries */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-red-500 font-semibold">Libraries</h3>
            <SkillBar skill="Material UI" percentage={85} />
            <SkillBar skill="Tailwind CSS" percentage={90} />
            <SkillBar skill="Bootstrap" percentage={80} />
            <SkillBar skill="Redux Toolkit" percentage={85} />
          </div>

          {/* Databases */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-red-500 font-semibold">Databases</h3>
            <SkillBar skill="MySQL" percentage={85} />
            <SkillBar skill="Amazon DynamoDB" percentage={80} />
            <SkillBar skill="MongoDB" percentage={75} />
          </div>

          {/* Toolbox */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-red-500 font-semibold">Toolbox</h3>
            <SkillBar skill="Postman" percentage={80} />
            <SkillBar skill="Testing" percentage={75} />
            <SkillBar skill="Git" percentage={90} />
            <SkillBar skill="Lottie Animation" percentage={85} />
          </div>

          {/* Graphic Design */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-red-500 font-semibold">Graphic Design</h3>
            <SkillBar skill="Adobe Photoshop" percentage={90} />
            <SkillBar skill="Figma" percentage={85} />
            <SkillBar skill="Canva" percentage={80} />
            <SkillBar skill="Wix" percentage={75} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
