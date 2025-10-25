import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Code, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML5", "CSS", "WordPress", "Responsive Design"]
  },
  {
    title: "Mobile Development",
    icon: Code,
    skills: ["JavaScript", "Python", "Java", "App Development"]
  },
  {
    title: "AI & Automation",
    icon: Brain,
    skills: ["Google AI", "ChatGPT", "Machine Learning", "Automation Tools"]
  },
  {
    title: "IT Support",
    icon: Wrench,
    skills: ["Technical Support", "Network Configuration", "Troubleshooting", "IT Systems"]
  }
];

export const Skills = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Proficiencies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diverse skill set spanning development, AI tools, and IT support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="skill">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
