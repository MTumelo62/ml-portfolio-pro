import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Target } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Passionate about leveraging AI to solve real-world problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced Digital Skills IT Programme (2025)<br/>
                  NC: IT Systems Development NQF Level 5 (2020)
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Focus Areas</h3>
                <p className="text-muted-foreground text-sm">
                  AI Tools & Web/Mobile Development
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Experience</h3>
                <p className="text-muted-foreground text-sm">
                  CAPACITI, CAPENEXIS, Capricorn College
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card">
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  I'm a dedicated IT professional currently enrolled in the Advanced Digital Skills IT Programme (2025), 
                  with a strong foundation in systems development (NQF Level 5, 2020). My expertise spans web and mobile 
                  development, AI automation tools, and comprehensive IT support.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  With hands-on experience at CAPACITI, CAPENEXIS Data Solutions as a Facilitator Assistant (2020-2023), 
                  and Capricorn College for TVET as an IT Technician (2018), I bring a unique blend of technical skills 
                  and practical problem-solving abilities. I excel in time management, communication, teamwork, and 
                  emotional intelligence.
                </p>
                <p className="text-lg leading-relaxed">
                  I'm passionate about leveraging modern technologies including HTML5, CSS, WordPress, JavaScript, Python, 
                  and Java, alongside AI tools like Google AI and ChatGPT to create innovative solutions and provide 
                  excellent technical support.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
