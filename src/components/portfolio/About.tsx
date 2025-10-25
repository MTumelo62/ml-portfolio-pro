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
                  AI/ML Bootcamp Graduate
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
                  Deep Learning & NLP
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Certifications</h3>
                <p className="text-muted-foreground text-sm">
                  TensorFlow & AWS ML
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card">
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  I'm a passionate AI/ML engineer with expertise in building scalable machine learning solutions. 
                  Through intensive bootcamp training, I've developed a strong foundation in deep learning, 
                  natural language processing, and computer vision.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  My approach combines solid theoretical understanding with practical implementation skills. 
                  I specialize in transforming complex datasets into actionable insights and deploying production-ready 
                  ML models that drive real business value.
                </p>
                <p className="text-lg leading-relaxed">
                  Currently seeking opportunities to contribute to innovative AI projects where I can apply my skills 
                  in model development, optimization, and deployment while continuing to grow as an ML engineer.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
