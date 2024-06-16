import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { FAQItemProps, faqDetail } from "@/config/Index";

const FAQ2 = () => {
  return (
    <>
      <Collapsible className="space-y-2 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {faqDetail.map((item: FAQItemProps, index: number) => (
          <div key={index}>
            <div className="rounded-lg border">
              <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-lg font-medium transition-colors">
                <h3 className="pb-2 pt-2 text-lg font-medium text-foreground dark:text-foreground">
                  {item.question}
                </h3>
                <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-4 pt-0 text-muted-foreground dark:text-muted-foreground">
                <p className="text-muted-foreground dark:text-muted-foreground">
                  {item.answer}
                </p>
              </CollapsibleContent>
            </div>
          </div>
        ))}
      </Collapsible>
    </>
  );
};

export default FAQ2;
