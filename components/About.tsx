'use client';

import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Sparkles, Target, Zap } from 'lucide-react';
import { useMemo } from 'react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: '1.5+ Years',
      description: 'Backend Development',
      gradient: 'from-primary/20 to-blue-500/20'
    },
    {
      icon: Server,
      title: '15+ APIs',
      description: 'Built & Deployed',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Database,
      title: '10+',
      description: 'Projects Completed',
      gradient: 'from-purple-500/20 to-violet-500/20'
    },
    {
      icon: Cloud,
      title: '3',
      description: 'Frameworks Mastered',
      gradient: 'from-orange-500/20 to-red-500/20'
    }
  ];

  // Floating background elements
  const floatingElements = [
    { icon: Sparkles, x: '10%', y: '20%', delay: 0, size: 40 },
    { icon: Target, x: '85%', y: '15%', delay: 1, size: 35 },
    { icon: Zap, x: '15%', y: '75%', delay: 2, size: 45 },
    { icon: Code, x: '90%', y: '80%', delay: 0.5, size: 38 },
  ];

  // Generate consistent particle positions using useMemo with a seed-based approach
  const particlePositions = useMemo(() => {
    const positions = [];
    // Using a simple seed-based random generator for consistent results
    let seed = 12345; // Fixed seed for consistency
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let i = 0; i < 8; i++) {
      positions.push({
        left: seededRandom() * 100,
        top: seededRandom() * 100,
      });
    }
    return positions;
  }, []);

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Floating background elements */}
      {floatingElements.map(({ icon: Icon, x, y, delay, size }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0, 0.1, 0.05, 0.1], 
            scale: [0, 1.2, 1, 1.1], 
            rotate: [0, 360],
            y: [0, -15, 0, -10, 0]
          }}
          transition={{ 
            delay,
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute floating"
          style={{ left: x, top: y }}
        >
          <Icon size={size} className="text-primary/10" />
        </motion.div>
      ))}

      {/* Animated particles with consistent positions */}
      {particlePositions.map((position, i) => (
        <motion.div
          key={`about-particle-${i}`}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${position.left}%`,
            top: `${position.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            delay: i * 0.3,
            duration: 3 + (i % 3), // Using modulo for consistent variation
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-block relative mb-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold gradient-text relative">
              About Me
              {/* Decorative elements around title */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -top-2 -right-8 w-6 h-6 border-2 border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  y: [0, -5, 0]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-1 -left-6 w-4 h-4 bg-primary/20 rounded-full"
              />
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-r from-muted-foreground via-primary/80 to-muted-foreground bg-[length:200%_200%] bg-clip-text text-transparent"
            >
              Passionate backend developer with a deep love for building robust, scalable systems that power modern applications.
            </motion.span>
          </motion.p>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "120px", opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary via-purple-500 to-primary mx-auto mt-8 rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 relative"
          >
            {/* Decorative side element */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-primary rounded-full opacity-30"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/90 relative pl-6"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "4px" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 h-full bg-primary/50 rounded-full"
              />
              With 1.5 years of experience in Python backend development, I specialize in creating 
              robust APIs and backend solutions. My expertise spans across Django, FastAPI, and Frappe 
              frameworks, with a strong focus on clean code and efficient problem-solving.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/90 relative pl-6"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "4px" }}
                transition={{ delay: 0.7, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 h-full bg-primary/50 rounded-full"
              />
              Starting as an intern at TelepathyInfotech and growing into an Associate Python Developer, 
              I've gained valuable experience in real-world backend development. My passion lies in 
              continuous learning and building efficient, scalable backend solutions.
            </motion.p>

            {/* Enhanced skills section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="pl-6"
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg font-semibold text-primary mb-4"
              >
                Core Strengths
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'System Design', 'Performance Optimization', 'Team Leadership'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 0.8 + (index * 0.1), 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      backgroundColor: "rgba(var(--primary), 0.1)"
                    }}
                    className="px-5 py-3 glass-card rounded-full text-sm font-medium cursor-pointer transition-all duration-300 border border-primary/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 relative"
          >
            {/* Background decorative grid */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 rounded-2xl -m-4" />
            
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -5,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="relative group cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`} />
                
                <div className="glass-card p-8 rounded-xl text-center relative z-10 backdrop-blur-xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500">
                  {/* Animated icon container */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="relative mb-6"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <highlight.icon 
                      className="mx-auto text-primary group-hover:scale-125 transition-all duration-500 relative z-10" 
                      size={48} 
                    />
                  </motion.div>
                  
                  {/* Animated counter */}
                  <motion.h3
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.15 + 0.3, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 150
                    }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300"
                  >
                    {highlight.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-sm font-medium"
                  >
                    {highlight.description}
                  </motion.p>

                  {/* Hover effect particles */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"
                  />
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute bottom-2 left-2 w-1 h-1 bg-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-16 h-16 border-2 border-primary/30 rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-8 h-8 bg-gradient-to-br from-primary/40 to-purple-500/40 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;