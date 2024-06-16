"use client";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export function Alert() {
  return (
    <motion.div
      initial={{ y: "-40px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-[400px] items-center justify-center gap-2 pt-4 text-base font-medium text-foreground dark:text-foreground">
        <p>This is a demo</p>
        <Link
          href={"https://github.com/Riyadh-Muradi/boilerplate"}
          target="_blank"
        >
          <Button
            className="flex w-48 gap-x-2 bg-none sm:w-auto"
            size="lg"
            variant="outline"
          >
            Star {/*<Star className="h-4 w-4" />*/} on GitHub
            <GitHubLogoIcon />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Alert;
