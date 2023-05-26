import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedWrapper = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        stiffness: "high",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      style={{ width: "100%" }}
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedWrapper;
