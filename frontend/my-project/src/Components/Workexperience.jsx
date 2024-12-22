import React from 'react'

const Workexperience = () => {
  
    const experiences = [
        {
          title: "Web Developer",
          year: "April 2024 - Present",
          company:'Comono India',
          description:
            "I developed the official website for Comono India using HTML, CSS, and JavaScript. The website is fully responsive, ensuring an optimal viewing experience across all devices. It features a clean and modern design with seamless navigation and user-friendly functionality. The project showcases my ability to create engaging and professional web pages while adhering to industry standards. The website is live and can be accessed at comono.in.",
        }
        
      ];
    
      return (
        <div className=" p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4"
              >
                <div className="text-gray-500 md:w-1/4">{exp.year}</div>
                
                <div className="md:w-3/4 flex-col space-y-2">
                <div className="text-xl font-semibold md:w-1/4">{exp.company}</div>
                  <h2 className="text-xl font-semibold">{exp.title}</h2>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  
}

export default Workexperience