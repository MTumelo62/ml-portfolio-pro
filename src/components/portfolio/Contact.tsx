import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 shadow-[var(--shadow-card)]">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl mb-4">Let's Work Together</CardTitle>
              <CardDescription className="text-lg">
                I'm actively seeking opportunities in IT development and support roles. 
                Let's connect and discuss how I can contribute to your team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="mailto:malebanetumelo62@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    const link = document.createElement('a');
                    link.href = '/Malebane_T_CV.pdf';
                    link.download = 'Malebane_T_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Resume
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="https://github.com/MTumelo62" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="https://www.linkedin.com/in/malebane-tumelo-b9b7a71a1/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Career Objective</h3>
                <p className="text-muted-foreground">
                  Seeking an IT development or technical support position where I can apply my diverse skill set 
                  in web/mobile development, AI tools, and IT support. Eager to contribute to innovative projects 
                  while continuing to expand my expertise in emerging technologies and deliver exceptional results 
                  through strong problem-solving, teamwork, and communication skills.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
