import React, { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: number; delay: number }>
  >([]);

  useEffect(() => {
    // Создаем floating particles
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="min-h-screen animated-gradient-bg gta-samp-effects">
      {/* VHS Noise Overlay */}
      <div className="vhs-noise"></div>

      {/* TV Static */}
      <div className="tv-static"></div>

      {/* Floating Particles with Chromatic Aberration */}
      <div className="floating-particles chromatic-aberration">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
