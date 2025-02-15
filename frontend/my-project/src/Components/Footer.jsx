import React from 'react';

const Footer = () => {
  return (
    <>
    
    <footer className=" py-6 border-t">
    <hr className="border-t border-gray-500 mb-12 mx-10" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-700">
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-bold">Phone</p>
          <p>+91 9638724826</p>
        </div>
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-bold">Email</p>
          <p>parvashah305@gmail.com</p>
        </div>
        
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-bold">Follow Me</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/parvashah305/" target='_blank' className="hover:text-gray-900">
            <i className="ri-linkedin-fill text-2xl"></i>
            </a>
            <a href="https://github.com/parvashah305?tab=repositories" target='_blank' className="hover:text-gray-900">
            <i className="ri-github-fill text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/parvashah/" target='_blank' className="hover:text-gray-900">
            <i className="ri-instagram-fill text-2xl"></i>
            </a>
            <a href="https://wa.me/919638724826" target="_blank" className="hover:text-gray-900 text-gray-700">
            <i class="ri-whatsapp-line text-2xl"></i>
            </a>
          </div>
        </div>
        
        <div className="text-center md:text-right text-sm">
          <p>© 2024 by Parva Shah.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;