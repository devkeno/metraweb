'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/#hero', label: t('nav.hero') },
    { path: '/#cnc-milling', label: t('nav.cncmilling') },
    { path: '/#welded', label: t('nav.welded') },
    { path: '/#quality', label: t('nav.quality') },
    { path: '/#projects', label: t('nav.projects') },
    { path: '/#history', label: t('nav.history') },
    { path: '/#about', label: t('nav.about') },
    { path: '/#contact', label: t('nav.contact') }
  ];

  const languages = [
    { code: 'de', label: 'DE', flagClass: 'fi fi-de' },
    { code: 'en', label: 'EN', flagClass: 'fi fi-gb' },
    { code: 'bs', label: 'BH', flagClass: 'fi fi-ba' }
  ];

  const currentLang = languages.find(l => l.code === language) ?? languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glassmorphism shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3 notranslate" translate="no">
            <div className="w-10 h-10 bg-[#ffb200] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <div>
              <div className="font-bold text-lg leading-none text-white" style={{ letterSpacing: '-0.02em' }}>
                METRA
              </div>
              <div className="text-xs text-white/70">d.o.o.</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#ffb200] hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-all duration-200"
              >
                <span className={currentLang.flagClass} style={{ borderRadius: '2px' }} />
                <span translate="no">{currentLang.label}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-40 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-lg overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10 transition-colors duration-200 flex items-center gap-2 ${
                          language === lang.code ? 'text-[#ffb200] bg-white/5' : ''
                        }`}
                      >
                        <span className={lang.flagClass} style={{ borderRadius: '2px' }} />
                        <span translate="no">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0a] border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-8 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-medium text-white/50 mb-2 px-4">
                  {t('language')}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1 ${
                        language === lang.code
                          ? 'text-[#ffb200] bg-white/10'
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      <span className={lang.flagClass} style={{ borderRadius: '2px' }} />
                      <span translate="no">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;