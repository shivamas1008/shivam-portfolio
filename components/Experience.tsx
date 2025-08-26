'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Python Developer',
      company: 'TelepathyInfotech',
      period: 'Jan 2025 - Present',
      location: 'Khatipaura, Jaipur',
      description: 'Developing robust backend solutions using Python frameworks. Working on API development, database optimization, and system architecture improvements.',
      achievements: [
        'Built and maintained RESTful APIs using Django and FastAPI',
        'Optimized database queries improving application performance',
        'Collaborated on multiple client projects with diverse requirements'
      ]
    },
    {
      title: 'Python Developer Intern',
      company: 'TelepathyInfotech',
      period: 'July 2024 - Jan 2025',
      location: 'Khatipaura, Jaipur',
      description: 'Started my backend development journey as an intern, learning Python frameworks and contributing to real-world projects. Gained hands-on experience in web development and API design.',
      achievements: [
        'Learned Django, FastAPI, and Frappe frameworks from scratch',
        'Contributed to client projects and internal tool development',
        'Gained experience in database design and API development',
        'Successfully transitioned from intern to full-time developer role'
      ]
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Hackathon Winner',
      description: 'Led team to Top 10 finish in TechCrunch Hackathon 2023',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Collaborative team player and quick learner',
      color: 'text-blue-500'
    },
    {
      icon: Calendar,
      title: 'Open Source',
      description: 'Active contributor to Django and FastAPI projects',
      color: 'text-green-500'
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 2,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      rotateY: index % 2 === 0 ? -15 : 15,
      scale: 0.8
    }),
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.5
      }
    }
  };

  const achievementVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  const achievementItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 120,
              damping: 10
            }}
            viewport={{ once: true }}
          >
            Experience & Achievements
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            My journey in backend development, from startup environments to enterprise solutions.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          className="relative mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-purple-500 origin-top"
            variants={timelineVariants}
          ></motion.div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                variants={dotVariants}
                whileHover={{ 
                  scale: 1.5,
                  boxShadow: "0 0 20px rgba(var(--primary), 0.8)",
                  transition: { duration: 0.2 }
                }}
              ></motion.div>
              <div className="w-full md:w-5/12">
                <motion.div 
                  className="glass-card p-6 rounded-xl transition-all duration-500"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: index % 2 === 0 ? -2 : 2,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.h3 
                    className="text-xl font-semibold text-primary mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.h4 
                    className="text-lg font-medium mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {exp.company}
                  </motion.h4>
                  <motion.div 
                    className="flex items-center space-x-4 text-sm text-muted-foreground mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.1, color: "var(--primary)" }}
                    >
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.1, color: "var(--primary)" }}
                    >
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </motion.div>
                  </motion.div>
                  <motion.p 
                    className="text-muted-foreground mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {exp.description}
                  </motion.p>
                  <motion.ul 
                    className="space-y-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start space-x-2 text-sm"
                        variants={achievementItemVariants}
                        whileHover={{ 
                          x: 5,
                          color: "var(--primary)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                          whileHover={{ 
                            scale: 1.5,
                            boxShadow: "0 0 10px rgba(var(--primary), 0.8)"
                          }}
                        ></motion.div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
                  
              {/* Right side */}
              {index % 2 !== 0 && <div className="hidden md:block w-5/12" />}
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={achievementVariants}
              className="glass-card p-6 rounded-xl text-center group transition-all duration-500"
              whileHover={{ 
                scale: 1.08,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2,
                  transition: { duration: 0.6 }
                }}
                whileTap={{ rotate: -10 }}
              >
                <achievement.icon 
                  className={`mx-auto mb-4 ${achievement.color} transition-all duration-300`} 
                  size={40} 
                />
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {achievement.title}
              </motion.h3>
              <motion.p 
                className="text-muted-foreground text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {achievement.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
