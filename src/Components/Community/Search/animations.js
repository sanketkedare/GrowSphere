export const searchSectionAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  
  export const searchBarHoverAnimation = {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  };
  
  export const suggestionBoxAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.3 },
  };
  