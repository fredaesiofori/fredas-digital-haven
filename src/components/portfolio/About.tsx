import profileAsset from "@/assets/freda-profile.png.asset.json";
const profile = profileAsset.url;

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border bg-gradient-card">
            <img
              src={profile}
              alt="Freda Ofori — Cloud & DevOps Engineer"
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
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            DevOps and Cloud Engineer with hands-on experience designing, automating, and deploying cloud-native applications on AWS. Skilled in CI/CD using GitHub Actions, Infrastructure as Code with Terraform, Docker containerization, Linux administration, Bash scripting, and cloud monitoring. Passionate about building secure, scalable, and highly available cloud infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
