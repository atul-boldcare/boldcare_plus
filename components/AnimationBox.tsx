import { useEffect, FC, ReactNode } from "react";
import { chakra } from "@chakra-ui/react";
import {
  motion,
  useAnimation,
  isValidMotionProp,
  Variants,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export interface AnimationBoxProps {
  children: ReactNode;
  translateX?: number;
}

const AnimationBox: FC<AnimationBoxProps> = ({ children, translateX = 10 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const animations: Variants = {
    visible: {
      transform: `translateX(-${translateX}px)`,
      transition: { duration: 0.3 },
    },
    hidden: { transform: "translateX(0)" },
  };

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <ChakraBox
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animations}
    >
      {children}
    </ChakraBox>
  );
};

export default AnimationBox;
