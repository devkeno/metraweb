'use client';

import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  const footerSections = [
    {
      title: t('footerCompany'),
      links: [
        { label: t('nav.about'), path: '/#about' },
        { label: t('nav.history'), path: '/#history' },
        { label: t('nav.team'), path: '/#team' },
        { label: t('nav.contact'), path: '/#contact' }
      ]
    },
    {
      title: t('footerCapabilities'),
      links: [
        { label: t('nav.cncmilling'), path: '/#cnc-milling' },
        { label: t('nav.cncturning'), path: '/#cnc-turning' },
        { label: t('nav.welded'), path: '/#welded' },
        { label: t('nav.machinery'), path: '/#machinery' }
      ]
    },
    {
      title: t('footerQualityProjects'),
      links: [
        { label: t('nav.quality'), path: '/#quality' },
        { label: t('nav.projects'), path: '/#projects' }
      ]
    }
  ];

  const languages = [
    { code: 'de', label: 'DE', flagClass: 'fi fi-de' },
    { code: 'en', label: 'EN', flagClass: 'fi fi-gb' },
    { code: 'bs', label: 'BH', flagClass: 'fi fi-ba' }
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 notranslate" translate="no">
              <div className="w-12 h-12 bg-[#ffb200] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-2xl">M</span>
              </div>
              <div>
                <div className="font-bold text-xl leading-none text-white" style={{ letterSpacing: '-0.02em' }}>
                  METRA
                </div>
                <div className="text-sm text-white/60">d.o.o.</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/80 mb-6 max-w-prose">
              {t('hero.headline')}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#ffb200] flex items-center justify-center transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-black transition-colors duration-200" />
              </a>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <span className="font-semibold text-sm mb-4 block text-white">{section.title}</span>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.path}
                      className="text-sm text-white/70 hover:text-[#ffb200] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@metra.ba</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+387 30 526 117</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Novi Travnik, Bosnia and Herzegovina</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                    language === lang.code
                      ? 'bg-[#ffb200] text-black'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <span className={lang.flagClass} style={{ borderRadius: '2px' }} />
                  <span translate="no">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 <span className="notranslate" translate="no">METRA d.o.o.</span> {t('allRightsReserved')}</p>
            <div className="flex items-center gap-6">
              <a href="/legal#privacy" className="hover:text-[#ffb200] transition-colors duration-200">
                {t('privacyPolicy')}
              </a>
              <a href="/legal#terms" className="hover:text-[#ffb200] transition-colors duration-200">
                {t('termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;