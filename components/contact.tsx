"use client";
import { handleExternalLink } from "@/utils/openExternalLink";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div
      className="mx-auto mb-10 flex max-w-7xl items-center justify-evenly rounded-3xl bg-offWhite p-10 text-navy md:mb-20"
      id="contact"
    >
      <div>
        <h2 className="px-1 text-center text-xl font-medium tracking-wide md:text-2xl lg:text-3xl lg:font-semibold">
          Let’s Connect
        </h2>
      </div>
      <div className="flex items-center justify-evenly gap-8">
        <div className="flex items-center justify-center gap-1 rounded-full bg-gray-300 px-4">
          <SocialIcon
            svgUrl="/email.svg"
            socialUrl="mailto:tinthtooaung0241@gmail.com"
          />
          <Link
            href={"mailto:tinthtooaung0241@gmail.com"}
            className="px-2 py-1"
          >
            tinthtooaung0241@gmail.com
          </Link>
        </div>
        <SocialIcon
          svgUrl="/guthib.svg"
          socialUrl="https://github.com/tinthtooaung0241"
        />
        <SocialIcon
          svgUrl="/linkedin.svg"
          socialUrl="https://www.linkedin.com/in/tint-htoo-aung-31840331b"
        />
      </div>
    </div>
  );
};

export default Contact;

const SocialIcon = ({
  svgUrl,
  socialUrl,
}: {
  svgUrl: string;
  socialUrl: string;
}) => {
  return (
    <button
      onClick={() => handleExternalLink(socialUrl)}
      className="size-16 rounded-full transition-transform duration-200 ease-in-out hover:scale-125"
    >
      <Image
        src={svgUrl}
        width={100}
        height={100}
        alt="social icon"
        className="w-full p-4"
      />
    </button>
  );
};
