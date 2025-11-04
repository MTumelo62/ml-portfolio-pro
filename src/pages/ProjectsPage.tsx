import { Projects } from "@/components/portfolio/Projects";
import { Navigation } from "@/components/portfolio/Navigation";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
