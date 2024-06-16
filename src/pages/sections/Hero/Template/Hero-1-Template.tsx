"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero1Template = () => {
  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-y-4 p-4 pb-16 pt-32">
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
            Badge template
          </Badge>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl">
            Text template
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="max-w-3xl text-center text-base font-normal text-foreground/60 md:text-lg">
            Description template
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
              Button template
            </Button>
          </Link>
          <Link
            href={"https://github.com/Riyadh-Muradi/Boilerplate-and-Starterkit"}
            target="_blank"
          >
            <Button
              className="flex w-48 gap-x-2 bg-none sm:w-auto"
              size="lg"
              variant="outline"
            >
              Github template
              <GitHubLogoIcon />
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Hero1Template;
