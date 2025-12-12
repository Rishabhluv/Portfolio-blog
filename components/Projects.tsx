import { ProjectCard } from "./ProjectCard";
import { Separator } from "./ui/separator";

const projects = [
  {
    name: "Food Order App",
    icon: "/food.png",
    description:
      "A full-stack MERN food-ordering application with secure authentication, responsive UI, and complete order history. Built using React, Node.js, Express, and MongoDB with MVC architecture.",
    liveLink: "https://mynewapp-sepia.vercel.app/",
    githubLink: "https://github.com/Rishabhluv/mynewapp",
  },
  {
    name: "Music App",
    icon: "/music.png",
    description:
      "A simple and interactive music player website built with HTML, CSS, and JavaScript featuring seamless playback and 9 curated audio tracks.",
    liveLink: "https://rishabhluv.github.io/spotify-clone/",
    githubLink: "https://github.com/Rishabhluv/spotify-clone",
  },
  {
    name: "Job Portal",
    icon: "/job.png",
    description:
      "A modern job portal built with React, Tailwind, and Shadcn UI. Includes job posting, secure auth, API integration, and a clean responsive design.",
    liveLink: "https://job-app-berlin.vercel.app/",
    githubLink: "https://github.com/Rishabhluv/Job-App",
  },
];


const Projects = () => {
  return (
    <div className="space-y-6 px-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      </div>
      <Separator className="my-6" />
      <div className="grid sm:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.name} projectInfo={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
