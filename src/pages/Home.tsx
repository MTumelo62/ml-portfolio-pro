import { Hero } from "@/components/portfolio/Hero";
import { Navigation } from "@/components/portfolio/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
    </div>
  );
};

export default Home;
