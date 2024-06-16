"use client";

import CodeBlock, {
  exampleCode,
  exampleFileName,
} from "@/components/CodeBlock";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BentoBoxProps {
  className: string;
  children: React.ReactNode;
}

export const BentoBox = ({ className, children }: BentoBoxProps) => (
  <div
    className={`group relative flex items-center justify-center overflow-hidden rounded-lg border ${className}`}
  >
    {children}
  </div>
);

interface TextBlockProps {
  className?: string;
  children: React.ReactNode;
}

export const TextBlock = ({ className, children }: TextBlockProps) => (
  <div
    className={`absolute bottom-0 left-0 right-0 h-[320px] overflow-hidden ${className}`}
  >
    <div className="mx-auto max-w-[500px] p-4 text-center">{children}</div>
  </div>
);

interface AvatarBlockProps {
  className?: string;
  avatars: string[];
}

const AvatarBlock = ({ className, avatars }: AvatarBlockProps) => (
  <>
    {avatars.map((avatar, index) => (
      <Avatar
        key={index}
        className={`absolute ${avatar} duration-500 group-hover:translate-y-[1rem] group-hover:scale-150`}
      >
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
    ))}
  </>
);

const Bento1 = () => {
  return (
    <>
      <BentoBox className="h-48 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:h-80">
        <div className="group relative hidden h-64 w-64 cursor-pointer overflow-hidden rounded-lg border text-foreground shadow-lg duration-700 hover:duration-700 dark:text-foreground xl:flex">
          <div className="mt-12 flex h-64 w-64 justify-center">
            <p className="text-3xl font-bold">It says lorem</p>
          </div>
          <div className="group-hover:duration-600 absolute -bottom-24 flex w-64 flex-col gap-1 rounded-lg border p-3 duration-500 group-hover:-bottom-0">
            <span className="text-2xl font-bold text-foreground dark:text-foreground">
              lorem
            </span>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Lorem lorem lorem lorem lorem, lorem lorem lorem.
            </p>
          </div>
        </div>
      </BentoBox>

      <BentoBox className="h-48 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:col-span-2 md:h-80">
        <div className="hidden xl:flex">
          <TextBlock>
            <span className="inline-block text-sm text-foreground dark:text-foreground md:text-lg">
              lorem
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              deserunt fuga architecto beatae laudantium voluptatum.
            </p>
          </TextBlock>
          <div className="-lg absolute left-[155px] top-[200px] flex h-60 w-[150px] items-center justify-center overflow-hidden rounded-lg border bg-background shadow-lg duration-300 hover:z-10 hover:translate-y-[-2rem] hover:rotate-[-15deg] dark:bg-background">
            <p>Card 1</p>
          </div>
          <div className="absolute right-[150px] top-[200px] flex h-60 w-[150px] items-center justify-center overflow-hidden rounded-lg border bg-background shadow-lg duration-300 hover:z-10 hover:translate-y-[-2rem] hover:rotate-[15deg] dark:bg-background">
            <p>Card 3</p>
          </div>
          <div className="absolute right-[200px] top-[150px] flex h-60 w-[200px] items-center justify-center overflow-hidden rounded-lg border bg-background shadow-lg duration-300 hover:z-10 hover:translate-y-[-1rem] dark:bg-background">
            <p>Card 2</p>
          </div>
        </div>
      </BentoBox>

      <BentoBox className="group h-48 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:h-80">
        <div className="hidden xl:flex">
          <div className="mx-auto max-w-[200px] text-center duration-300 group-hover:translate-y-[2rem] group-hover:scale-125">
            <span className="inline-block text-sm text-foreground dark:text-foreground md:text-lg">
              lorem
            </span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <AvatarBlock avatars={["right-[125px] top-[50px]"]} />
        </div>
      </BentoBox>

      <BentoBox className="h-48 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:col-span-2 md:h-80">
        <div className="hidden xl:flex">
          <TextBlock>
            <span className="inline-block text-sm text-foreground dark:text-foreground md:text-lg">
              lorem lorem
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              deserunt fuga architecto beatae laudantium voluptatum.
            </p>
          </TextBlock>
          <div className="absolute left-[-50px] top-[150px] flex h-60 w-[200px] rotate-[45deg] items-center justify-center overflow-hidden rounded-lg border bg-background shadow-lg duration-300 hover:z-10 hover:translate-x-[1rem] hover:translate-y-[-1rem] dark:bg-background">
            <p>Card 1</p>
          </div>
          <div className="absolute right-[-50px] top-[150px] flex h-60 w-[200px] rotate-[-45deg] items-center justify-center overflow-hidden rounded-lg border bg-background shadow-lg duration-300 hover:z-10 hover:translate-x-[-1rem] hover:translate-y-[-1rem] dark:bg-background">
            <p>Card 2</p>
          </div>
        </div>
      </BentoBox>

      <div className="group relative flex h-48 items-center justify-center overflow-hidden rounded-lg border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:col-span-2 md:h-80">
        <div className="hidden xl:flex">
          <CodeBlock fileName={exampleFileName} code={exampleCode} />
        </div>
      </div>
    </>
  );
};

export default Bento1;
