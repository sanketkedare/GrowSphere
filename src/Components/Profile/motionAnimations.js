// motionAnimations.js
export const fadeInUp = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };
  
  export const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay, duration: 0.8 },
  });
  
  export const buttonHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };
  