import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "AI Image Classification System",
    description: "Built a CNN-based image classification model achieving 95% accuracy on custom dataset. Deployed using Flask API with real-time predictions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    technologies: ["Python", "TensorFlow", "Keras", "Flask", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com"
  },
  {
    title: "Natural Language Processing Chatbot",
    description: "Developed an intelligent chatbot using transformer models and fine-tuned BERT for domain-specific conversations with 92% user satisfaction.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    technologies: ["Python", "PyTorch", "BERT", "FastAPI", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com"
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Created an end-to-end ML pipeline for customer churn prediction with interactive visualizations. Reduced churn by 23% through actionable insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Python", "Scikit-learn", "Pandas", "Plotly", "Streamlit"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com"
  }
];

export const Projects = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative AI/ML solutions built during my bootcamp journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
