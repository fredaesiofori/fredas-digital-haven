import { useState } from "react";
import { Award, BookOpen, Cloud, X } from "lucide-react";
import awsCert from "@/assets/aws-cert.png.asset.json";
import googleCert from "@/assets/google-ads-cert.jpg.asset.json";

const certs = [
  {
    icon: Cloud,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    status: "Completed",
    date: "May 29, 2026",
    image: awsCert.url,
  },
  {
    icon: Award,
    title: "Google Ads for Beginners",
    issuer: "Coursera",
    status: "Completed",
    date: "Jun 4, 2026",
    image: googleCert.url,
  },
  {
    icon: BookOpen,
    title: "Virtual Assistant Foundations",
    issuer: "Online Training",
    status: "Completed",
  },
];

export function Certifications() {
  const [preview, setPreview] = useState<string | null>(null);

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
          {certs.map((c) => {
            const clickable = !!c.image;
            return (
              <div
                key={c.title}
                onClick={() => c.image && setPreview(c.image)}
                className={`p-6 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-all text-center ${
                  clickable ? "cursor-pointer hover:-translate-y-1" : ""
                }`}
              >
                {c.image ? (
                  <div className="rounded-xl overflow-hidden border border-border mb-4 bg-white">
                    <img
                      src={c.image}
                      alt={`${c.title} certificate`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="size-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                    <c.icon className="size-8 text-primary-foreground" />
                  </div>
                )}
                <h3 className="font-semibold mb-1">{c.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">
                  {c.issuer}
                  {c.date ? ` • ${c.date}` : ""}
                </div>
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
            );
          })}
        </div>
      </div>

      {preview && (
        <div
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-lg flex items-center justify-center p-6 animate-fade-in-up"
        >
          <button
            onClick={() => setPreview(null)}
            aria-label="Close"
            className="absolute top-6 right-6 size-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary"
          >
            <X className="size-5" />
          </button>
          <img
            src={preview}
            alt="Certificate preview"
            decoding="async"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-elegant border border-border"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
