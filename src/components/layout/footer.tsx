import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface FooterProps {
  variant?: 'fixed' | 'static';
}

export function Footer({ variant = 'fixed' }: FooterProps) {
  return (
    <footer className={`h-auto md:h-14 w-full border-t border-black/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 ${variant === 'fixed' ? 'fixed bottom-0 left-0 right-0' : 'static'}`}>
      <div className="container py-4 md:py-0 flex flex-col md:flex-row h-auto md:h-14 items-center justify-between gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Elevatr © 2025
          </p>
        </div>
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Link
            href="mailto:kushagrajuneja7@gmail.com"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            <Mail className="h-4 w-4" />
            <span>Contact Support</span>
          </Link>
        </nav>
      </div>
    </footer>
  );
} 