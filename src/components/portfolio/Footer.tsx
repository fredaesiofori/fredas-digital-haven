import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-semibold text-foreground">Freda Ofori</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/freda-ofori-363235351"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="size-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="https://github.com/fredaesiofori"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="size-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all"
          >
            <Github className="size-4" />
          </a>
          <a
            href="mailto:fredaesiofori905@gmail.com"
            aria-label="Email"
            className="size-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="tel:+233596168684"
            aria-label="Phone"
            className="size-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <Phone className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
