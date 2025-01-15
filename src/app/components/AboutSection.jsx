'use client';
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Hackathon Particicpated",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
      <li>SSOC &apos;23</li>
      <li>SIH (Smart India Hackathon &apos;23)</li>
      <li>SIH (Smart India Hackathon &apos;24)</li>
      
        
        

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Pursuing B.tech From Bennett University</li>
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        
        <li>Colt Stel Mern Stack devloper</li>
        <li>AWS Cloud Foundation</li>
        <li>AWS Cloud Security</li>
        <li>Postman Student Expert</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/images/about-image.png" width={500} height={500} alt="img" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a skilled MERN stack developer with two years of hands-on experience in building dynamic and scalable web applications. My expertise lies in developing full-stack solutions using MongoDB, Express.js, React,Next and Node.js. Alongside my passion for web development, I have a keen interest in exploring cloud computing and Web3 technologies, aiming to integrate the latest advancements in these fields to enhance my projects. My goal is to create innovative and impactful digital experiences while staying at the forefront of emerging tech trends.

          Let&apos; build something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Hackathon Particicpated{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
