import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';  // Importing the correct component
import { loadFull } from 'tsparticles';         // Correct method for loading configuration

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // This loads the full tsParticles library to include all features (e.g., shapes, animations)
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);  // Useful for debugging
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#0d47a1', // Set your background color
            },
          },
          particles: {
            number: {
              value: 50,
            },
            shape: {
              type: 'circle',  // Type of particles (circle is the default)
            },
            size: {
              value: 3,  // Size of the particles
            },
            move: {
              enable: true,
              speed: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

