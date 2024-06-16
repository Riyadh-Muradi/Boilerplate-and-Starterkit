"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Bento1 from "./Bento-1";
import Bento2 from "./Bento-2";
enum Example {
  Bento1,
  Bento2,
}

const BentoGrid = () => {
  const [currentExample, setCurrentExample] = useState<Example>(Example.Bento1);

  const handleExampleChange = (example: Example) => {
    setCurrentExample(example);
  };

  const renderComponent = () => {
    switch (currentExample) {
      case Example.Bento1:
        return <Bento1 />;
      case Example.Bento2:
        return <Bento2 />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ y: "60px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <div
        id="features"
        className="mx-auto min-h-[600px] max-w-7xl gap-8 px-4 py-24 pb-8 lg:pb-16 lg:pt-32"
      >
        <div className="mx-auto max-w-3xl space-y-2 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Features
          </h2>
          <p className="text-muted-foreground dark:text-muted-foreground md:text-xl/relaxed">
            Features that will help you build your next project
          </p>
        </div>
        <div className="mb-8 mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button
            className={`flex w-48 gap-x-2 border bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 dark:text-foreground sm:w-auto ${
              currentExample === Example.Bento1
                ? "bg-accent text-accent-foreground"
                : ""
            }`}
            size="lg"
            variant="default"
            onClick={() => handleExampleChange(Example.Bento1)}
          >
            Style 1
          </Button>
          <Button
            className={`flex w-48 gap-x-2 border bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 dark:text-foreground sm:w-auto ${
              currentExample === Example.Bento2
                ? "bg-accent text-accent-foreground"
                : ""
            }`}
            size="lg"
            variant="secondary"
            onClick={() => handleExampleChange(Example.Bento2)}
          >
            Empty
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-1 md:gap-6 lg:grid-cols-4 xl:gap-8">
          {renderComponent()}
        </div>
      </div>
    </motion.div>
  );
};

export default BentoGrid;
