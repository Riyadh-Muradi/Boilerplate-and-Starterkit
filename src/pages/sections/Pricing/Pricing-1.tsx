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
import React from "react";

const Pricing1 = () => {
  return (
    <div className="grid min-h-[600px] grid-cols-1 gap-8 md:grid-cols-1 xl:grid-cols-3">
      {PricingDetails.map((pricing, index) => (
        <div
          className="flex flex-col gap-6 rounded-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          key={index}
        >
          <Card className="flex min-h-[600px] min-w-72 flex-1 flex-col justify-between gap-8 rounded-lg border bg-background/95 p-4 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/5 md:min-w-96">
            <div>
              <CardHeader>
                <CardTitle className="pt-4 text-center text-2xl font-bold text-foreground">
                  {pricing.title}
                </CardTitle>
                <CardDescription className="text-center text-sm text-foreground/60">
                  {pricing.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div className="flex items-center justify-center gap-2 text-6xl font-bold md:text-7xl">
                  {pricing.price} {pricing.currency}
                </div>
                <ul className="grid justify-center gap-4 text-base">
                  {allFeatures.map((feature, featureIndex) => (
                    <li
                      className={`flex items-center gap-2 ${
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

export default Pricing1;
