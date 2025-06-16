import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiGlobe } from 'react-icons/hi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Comono India Website',
      description: 'I developed the official website for Comono India from scratch using HTML, CSS, and JavaScript. It\'s fully responsive with a clean, professional UI and optimized performance. The site reflects the brand identity and serves as the company\'s primary digital presence.',
      link: 'https://comono.in',
      type: 'live',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      name: 'Qizzler',
      description: 'Qizzler is a full-fledged MERN stack-based quiz platform where users can register, create quizzes, attempt them, and view their performance. I implemented secure authentication with JWT, dynamic quiz handling, and clean state management across the app.',
      link: 'https://qizzler.vercel.app',
      type: 'live',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 3,
      name: 'SmartCV – Resume Builder',
      description: 'SmartCV allows users to build professional resumes by entering their details in an interactive form. The tool generates a polished, downloadable resume PDF. I built the entire frontend, focusing on usability, field validation, and clean form-to-PDF transformation.',
      link: 'https://github.com/parvashah305/smartcv-resume-builder',
      type: 'github',
      tech: ['ReactJS', 'CSS3', 'PDF Generation','Node.js','Express','MongoDB'],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 4,
      name: 'Live Cricket Score',
      description: 'A responsive website that displays live scores, detailed match scorecards, upcoming fixtures, and recent results. It fetches real-time data via APIs and displays it in a visually engaging format. Ideal for cricket enthusiasts to stay updated.',
      link: 'https://live-cricket-score-parvashah.netlify.app',
      type: 'live',
      tech: ['ReactJS', 'API Integration', 'TailwindCSS'],
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      id: 5,
      name: 'SoleMakers – E-commerce Platform',
      description: 'SoleMakers is an e-commerce platform for sneaker shopping. Users can browse products, add them to the cart, and contact support. The frontend is optimized for speed and mobile-friendliness. The UI is modern, with emphasis on shopping convenience.',
      link: 'https://github.com/parvashah305/SoleMakers',
      type: 'github',
      tech: ['React', 'TailwindCSS', 'Node.js','Express','MongoDB','Auth'],
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      id: 6,
      name: 'LockItDown – Password Manager',
      description: 'LockItDown is a simple password manager that allows users to securely store and view passwords for different websites. Built using React for the frontend, it offers an easy-to-use UI with local storage for quick access.',
      link: 'https://lock-it-down-your-password-manager-parvashah.vercel.app',
      type: 'live',
      tech: ['React', 'Local Storage', 'Security','MongoDB'],
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Showcasing my journey through code and creativity
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient}`}>
                      {project.type === 'live' ? (
                        <HiGlobe className="w-6 h-6 text-white" />
                      ) : (
                        <HiCode className="w-6 h-6 text-white" />
                      )}
                    </div>
                    
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <HiExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </motion.a>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;