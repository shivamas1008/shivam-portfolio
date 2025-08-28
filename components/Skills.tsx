'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code2, Database, Server, Terminal, Cpu, Layers, Zap, Settings } from 'lucide-react';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});
  const [isClient, setIsClient] = useState(false);

  const particleConfigs = [
    { left: 66.31, top: 30.89, width: 5.59, height: 4.91, colorIndex: 0 },
    { left: 63.89, top: 60.91, width: 3.14, height: 4.79, colorIndex: 1 },
    { left: 92.50, top: 78.65, width: 3.59, height: 5.91, colorIndex: 2 },
    { left: 96.46, top: 63.89, width: 5.54, height: 5.77, colorIndex: 0 },
    { left: 50.28, top: 58.76, width: 3.63, height: 2.10, colorIndex: 1 },
    { left: 35.62, top: 2.65, width: 3.41, height: 3.75, colorIndex: 2 },
    { left: 34.65, top: 1.15, width: 4.83, height: 5.22, colorIndex: 0 },
    { left: 51.94, top: 86.86, width: 3.85, height: 2.08, colorIndex: 1 },
    { left: 5.39, top: 56.58, width: 5.22, height: 5.99, colorIndex: 2 },
    { left: 26.93, top: 72.84, width: 3.09, height: 5.09, colorIndex: 0 },
    { left: 43.60, top: 5.58, width: 5.11, height: 2.42, colorIndex: 1 },
    { left: 48.54, top: 50.49, width: 2.46, height: 3.37, colorIndex: 2 },
    { left: 91.16, top: 95.14, width: 5.36, height: 4.99, colorIndex: 0 },
    { left: 45.93, top: 18.30, width: 3.50, height: 2.11, colorIndex: 1 },
    { left: 37.73, top: 30.55, width: 2.09, height: 3.35, colorIndex: 2 }
  ];

  const skillCategories = [
    {
      title: 'Backend Frameworks',
      icon: Code2,
      skills: [
        { name: 'Django', level: 95, color: 'bg-green-500', glowColor: 'shadow-green-500/30' },
        { name: 'FastAPI', level: 90, color: 'bg-blue-500', glowColor: 'shadow-blue-500/30' },
        { name: 'Frappe', level: 85, color: 'bg-orange-500', glowColor: 'shadow-orange-500/30' },
        { name: 'Flask', level: 80, color: 'bg-red-500', glowColor: 'shadow-red-500/30' }
      ],
      bgGradient: 'from-green-500/10 via-blue-500/10 to-orange-500/10'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 90, color: 'bg-blue-600', glowColor: 'shadow-blue-600/30' },
        { name: 'MongoDB', level: 85, color: 'bg-green-600', glowColor: 'shadow-green-600/30' },
        { name: 'Redis', level: 80, color: 'bg-red-600', glowColor: 'shadow-red-600/30' },
        { name: 'MySQL', level: 75, color: 'bg-orange-600', glowColor: 'shadow-orange-600/30' }
      ],
      bgGradient: 'from-blue-600/10 via-green-600/10 to-red-600/10'
    },
    {
      title: 'DevOps & Tools',
      icon: Server,
      skills: [
        { name: 'Docker', level: 85, color: 'bg-cyan-500', glowColor: 'shadow-cyan-500/30' },
        { name: 'AWS', level: 80, color: 'bg-yellow-500', glowColor: 'shadow-yellow-500/30' },
        { name: 'Git', level: 95, color: 'bg-purple-500', glowColor: 'shadow-purple-500/30' },
        { name: 'Celery', level: 85, color: 'bg-green-400', glowColor: 'shadow-green-400/30' }
      ],
      bgGradient: 'from-cyan-500/10 via-yellow-500/10 to-purple-500/10'
    }
  ];

  // Floating background elements
  const floatingElements = [
    { icon: Terminal, x: '8%', y: '15%', delay: 0, size: 50 },
    { icon: Cpu, x: '85%', y: '20%', delay: 1.5, size: 45 },
    { icon: Layers, x: '12%', y: '75%', delay: 2.5, size: 55 },
    { icon: Settings, x: '88%', y: '80%', delay: 0.8, size: 40 },
    { icon: Zap, x: '50%', y: '10%', delay: 1.2, size: 35 },
  ];

  // Set isClient to true after mount to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      const skillsObj: { [key: string]: number } = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          skillsObj[skill.name] = skill.level;
        });
      });
      setAnimatedSkills(skillsObj);
    }, 800);

    return () => clearTimeout(timer);
  }, [isClient]);

  const getParticleColor = (colorIndex: number) => {
    switch (colorIndex) {
      case 0: return 'rgba(var(--primary), 0.4)';
      case 1: return 'rgba(147, 51, 234, 0.4)';
      case 2: return 'rgba(34, 197, 94, 0.4)';
      default: return 'rgba(var(--primary), 0.4)';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-background/50 relative overflow-hidden">
      {/* Enhanced floating background elements - only render on client */}
      {isClient && floatingElements.map(({ icon: Icon, x, y, delay, size }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -90 }}
          animate={{ 
            opacity: [0, 0.15, 0.08, 0.12], 
            scale: [0, 1.3, 1, 1.1], 
            rotate: [0, 360, 720],
            y: [0, -20, 0, -15, 0],
            x: [0, 10, 0, -5, 0]
          }}
          transition={{ 
            delay,
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute floating"
          style={{ left: x, top: y }}
        >
          <Icon size={size} className="text-primary/10" />
        </motion.div>
      ))}

      {/* Enhanced particle system with fixed positions */}
      {isClient && particleConfigs.map((config, i) => (
        <motion.div
          key={`skills-particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${config.left}%`,
            top: `${config.top}%`,
            width: `${config.width}px`,
            height: `${config.height}px`,
            background: getParticleColor(config.colorIndex)
          }}
          animate={{
            y: [0, -40, 0, -25, 0],
            x: [0, (i % 2 === 0 ? 10 : -10), 0],
            opacity: [0.2, 0.8, 0.3, 0.6, 0.2],
            scale: [1, 1.8, 1, 1.4, 1],
          }}
          transition={{
            delay: i * 0.2,
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced header section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <motion.div
            initial={{ scale: 0.3, opacity: 0, rotateX: -90 }}
            whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-block relative mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold gradient-text relative">
              Skills & Technologies
              
              {/* Animated decorative elements - only show on client */}
              {isClient && (
                <>
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 12, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute -top-4 -right-12 w-8 h-8 border-2 border-primary/40 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      rotate: -360,
                      y: [0, -8, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -bottom-2 -left-10 w-6 h-6 bg-primary/30 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      rotate: 180,
                      scale: [1.2, 1, 1.2],
                      x: [0, 5, 0]
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      x: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-1/2 -right-16 w-4 h-4 bg-purple-500/40 rotate-45"
                  />
                </>
              )}
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {isClient ? (
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-r from-muted-foreground via-primary/90 to-muted-foreground bg-[length:200%_200%] bg-clip-text text-transparent"
              >
                My technical expertise spans across modern backend technologies, databases, and DevOps tools.
              </motion.span>
            ) : (
              <span className="text-muted-foreground">
                My technical expertise spans across modern backend technologies, databases, and DevOps tools.
              </span>
            )}
          </motion.p>

          {/* Animated progress line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "150px", opacity: 1 }}
            transition={{ delay: 1, duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary via-purple-500 to-green-500 mx-auto mt-10 rounded-full"
          />
        </motion.div>

        {/* Enhanced skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: categoryIndex * 0.3, 
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                rotateY: 2,
                rotateX: 2
              }}
              className="relative group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Background gradient effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: categoryIndex * 0.3 + 0.5, duration: 1 }}
                viewport={{ once: true }}
                className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700 -m-2`}
              />

              <div className="glass-card p-8 rounded-xl relative z-10 backdrop-blur-xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500">
                {/* Enhanced header with icon */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.3 + 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-8 relative"
                >
                  {/* Animated icon */}
                  <motion.div
                    animate={isClient ? { 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={isClient ? { 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: categoryIndex * 0.8
                    } : {}}
                    className="inline-block mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-500"
                  >
                    <category.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  {/* Decorative underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ delay: categoryIndex * 0.3 + 0.8, duration: 1 }}
                    viewport={{ once: true }}
                    className="h-0.5 bg-primary/50 mx-auto mt-2 rounded-full"
                  />
                </motion.div>

                {/* Enhanced skills list */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30, scale: 0.9 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        delay: categoryIndex * 0.3 + skillIndex * 0.15, 
                        duration: 0.8,
                        type: "spring",
                        stiffness: 120
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        x: 5
                      }}
                      className="space-y-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <motion.span 
                          className="text-sm font-semibold"
                          whileHover={{ color: "rgba(var(--primary))" }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span 
                          className="text-xs text-muted-foreground font-mono bg-secondary/30 px-2 py-1 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: categoryIndex * 0.3 + skillIndex * 0.15 + 0.5, 
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          {animatedSkills[skill.name] || 0}%
                        </motion.span>
                      </div>
                      
                      {/* Enhanced progress bar */}
                      <div className="relative">
                        <div className="w-full bg-secondary/20 rounded-full h-2.5 overflow-hidden">
                          {/* Background glow effect */}
                          <motion.div
                            className={`absolute inset-0 ${skill.color} opacity-20 blur-sm`}
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${animatedSkills[skill.name] || 0}%` 
                            }}
                            transition={{ 
                              delay: categoryIndex * 0.3 + skillIndex * 0.15 + 0.8, 
                              duration: 1.5,
                              ease: "easeOut"
                            }}
                          />
                          
                          {/* Main progress bar */}
                          <motion.div
                            className={`h-2.5 rounded-full ${skill.color} relative overflow-hidden`}
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${animatedSkills[skill.name] || 0}%` 
                            }}
                            transition={{ 
                              delay: categoryIndex * 0.3 + skillIndex * 0.15 + 0.8, 
                              duration: 1.5,
                              ease: "easeOut"
                            }}
                          >
                            {/* Shimmer effect */}
                            {isClient && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  ease: "easeInOut",
                                  delay: categoryIndex * 0.3 + skillIndex * 0.15 + 2
                                }}
                              />
                            )}
                          </motion.div>
                        </div>
                        
                        {/* Floating skill level indicator */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: categoryIndex * 0.3 + skillIndex * 0.15 + 1.8, 
                            duration: 0.5
                          }}
                          className="absolute -top-8 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-md font-semibold"
                          style={{ left: `${Math.max(0, Math.min(85, (animatedSkills[skill.name] || 0) - 5))}%` }}
                        >
                          {animatedSkills[skill.name] || 0}%
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-2 border-r-2 border-t-4 border-transparent border-t-primary/90"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced additional technologies section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          {/* Section header */}
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center gradient-text mb-10"
          >
            Additional Technologies & Methodologies
          </motion.h3>

          {/* Enhanced tech pills grid */}
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {['Python', 'REST APIs', 'GraphQL', 'WebSockets', 'Microservices', 'CI/CD', 'TDD', 'System Design'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 1.6 + (index * 0.1), 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  rotateX: 10,
                  boxShadow: "0 10px 30px rgba(var(--primary), 0.3)"
                }}
                className="px-6 py-3 glass-card rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:bg-primary/5 relative group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {isClient && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <span className="relative z-10">{tech}</span>
                
                {/* Hover effect sparkles */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.6 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-500 rounded-full"
                />
              </motion.span>
            ))}
          </div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 1.2 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <motion.div
              animate={isClient ? { 
                rotate: 360,
                scale: [1, 1.2, 1]
              } : {}}
              transition={isClient ? { 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              } : {}}
              className="relative"
            >
              <div className="w-20 h-20 border-2 border-primary/30 rounded-full flex items-center justify-center">
                <motion.div
                  animate={isClient ? { 
                    rotate: -360,
                    scale: [1, 1.3, 1]
                  } : {}}
                  transition={isClient ? { 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  } : {}}
                  className="w-10 h-10 bg-gradient-to-br from-primary/50 to-purple-500/50 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={isClient ? { 
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 1, 0.5]
                    } : {}}
                    transition={isClient ? { 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    } : {}}
                    className="w-4 h-4 bg-white rounded-full"
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

export default Skills;
