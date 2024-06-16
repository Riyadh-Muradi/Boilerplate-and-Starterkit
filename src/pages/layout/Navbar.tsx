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
import { LayoutTemplate, Menu } from "lucide-react";
import { navbarLinks } from "@/config/Index";
import { motion } from "framer-motion";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  return (
    <motion.div
      initial={{ y: "-40px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <header>
        {/* Desktop */}
        <NavigationMenu className="flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center gap-2 lg:w-[198.13px]">
            <div className="flex items-center text-xl font-semibold">
              <LayoutTemplate className="h-6 w-10" />
              <p className="ml-2 hidden text-lg font-medium lg:flex">
                Template
              </p>
            </div>
          </Link>

          <NavigationMenuList>
            {navbarLinks.slice(0, 5).map((link, index) => (
              <NavigationMenuItem key={index}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>

          <div className="flex cursor-pointer justify-end gap-x-2">
            <div className="hidden flex-row items-center gap-x-2 lg:flex">
              <Button variant="ghost">
                <p className="text-sm">Sign In</p>
              </Button>
              <Button variant="outline">
                <p className="flex w-12 bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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

              <Link href="/" className="flex items-center gap-2">
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
    </motion.div>
  );
};

export default Navbar;