"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LayoutTemplate, Menu } from "lucide-react";
import { navbarLinks } from "@/config/Index";
import { motion } from "framer-motion";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Hero1 from "../sections/Hero/Hero-1";
import Hero2 from "../sections/Hero/Hero-2";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const [heroSection, setHeroSection] = useState<"Hero-1" | "Hero-2">("Hero-1");

  const handleHeroChange = (section: "Hero-1" | "Hero-2"): void => {
    setHeroSection(section);
  };

  return (
    <motion.div
      initial={{ y: "-40px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <header className="">
        {/* Desktopp */}
        <NavigationMenu className="flex flex-wrap items-center justify-between">
          <Link href={"/"} className="flex items-center gap-2 lg:w-[198.13px]">
            <div className="flex items-center text-xl font-semibold">
              <LayoutTemplate className="h-6 w-10" />
              <p className="ml-2 hidden text-lg font-medium lg:flex">
                Template
              </p>
            </div>
          </Link>

          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={navbarLinks[1].href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navbarLinks[1].title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={navbarLinks[2].href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navbarLinks[2].title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {heroSection === "Hero-1"
                  ? "Hero Section 1"
                  : heroSection === "Hero-2"
                    ? "Hero Section 2"
                    : heroSection === "Hero-3"
                      ? "Hero Section 3"
                      : "Hero Section 4"}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[800px] grid-cols-2 gap-3 p-4">
                  <li>
                    <button
                      className="flex flex-col items-center"
                      onClick={() => handleHeroChange("Hero-1")}
                    >
                      <Image
                        width={384}
                        height={216}
                        src={"/Hero1.png"}
                        alt="Hero 1"
                        className="mb-2 h-48 w-96 rounded-lg bg-background object-contain dark:bg-background"
                      />
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox checked={heroSection === "Hero-1"} />
                          <span className="text-base font-medium">Hero</span>
                        </div>
                        <span className="ml-2 text-sm">Example</span>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex flex-col items-center"
                      onClick={() => handleHeroChange("Hero-2")}
                    >
                      <Image
                        width={384}
                        height={216}
                        src={"/Hero2.png"}
                        alt="Hero 3"
                        className="mb-2 h-48 w-96 rounded-lg bg-background object-contain dark:bg-background"
                      />
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox checked={heroSection === "Hero-2"} />
                          <span className="text-base font-medium">Hero</span>
                        </div>
                        <span className="ml-2 text-sm">Example</span>
                      </div>
                    </button>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={navbarLinks[3].href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navbarLinks[3].title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={navbarLinks[4].href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navbarLinks[4].title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          <div className="flex cursor-pointer justify-end gap-x-2">
            <div className="hidden flex-row items-center gap-x-2 lg:flex">
              <Button variant="ghost">
                <p className="text-sm">Sign In</p>
              </Button>

              <Button variant="outline">
                <p className="flex w-12 bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 dark:text-foreground sm:w-auto">
                  Get Started
                </p>
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </NavigationMenu>

        {/* Mobile */}
        <div className="flex w-full items-center justify-between md:hidden">
          {isOpenMobileNav ? (
            <MobileNavbar
              isOpen={isOpenMobileNav}
              setIsOpen={setIsOpenMobileNav}
            />
          ) : (
            <NavigationMenu className="flex flex-wrap items-center justify-between">
              <div
                className="flex items-center justify-center"
                onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
              >
                <Menu className="h-6 w-10 cursor-pointer text-4xl" />
              </div>

              <Link href={"/"} className="flex items-center gap-2">
                <div className="flex items-center text-xl font-semibold">
                  <LayoutTemplate className="h-6 w-6" />
                </div>
              </Link>

              <div className="flex items-center lg:hidden">
                <ThemeToggle />
              </div>
            </NavigationMenu>
          )}
        </div>
      </header>

      <div>
        {heroSection === "Hero-1" && <HeroSection1 />}
        {heroSection === "Hero-2" && <HeroSection2 />}
      </div>
    </motion.div>
  );
};

const HeroSection1 = () => (
  <div className="hero-section">
    <Hero1 />
  </div>
);

const HeroSection2 = () => (
  <div className="hero-section">
    <Hero2 />
  </div>
);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
