import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Certifications } from "@/components/portfolio/Certifications";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Freda Ofori — Virtual Assistant & Aspiring Cloud Practitioner" },
      {
        name: "description",
        content:
          "Freda Ofori — Virtual Assistant and aspiring AWS Cloud Practitioner helping businesses stay organized, productive, and efficient with digital tools.",
      },
      { property: "og:title", content: "Freda Ofori — Virtual Assistant & Cloud Practitioner" },
      {
        property: "og:description",
        content:
          "Helping businesses stay organized, productive, and efficient using digital tools and cloud technologies. Explore featured projects including SmartSpend, TaskFlow, and AWS Cloud Architecture Capstone.",
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
      { property: "og:image:alt", content: "Freda Ofori — Virtual Assistant & Cloud Practitioner portfolio preview" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Freda Ofori — Virtual Assistant & Cloud Practitioner" },
      {
        name: "twitter:description",
        content:
          "Helping businesses stay organized, productive, and efficient with digital tools and cloud technologies.",
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
        <About />
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
