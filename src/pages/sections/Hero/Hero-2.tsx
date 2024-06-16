"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

const Hero2 = ({
  setHeroSection,
  currentSection,
}: {
  setHeroSection: (section: "Hero-1" | "Hero-2") => void;
  currentSection: "Hero-1" | "Hero-2";
}) => {
  const motionProps = (delay = 0) => ({
    initial: { y: "40px", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.4, delay },
    viewport: { once: true },
  });

  return (
    <section className="flex-col items-center gap-y-4 p-8 pt-24">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {currentSection === "Hero-1" ? "Hero Section 1" : "Hero Section 2"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <ul className="grid w-[800px] grid-cols-2 gap-3 p-4">
            <li>
              <DropdownMenuItem
                onClick={() => setHeroSection("Hero-1")}
                className="flex flex-col items-center"
              >
                <Image
                  width={384}
                  height={216}
                  src={"/Hero1.png"}
                  alt="Hero 1"
                  className="mb-2 h-48 w-96 rounded-lg bg-background object-contain dark:bg-background"
                />
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox checked={currentSection === "Hero-1"} />
                    <span className="text-base font-medium">Hero</span>
                  </div>
                  <span className="ml-2 text-sm">Example</span>
                </div>
              </DropdownMenuItem>
            </li>
            <li>
              <DropdownMenuItem
                onClick={() => setHeroSection("Hero-2")}
                className="flex flex-col items-center"
              >
                <Image
                  width={384}
                  height={216}
                  src={"/Hero2.png"}
                  alt="Hero 2"
                  className="mb-2 h-48 w-96 rounded-lg bg-background object-contain dark:bg-background"
                />
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox checked={currentSection === "Hero-2"} />
                    <span className="text-base font-medium">Hero</span>
                  </div>
                  <span className="ml-2 text-sm">Example</span>
                </div>
              </DropdownMenuItem>
            </li>
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
      <motion.div {...motionProps()}>
        <Badge
          variant="default"
          className="rounded-lg py-1 font-medium shadow-lg"
        >
          Open Source
        </Badge>
      </motion.div>
      <motion.h1
        {...motionProps(0.2)}
        className="text-center text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl"
      >
        Scale Your Projects Effortlessly
      </motion.h1>
      <motion.p
        {...motionProps(0.2)}
        className="max-w-3xl text-center text-base font-normal text-foreground/60 md:text-lg"
      >
        A free and open source project to expand your Saas business with ease
        using our template, created using Shadcn UI, Tailwind CSS, React,
        Next.js, TypeScript.
      </motion.p>
      <motion.div
        {...motionProps(0.4)}
        className="mt-5 flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row"
      >
        <Link
          href="https://github.com/Riyadh-Muradi/Boilerplate-and-Starterkit"
          target="_blank"
        >
          <Button
            className="flex w-48 gap-x-2 sm:w-auto"
            size="lg"
            variant="default"
          >
            Get Started
          </Button>
        </Link>
        <Link
          href="https://github.com/Riyadh-Muradi/Boilerplate-and-Starterkit"
          target="_blank"
        >
          <Button
            className="flex w-48 gap-x-2 sm:w-auto"
            size="lg"
            variant="outline"
          >
            Star on GitHub <GitHubLogoIcon />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero2;
