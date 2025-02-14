import React from "react";
import Parva from "../images/Parva.jpeg";
import parva from "../images/parva.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 mt-12">
        {/* Profile Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="rounded-full overflow-hidden md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] h-48 w-48 border-4 border-gray-200 shadow-lg">
            <img
              src={parva}
              alt="Profile"
              className="object-[25%_20%] object-cover w-full h-full"
            />
          </div>
        </div>

        {/* About Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-4 lg:px-8">
          <h1 className="text-4xl text-black lg:text-5xl font-bold mb-4">Hello,</h1>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
            A Bit About Me <br />
            <br />
            I began my programming journey three years ago with Python, aiming
            to develop graphical user interface applications using various
            Python libraries. What started as a hobby quickly became a passion,
            providing me with a profound sense of fulfillment and satisfaction.
            As I delved deeper into the world of programming, I expanded my
            horizons to web development, learning new languages and libraries
            such as HTML, CSS, JavaScript, and React JS. I have always aspired
            to become a full-stack developer and have worked diligently to learn
            the necessary technologies, including ReactJS, NodeJS, MongoDB, and
            ExpressJS. <br />
            <br />
            As a second-year Computer Science student at PES University, I am
            eager to explore my passions further and enhance my skills in the
            tech industry. Being a self-taught programmer, I have honed my
            coding abilities through various projects and challenges. Presently,
            I am working as a FullStack Developer Intern at Comono India. <br />
            <br />
            When I’m not coding, you can find me playing cricket or listening to
            music. With my passion for technology and diverse skill set, I am
            confident in my ability to add value to any project or team I am
            part of. I am excited to collaborate with like-minded individuals
            and contribute to the advancement of the tech industry.
          </p>
          {/* Buttons Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/resume">
                <button className="bg-yellow-500 text-black text-lg md:text-xl border-2 border-black font-bold h-14 w-36 rounded-full hover:bg-transparent transition-all duration-300">
                  Resume
                </button>
            </Link>
            <Link to="/projects">
                <button className="bg-red-500 text-black text-lg md:text-xl border-2 border-black font-bold h-14 w-36 rounded-full hover:bg-transparent transition-all duration-300">
                  Projects
                </button>
            </Link>
            <Link to="/contact">
                <button className="bg-blue-500 text-black text-lg md:text-xl border-2 border-black font-bold h-14 w-36 rounded-full hover:bg-transparent transition-all duration-300">
                  Contact
                </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;