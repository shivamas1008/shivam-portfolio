import React from 'react'
import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Focus",
      description: "Creating beautiful and intuitive user interfaces"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing for speed and user experience"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a full-stack developer with over 5 years of experience building web applications. 
              I specialize in React, TypeScript, and modern web technologies, with a strong focus on 
              creating user-centered solutions.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community through blog posts and talks.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                React Expert
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                UI/UX Design
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About