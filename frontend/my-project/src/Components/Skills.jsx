import React from 'react'
import TailwindCSS from "../images/Tailwind_CSS_Logo.png"

const Skills = () => {
    const technologies = [
        { name: "React", logo: "https://reactjs.org/logo-og.png" },
        { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
        { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
        // { name: "TailwindCSS", logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" },
        { name: "TailwindCSS",  logo: TailwindCSS},
        { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
        { name: "Express", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
        { name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
        { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
        { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
        { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" },
        { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "Python", logo: "https://www.python.org/static/community_logos/python-logo.png" },
      ];
  return (
    <div className=" py-10">
      <div className="max-w-6xl mx-auto text-center text-black">
      <h1 className="text-4xl font-bold mb-8">Skills & Expertises</h1>
        <h1 className="text-3xl font-bold mb-8">I have experience with these technologies</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills