import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "VueEstate",
    description: "A full-stack real estate web application with real-time messaging, interactive maps, and advanced search functionalities.",
    image: "/projects/project-1.png",
    liveSite: "https://vue-estate-vs.netlify.app/",
    github: "https://github.com/VivekSharma2003/RealEstate",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Prisma", "Socket.IO", "Cloudinary"],
  },
  {
    title: "NexCart",
    description: "A comprehensive e-commerce website featuring product management, secure checkout, and an admin portal with analytics.",
    image: "/projects/project-2.png",
    liveSite: "https://nexcart-vs.netlify.app/",
    github: "https://github.com/VivekSharma2003/NexCart.-Ecommerce",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Freelancing Website",
    description: "An online marketplace for freelance services with secure transactions, real-time messaging, and service categorization.",
    image: "/projects/project-3.png",
    liveSite: "https://fiverr-clone-vs.netlify.app/",
    github: "https://github.com/VivekSharma2003/Fiverr-clone",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"],
  },
  {
    title: "TinDog",
    description: "A front-end web application for a fictional dog dating platform, showcasing responsive design.",
    image: "/projects/project-4.png",
    liveSite: "https://viveksharma2003.github.io/TinDog-project/",
    github: "https://github.com/VivekSharma2003/TinDog-project",
    techStack: ["HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "To-Do",
    description: "A simple task management web application with intuitive UI for creating, editing, and tracking tasks.",
    image: "/projects/project-5.png",
    liveSite: "https://to-do-vs.netlify.app/",
    github: "https://github.com/VivekSharma2003/to-do",
    techStack: ["HTML5", "Tailwind", "React", "JavaScript"],
  },
  {
    title: "Currency Converter",
    description: "A web application for real-time currency conversion with support for multiple currencies.",
    image: "/projects/project-6.png",
    liveSite: "https://currency-converter-vs.netlify.app/",
    github: "https://github.com/VivekSharma2003/Currency-converter",
    techStack: ["HTML5", "Tailwind", "React", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of the projects I have worked on. I have built a diverse
            portfolio showcasing my skills and creativity.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={{ ...project, github: project.github ?? null }} />
          ))}
        </div>
      </div>
    </section>
  );
}
