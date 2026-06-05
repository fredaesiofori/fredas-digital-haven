import { Award, BookOpen, Cloud } from "lucide-react";

const certs = [
  {
    icon: Cloud,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "In Progress",
  },
  {
    icon: BookOpen,
    title: "Virtual Assistant Foundations",
    issuer: "Online Training",
    status: "Completed",
  },
  {
    icon: Award,
    title: "Google Workspace Essentials",
    issuer: "Online Training",
    status: "Completed",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Certifications
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Always <span className="text-gradient">learning, always growing</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-all text-center"
            >
              <div className="size-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                <c.icon className="size-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <div className="text-sm text-muted-foreground mb-3">{c.issuer}</div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  c.status === "In Progress"
                    ? "bg-accent/15 text-accent-foreground border border-accent/30"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
