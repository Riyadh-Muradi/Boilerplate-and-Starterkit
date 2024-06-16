import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { faqDetail } from "@/config/Index";

const FAQ1 = () => {
  return (
    <>
      <div className="space-y-2">
        {faqDetail.map((item, index) => (
          <Collapsible
            key={index}
            className="rounded-lg border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left [&[data-state=open]>svg]:rotate-180">
              <h3 className="pb-2 pt-2 text-lg font-medium">{item.question}</h3>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t px-6 py-4">
              <p className="text-muted-foreground dark:text-muted-foreground">
                {item.answer}
              </p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </>
  );
};

export default FAQ1;
