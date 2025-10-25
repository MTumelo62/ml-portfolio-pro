import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "TM Car Diagnostics",
    description: "Comprehensive car diagnostics application for real-time vehicle monitoring and troubleshooting",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    technologies: ["Python", "JavaScript", "Mobile Development", "Diagnostics"],
    githubUrl: "https://github.com",
    liveUrl: "#"
  },
  {
    title: "Study Buddy",
    description: "Educational platform leveraging AI to enhance learning experiences and study efficiency",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    technologies: ["AI Tools", "ChatGPT", "Web Development", "Education"],
    githubUrl: "https://github.com",
    liveUrl: "#"
  }
];

export const Projects = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Key achievements demonstrating technical skills and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
