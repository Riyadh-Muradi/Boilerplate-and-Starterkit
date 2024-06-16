import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/pages/layout/Navbar";
import Footer from "@/pages/layout/Footer";
import Alert from "@/components/Alert";

export const metadata: Metadata = {
  title: "Template | Starter kit for your next project",
  description:
    "A free and open source project to expand your Saas business with ease using our template, created using Shadcn UI, Tailwind CSS, React, Next.js, TypeScript.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          {/* <Alert /> */}
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
