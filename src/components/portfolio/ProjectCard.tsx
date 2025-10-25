import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 overflow-hidden border-border">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-[var(--gradient-card)]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="skill">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-3">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button variant="default" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
