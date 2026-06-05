import profile from "@/assets/profile.jpg";
import { CheckCircle2 } from "lucide-react";

const skills = [
  "Virtual Assistance",
  "Data Entry & Admin Support",
  "Microsoft Office (Word, Excel, PowerPoint)",
  "Google Workspace",
  "Social Media Management",
  "Basic Cloud Computing (AWS)",
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border bg-gradient-card">
            <img
              src={profile}
              alt="Freda Ofori — Virtual Assistant"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Detail-oriented freelancer
            <br />
            <span className="text-gradient">passionate about productivity</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I'm a detail-oriented freelancer passionate about virtual assistance,
            data management, and cloud computing. I help businesses stay organized
            and efficient using modern digital tools — so founders and teams can
            focus on what matters most.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <div key={s} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
