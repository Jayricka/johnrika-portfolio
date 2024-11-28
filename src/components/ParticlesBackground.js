import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';  // Importing the particles component
import { loadFull } from 'tsparticles';         // Importing the loadFull method

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);  // Useful for debugging (can be removed later)
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#1a1a1a',  // Darker background for contrast
            },
          },
          particles: {
            number: {
              value: 80,  // More particles for a denser background
            },
            shape: {
              type: 'circle',  // Round particles
            },
            size: {
              value: 3,  // Adjust particle size for visibility
            },
            move: {
              enable: true,
              speed: 3,  // Faster movement for dynamic effect
              direction: 'random',  // Random direction for a natural feel
              random: true,
              straight: false,
              outModes: {
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
              },
            },
            opacity: {
              value: 0.5,  // Slightly transparent particles for soft effect
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },
            links: {
              enable: true,
              distance: 100,
              color: '#ffffff',  // White links between particles
              opacity: 0.4,
              width: 0.5,
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',  // Repulse particles when hovering
                },
                onclick: {
                  enable: true,
                  mode: 'push',  // Push more particles on click
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
