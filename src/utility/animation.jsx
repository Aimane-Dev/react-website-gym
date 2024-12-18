export const FadeUp = (delay) => {
    return {
      hidden: {
        opacity: 0,
        y: 100,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };
  
  export const FadeLeft = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: -100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };
  
  export const FadeRight = (delay) => {
    return {
      hidden: {
        opacity: 0,
        y: 100, // Element starts 100 pixels to the right
      },
      visible: {
        opacity: 1,
        x: 0, // Element moves to its original position
        transition: {
          duration: 1, // Animation lasts for 1 second
          delay: delay, // Delay before the animation starts
        },
      },
    };
  };
  