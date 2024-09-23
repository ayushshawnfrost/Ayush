import React from 'react';
import CSUEB from '../assets/csueb.jpg'
import RTMNU from '../assets/rtmnu.PNG'
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Education = () => {
  return (
    <section id="education" className=" py-20">
      <div className="container mx-auto ">
        {/* <h2 className="text-3xl font-bold mb-10 text-center">Education</h2> */}
    
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32 mb-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
          <span >EDUCATION</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="bg-yellow rounded-lg p-6">
            <div className="mb-4">
              <img src={CSUEB} alt="Masters Degree" className="w-full h-auto rounded-lg" />
            </div>
            <div>
              {/* <h3 className=" text-gray-600 text-xl font-semibold mb-2">Masters of Science in Computer Science</h3> */}
              <p className="text-gray-600 text-xl font-semibold mb-2">California State University, East Bay</p>
              <p className="text-gray-600 mb-1">Master's of Science</p>
              <p className="text-gray-600 mb-1">Computer Science</p>
              {/* <p className="text-gray-500 text-sm mb-4">Graduation Date</p> */}
              {/* <p className="text-gray-700">
                Brief description of your masters degree and any notable achievements or projects.
              </p> */}
            </div>
          </div>
          
          <div className="bg-yellow rounded-lg p-6">
            <div className="mb-4">
              <img src={RTMNU} alt="Bachelors Degree" className="w-full h-auto rounded-lg" />
            </div>
            <div>
              {/* <h3 className="text-xl font-semibold mb-2">Bachelors of Engineering in Information Technology</h3> */}
              <p className="text-gray-600 text-xl font-semibold mb-2">Nagpur University</p>
              <p className="text-gray-600 mb-1">Bachelors's of Engineering</p>
              <p className="text-gray-600 mb-1">Information Technology</p>
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