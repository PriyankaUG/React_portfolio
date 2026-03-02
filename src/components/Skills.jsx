import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Java", "C++", "PHP", "JavaScript"],
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "REST APIs", "OOP", "JWT Authentication"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQL"],
    },
    {
      category: "Web & Tools",
      skills: ["React", "HTML", "CSS", "Git"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          Technical <span className="text-blue-300">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-100">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: skillIndex % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.08 }}
                    className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
