import { ThemeToggle } from "@/components/ThemeToggle";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { navbarLinks } from "@/config/Index";
import { LayoutTemplate, X } from "lucide-react";
import Link from "next/link";

const MobileNavbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  return (
    <div className="z-50 mx-auto flex h-full flex-col items-start justify-start gap-16 overflow-hidden overflow-y-hidden">
      <div className="fixed inset-0 top-4 z-10 mx-auto flex h-14 max-w-[300px] flex-1 flex-wrap items-center justify-between rounded-lg border bg-background/95 pl-4 pr-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:max-w-[700px] lg:max-w-[100px] xl:max-w-[1200px]">
        <div
          className="relative flex items-center justify-center text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X className="cursor-pointer" />
        </div>
        <div className="flex cursor-pointer gap-2">
          <Link href={"/"} className="flex items-center gap-2 lg:w-[238.13px]">
            <div className="flex items-center text-xl font-semibold">
              <LayoutTemplate className="h-6 w-10" />
            </div>
          </Link>
        </div>
        <div className="flex cursor-pointer gap-2">
          <ThemeToggle />
        </div>
      </div>

      <div
        className={`mt-24 flex h-full w-[300px] flex-col items-center justify-center gap-12 rounded-lg border bg-background/95 px-4 py-8 backdrop-blur supports-[backdrop-filter]:bg-background/60`}
      >
        {navbarLinks.map((link, index) => (
          <Link
            key={index}
            onClick={() => setIsOpen(!isOpen)}
            href={link.href}
            className={navigationMenuTriggerStyle()}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
