import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">Your Name</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Full Stack Developer passionate about creating beautiful, functional, 
              and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end gap-2">
              Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer