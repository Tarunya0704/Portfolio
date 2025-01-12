"use client"
import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, icon }) => (
  <div className="group relative flex flex-col items-center p-4 bg-[#121212] backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-[#33353F] hover:scale-105 border border-[#33353F]">
    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#1e1e1e] rounded-lg shadow-lg mb-3">
      <img 
        src={icon} 
        alt={`${name} icon`} 
        className="w-8 h-8 md:w-9 md:h-9 object-contain"
      />
    </div>
    <span className="text-xs md:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{name}</span>
  </div>
);

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML5",
      icon: "/images/html5.svg"
    },
    {
      name: "CSS3",
      icon: "/images/css3.svg"
    },
    {
      name: "JavaScript",
      icon: "/images/javascript.svg"
    },
    {
      name: "React",
      icon: "/images/react.svg"
    },
    {
      name: "Next.js",
      icon: "/images/nextjs.svg"
    },
    {
      name: "Tailwind CSS",
      icon: "/images/tailwind.svg"
    },
    {
        name: "Tailwind CSS",
        icon: "/images/tailwind.svg"
      },
      {
        name: "Tailwind CSS",
        icon: "/images/tailwind.svg"
      },
      {
        name: "Tailwind CSS",
        icon: "/images/tailwind.svg"
      },
      {
        name: "Tailwind CSS",
        icon: "/images/tailwind.svg"
      },
      {
        name: "Tailwind CSS",
        icon: "/images/tailwind.svg"
      },
      {
        name: "Tailwind CSS",
        icon: "/images/tailwind.svg"
      },
      {
        name: "Tailwind CSS",
        icon: "/images/tailwind.svg"
      },
      
    // Add more skills as needed
  ];

  return (
    <section className="w-full py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-3">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
