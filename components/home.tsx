import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div
      className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-4 md:flex-row"
      id="home"
    >
      <div className="flex flex-col items-center justify-center gap-y-4 md:gap-y-6">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-medium tracking-wide md:text-3xl lg:text-5xl">
            TINT HTOO AUNG
          </h1>
        </div>
        <h3 className="text-wrap px-1 text-center text-xs md:text-base lg:text-lg">
          Junior Frontend Developer with React and Next.js expertise
        </h3>
      </div>
      <div className="">
        <Image
          src={"/img/profileLandscape.png"}
          width={200}
          height={200}
          alt="Pixelated profile"
          className="size-20 rounded-full object-center md:size-24 lg:size-32"
        />
      </div>
    </div>
  );
};

export default HomePage;
