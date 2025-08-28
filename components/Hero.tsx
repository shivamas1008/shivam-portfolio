'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Database, Zap, Terminal, Cpu, Server } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const fullText = "Building scalable backend systems with Python";

  // Fixed particle positions to prevent hydration mismatch
  const particlePositions = [
    { left: 73.52, top: 50.45 },
    { left: 31.06, top: 57.91 },
    { left: 86.77, top: 86.95 },
    { left: 90.22, top: 27.61 },
    { left: 29.60, top: 97.19 },
    { left: 66.03, top: 59.43 },
    { left: 85.80, top: 6.80 },
    { left: 29.35, top: 55.08 },
    { left: 95.94, top: 71.80 },
    { left: 15.00, top: 60.43 },
    { left: 93.86, top: 49.42 },
    { left: 73.92, top: 58.23 }
  ];

  useEffect(() => {
    setIsMounted(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Scroll to next section function
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Enhanced floating elements with more variety
  const floatingIcons = [
    { Icon: Code2, delay: 0, x: '5%', y: '15%', size: 60, rotation: 360, duration: 20 },
    { Icon: Database, delay: 0.5, x: '85%', y: '25%', size: 80, rotation: -360, duration: 25 },
    { Icon: Zap, delay: 1, x: '10%', y: '75%', size: 70, rotation: 360, duration: 18 },
    { Icon: Terminal, delay: 1.5, x: '90%', y: '70%', size: 65, rotation: -360, duration: 22 },
    { Icon: Cpu, delay: 2, x: '75%', y: '10%', size: 55, rotation: 360, duration: 30 },
    { Icon: Server, delay: 0.8, x: '15%', y: '40%', size: 50, rotation: -360, duration: 28 },
  ];

  // Particle animation variants
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1]
    }
  };

  // Stagger animation for tech stack
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  // Don't render particles until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden code-bg">
        <div className="max-w-7xl mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text leading-tight">
                <span>Shivam</span>
                <br />
                <span>Bhardwaj</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Python Backend Developer
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden code-bg">
      {/* Enhanced Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, x, y, size, rotation, duration }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 0.15, 0.1, 0.15], 
            scale: [0, 1.2, 1, 1.1], 
            rotate: rotation,
            y: [0, -10, 0, -5, 0]
          }}
          transition={{ 
            delay, 
            duration: duration,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.2, 1],
            times: [0, 0.3, 0.7, 1]
          }}
          className="absolute floating"
          style={{ left: x, top: y }}
        >
          <Icon size={size} className="text-primary/20" />
        </motion.div>
      ))}

      {/* Fixed Position Animated Particles */}
      {particlePositions.map((position, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${position.left}%`,
            top: `${position.top}%`,
          }}
          variants={particleVariants}
          animate="animate"
          transition={{
            delay: i * 0.2,
            duration: 2 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.3, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text leading-tight"
            >
              <motion.span
                initial={{ display: "inline-block", rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Shivam
              </motion.span>
              <br />
              <motion.span
                initial={{ display: "inline-block", rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Bhardwaj
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <motion.p
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_200%] bg-clip-text text-transparent mb-4"
              >
                Python Backend Developer
              </motion.p>
              
              {/* Decorative underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5, ease: [0.4, 0.0, 0.2, 1] }}
                className="h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto lg:mx-0"
                style={{ maxWidth: "300px" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-20 flex items-center justify-center lg:justify-start"
            >
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-mono"
                animate={{ 
                  textShadow: [
                    "0 0 0px transparent",
                    "0 0 10px rgba(var(--primary), 0.3)",
                    "0 0 0px transparent"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {displayedText}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-primary font-bold"
                >
                  |
                </motion.span>
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(var(--primary), 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(var(--primary), 0.3)",
                    "0 0 30px rgba(var(--primary), 0.5)",
                    "0 0 20px rgba(var(--primary), 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={() => {
                  const projectsSection = document.querySelector('#projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg pulse-glow transition-all duration-300 relative overflow-hidden group cursor-pointer"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] }}
                />
                <span className="relative z-10">View My Work</span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                className="glass-card px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 border border-primary/20 cursor-pointer"
              >
                Download Resume
              </motion.button>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {['Django', 'FastAPI', 'Frappe', 'PostgreSQL'].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    color: "rgba(var(--primary))",
                    y: -2
                  }}
                  className="glass-card px-4 py-2 rounded-full text-sm font-semibold text-muted-foreground border border-primary/10 cursor-pointer transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ 
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] }
                }}
                className="absolute -inset-8 border-2 border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] }
                }}
                className="absolute -inset-12 border border-purple-500/20 rounded-full border-dashed"
              />

              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full blur-2xl opacity-60"
                  animate={{
                    background: [
                      "radial-gradient(circle, rgba(var(--primary), 0.3) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(var(--primary), 0.3) 0%, transparent 70%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] }}
                />
                
                <div className="relative w-full h-full glass-card rounded-full p-3 backdrop-blur-xl">
                  <motion.img
                    src="/shivam.jpeg"
                    alt="Shivam Bhardwaj - Python Backend Developer"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                  />
                  
                  <motion.div
                    className="absolute inset-3 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-purple-500/10"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] },
                  y: { duration: 2, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] }
                }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20"
              >
                <Code2 className="text-primary" size={32} />
              </motion.div>
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1.1, 1, 1.1],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] },
                  x: { duration: 2.5, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] }
                }}
                className="absolute -bottom-6 -left-6 w-18 h-18 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/20"
              >
                <Database className="text-purple-400" size={28} />
              </motion.div>

              <motion.div
                animate={{ 
                  rotate: 180,
                  scale: [1, 1.3, 1],
                  y: [0, -8, 0]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2.5, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] },
                  y: { duration: 3, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] }
                }}
                className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-green-500/30 to-green-500/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-green-500/20"
              >
                <Zap className="text-green-400" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-xs text-muted-foreground font-medium tracking-wider uppercase"
        >
          Scroll Down
        </motion.p>
        <motion.button
          onClick={scrollToNextSection}
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: [0.4, 0.0, 0.2, 1] 
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 glass-card rounded-full cursor-pointer transition-all duration-300"
        >
          <ChevronDown className="text-primary" size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
