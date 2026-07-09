import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import havenScreenshot from "@/assets/digital-haven-screenshot.png.asset.json";
import smartspendImg from "@/assets/smartspend.png.asset.json";
import eventRegImg from "@/assets/event-registration.png.asset.json";
import awsCapstoneImg from "@/assets/aws-capstone.png.asset.json";
import taskflowImg from "@/assets/taskflow.png.asset.json";

const featuredProjects = [
  {
    title: "Freda's Digital Haven",
    category: "Personal Portfolio Website",
    desc: "A modern personal portfolio showcasing my skills, services, projects, certifications, and contact information as a Virtual Assistant and aspiring Cloud Practitioner.",
    image: havenScreenshot.url,
    imageFit: "object-top" as const,
    live: "https://fredas-digital-haven.lovable.app/",
    repo: "https://github.com/fredaesiofori",
    tags: ["React", "TailwindCSS", "Responsive"],
  },
  {
    title: "SmartSpend",
    category: "Finance & Budgeting Application",
    desc: "Architected a cloud-hosted expense management application, integrating a low-code development workspace with structured version control. Built and iterated through prompt-based development in Lovable, integrated with GitHub for automated repository synchronization and version tracking, and maintained structured project documentation throughout development.",
    image: smartspendImg.url,
    imageFit: "object-center" as const,
    live: "https://smartspend905.lovable.app/",
    repo: "https://github.com/fredaesiofori",
    tags: ["Lovable", "GitHub", "Finance", "Cloud-Hosted"],
  },
  {
    title: "Event Registration System",
    category: "Full-Stack Web Application",
    desc: "A modern event discovery and booking platform for professional tech conferences and workshops. Features seamless event registrations with verified secure QR boarding passes, live PDF exports, and real-time dashboard tracking.",
    image: eventRegImg.url,
    imageFit: "object-top" as const,
    live: "https://event-registration-system-freda-creations.vercel.app?_vercel_share=32GtryuP1h2Q4yZQhuTelWTZZwQ29vLH",
    repo: "https://github.com/fredaesiofori/event-registration-system.git",
    tags: ["React", "Vercel", "QR Codes", "PDF Export"],
  },
  {
    title: "AWS Cloud Architecture Capstone",
    category: "Team Project — June 2026",
    desc: "Designed and deployed a production-style AWS architecture using CloudFront, ACM, ALB, Auto Scaling groups across multiple Availability Zones, S3 static hosting, and CloudWatch monitoring — with secure GitHub Actions CI/CD via OIDC authentication.",
    image: awsCapstoneImg.url,
    imageFit: "object-center" as const,
    live: "https://lnkd.in/dZzAeVVF",
    repo: "https://github.com/Aliu2211/azubi_capsotone_project.git",
    tags: ["AWS", "CloudFront", "ALB", "GitHub Actions"],
  },
  {
    title: "TaskFlow — Serverless Task Manager",
    category: "Personal Project — July 2026",
    desc: "A fully serverless to-do list application built entirely on AWS managed services within the Free Tier. Static frontend on Amazon S3, REST API on API Gateway + Lambda, and DynamoDB for persistent storage, with least-privilege IAM and CloudWatch monitoring.",
    image: taskflowImg.url,
    imageFit: "object-top" as const,
    live: "http://mysimple-to-do.s3-website-us-east-1.amazonaws.com",
    repo: "https://github.com/fredaesiofori",
    tags: ["AWS", "Lambda", "DynamoDB", "API Gateway", "S3"],
  },
];

const projects = [
  {
    title: "Serverless Application on AWS",
    category: "Team Project — June 2026",
    desc: "Collaborated on building a serverless AWS application using Lambda and API Gateway, with infrastructure automation and deployment of a Python-based function using Terraform.",
    tag: "Serverless",
  },
  {
    title: "Docker Containerization Project",
    category: "Personal Project — 2026",
    desc: "Containerized a task management application using Docker and Docker Compose, then deployed workloads on Amazon EC2 using Kubernetes Deployments and Services.",
    tag: "Docker",
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

        {/* Featured projects */}
        <div className="space-y-8 mb-10">
          {featuredProjects.map((featured) => (
            <div
              key={featured.title}
              className="group relative rounded-3xl overflow-hidden border border-border bg-gradient-card shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="absolute top-5 left-5 z-10 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider shadow-elegant">
                ★ Featured
              </div>
              <div className="grid lg:grid-cols-2 gap-0">
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/10] lg:aspect-auto overflow-hidden bg-secondary"
                >
                  <img
                    src={featured.image}
                    alt={`${featured.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover ${featured.imageFit} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {featured.category}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                    {featured.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {featured.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow hover:opacity-95 transition-all"
                    >
                      <a href={featured.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 size-4" /> Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-2">
                      <a href={featured.live} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowUpRight className="ml-1 size-4" />
                      </a>
                    </Button>
                    <Button asChild variant="ghost">
                      <a href={featured.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 size-4" /> GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />

              <div className="flex items-start justify-between mb-4 relative">
                <span className="text-6xl font-display font-bold text-gradient/40 opacity-30">
                  0{i + 2}
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
