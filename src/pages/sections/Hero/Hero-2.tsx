"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { BentoBox, TextBlock } from "../Bento/Bento-1";

const Hero2 = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-y-4 p-4 py-16 pt-40 xl:flex-row xl:justify-center">
      <div className="text flex flex-col items-center gap-y-4 xl:w-1/2 xl:items-start">
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="default"
            className="rounded-lg py-1 font-medium shadow-lg"
          >
            Open Source
          </Badge>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl xl:text-start xl:text-7xl">
            Scale Your Projects Effortlessly
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="max-w-xl text-center text-base font-normal text-foreground/60 md:text-lg xl:text-start">
            A free and open source project to expand your Saas business with
            ease using our template, created using Shadcn UI, Tailwind CSS,
            React, Next.js, TypeScript.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-5 flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row"
        >
          <Link
            href={"https://github.com/Riyadh-Muradi/Boilerplate-and-Starterkit"}
            target="_blank"
          >
            <Button
              className="flex w-48 gap-x-2 sm:w-auto"
              size="lg"
              variant="default"
            >
              Get Started {/*<ArrowRightIcon className="h-4 w-4" /> */}
            </Button>
          </Link>
          <Link
            href={"https://github.com/Riyadh-Muradi/Boilerplate-and-Starterkit"}
            target="_blank"
          >
            <Button
              className="flex w-48 gap-x-2 sm:w-auto"
              size="lg"
              variant="outline"
            >
              Star {/*<Star className="h-4 w-4" />*/} on GitHub
              <GitHubLogoIcon />
            </Button>
          </Link>
        </motion.div>
      </div>
      <div className="hidden justify-center xl:block xl:w-1/2 xl:justify-end">
        <BentoBox className="h-48 bg-background/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60 md:col-span-2 md:h-80">
          <TextBlock>
            <span className="inline-block text-sm text-foreground dark:text-foreground md:text-lg">
              lorem
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              deserunt fuga architecto beatae laudantium voluptatum.
            </p>
          </TextBlock>
          <div className="absolute left-[150px] top-[210px] flex h-60 w-[150px] items-center justify-center overflow-hidden rounded-lg border bg-background shadow-lg duration-300 hover:z-10 hover:translate-y-[-2rem] hover:rotate-[-15deg] dark:bg-background">
            <p>Card 1</p>
          </div>
          <div className="absolute right-[150px] top-[210px] flex h-60 w-[150px] items-center justify-center overflow-hidden rounded-lg border bg-background shadow-lg duration-300 hover:z-10 hover:translate-y-[-2rem] hover:rotate-[15deg] dark:bg-background">
            <p>Card 3</p>
          </div>
          <div className="absolute top-[150px] flex h-60 w-[200px] items-center justify-center overflow-hidden rounded-lg border bg-background shadow-lg duration-300 hover:z-10 hover:translate-y-[-1rem] dark:bg-background">
            <p>Card 2</p>
          </div>
        </BentoBox>
      </div>
    </section>
  );
};

export default Hero2;
