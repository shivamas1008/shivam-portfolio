'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Zap, Shield, Code, Server, Globe, Star, GitBranch, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

const Projects = () => {
  // State to track if component has mounted (client-side only)
  const [isMounted, setIsMounted] = useState(false);
  
  // Pre-defined particle configurations to avoid random generation during SSR
  const particleConfigs = [
    { left: 27.87, top: 34.04, width: 1.3, height: 2.01, colorIndex: 0 },
    { left: 77.88, top: 68.6, width: 3.65, height: 2.95, colorIndex: 1 },
    { left: 43.5, top: 28.87, width: 2.64, height: 1.44, colorIndex: 2 },
    { left: 27.89, top: 44.49, width: 3.93, height: 1.76, colorIndex: 3 },
    { left: 11.56, top: 39.03, width: 1.71, height: 3.13, colorIndex: 0 },
    { left: 65.99, top: 53.36, width: 1.43, height: 1.37, colorIndex: 1 },
    { left: 91.16, top: 85.74, width: 2.32, height: 3.22, colorIndex: 2 },
    { left: 67.05, top: 52.56, width: 2.54, height: 2.6, colorIndex: 3 },
    { left: 28.68, top: 99.64, width: 1.74, height: 3.16, colorIndex: 0 },
    { left: 21.68, top: 14.05, width: 1.37, height: 2.79, colorIndex: 1 },
    { left: 4.78, top: 30.85, width: 1.62, height: 1.03, colorIndex: 2 },
    { left: 54.14, top: 75.93, width: 3.66, height: 1.73, colorIndex: 3 },
    { left: 98.88, top: 93.46, width: 1.81, height: 3.03, colorIndex: 0 },
    { left: 35.9, top: 18.0, width: 3.63, height: 3.69, colorIndex: 1 },
    { left: 44.72, top: 95.49, width: 1.84, height: 2.21, colorIndex: 2 },
    { left: 24.1, top: 27.7, width: 2.75, height: 1.43, colorIndex: 3 },
    { left: 82.72, top: 77.3, width: 1.81, height: 3.3, colorIndex: 0 },
    { left: 46.01, top: 94.5, width: 1.8, height: 2.4, colorIndex: 1 }
  ];

  const particleColors = [
    'rgba(var(--primary), 0.4)',
    'rgba(147, 51, 234, 0.4)',
    'rgba(34, 197, 94, 0.4)',
    'rgba(59, 130, 246, 0.4)'
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = [
    {
      title: 'E-Commerce API Platform',
      description: 'Scalable Django REST API handling 100k+ daily requests with advanced caching, real-time notifications, and comprehensive payment integration.',
      tech: ['Django', 'PostgreSQL', 'Redis', 'Celery', 'AWS'],
      features: ['RESTful API Design', 'Real-time WebSockets', 'Payment Processing', 'Advanced Caching'],
      github: 'https://github.com/shivambhardwaj/ecommerce-api',
      demo: 'https://api.ecommerce-demo.com',
      icon: Database,
      color: 'text-blue-500',
      bgGradient: 'from-blue-500/10 via-cyan-500/10 to-blue-600/10',
      stats: { stars: '156', forks: '42', views: '2.3k' }
    },
    {
      title: 'FastAPI Microservices',
      description: 'High-performance microservices architecture built with FastAPI, featuring async processing, comprehensive testing, and containerized deployment.',
      tech: ['FastAPI', 'MongoDB', 'Docker', 'pytest', 'Kubernetes'],
      features: ['Async Processing', 'Auto Documentation', 'Container Orchestration', 'Load Balancing'],
      github: 'https://github.com/shivambhardwaj/fastapi-microservices',
      demo: 'https://fastapi-demo.herokuapp.com',
      icon: Zap,
      color: 'text-green-500',
      bgGradient: 'from-green-500/10 via-emerald-500/10 to-green-600/10',
      stats: { stars: '89', forks: '28', views: '1.8k' }
    },
    {
      title: 'Frappe ERP Extension',
      description: 'Custom Frappe framework modules for enterprise resource planning with advanced reporting, workflow automation, and third-party integrations.',
      tech: ['Frappe', 'MariaDB', 'JavaScript', 'Python', 'Docker'],
      features: ['Custom Doctypes', 'Workflow Engine', 'Report Builder', 'API Integrations'],
      github: 'https://github.com/shivambhardwaj/frappe-erp-extension',
      demo: 'https://erp-demo.example.com',
      icon: Shield,
      color: 'text-purple-500',
      bgGradient: 'from-purple-500/10 via-violet-500/10 to-purple-600/10',
      stats: { stars: '203', forks: '67', views: '3.1k' }
    }
  ];

  // Floating background elements
  const floatingElements = [
    { icon: Code, x: '8%', y: '12%', delay: 0, size: 45 },
    { icon: Server, x: '88%', y: '18%', delay: 1.2, size: 50 },
    { icon: Globe, x: '12%', y: '78%', delay: 2.1, size: 40 },
    { icon: GitBranch, x: '85%', y: '82%', delay: 0.7, size: 38 },
    { icon: Database, x: '50%', y: '8%', delay: 1.8, size: 42 },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced floating background elements */}
      {floatingElements.map(({ icon: Icon, x, y, delay, size }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -120 }}
          animate={{ 
            opacity: [0, 0.12, 0.06, 0.1], 
            scale: [0, 1.4, 1, 1.2], 
            rotate: [0, 360, 720],
            y: [0, -25, 0, -18, 0],
            x: [0, 8, 0, -4, 0]
          }}
          transition={{ 
            delay,
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute floating"
          style={{ left: x, top: y }}
        >
          <Icon size={size} className="text-primary/8" />
        </motion.div>
      ))}

      {/* Enhanced particle system - only render on client side */}
      {isMounted && particleConfigs.map((config, i) => (
        <motion.div
          key={`project-particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${config.left}%`,
            top: `${config.top}%`,
            width: `${config.width}px`,
            height: `${config.height}px`,
            background: particleColors[config.colorIndex]
          }}
          animate={{
            y: [0, -50, 0, -35, 0],
            x: [0, (i % 2 === 0 ? 15 : -15), 0],
            opacity: [0.2, 0.9, 0.3, 0.7, 0.2],
            scale: [1, 2, 1, 1.5, 1],
          }}
          transition={{
            delay: i * 0.15,
            duration: 5 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <motion.div
            initial={{ scale: 0.2, opacity: 0, rotateX: -90 }}
            whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-block relative mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold gradient-text relative">
              Featured Projects
              
              {/* Enhanced decorative elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -top-6 -right-14 w-10 h-10 border-2 border-primary/40 rounded-lg rotate-45"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  y: [0, -10, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-3 -left-12 w-8 h-8 bg-primary/30 rounded-full"
              />
              <motion.div
                animate={{ 
                  rotate: 180,
                  scale: [1.3, 1, 1.3],
                  x: [0, 8, 0]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/2 -right-20 w-6 h-6 bg-green-500/40 rotate-45"
              />
              <motion.div
                animate={{ 
                  rotate: -90,
                  scale: [1, 1.5, 1],
                  y: [0, 5, 0]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/4 -left-16 w-4 h-4 bg-blue-500/40 rounded-full"
              />
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-r from-muted-foreground via-primary/90 to-muted-foreground bg-[length:200%_200%] bg-clip-text text-transparent"
            >
              Showcasing some of my best backend development work, from scalable APIs to complex microservices architecture.
            </motion.span>
          </motion.p>

          {/* Animated progress line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "180px", opacity: 1 }}
            transition={{ delay: 1.2, duration: 2.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary via-green-500 to-purple-500 mx-auto mt-10 rounded-full"
          />
        </motion.div>

        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ 
                delay: index * 0.25, 
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 3,
                rotateX: 3,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
              }}
              className="relative group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Enhanced background gradient effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.25 + 0.6, duration: 1.2 }}
                viewport={{ once: true }}
                className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700 -m-3`}
              />

              {/* Main card */}
              <div className="glass-card p-8 rounded-xl relative z-10 backdrop-blur-xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500 h-full">
                {/* Enhanced header with animated icon */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.25 + 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center mb-6 relative"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 1.2
                    }}
                    className={`p-3 rounded-lg bg-gradient-to-br ${project.bgGradient} mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <project.icon className={`${project.color} group-hover:scale-125 transition-all duration-300`} size={32} />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Project stats */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.25 + 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground"
                    >
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-yellow-500" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch size={12} className="text-blue-500" />
                        <span>{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={12} className="text-green-500" />
                        <span>{project.stats.views}</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Enhanced description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.25 + 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground mb-6 leading-relaxed text-sm line-clamp-4"
                >
                  {project.description}
                </motion.p>

                {/* Enhanced features section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.25 + 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <h4 className="text-sm font-bold text-primary mb-3 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-2 h-2 bg-primary rounded-full mr-2"
                    />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <motion.span 
                        key={idx} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.25 + 0.8 + (idx * 0.1), duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="text-xs bg-secondary/30 hover:bg-secondary/50 px-3 py-1.5 rounded-md font-medium transition-all duration-200 cursor-pointer border border-primary/10 hover:border-primary/30"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced tech stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.25 + 0.8, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: index * 0.25 + 1 + (idx * 0.1), 
                          duration: 0.6,
                          type: "spring",
                          stiffness: 150
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -2,
                          boxShadow: "0 5px 15px rgba(var(--primary), 0.3)"
                        }}
                        className="px-3 py-1.5 bg-primary/20 text-primary text-xs rounded-full font-semibold cursor-pointer transition-all duration-300 border border-primary/20 hover:border-primary/40"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.25 + 1.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex space-x-4"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg glass-card border border-primary/10 hover:border-primary/30 group/btn"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Github size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 10px 20px rgba(var(--primary), 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 text-sm font-semibold bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 px-4 py-2 rounded-lg border border-primary/20 hover:border-primary/40 group/btn"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <span>Demo</span>
                  </motion.a>
                </motion.div>

                {/* Hover effect particles */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.5 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute bottom-4 left-4 w-2 h-2 bg-green-500 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.6 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 relative"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 20px 40px rgba(var(--primary), 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(var(--primary), 0.2)",
                "0 0 30px rgba(var(--primary), 0.4)",
                "0 0 20px rgba(var(--primary), 0.2)"
              ]
            }}
            transition={{ 
              boxShadow: { duration: 3, repeat: Infinity },
              hover: { duration: 0.3 }
            }}
            className="glass-card px-12 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 border border-primary/20 hover:border-primary/40 relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative z-10">View All Projects on GitHub</span>
          </motion.button>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative"
            >
              <div className="w-24 h-24 border-2 border-primary/30 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.4, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-12 h-12 bg-gradient-to-br from-primary/50 to-purple-500/50 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.6, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-6 h-6 bg-white rounded-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;