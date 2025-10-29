import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "TM Car Diagnostics",
    description: "Comprehensive car diagnostics application for real-time vehicle monitoring and troubleshooting",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    technologies: ["Python", "JavaScript", "Mobile Development", "Diagnostics"],
    githubUrl: "https://github.com/MTumelo62",
    liveUrl: "https://tm-diagnostics.vercel.app/",
    documentationUrl: "/TM_Car_Diagnostics_Documentation.pdf"
  },
  {
    title: "Study Buddy",
    description: "Educational platform leveraging AI to enhance learning experiences and study efficiency",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    technologies: ["AI Tools", "ChatGPT", "Web Development", "Education"],
    githubUrl: "https://github.com/MTumelo62",
    liveUrl: "https://ai-study-buddyv2-0.vercel.app/",
    documentationUrl: "https://ai-study-buddyv2-0.vercel.app/docs"
  },
  {
    title: "Swift Analysis Tool",
    description: "Advanced data analysis platform for quick insights and comprehensive reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Web Development", "Data Analysis", "JavaScript", "Analytics"],
    githubUrl: "https://github.com/MTumelo62",
    liveUrl: "https://swift-analysis-tool.lovable.app/",
    documentationUrl: "https://swift-analysis-tool.lovable.app/docs"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Key achievements demonstrating technical skills and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
