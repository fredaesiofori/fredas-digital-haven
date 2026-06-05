import { useState } from "react";
import { Mail, Phone, Linkedin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const EMAIL = "fredaesiofori905@gmail.com";
const PHONE_DISPLAY = "+233 596 168 684";
const PHONE_DIGITS = "233596168684";
const LINKEDIN = "https://www.linkedin.com/in/freda-ofori-363235351";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const body = encodeURIComponent(`Hi Freda,\n\n${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New inquiry from ${name}`,
    )}&body=${body}`;
    toast.success("Opening your email app…");
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Contact
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">work together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Send a message and I'll get back within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="size-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <Mail className="size-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="font-medium text-sm break-all">{EMAIL}</div>
              </div>
            </a>

            <a
              href={`tel:+${PHONE_DIGITS}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="size-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <Phone className="size-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Phone</div>
                <div className="font-medium text-sm">{PHONE_DISPLAY}</div>
              </div>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="size-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <Linkedin className="size-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</div>
                <div className="font-medium text-sm">Freda Ofori</div>
              </div>
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 p-8 rounded-2xl bg-gradient-card border border-border shadow-soft space-y-4"
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your full name" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Tell me about your project…" className="mt-1.5" />
            </div>
            <Button
              type="submit"
              disabled={sending}
              size="lg"
              className="w-full bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow"
            >
              <Send className="mr-2 size-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>

      <a
        href={`https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent("Hi Freda, I'd like to work with you.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-transform"
      >
        <MessageCircle className="size-7" />
      </a>
    </section>
  );
}
