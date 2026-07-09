import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Certifications } from "@/components/portfolio/Certifications";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Freda Ofori — Cloud Engineer | AWS Cloud Practitioner | Digital Marketing Specialist | Virtual Assistant" },
      {
        name: "description",
        content:
          "Freda Ofori — Cloud Engineer, AWS Cloud Practitioner, Digital Marketing Specialist and Virtual Assistant building cloud, automation, and AI solutions for businesses.",
      },
      { property: "og:title", content: "Freda Ofori — Cloud Engineer | AWS Cloud Practitioner | Digital Marketing Specialist | Virtual Assistant" },
      {
        property: "og:description",
        content:
          "Cloud, automation, and AI solutions that help businesses stay organized, productive, and efficient. Explore featured projects including SmartSpend, TaskFlow, Digital Haven, and AWS Cloud Architecture Capstone.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://fredas-digital-haven.lovable.app/" },
      { property: "og:site_name", content: "Freda Ofori Portfolio" },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/dXpVpJFg7Fe4hgPpP3Z4eT21em82/social-images/social-1782042374641-file_00000000fb3471f492e5d3678802024a.webp",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Freda Ofori — Cloud Engineer, Digital Marketing Specialist & Virtual Assistant portfolio preview" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Freda Ofori — Cloud Engineer | AWS Cloud Practitioner | Digital Marketing Specialist | Virtual Assistant" },
      {
        name: "twitter:description",
        content:
          "Cloud, automation, and AI solutions that help businesses stay organized, productive, and efficient.",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/dXpVpJFg7Fe4hgPpP3Z4eT21em82/social-images/social-1782042374641-file_00000000fb3471f492e5d3678802024a.webp",
      },
      { name: "twitter:image:alt", content: "Freda Ofori portfolio preview" },
    ],
    links: [
      { rel: "canonical", href: "https://fredas-digital-haven.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
