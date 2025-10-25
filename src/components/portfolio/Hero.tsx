import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Intro */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              AI/ML Engineer
              <span className="block mt-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
                Building Intelligent Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Transforming complex data into actionable insights through advanced machine learning and artificial intelligence
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
