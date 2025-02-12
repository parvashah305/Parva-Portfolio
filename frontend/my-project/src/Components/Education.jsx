import React from 'react'

const Education = () => {
    const education = [
        {
          school:"METAS ADVENTIST SCHOOL",
          class:"10th",
          year:"2020-2021",
          cgpa:"91%"  
        },
        {
            school:"BHAGWAN MAHAVIR INTERNATIONAL SCHOOL",
            class:"12th",
            year:"2022-2023",
            cgpa:"85.2%"  
          },
          {
            school:"PES UNIVERSITY",
            class:"B-TECH CSE",
            year:"2023-2027",
            cgpa:"8.38 CGPA (Till 3rd Sem)"  
          }
        
      ];
    
      return (
        <div className=" p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Education</h1>
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4"
              >
                <div className="text-gray-500 md:w-1/4">{edu.year}</div>
                
                <div className="md:w-3/4 flex-col space-y-2">
                <div className="text-xl font-semibold md:w-1/4">{edu.class}</div>
                  <h2 className="text-xl font-semibold">{edu.school}</h2>
                  <p className="text-gray-600">{edu.cgpa}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      );
}

export default Education