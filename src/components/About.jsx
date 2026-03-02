import { Code, GraduationCap, Heart } from "lucide-react";
import profileImg from "../assets/img3.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground text-lg">A quick look at my journey and focus areas</p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="glass-card p-6 sm:p-8">
            <div className="rounded-2xl overflow-hidden border border-slate-700 mb-6">
              <img src={profileImg} alt="Priyanka Gaikwad" className="w-full h-80 object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Priyanka Gaikwad</h3>
            <p className="text-blue-300 font-medium mt-1">Computer Engineering Student</p>
            <p className="text-muted-foreground mt-1">Pune, Maharashtra</p>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-7">
              <div className="flex items-center mb-3">
                <GraduationCap className="w-6 h-6 text-blue-300 mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Professional Summary</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Final-year Computer Engineering student with a 9.85 CGPA and expertise in Java, Spring Boot, and REST APIs.
                Focused on building secure, scalable solutions with PostgreSQL and JWT authentication.
              </p>
            </div>

            <div className="glass-card p-7">
              <div className="flex items-center mb-3">
                <Code className="w-6 h-6 text-blue-300 mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Technical Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Java", "Spring Boot", "REST APIs", "JWT", "PostgreSQL", "MySQL", "SQL", "React", "PHP", "C++"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800 text-slate-200 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-7">
              <div className="flex items-center mb-3">
                <Heart className="w-6 h-6 text-blue-300 mr-3" />
                <h3 className="text-xl font-semibold text-foreground">What I Care About</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I care about developing useful software for real users, especially applications that improve workflows through secure APIs and clear user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
