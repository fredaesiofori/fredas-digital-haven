import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "LinkedIn Content Writing Samples",
    category: "Content & Branding",
    desc: "Professional LinkedIn posts and articles crafted to grow personal brands and drive engagement.",
    tag: "Writing",
  },
  {
    title: "Data Entry & Spreadsheet Organization",
    category: "Admin Support",
    desc: "Organized customer databases and sales tracking spreadsheets with formulas, filters, and clean formatting.",
    tag: "Excel",
  },
  {
    title: "Virtual Assistant Task Simulation",
    category: "Virtual Assistance",
    desc: "End-to-end VA workflow: inbox triage, calendar booking, travel research, and client follow-ups.",
    tag: "VA",
  },
  {
    title: "AWS Cloud Practitioner Learning",
    category: "Cloud Computing",
    desc: "Hands-on AWS labs covering core services, billing, security basics, and the shared responsibility model.",
    tag: "AWS",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Portfolio
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Selected <span className="text-gradient">projects & samples</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A snapshot of recent work and learning projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-all overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />

              <div className="flex items-start justify-between mb-4 relative">
                <span className="text-6xl font-display font-bold text-gradient/40 opacity-30">
                  0{i + 1}
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                {p.tag}
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">{p.category}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
