import React from "react";
import SmartCV from "../images/SmartCV.png";
import Solemakers from "../images/Solemakers.png";
import Comonoindia from "../images/Comonoindia.png";
import Livescore from "../images/Livescore.png";
import lockitdown from "../images/lockitdown.png";
import Qizzler from "../images/Qizzler.png";

const Projects = () => {
  const projects = [
    {
      name: "Comono India",
      description:
        "This is the official website of Comono India, developed by me as a company-level project. The website is fully responsive and user-friendly, offering an optimal experience across all devices. It showcases a professional design and efficient functionality, catering to the company’s needs. The website is live and accessible to users.",
      image: Comonoindia,
      link: "https://comono.in",
    },
    {
      name: "Qizzler",
      description:
        "Qizzler is a MERN stack-based online quiz platform that allows users to create, manage, and attempt quizzes. The platform provides an intuitive user experience, enabling users to sign up, log in, and participate in quizzes while tracking their performance. Secure authentication is implemented using JWT tokens, and quiz data is stored in MongoDB.",
      image: Qizzler,
      link: "https://qizzler.vercel.app",
    },
    {
      name: "SmartCV",
      description:
        "This project is a comprehensive tool designed to help users create professional resumes effortlessly. Users can input their personal information, education details, work experience, skills, and project highlights, and the website generates a polished resume for them. It simplifies the resume-building process, making it user-friendly and efficient.",
      image: SmartCV,
      link: "https://github.com/parvashah305/SmartCV-Resume-Builder",
    },
    {
      name: "SoleMakers",
      description:
        "SoleMakers is a sneaker e-commerce website where users can browse and purchase sneakers at affordable prices. The platform offers a seamless shopping experience with a user-friendly interface. Customers can also contact customer support for assistance with any issues or inquiries, ensuring a smooth and reliable service.",
      image: Solemakers,
      link: "https://github.com/parvashah305/SoleMakers",
    },
    {
      name: "Live Cricket Score",
      description:
        "This project enables users to view live cricket scores along with detailed scorecards. Additionally, users can explore information about upcoming matches and recent match results, providing a comprehensive cricket match-tracking experience.",
      image: Livescore,
      link: "https://live-cricket-score-parvashah.netlify.app/",
    },
    {
      name: "LockItDown",
      description:
        "LockItDown is a secure and user-friendly password management tool. Users can store and manage their passwords for various websites by simply entering the website URL, username, and password. The platform provides a convenient way to view and access all stored passwords in one place, ensuring security and ease of use.",
      image: lockitdown,
      link: "https://lock-it-down-your-password-manager-parvashah.vercel.app/",
    },
  ];

  return (
    <div className=" mt-12 py-10 ">
      <div className="max-w-6xl mx-auto text-black">
        <h1 className="text-3xl font-bold text-center mb-20">My Projects</h1>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center lg:items-start lg:space-x-8 space-y-6 lg:space-y-0`}
            >
              <div className="lg:w-1/2 px-4 lg:px-8">
                <div className="flex items-center space-x-2">
                  <a
                    href={project.link} target="_blank"
                    className="flex items-center space-x-2"
                  >
                    <h2 className="text-xl font-bold text-blue-600 underline hover:text-blue-700">
                      {project.name}
                    </h2>
                    <i className="ri-link text-xl text-gray-600 hover:text-gray-800"></i>
                  </a>
                </div>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>

              <div className="lg:w-1/2 px-4 lg:px-8">
                <a href={project.link} target="_blank">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-lg shadow-md w-full object-cover hover:scale-110 transition-all duration-500"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
