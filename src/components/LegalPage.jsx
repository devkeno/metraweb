'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { legalContent } from '@/data/legalContent.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function LegalPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('terms');

  useEffect(() => {
    if (window.location.hash === '#privacy') setActiveTab('privacy');
    else setActiveTab('terms');
  }, []);

  const content = legalContent[language] ?? legalContent.de;
  const active = content[activeTab];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-8 sm:px-8 pt-32 pb-20">
        <a
          href="/"
          suppressHydrationWarning
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#ffb200] transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span suppressHydrationWarning>{t('legal.backHome')}</span>
        </a>

        <div className="flex gap-2 border-b border-white/10 mb-10">
          <button
            id="terms"
            onClick={() => setActiveTab('terms')}
            suppressHydrationWarning
            className={`pb-3 px-1 text-sm font-medium border-b-2 -mb-px transition-colors duration-200 ${
              activeTab === 'terms'
                ? 'border-[#ffb200] text-[#ffb200]'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <span suppressHydrationWarning>{t('legal.tabs.terms')}</span>
          </button>
          <button
            id="privacy"
            onClick={() => setActiveTab('privacy')}
            suppressHydrationWarning
            className={`pb-3 px-4 text-sm font-medium border-b-2 -mb-px transition-colors duration-200 ${
              activeTab === 'privacy'
                ? 'border-[#ffb200] text-[#ffb200]'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <span suppressHydrationWarning>{t('legal.tabs.privacy')}</span>
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-2 text-white" suppressHydrationWarning>
          {active.title}
        </h1>
        <p className="text-white/40 text-xs mb-10" suppressHydrationWarning>
          {active.updated}
        </p>

        <div className="space-y-8">
          {active.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-base font-semibold text-[#ffb200] mb-2" suppressHydrationWarning>
                {section.heading}
              </h2>
              <p className="text-white/70 leading-relaxed text-sm" suppressHydrationWarning>
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <a
            href="/"
            suppressHydrationWarning
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffb200] text-black text-sm font-semibold rounded-lg hover:bg-[#e6a000] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span suppressHydrationWarning>{t('legal.backHome')}</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
