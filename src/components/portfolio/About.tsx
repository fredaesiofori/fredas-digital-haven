import profileAsset from "@/assets/freda-profile.png.asset.json";
const profile = profileAsset.url;
import { CheckCircle2 } from "lucide-react";

const skills = [
  "AWS Cloud Practitioner",
  "Cloud Infrastructure & Automation",
  "AI Solutions & Integration",
  "Digital Marketing",
  "Virtual Assistance",
  "Data Entry & Admin Support",
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
              alt="Freda Ofori — Cloud Engineer & Digital Marketing Specialist"
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Cloud Engineer | AWS Cloud Practitioner | Digital Marketing
            Specialist | Virtual Assistant
            <br />
            <span className="text-gradient">Building Cloud, Automation & AI Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Building Cloud, Automation & AI Solutions.
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
