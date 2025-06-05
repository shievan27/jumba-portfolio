
import React from 'react';
import { Code, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate web developer with a love for creating beautiful and functional digital experiences. 
              With years of experience in modern web technologies, I specialize in building responsive, 
              user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code 
              and always strive to deliver exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Code className="text-purple-400" size={24} />
                </div>
                <p className="text-sm text-gray-400">Clean Code</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Lightbulb className="text-purple-400" size={24} />
                </div>
                <p className="text-sm text-gray-400">Innovation</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Coffee className="text-purple-400" size={24} />
                </div>
                <p className="text-sm text-gray-400">Dedication</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=500&fit=crop&crop=face" 
                alt="Developer workspace" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
