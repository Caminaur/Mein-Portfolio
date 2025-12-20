import { useEffect, useState } from "react";
import { HeroSection } from "../sections/Hero";
import { FormSection } from "../sections/Form";
import { ProjectSection } from "../sections/Projects";
import { AboutMeSection } from "../sections/AboutMe";
import { FooterSection } from "../sections/Footer";
import { EngineeringHabits } from "../sections/Engineering-habits";

export const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="h-full w-full">
      <HeroSection />
      <AboutMeSection />
      <ProjectSection projects={projects} />
      <EngineeringHabits />
      <FormSection />
      <FooterSection />
    </div>
  );
};
