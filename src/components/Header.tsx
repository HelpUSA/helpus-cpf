import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Globe2, ChevronDown } from 'lucide-react';
import { type Language, type TranslationSchema } from '../i18n/translations';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  t: TranslationSchema['nav'];
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange, t }) => {
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-600 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white">
                Help<span className="text-emerald-400">US</span> <span className="text-slate-300 font-light">CPF</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                B2B SAAS
              </span>
            </div>
            <p className="text-xs text-slate-400">{t.subtitle}</p>
          </div>
        </div>

        {/* Right Actions & Language Switcher */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Subdomínio: <strong className="text-slate-200">{t.subdomain}</strong></span>
          </div>

          {/* Standard HelpUS 3-Language Switcher (🌐 PT | EN | ES) */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-2 border border-slate-700 transition-all cursor-pointer shadow-sm"
            >
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <span>
                {lang === 'pt' && '🇧🇷 PT'}
                {lang === 'en' && '🇺🇸 EN'}
                {lang === 'es' && '🇪🇸 ES'}
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-slate-900 rounded-xl border border-slate-700 shadow-2xl p-1.5 z-50 space-y-1">
                <button
                  onClick={() => { onLanguageChange('pt'); setShowLangDropdown(false); }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer ${
                    lang === 'pt' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>🇧🇷</span> Português
                </button>

                <button
                  onClick={() => { onLanguageChange('en'); setShowLangDropdown(false); }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer ${
                    lang === 'en' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>🇺🇸</span> English
                </button>

                <button
                  onClick={() => { onLanguageChange('es'); setShowLangDropdown(false); }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer ${
                    lang === 'es' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>🇪🇸</span> Español
                </button>
              </div>
            )}
          </div>

          <button className="hidden sm:block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-md transition-all cursor-pointer">
            {t.createAccount}
          </button>
        </div>

      </div>
    </header>
  );
};
