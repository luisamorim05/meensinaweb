'use client';

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Play } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../public/your-animation.json'; // Ajuste o caminho conforme necessário

export default function HeroSection() {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const updateScreenHeight = () => {
      setScreenHeight(window.innerHeight);
    };

    updateScreenHeight();
    window.addEventListener('resize', updateScreenHeight);
    return () => window.removeEventListener('resize', updateScreenHeight);
  }, []);

  return (
    <div className="relative px-6 lg:px-8 flex items-center justify-center" style={{ minHeight: `${screenHeight}px` }}>
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <TypeAnimation
            sequence={[
              'Revolucione a educação com IA e gamificação',
              2000,
              'Transforme o tempo online dos alunos em conquistas!',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-600"
          />
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Impulsione o engajamento e desempenho dos alunos com nossa plataforma de aprendizagem inteligente. Combinamos IA avançada e gamificação para criar uma experiência educacional contínua, dentro e fora da sala de aula.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Transforme sua instituição de ensino agora
          </button>
          <button className="text-sm font-semibold leading-6 text-blue-600 flex items-center">
            <Play className="w-5 h-5 mr-2" />
            Veja como funciona
          </button>
        </div>
        <div className="mt-10">
          <Lottie animationData={animationData} style={{ width: 300, height: 300 }} />
        </div>
      </div>
    </div>
  );
}