import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiDatabase, HiCog, HiGlobeAlt, HiAcademicCap } from 'react-icons/hi';
import {
  SiReact, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiGit, SiGithub, SiPython, SiC, SiTypescript
} from 'react-icons/si';

const About = () => {
  const skills = {
    Frontend: [
      { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
    Backend: [
      { name: 'NodeJS', icon: SiNodedotjs, color: '#339933' },
      { name: 'ExpressJS', icon: SiExpress, color: '#000000' },
    ],
    Database: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    ],
    Others: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a self-taught programmer and currently a third-year Computer Science student at PES University. 
                I started my programming journey with Python four years ago, focusing on GUI apps, but soon expanded 
                into full-stack web development. I now work with technologies like ReactJS, NodeJS, MongoDB, and ExpressJS.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Presently, I'm a Software Developer Intern at Comono India. I enjoy building intuitive and user-focused 
                web apps. Outside of coding, I like playing cricket and listening to music. I'm always eager to collaborate 
                on new ideas and solve meaningful problems.
              </p>

              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 text-primary-500">
                  <HiAcademicCap className="w-5 h-5" />
                  <span className="text-sm font-medium">CS Student at PES University</span>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 text-primary-500">
                  <HiGlobeAlt className="w-5 h-5" />
                  <span className="text-sm font-medium">Full-Stack Developer</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    {category === 'Frontend' && <HiCode className="w-5 h-5 text-primary-500" />}
                    {category === 'Backend' && <HiCog className="w-5 h-5 text-secondary-500" />}
                    {category === 'Database' && <HiDatabase className="w-5 h-5 text-accent-500" />}
                    {category === 'Others' && <HiGlobeAlt className="w-5 h-5 text-purple-500" />}
                    {category}
                  </h3>
                  
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                  >
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 cursor-pointer"
                        style={{
                          '--skill-color': skill.color,
                        }}
                      >
                        <skill.icon 
                          className="w-4 h-4" 
                          style={{ color: skill.color }}
                        />
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;