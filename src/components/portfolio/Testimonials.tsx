import { Quote } from "lucide-react";

const items = [
  {
    quote: "Highly professional and very organized freelancer. Freda made our admin workflow effortless.",
    name: "Client A",
    role: "Startup Founder",
  },
  {
    quote: "Delivered work on time with excellent attention to detail. Communication was clear throughout.",
    name: "Client B",
    role: "Marketing Lead",
  },
  {
    quote: "A reliable VA who genuinely cares about the quality of every task. Highly recommended.",
    name: "Client C",
    role: "Small Business Owner",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Kind words from <span className="text-gradient">happy clients</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="p-8 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-all"
            >
              <Quote className="size-8 text-primary/40 mb-4" />
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {t.name.charAt(t.name.length - 1)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
