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
    <div className="min-h-screen animated-gradient-bg">
      {/* Floating Particles */}
      <div className="floating-particles">
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <div className="text-center mb-12 float-element">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            Добро пожаловать
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            В будущее веб-разработки с невероятными 3D эффектами
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <div className="glass-card p-8 text-center float-element">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
              <Icon name="Rocket" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Инноватика</h3>
            <p className="text-white/80 leading-relaxed">
              Передовые технологии и современные решения для вашего проекта
            </p>
          </div>

          <div className="glass-card p-8 text-center float-element">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
              <Icon name="Sparkles" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Креативность</h3>
            <p className="text-white/80 leading-relaxed">
              Уникальный дизайн с потрясающими визуальными эффектами
            </p>
          </div>

          <div className="glass-card p-8 text-center float-element">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
              <Icon name="Zap" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Производительность
            </h3>
            <p className="text-white/80 leading-relaxed">
              Быстрая загрузка и плавные анимации для лучшего UX
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 float-element">
          <button className="btn-3d px-8 py-4 text-lg flex items-center gap-3">
            <Icon name="Play" size={20} />
            Начать путешествие
          </button>

          <button className="btn-3d px-8 py-4 text-lg flex items-center gap-3">
            <Icon name="Info" size={20} />
            Узнать больше
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center float-element">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-white/70">Проектов</div>
          </div>
          <div className="text-center float-element">
            <div className="text-4xl font-bold text-white mb-2">50k+</div>
            <div className="text-white/70">Пользователей</div>
          </div>
          <div className="text-center float-element">
            <div className="text-4xl font-bold text-white mb-2">99%</div>
            <div className="text-white/70">Довольных</div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export default Index;
