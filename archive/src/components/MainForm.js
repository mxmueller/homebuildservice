import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Um sicherzustellen, dass das Formular nur einmal animiert wird
    rootMargin: "-100px", // Das Formular soll 100px vor dem Sichtfeld sichtbar sein
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.form
      ref={ref}
      className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <h2 className="text-lg font-medium mb-4">Contact Us</h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 font-medium mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-400 rounded-lg p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-medium mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-400 rounded-lg p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="border border-gray-400 rounded-lg p-2 w-full"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Submit
      </button>
    </motion.form>
  );
};

export default MainForm;
