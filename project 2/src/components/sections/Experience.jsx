import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Comono India",
      position: "Software Developer Intern",
      duration: "April 2024 – Present",
      location: "Remote",
      description: "At Comono India, I worked on two major projects: the official company website and a comprehensive Bid Comparator Tool. The website was developed from scratch using HTML, CSS, and JavaScript with a clean, responsive design and accessible interface. For the Bid Comparator Tool, I built the frontend using ReactJS and the backend using Flask. The tool allows users to upload two ZIP files, extracts files, compares those with matching names line by line, and uses OpenAI to generate detailed summaries showing differences across files and between ZIPs.",
      achievements: [
        "Built Comono India’s official website with modern, responsive design and seamless user experience",
        "Developed the frontend of the Bid Comparator Tool using ReactJS",
        "Created the backend using Flask to handle file uploads, extraction, and processing",
        "Integrated OpenAI API to generate insightful summaries for each file and the entire comparison",
        "Implemented automatic ZIP file extraction and line-by-line comparison of matched files",
        "Generated per-file and overall difference summaries for both ZIPs",
        "Designed user-friendly UI to display file insights, differences, and downloadable results",
        "Handled the complete development lifecycle independently—from architecture to deployment"
      ],
      current: true
    },
    {
      id: 2,
      company: 'Ovii',
      position: 'Frontend Developer Intern',
      duration: 'March 2025 – May 2025',
      location: 'Remote',
      description: 'At Ovii, I contributed to building the user-side frontend for their interview platform. My tasks included creating various user interfaces and integrating with backend APIs.',
      achievements: [
        'Built Resume Upload Page with secure file handling',
        'Created Quiz-Taking Page with timers and submissions',
        'Developed Interview Simulation Page with interactive features',
        'Collaborated with backend developers for API integration'
      ],
      current: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
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
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My professional journey and contributions
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        exp.current 
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg animate-pulse-glow' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    >
                      <HiBriefcase className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-lg font-semibold text-gradient mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <HiCalendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <HiLocationMarker className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;