import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      <div className="absolute top-1/4 -left-20 size-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 size-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-soft mb-6">
            <Sparkles className="size-3.5 text-primary" />
            <span className="text-xs font-medium">Available for new projects</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm <span className="text-gradient">Freda Ofori</span>
            <br />
            Virtual Assistant &<br />
            <span className="text-gradient">Aspiring Cloud Practitioner</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Helping businesses stay organized, productive, and efficient using
            digital tools and cloud technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow hover:opacity-95 transition-all"
            >
              <a href="#portfolio">
                View My Work <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <a href="#contact">Hire Me</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="/cv-freda-ofori.pdf" download>
                <Download className="mr-2 size-4" /> Download CV
              </a>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 max-w-md gap-6">
            {[
              { k: "5+", v: "Services" },
              { k: "100%", v: "Dedication" },
              { k: "24/7", v: "Support" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl lg:text-3xl font-display font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
