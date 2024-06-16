import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { PricingDetails, allFeatures } from "@/config/Index";

const Pricing3 = () => {
  return (
    <div className="grid min-h-[400px] max-w-7xl grid-cols-1 gap-8 md:grid-cols-1 xl:grid-cols-3">
      {PricingDetails.map((pricing, index) => (
        <div
          className="flex flex-col gap-6 rounded-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          key={index}
        >
          <Card className="flex min-h-[400px] min-w-72 max-w-7xl flex-1 flex-col justify-between gap-8 rounded-lg border bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/5 md:min-w-96">
            <div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {pricing.title}
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">{pricing.price}</span>
                    <span className="ml-1 text-sm text-muted-foreground dark:text-muted-foreground">
                      {pricing.monthly}
                    </span>
                  </div>
                </CardTitle>
                <CardDescription className="text-start text-sm text-foreground/60">
                  {pricing.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-8">
                <ul className="grid justify-start gap-4 text-base">
                  {allFeatures.map((feature, featureIndex) => (
                    <li
                      className={`flex items-start gap-2 ${
                        pricing.features.includes(feature)
                          ? ""
                          : "text-muted-foreground"
                      }`}
                      key={featureIndex}
                    >
                      <CheckIcon
                        className={`h-5 w-5 ${pricing.features.includes(feature) ? "" : "opacity-50"}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Pricing3;
