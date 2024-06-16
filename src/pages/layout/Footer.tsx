"use client";
import { Button } from "@/components/ui/button";
import { Github, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: "40px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex-col items-center gap-y-4 p-8">
        <footer className="rounded-lg border bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="items-center p-10 text-center md:flex md:items-start md:justify-between md:text-start">
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <div className="mb-4 flex items-center justify-center md:items-start md:justify-start">
                  <LayoutTemplate className="h-8 w-8" />
                  <span className="ml-2 text-xl font-semibold">Template</span>
                </div>
              </Link>
              <p className="max-w-[400px] text-sm text-muted-foreground">
                A free and open source project to expand your Saas business with
                ease using our template, created using Shadcn UI, Tailwind CSS,
                React, Next.js, TypeScript
              </p>
              <div className="bg-background">
                <div className="mt-4 flex max-w-6xl items-center justify-center md:items-start md:justify-start">
                  <div className="flex space-x-4">
                    <Link href="https://github.com/Riyadh-Muradi/Boilerplate-and-Starterkit">
                      <Button variant="ghost" size="icon">
                        <Github className="h-6 w-6 text-foreground" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-8 text-center md:items-start md:text-start">
              <div>
                <h6 className="mb-4 text-lg font-semibold">Template</h6>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-sm hover:underline">
                      Products
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-sm hover:underline">
                      Documentation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-sm hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="mb-4 text-lg font-semibold">Legal</h6>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-sm hover:underline">
                      Terms of Service
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-sm hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:underline">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center border-t">
            <div className="flex px-4 py-4">
              <p className="text-md text-center text-muted-foreground">
                &copy; 2024 Template. All Rights Reserved.{" "}
                <span className="ml-1">Created and designed by</span>
                <Link
                  className="text-md ml-1 cursor-pointer font-bold transition-all hover:font-black"
                  href="https://github.com/Riyadh-Muradi"
                  target="_blank"
                >
                  Riyadh / Diar Muradi
                </Link>
                <span className="ml-1">and</span>
                <Link
                  className="text-md ml-1 cursor-pointer font-bold transition-all hover:font-black"
                  href="https://github.com/B33fb0n3"
                  target="_blank"
                >
                  B33fb0n3
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default Footer;
