"use client";
import React from "react";

const NavBar = () => {
  const scrollToDiv = (targetDiv: string) => {
    const element = document.getElementById(targetDiv);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-2 md:h-20 md:px-4">
      <div>tha</div>
      <div className="flex items-center justify-center gap-x-3 px-2 md:gap-x-6">
        <button
          className="rounded-full border-2 border-blue px-3 py-1.5 text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-blue hover:text-white md:px-4 md:py-2 md:text-base"
          onClick={() => scrollToDiv("about")}
        >
          About
        </button>
        <button
          className="rounded-full border-2 border-blue px-3 py-1.5 text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-blue hover:text-white md:px-4 md:py-2 md:text-base"
          onClick={() => scrollToDiv("projects")}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default NavBar;
