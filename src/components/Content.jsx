import React from "react";
import {motion, spring} from 'framer-motion'

function Content() {
  return (
    <section className="bg-gray-50 w-screen">
      <div className="max-w-screen-xl h-screen px-4 py-32 flex flex-col md:flex-row justify-center items-center">
        <motion.div
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{
                delay:1.5,
                duration:1,
                x:{type:"spring",stiffness:150}
        }}
        className="hero-conten">
          <img
            src="../src/images/bg2.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </motion.div>
        <motion.div
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{
                delay:.5,
                duration:1,
                x:{type:"spring",stiffness:150}
        }}
        className="px-4 max-w-xl text-center">
          <h1 className="text-red-600 text-3xl font-extrabold sm:text-4xl">
            GOOD FOOD, GOOD PEOPLE
            <strong className="font-extrabold text-green-800 sm:block">
              {" "}
              GOOD TIMES.{" "}
            </strong>
          </h1>

          <p className="mt-4 font-thin sm:text-xl/relaxed">
            A Recipe has no soul, we bring soul to the recipe!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-6 md:px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Content;
