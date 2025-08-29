import React from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container-max section-padding relative z-10">
        <div className="text-center text-white animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-float">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-4xl font-bold">
                YN
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Hi, I'm <span className="text-yellow-300">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            I create beautiful, functional, and user-centered digital experiences that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="#projects" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com" className="text-white/80 hover:text-white transition-colors p-2">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white/80 hover:text-white transition-colors p-2">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-white/80 hover:text-white transition-colors p-2">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}

export default Hero