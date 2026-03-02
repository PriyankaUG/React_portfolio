const Certificates = () => {
  const certificates = [
    {
      title: "Java Development",
      issuer: "Brainovision",
      date: "2024",
      skills: ["Java", "Core Concepts", "Application Development"],
    },
    {
      title: "Java Programming",
      issuer: "IIT Bombay (Spoken Tutorial)",
      date: "2024",
      skills: ["Java Programming", "OOP", "Problem Solving"],
    },
    {
      title: "Database Management System (DBMS)",
      issuer: "NPTEL",
      date: "2024",
      skills: ["SQL", "DBMS", "Database Design"],
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-300">Certifications</h2>
          <p className="text-gray-400 text-lg">Professional learning and technical upskilling</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert) => (
            <article key={cert.title} className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <span className="text-xs text-slate-400">{cert.date}</span>
              </div>
              <p className="text-blue-300 font-medium mb-4">{cert.issuer}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs rounded-full border border-slate-700 bg-slate-800 text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="bg-slate-900 rounded-xl p-8 text-center border border-slate-800">
          <h3 className="text-2xl font-bold mb-6 text-blue-300">Achievements</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Copyrighted Project: Successfully developed and registered the Bonafide and Leaving Certificate System.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
