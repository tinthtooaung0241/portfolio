import { getIconSrc } from "@/utils/getIcon";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full" id="about">
      <div className="flex h-72 justify-center bg-navy">
        <div className="m-0 flex max-w-6xl flex-col items-center justify-center gap-4 p-0 pb-20 text-xl text-white">
          <h2 className="px-1 text-center text-2xl font-medium tracking-wide md:text-3xl lg:text-5xl lg:font-semibold">
            Building Blocks of My Journey
          </h2>
          <p className="text-wrap px-1 text-center text-xs text-softBlue md:text-base lg:text-lg">
            The tools and technologies that shaped my developer journey
          </p>
        </div>
      </div>
      <div className="z-50 mx-auto -mt-20 flex w-[80%] flex-col items-center justify-center gap-4 rounded-lg bg-offWhite p-2 md:gap-6 md:p-4 lg:gap-8 lg:p-6">
        <div className="flex items-center justify-center">
          <Image
            src={"/language-monitor.svg"}
            height={100}
            width={100}
            alt="language monitor icon"
            className="size-8 sm:size-12 md:size-16 lg:size-20"
          />
        </div>
        <div className="flex w-full flex-col justify-evenly gap-10 p-2 md:p-4 xl:flex-row">
          <Frontend />
          <Backend />
        </div>
      </div>
    </div>
  );
};

export default About;

//components for about
const Frontend = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-6 text-center text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl">
        Frontend Development
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
        <List
          title="Languages"
          items={["JavaScript", "HTML", "CSS", "TypeScript"]}
        />
        <List title="Frameworks" items={["React", "Next.js"]} />
        <List title="UI/Design" items={["Tailwind CSS", "ShadCN UI"]} />
        <List title="State" items={["React Query", "Zustand"]} />
        <List title="CMS" items={["Sanity"]} />
        <List title="Auth" items={["Clerk"]} />
      </div>
    </div>
  );
};

const Backend = () => {
  return (
    <div>
      <h2 className="mb-6 text-center text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl">
        Backend Development
      </h2>
      <div className="grid grid-cols-2 gap-10">
        <List title="Languages" items={["JavaScript", "Node.js"]} />
        <List title="Framework" items={["Express.js"]} />
        <List title="DB" items={["PostgreSQL"]} />
        <List title="ORM" items={["Prisma"]} />
      </div>
    </div>
  );
};

const List = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div>
      <h3 className="mb-4 text-sm font-medium text-blue md:text-lg lg:text-xl">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 md:gap-3">
            <Image
              src={getIconSrc(item)}
              width={50}
              height={50}
              alt="icon"
              className="size-4 md:size-6"
            />
            <span className="text-xs text-gray-700 md:text-sm lg:text-base">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
