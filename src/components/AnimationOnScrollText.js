import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimationOnScrollText = ({ text }) => {
  const [ref, inView] = useInView();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 2, ease: "easeInOut" }}
      variants={variants}
    >
      <p>
        {text}
      </p>

    </motion.div>
  );
};

export default AnimationOnScrollText;