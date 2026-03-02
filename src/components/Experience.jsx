import { Award, Briefcase, Code2, ShieldCheck } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Farmer Social & Expert Advisory Platform",
      duration: "Project Work",
      description:
        "Engineered backend services and full-stack workflows for a social advisory platform focused on farmer collaboration.",
      achievements: [
        "Built REST APIs for authentication, users, posts, and expert workflows using Spring Boot",
        "Implemented JWT-based login and role-based authorization",
        "Integrated crop recommendation via a separate Python prediction service",
        "Delivered a responsive React interface for posts, profiles, and advisory features",
      ],
      technologies: ["React", "Spring Boot", "PostgreSQL", "JWT", "Python"],
    },
    {
      title: "Online Bonafide & Leaving Certificate System",
      duration: "Project Work",
      description:
        "Digitized certificate request and issuance workflow for institutions with scalable approval and tracking logic.",
      achievements: [
        "Developed structured 12-level approval workflow with role-based access",
        "Implemented real-time request tracking and rejection remarks",
        "Automated PDF certificate generation",
        "Built scalable PHP-MySQL backend for concurrent request handling",
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    },
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained a CGPA of 9.85 in Computer Engineering",
      icon: Award,
      color: "text-yellow-400",
    },
    {
      title: "Copyrighted Project",
      description: "Successfully developed and registered the Bonafide and Leaving Certificate System",
      icon: ShieldCheck,
      color: "text-cyan-400",
    },
    {
      title: "Backend Expertise",
      description: "Hands-on experience in Java, Spring Boot, REST APIs, JWT, and PostgreSQL",
      icon: Code2,
      color: "text-purple-400",
    },
    {
      title: "Applied Engineering",
      description: "Built production-oriented workflows for real institutional and domain use cases",
      icon: Briefcase,
      color: "text-pink-400",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Work Experience & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Key project experience and measurable outcomes
          </p>
        </div>

        <div className="mb-16 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="glass-card p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">
                  {exp.duration}
                </span>
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

              <div className="space-y-3 mb-5">
                {exp.achievements.map((item) => (
                  <p key={item} className="text-sm text-muted-foreground flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-muted-foreground text-xs rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center gradient-accent-text">Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="glass-card p-6 text-center">
                <achievement.icon className={`w-8 h-8 mx-auto mb-4 ${achievement.color}`} />
                <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
