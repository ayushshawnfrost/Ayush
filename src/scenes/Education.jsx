import React from 'react';

const Education = () => {
  return (
    <section id="education" className=" py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="mb-4">
              <img src="masters-degree.jpg" alt="Masters Degree" className="w-full h-auto rounded-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Masters of Science in Computer Science</h3>
              <p className="text-gray-600 mb-1">California State University, East Bay</p>
              {/* <p className="text-gray-500 text-sm mb-4">Graduation Date</p> */}
              {/* <p className="text-gray-700">
                Brief description of your masters degree and any notable achievements or projects.
              </p> */}
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="mb-4">
              <img src="bachelors-degree.jpg" alt="Bachelors Degree" className="w-full h-auto rounded-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Bachelors of Engineering in Information Technology</h3>
              <p className="text-gray-600 mb-1">Nagpur University</p>
              {/* <p className="text-gray-500 text-sm mb-4">Graduation Date</p>
              <p className="text-gray-700">
                Brief description of your bachelors degree and any notable achievements or projects.
              </p> */}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Education;