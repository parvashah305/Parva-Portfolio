import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const Education = () => {
  const education = [
    {
      id: 1,
      institution: 'PES University',
      degree: 'Bachelor of Technology in Computer Science',
      duration: '2023 – 2027',
      location: 'Bangalore, India',
      description: 'Currently pursuing my undergraduate degree in Computer Science with focus on software development, algorithms, and data structures.',
      status: 'current',
      gpa: '8.38(Till 3rd Sem)',
    },
    {
      id: 2,
      institution: 'Bhagwan Mahavir International School',
      degree: 'Higher Secondary (12th Grade)',
      duration: '2021 – 2023',
      location: 'India',
      description: 'Completed higher secondary education with strong foundation in mathematics and science.',
      status: 'completed',
      gpa: '85.2%',
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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              <span className="text-gradient">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My academic journey and qualifications
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        edu.status === 'current'
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg animate-pulse-glow'
                          : 'bg-gradient-to-r from-secondary-500 to-accent-500'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    >
                      <HiAcademicCap className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {edu.degree}
                          </h3>
                          <h4 className="text-lg font-semibold text-gradient mb-2">
                            {edu.institution}
                          </h4>
                        </div>
                        {edu.status === 'current' && (
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <HiCalendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <HiLocationMarker className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            GPA: {edu.gpa}
                          </span>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'current'
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                              : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          }`}>
                            {edu.status === 'current' ? 'In Progress' : 'Completed'}
                          </div>
                        </div>
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

export default Education;