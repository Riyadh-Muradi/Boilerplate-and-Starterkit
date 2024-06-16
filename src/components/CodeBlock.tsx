import React, { useState } from "react";
import { CheckIcon } from "lucide-react";

export const exampleFileName = "Component.tsx";
export const exampleCode = `import React from 'react'
export const Component = () => {
  return ( 
    <div class"mx-auto flex items-center">
      <h1 className="text-center text-4xl">Template</h1>
    </div>
  )
}`;

interface CodeBlockProps {
  fileName: string;
  code: string;
}

const CodeBlock = ({ fileName, code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buttonClasses =
    "flex items-center gap-2 rounded-lg border bg-background px-2 py-1 text-foreground dark:bg-background dark:text-foreground";

  return (
    <div className="relative mx-auto my-4 max-w-3xl rounded-lg border p-4 shadow-lg">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-lg font-bold text-foreground dark:text-foreground">
            {fileName}
          </span>
        </div>
        <button onClick={handleCopy} className={buttonClasses}>
          {copied ? (
            <>
              <CheckIcon className="h-5 w-5 rounded-lg border bg-green-500" />
              Copied
            </>
          ) : (
            "Copy"
          )}
        </button>
      </div>
      <div className="flex">
        <div className="w-full overflow-x-auto">
          <pre className="rounded-lg">
            <code className="relative block w-full">
              {code.split("\n").map((line, index) => (
                <div key={index} className="group relative flex items-center">
                  <span className="pl-[calc(1em+0.5ch)] pr-[calc(1em+0.5ch)]">
                    {line}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
