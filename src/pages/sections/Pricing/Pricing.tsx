"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Pricing1 from "./Pricing-1";
import Pricing2 from "./Pricing-2";
import Pricing3 from "./Pricing-3";

enum PricingExample {
  Pricing1,
  Pricing2,
  Pricing3,
}
const Pricing = () => {
  const [currentPricing, setCurrentPricing] = useState<PricingExample>(
    PricingExample.Pricing1,
  );

  const handlePricingChange = (pricing: PricingExample) => {
    setCurrentPricing(pricing);
  };

  const renderPricing = () => {
    switch (currentPricing) {
      case PricingExample.Pricing1:
        return <Pricing1 />;
      case PricingExample.Pricing2:
        return <Pricing2 />;
      case PricingExample.Pricing3:
        return <Pricing3 />;
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
      <div id="pricing" className="flex-col items-center gap-y-4 p-8">
        <div className="justify-center space-y-2 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Pricing
          </h2>
          <p className="text-muted-foreground dark:text-muted-foreground md:text-xl/relaxed">
            Choose pricing that fits your needs
          </p>
        </div>
        <div className="mb-8 mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button
            className={`bg-transparenttext-foreground flex w-48 gap-x-2 border transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 dark:text-foreground sm:w-auto ${
              currentPricing === PricingExample.Pricing1
                ? "bg-accent text-accent-foreground"
                : ""
            }`}
            size="lg"
            onClick={() => handlePricingChange(PricingExample.Pricing1)}
          >
            Style 1
          </Button>
          <Button
            className={`flex w-48 gap-x-2 border bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 dark:text-foreground sm:w-auto ${
              currentPricing === PricingExample.Pricing2
                ? "bg-accent text-accent-foreground"
                : ""
            }`}
            size="lg"
            onClick={() => handlePricingChange(PricingExample.Pricing2)}
          >
            Style 2
          </Button>
          <Button
            className={`flex w-48 gap-x-2 border bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 dark:text-foreground sm:w-auto ${
              currentPricing === PricingExample.Pricing3
                ? "bg-accent text-accent-foreground"
                : ""
            }`}
            size="lg"
            onClick={() => handlePricingChange(PricingExample.Pricing3)}
          >
            Style 3
          </Button>
        </div>
        <div className="">{renderPricing()}</div>
      </div>
    </motion.div>
  );
};

export default Pricing;
