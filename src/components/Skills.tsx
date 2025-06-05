
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/CSS', level: 90 },
    { name: 'C#', level: 75 },
    { name: 'ASP.NET', level: 85 },
    { name: 'PosgreSQL', level: 70 },
  ];

  const technologies = [
    'React', 'Next.js', 'Vue.js', 'Node.js', 'Express',
    'C#', 'PostgreSQL', 'Firebase', 'AWS', 'Docker',
    'CSS', 'SCSS', 'PostgreSQL', 'REST APIs', 'TypeScript'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 delay-200"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={tech}
                  className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 text-center border border-purple-500/20 hover:border-purple-400/40 transition-all duration-200 hover:scale-105"
                >
                  <span className="text-gray-300 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
