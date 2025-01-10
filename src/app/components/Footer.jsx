import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    <div className="container p-8 md:p-12 flex flex-col md:flex-row items-center md:justify-between gap-4">
      <img
        src="/images/selflogo.png"
        alt="logo"
        className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain hover:scale-105 transition-transform duration-300"
      />
      <p className="text-slate-600 text-sm md:text-base">All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
