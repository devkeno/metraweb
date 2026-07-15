'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Clock, Lightbulb, MapPin, CheckCircle2, Users, Settings, Factory, Award, Phone, Smartphone, Mail, Send, GraduationCap, TrendingUp, HeartHandshake as Handshake, Shield, Headphones, DollarSign, Quote } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const HomePage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@metra.ba', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New contact form message from ${formData.name}`,
        }),
      });
      const result = await response.json();
      if (response.ok && result.success === 'true') {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
    setTimeout(() => setFormStatus('idle'), 4000);
  };

  const projectPlaceholders = [
    { id: 1, image: '/images/project-1.jpg' },
    { id: 2, image: '/images/project-2.jpg' },
    { id: 3, image: '/images/project-3.jpg' },
    { id: 4, image: '/images/project-4.jpg' },
    { id: 5, image: '/images/project-5.jpg' },
    { id: 6, image: '/images/project-6.jpg' },
    { id: 7, image: '/images/project-7.jpg' },
    { id: 8, image: '/images/project-8.jpg' }
  ];

  // Animation variants for the elegant hero heading
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 bg-[hsl(var(--dark-bg))]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-milling-spindle.jpg"
            alt="CNC machining precision manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419]/60 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-8 lg:px-8 py-24 text-center">
          <motion.div
            key={language} // Re-animate on language change
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center justify-center mb-16"
          >
            {/* Elegant multi-line heading */}
            <h1 className="flex flex-col items-center space-y-4 md:space-y-6">
              <motion.span variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl text-white heading-premium">
                {t('hero.words.w1')}
              </motion.span>
              <motion.span variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl text-white heading-premium">
                {t('hero.words.w2')}
              </motion.span>
              <motion.span variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl text-white heading-premium">
                {t('hero.words.w3')}
              </motion.span>
            </h1>

            <motion.div variants={itemVariants} className="accent-separator" />

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 text-[#ffb200]"
            >
              <span className="accent-line-side"></span>
              <span className="text-xs md:text-sm subtitle-premium">
                {t('hero.words.since')}
              </span>
              <span className="accent-line-side"></span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Target, key: 'precision' },
              { icon: ShieldCheck, key: 'quality' },
              { icon: Clock, key: 'reliability' },
              { icon: Lightbulb, key: 'innovation' }
            ].map((pillar, idx) => (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + (idx * 0.1) }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-left hover:bg-white/10 transition-colors"
              >
                <pillar.icon className="w-8 h-8 text-[#ffb200] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{t(`hero.pillars.${pillar.key}.title`)}</h3>
                <p className="text-sm text-white/70">{t(`hero.pillars.${pillar.key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CNC MILLING */}
      <section id="cnc-milling" className="py-24 bg-[hsl(var(--dark-secondary))]">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3] border border-white/5">
              <img
                src="/images/cnc-milling.jpg"
                alt={t('milling.title')}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{t('milling.title')}</h2>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <CheckCircle2 className="w-8 h-8 text-[#ffb200] shrink-0" />
                  <div>
                    <strong className="text-white text-xl block mb-2">{t('labels.specifications')}</strong>
                    <span className="text-white/70 text-lg">{t('milling.capabilities')}</span>
                  </div>
                </li>
                <li className="flex gap-5">
                  <CheckCircle2 className="w-8 h-8 text-[#ffb200] shrink-0" />
                  <div>
                    <strong className="text-white text-xl block mb-2">{t('materials')}</strong>
                    <span className="text-white/70 text-lg">{t('milling.materials')}</span>
                  </div>
                </li>
                <li className="flex gap-5">
                  <CheckCircle2 className="w-8 h-8 text-[#ffb200] shrink-0" />
                  <div>
                    <strong className="text-white text-xl block mb-2">{t('labels.advantages')}</strong>
                    <span className="text-white/70 text-lg">{t('milling.advantages')}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CNC TURNING */}
      <section id="cnc-turning" className="py-24 bg-[hsl(var(--dark-bg))]">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{t('turning.title')}</h2>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <CheckCircle2 className="w-8 h-8 text-[#ffb200] shrink-0" />
                  <div>
                    <strong className="text-white text-xl block mb-2">{t('labels.specifications')}</strong>
                    <span className="text-white/70 text-lg">{t('turning.capabilities')}</span>
                  </div>
                </li>
                <li className="flex gap-5">
                  <CheckCircle2 className="w-8 h-8 text-[#ffb200] shrink-0" />
                  <div>
                    <strong className="text-white text-xl block mb-2">{t('materials')}</strong>
                    <span className="text-white/70 text-lg">{t('turning.materials')}</span>
                  </div>
                </li>
                <li className="flex gap-5">
                  <CheckCircle2 className="w-8 h-8 text-[#ffb200] shrink-0" />
                  <div>
                    <strong className="text-white text-xl block mb-2">{t('labels.finishingServices')}</strong>
                    <span className="text-white/70 text-lg">{t('turning.finishing')}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/5">
              <img
                src="/images/cnc-turning.jpg"
                alt={t('turning.title')}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WELDED CONSTRUCTIONS */}
      <section id="welded" className="py-24 bg-[hsl(var(--dark-secondary))]">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('welded.title')}</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t('welded.intro')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[hsl(var(--dark-bg))] p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <Factory className="w-16 h-16 text-[#ffb200] mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">{t('labels.specifications')}</h3>
              <p className="text-white/70 text-lg leading-relaxed">{t('welded.specs')}</p>
            </div>
            <div className="bg-[hsl(var(--dark-bg))] p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <Settings className="w-16 h-16 text-[#ffb200] mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">{t('labels.assemblyServices')}</h3>
              <p className="text-white/70 text-lg leading-relaxed">{t('welded.services')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUALITY AND SAFETY */}
      <section id="quality" className="py-24 bg-[hsl(var(--dark-bg))]">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('quality.title')}</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">{t('quality.text')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 3834'].map((cert) => (
              <div key={cert} className="bg-[hsl(var(--dark-secondary))] border border-white/5 rounded-2xl p-8 text-center hover:border-[#ffb200]/50 hover:-translate-y-1 transition-all duration-300">
                <Award className="w-12 h-12 text-[#ffb200] mx-auto mb-4" />
                <div className="font-bold text-white text-xl">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROJECTS GALLERY */}
      <section id="projects" className="py-24 bg-[hsl(var(--dark-secondary))]">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('projects.title')}</h2>
            <p className="text-xl text-white/70">{t('projects.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectPlaceholders.map((project) => (
              <div
                key={project.id}
                className="aspect-square rounded-xl overflow-hidden bg-[hsl(var(--dark-bg))] relative group border border-white/5"
              >
                <img
                  src={project.image}
                  alt={`${t('projects.alt')} ${project.id}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HISTORY SECTION */}
      <section id="history" className="py-24 bg-[hsl(var(--dark-bg))]">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t('history.title')}</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-prose">
                {t('history.text')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {['1984', '2000', '2010', '2024'].map((year, idx) => (
                <div key={year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#ffb200]" />
                    {idx !== 3 && <div className="w-px h-full bg-white/10 my-2" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-2xl font-bold text-[#ffb200] mb-1">{year}</div>
                    <div className="text-white/80 text-lg">{t(`history.timeline.${year}`)}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. ABOUT US */}
      <section id="about" className="py-24 bg-[hsl(var(--dark-secondary))]">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('about.title')}</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                {t('about.text')}
              </p>
              <div className="flex items-center gap-4 p-6 bg-[hsl(var(--dark-bg))] rounded-xl border border-white/5">
                <MapPin className="w-10 h-10 text-[#ffb200] shrink-0" />
                <div>
                  <div className="text-xl font-bold text-white">{t('strategicLocation')}</div>
                  <div className="text-white/60 mt-1">Novi Travnik, Bosnia and Herzegovina</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-white/10">
                <img
                  src="/images/facility-team.jpg"
                  alt="METRA facility with CNC machines and team"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OUR MISSION (Redesigned) */}
      <section id="mission" className="py-24 md:py-32 relative overflow-hidden bg-[hsl(var(--dark-bg))]">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[600px] h-[600px] bg-[#ffb200]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative ring-1 ring-white/10 shadow-2xl">
                <img
                  src="/images/precision-detail.jpg"
                  alt="Precision engineering detail"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/80 via-transparent to-transparent" />
              </div>

              {/* Decorative floating card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-[hsl(var(--dark-secondary))] p-6 rounded-xl border border-white/10 shadow-2xl hidden sm:block z-20"
              >
                <Target className="w-10 h-10 text-[#ffb200] mb-3" />
                <div className="text-white font-bold text-lg">{t('focusPrecision')}</div>
                <div className="text-white/60 text-sm">{t('micrometerMatters')}</div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-7 lg:pl-12 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-[#ffb200]"></span>
                <span className="text-[#ffb200] font-bold tracking-widest uppercase text-sm subtitle-premium">{t('mission.title')}</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight text-balance text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ffb200] text-glow-accent">
                {t('engineeringExcellence')}
              </h2>

              <div className="mission-card p-8 md:p-10 rounded-2xl relative">
                <div className="absolute top-6 left-6 opacity-10 pointer-events-none">
                  <Quote className="w-24 h-24 text-white" />
                </div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light relative z-10 italic">
                  "{t('mission.text')}"
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 10. PRODUCTION AND TEAM */}
      <section id="team" className="py-24 bg-[hsl(var(--dark-secondary))]">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Users className="w-16 h-16 text-[#ffb200] mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('team.title')}</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-prose">
                {t('team.text')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[hsl(var(--dark-bg))] p-6 rounded-2xl border border-white/5">
                  <div className="text-4xl font-bold text-[#ffb200] mb-2">60+</div>
                  <div className="font-medium text-white text-lg">{t('skilledProfessionals')}</div>
                </div>
                <div className="bg-[hsl(var(--dark-bg))] p-6 rounded-2xl border border-white/5">
                  <GraduationCap className="w-10 h-10 text-[#ffb200] mb-3" />
                  <div className="font-medium text-white text-lg">{t('continuousTraining')}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="rounded-2xl overflow-hidden aspect-[4/5] relative ring-1 ring-white/10 group">
                    <img
                      src="/images/production-facility.jpg"
                      alt={t('productionFacility')}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[4/5] relative ring-1 ring-white/10 group">
                    <img
                      src="/images/engineering-team.jpg"
                      alt={t('engineeringTeam')}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[hsl(var(--dark-bg))] p-6 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4">
                <TrendingUp className="w-12 h-12 text-[#ffb200]" />
                <div>
                  <div className="text-white font-bold">{t('processOptimization')}</div>
                  <div className="text-white/60 text-sm">{t('maximizingEfficiency')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. COOPERATION */}
      <section id="cooperation" className="py-24 bg-[hsl(var(--dark-bg))]">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('partnershipBenefits')}</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Handshake, key: 'flexible' },
              { icon: Shield, key: 'quality' },
              { icon: Headphones, key: 'support' },
              { icon: TrendingUp, key: 'scalable' },
              { icon: DollarSign, key: 'pricing' },
              { icon: Users, key: 'management' }
            ].map((benefit, idx) => (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[hsl(var(--dark-secondary))] border border-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:border-[#ffb200]/30 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ffb200]/10 transition-colors">
                  <benefit.icon className="w-7 h-7 text-[#ffb200]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t(`benefits.items.${benefit.key}.title`)}</h3>
                <p className="text-white/60 leading-relaxed">{t(`benefits.items.${benefit.key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CONTACT SECTION */}
      <section id="contact" className="py-32 bg-[hsl(var(--dark-secondary))]">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('contact.title')}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-[hsl(var(--dark-bg))] p-10 rounded-3xl border border-white/5 shadow-2xl">
                <div className="space-y-10">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#ffb200]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">{t('headquarters')}</div>
                      <div className="text-white/60 text-lg">{t('contact.info.address')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Smartphone className="w-6 h-6 text-[#ffb200]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">{t('mobile')}</div>
                      <div className="text-white/60 text-lg">{t('contact.info.phone2')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-[#ffb200]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">{t('directLines')}</div>
                      <div className="text-white/60 text-lg">{t('contact.info.phone1')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-[#ffb200]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">{t('digital')}</div>
                      <div className="text-white/60 text-lg space-y-1">
                        <div>{t('contact.info.email')}</div>
                        <div>{t('contact.info.web')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[hsl(var(--dark-bg))] p-10 rounded-3xl border border-white/5 shadow-2xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#ffb200] focus:ring-1 focus:ring-[#ffb200] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#ffb200] focus:ring-1 focus:ring-[#ffb200] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">{t('contact.form.message')}</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#ffb200] focus:ring-1 focus:ring-[#ffb200] outline-none transition-all resize-none"
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium">
                    {t('contact.form.success')}
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                    {t('contact.form.error')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-5 bg-[#ffb200] text-black font-bold text-lg rounded-xl hover:bg-white hover:text-black active:scale-[0.98] transition-all duration-200 disabled:opacity-50 mt-4"
                >
                  {formStatus === 'loading' ? t('contact.form.processing') : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
