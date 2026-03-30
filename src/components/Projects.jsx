import { motion } from "framer-motion";
import { ExternalLink, Github, Layers3, ShoppingCart, Users } from "lucide-react";

const projects = [
  {
    title: "Farmer Social & Expert Advisory Platform",
    description:
      "Built a full-stack platform to support farmers with social networking and expert advisory features.",
    icon: Users,
    technologies: ["React", "Spring Boot", "PostgreSQL", "JWT", "Python Service"],
    highlights: [
      "REST APIs for authentication, user management, posts, and expert workflows",
      "JWT login with role-based access control",
      "Integrated crop recommendation module via Python prediction service",
      "Responsive React frontend for posts, profiles, and advisory features",
    ],
    github: "https://github.com/PriyankaUG",
    live: "#",
    status: "Featured",
  },
  {
    title: "Patient Management System",
    description: "Hospital workflow for handling patient records, doctors, appointments, and visit history.",
    icon: Users,
    technologies: ["PHP", "MySQL", "jQuery"],
    highlights: ["Patient Records", "Doctor Management", "Appointments"],
    github: "https://github.com/PriyankaUG/patient-management",
    live: "https://patientmanagement.free.nf/",
    status: "Live",
  },
  {
    title: "Farmer's Market Web App",
    description: "Marketplace where farmers manage listings and buyers browse produce and place requests.",
    icon: ShoppingCart,
    technologies: ["PHP", "MySQL", "JavaScript"],
    highlights: ["Farmer Registration", "Product Listings", "Order Workflow"],
    github: "https://github.com/PriyankaUG/farmers-market",
    live: "#",
    status: "Prototype",
  },
  {
    title: "Online Bonafide & Leaving Certificate System",
    description:
      "Web-based certificate management system to digitize Bonafide and Leaving Certificate requests.",
    icon: Layers3,
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Structured 12-level approval workflow",
      "Role-based access and real-time status tracking",
      "Automated PDF certificate generation with rejection remarks",
      "Scalable backend for concurrent student and staff requests",
    ],
    github: "https://github.com/PriyankaUG/bonafide-system",
    live: "https://certidesk.gt.tc",
    status: "Live",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <div className="project-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 sm:mb-12"
        >
          <p className="project-kicker">Projects / Work Experience</p>
          <h2 className="project-heading">Projects That Solve Real Problems</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="project-mini"
            >
              <div className="flex items-start justify-between mb-4">
                <project.icon className="w-6 h-6 text-blue-300" />
                <span className="text-[11px] uppercase tracking-wider text-slate-400">{project.status}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-1.5 mb-5">
                {project.highlights.map((item) => (
                  <p key={item} className="text-xs text-slate-400 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-2" />
                    {item}
                  </p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 project-btn-muted text-sm py-2.5 px-3">
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 project-btn-primary text-sm py-2.5 px-3">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
