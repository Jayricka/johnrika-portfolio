import React from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInSection = ({ children }) => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return <animated.div style={fade}>{children}</animated.div>;
};

export default FadeInSection;
