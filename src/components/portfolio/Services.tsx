import { Briefcase, Database, Share2, Search, Cloud } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Virtual Assistance",
    desc: "Email management, calendar scheduling, travel planning, and day-to-day administrative support to keep your business running smoothly.",
  },
  {
    icon: Database,
    title: "Data Entry & Admin Support",
    desc: "Accurate data entry, spreadsheet organization, file management, and reporting using Excel and Google Sheets.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Content scheduling, engagement, and profile optimization on LinkedIn, Facebook, and Instagram to grow your audience.",
  },
  {
    icon: Search,
    title: "Research & Content Support",
    desc: "Market research, lead generation, content drafting, and proofreading — delivered on time, every time.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing Support (AWS)",
    desc: "Beginner-friendly AWS support: account setup, basic configurations, and assistance with foundational cloud workflows.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Services
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            How I can <span className="text-gradient">help your business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Five focused services designed to save you time and keep your operations organized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="size-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
