import React from 'react';
import { motion } from 'framer-motion';
import { HiHeart } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: SiGithub,
      href: 'https://github.com/parvashah305',
      color: 'hover:text-gray-600 dark:hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      href: 'https://linkedin.com/in/parvashah305',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: HiMail,
      href: 'mailto:parvashah305@gmail.com',
      color: 'hover:text-red-500',
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 md:mb-0"
          >
            <span className="text-gray-600 dark:text-gray-300">Made</span>
            
            <span className="text-gray-600 dark:text-gray-300">by</span>
            <span className="font-bold text-gradient bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Parva Shah
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 dark:text-gray-400 transition-colors duration-300 ${link.color}`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Parva Shah. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;