"use client";

import React from "react";
import { motion } from "framer-motion";
import Bento1 from "./Bento";

const BentoGrid = () => {
  return (
    <motion.div
      initial={{ y: "60px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <div
        id="features"
        className="flex min-h-[600px] flex-col items-center gap-y-4 p-8"
      >
        <div className="max-w-3xl space-y-2 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Features
          </h2>
          <p className="text-muted-foreground dark:text-muted-foreground md:text-xl/relaxed">
            Features that will help you build your next project
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-1 md:gap-6 lg:grid-cols-4 xl:gap-8">
          <Bento1 />
        </div>
      </div>
    </motion.div>
  );
};

export default BentoGrid;
