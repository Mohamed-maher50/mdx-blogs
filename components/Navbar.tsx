import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Lightbulb } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">DevHub</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#blogs"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Blogs
          </Link>
          <Link
            href="/#docs"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Docs
          </Link>
          <Link
            href="#categories"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Categories
          </Link>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
