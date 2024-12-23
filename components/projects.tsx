"use client";
import { handleExternalLink } from "@/utils/openExternalLink";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      className="mx-auto my-20 max-w-6xl space-y-10 md:my-40 md:space-y-20"
      id="projects"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="px-1 text-center text-2xl font-medium tracking-wide text-navy md:text-3xl lg:text-5xl lg:font-semibold">
          {"Things I’ve Built"}
        </h2>
        <p className="text-wrap px-1 text-center text-xs text-gray-600 md:text-base lg:text-lg">
          A collection of creations that reflect my coding journey
        </p>
      </div>
      <div className="flex flex-col items-center justify-evenly gap-4 p-4 md:flex-row">
        <ProjectCard
          imageUrl="/img/extra.png"
          title="Extra"
          description="Easily track and manage your finances"
          webUrl="https://extra-next.vercel.app/sign-in"
        />
        <ProjectCard
          webUrl="https://quizo-8y7dul2z4-tinthtooaung0241s-projects.vercel.app"
          imageUrl="/img/quizo.png"
          title="Quizo"
          description="Test your knowledge with fun trivia quizzes"
        />
      </div>
    </div>
  );
};

export default Projects;

const ProjectCard = ({
  imageUrl,
  title,
  webUrl,
  description,
}: {
  imageUrl: string;
  title: string;
  webUrl: string;
  description: string;
}) => {
  return (
    <div className="max-w-lg space-y-3 rounded-xl border bg-iceBlue p-6 md:space-y-6">
      <div>
        <Image
          src={imageUrl}
          height={900}
          width={1600}
          alt="Project image"
          className="rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between space-y-2 lg:space-y-4">
        <div className="space-y-1 md:space-y-2">
          <h3 className="text-base font-medium sm:text-lg md:text-xl">
            {title}
          </h3>
          <p className="text-xs text-neutral-700 sm:text-sm md:text-base">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="rounded-full border-2 border-navy px-3 py-1.5 text-sm font-medium text-navy transition-colors duration-200 ease-in-out hover:bg-navy hover:text-white md:px-4 md:py-2 md:text-base"
            onClick={() => handleExternalLink(webUrl)}
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};
