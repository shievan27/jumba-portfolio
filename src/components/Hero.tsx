
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-row space-x-4">
        <div className="animate-fade-in mt-12">
            <img src="./marther image.jpg" alt="Hero" className="mt-12 mx-auto w-64 h-64 rounded-full shadow-lg object-cover" />
          </div>
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Marther K. Jumba
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-bold">
              Web Developer
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Creating Digital Experiences
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm a passionate web developer who loves crafting beautiful, functional, and user-friendly websites. 
            Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="./marther-CV.docx" download>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-200 flex items-center gap-2 justify-center">
                <Download size={20} />
                Download CV
              </button>
            </a>
            <a href="#projects">
            <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-200">
              View Projects
            </button>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/shievan27" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:scale-110 transform">
              <Github size={24} />
              Github
            </a>
            <a href="https://www.linkedin.com/in/marther-jumba-7a7b14259" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:scale-110 transform">
              <Linkedin size={24} />
               linkedin
            </a>
            <a href="mailto:jumbamarther@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:scale-110 transform">
              <Mail size={24} />
              Mail
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
