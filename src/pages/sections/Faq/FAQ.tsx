"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FAQ1 from "./FAQ-1";
import FAQ2 from "./FAQ-2";

enum FAQExample {
  FAQ1,
  FAQ2,
}

const FAQ = () => {
  const [currentFAQ, setCurrentFAQ] = useState<FAQExample>(FAQExample.FAQ1);

  const handleFAQChange = (faq: FAQExample) => {
    setCurrentFAQ(faq);
  };

  const renderFAQ = () => {
    switch (currentFAQ) {
      case FAQExample.FAQ1:
        return <FAQ1 />;
      case FAQExample.FAQ2:
        return <FAQ2 />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ y: "40px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div id="faq" className="flex-col items-center gap-y-4 p-8">
        <div className="justify-center space-y-2 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground dark:text-muted-foreground md:text-xl/relaxed">
            Get answers to the most common questions about our product.
          </p>
        </div>
        <div className="mb-8 mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button
            className={`flex w-48 gap-x-2 border bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 dark:text-foreground sm:w-auto ${
              currentFAQ === FAQExample.FAQ1
                ? "bg-accent text-accent-foreground"
                : ""
            }`}
            size="lg"
            onClick={() => handleFAQChange(FAQExample.FAQ1)}
          >
            Style 1
          </Button>
          <Button
            className={`flex w-48 gap-x-2 border bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 dark:text-foreground sm:w-auto ${
              currentFAQ === FAQExample.FAQ2
                ? "bg-accent text-accent-foreground"
                : ""
            }`}
            size="lg"
            onClick={() => handleFAQChange(FAQExample.FAQ2)}
          >
            Style 2
          </Button>
        </div>
        <div className="">{renderFAQ()}</div>
      </div>
    </motion.div>
  );
};

export default FAQ;
