'use client'

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Play, Menu, X, Brain, Trophy, Rocket, BookOpen, Users, BarChart, Zap, Send as PaperPlaneIcon, Lightbulb, Palette } from 'lucide-react';
import Link from 'next/link';
import animationData from '../public/animationapp.json';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigation = [
  { name: 'Recursos', href: '#features' },
  { name: 'Casos de Sucesso', href: '#case-studies' },
  { name: 'Planos', href: '#pricing' },
];

const features = [
  {
    name: 'Aprendizado Adaptativo',
    description:
      'Nossa IA personaliza o conteúdo para cada aluno, garantindo um aprendizado eficiente e engajador.',
    icon: Brain,
  },
  {
    name: 'Gamificação Inteligente',
    description: 'Transforme o estudo em uma jornada divertida com desafios, recompensas e competições motivadoras.',
    icon: Trophy,
  },
  {
    name: 'Análise de Desempenho',
    description: 'Acompanhe o progresso dos alunos em tempo real, identificando áreas de melhoria e celebrando conquistas.',
    icon: Rocket,
  },
  {
    name: 'UI Generativa para Ensino',
    description: 'Nossa IA cria interfaces de usuário personalizadas e interativas.',
    icon: Palette,
  },
];

const additionalFeatures = [
  {
    name: 'Ia integrada ao banco de dados escolar',
    description:
      'Nossa inteligência artificial será integrada ao banco de materiais didáticos leionados em cada escola, garantindo assim, que o que for retornado pela IA não esteja em desacordo com o que é ensinado em sala de aula.',
    icon: BookOpen,
  },
  {
    name: 'Ecossistema escolar',
    description:
      'Sistema de grupos de alunos por interesses, área de eventos escolares, salas, ligações entre salas em eventuais trabalhos, sistema interno de professores, coordenação e muito mais.',
    icon: Users,
  },
  {
    name: 'Análise matemática de Progresso',
    description:
      'Acompanhe o desempenho dos alunos com dashboards intuitivos e relatórios detalhados para identificar áreas de melhoria.',
    icon: BarChart,
  },
  {
    name: 'Gamificação Avançada',
    description:
      'Motive os alunos com um sistema de recompensas, níveis e desafios que tornam o aprendizado mais envolvente e divertido.',
    icon: Zap,
  },
  {
    name: 'Ia generativa',
    description:
      'Tecnologia de inteligência artificial genarativa, tornando possível a criação de elementos visuais que auxiliem no aprendizado. Imagine aprender sobre aceleração assistindo uma animação explicativa de  uma corrida de carros.',
    icon: Lightbulb,
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    const updateScreenHeight = () => {
      setScreenHeight(window.innerHeight);
    };

    updateScreenHeight();
    window.addEventListener('resize', updateScreenHeight);
    return () => window.removeEventListener('resize', updateScreenHeight);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/chat?message=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate" style={{ minHeight: `${screenHeight}px` }}>
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                <img
                  src="/logo.svg"
                  alt="Me ensina aí logo"
                  className="w-8 h-8 md:w-12 md:h-12 mr-2 md:mr-3"
                />
                <span className="text-xl md:text-2xl font-bold text-blue-600">Me ensina aí</span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Abrir menu principal</span>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button className="text-sm font-semibold leading-6 text-gray-900 mr-4">
                Login
              </button>
              <button className="rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Agende uma Demo
              </button>
            </div>
          </nav>
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <div className="fixed inset-0 z-50" />
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                    <img
                      src="/logo.svg"
                      alt="Me ensina aí logo"
                      className="w-8 h-8 mr-2"
                    />
                    <span className="text-xl font-bold text-blue-600">meensina.ai</span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Fechar menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      <button
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Login
                      </button>
                      <button
                        className="mt-4 w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Agende uma Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
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
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="overflow-hidden bg-blue-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">Ensine mais rápido</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uma nova forma de aprender</p>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Combine o poder da inteligência artificial com técnicas comprovadas de aprendizado para 
                  maximizar o engajamento e o desempenho dos alunos.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-700 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <video
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              controls
              preload="auto"
            >
              <source src="/teacher2.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      </div>
      {/* Inteligência Artificial Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <Lottie animationData={animationData} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Ensine com eficiência</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tecnologias
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nossa plataforma combina as mais novas tecnologias com métodos pedagógicos comprovados para criar uma experiência de aprendizagem única e eficaz.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                {additionalFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}