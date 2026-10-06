import React from 'react';
import { Check, ShieldCheck, Zap, Crown } from 'lucide-react';
import { type TranslationSchema } from '../i18n/translations';

interface PricingProps {
  t: TranslationSchema['pricing'];
}

export const Pricing: React.FC<PricingProps> = ({ t }) => {
  return (
    <div className="my-12">
      <h3 className="text-center text-xl font-bold text-white mb-8 tracking-tight">{t.title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free Plan */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
          <div>
            <div className="p-2 w-10 h-10 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-white">{t.freeTitle}</h4>
            <div className="text-2xl font-extrabold text-emerald-400 my-2">{t.freePrice}</div>
            <p className="text-xs text-slate-400">{t.freeDesc}</p>
          </div>
          <button className="w-full mt-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer">
            Começar Grátis
          </button>
        </div>

        {/* Pro Plan */}
        <div className="p-6 rounded-2xl bg-slate-900 border-2 border-emerald-500 relative flex flex-col justify-between shadow-xl shadow-emerald-500/10">
          <div className="absolute -top-3 right-6 bg-emerald-500 text-slate-950 text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
            Recomendado
          </div>
          <div>
            <div className="p-2 w-10 h-10 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-white">{t.proTitle}</h4>
            <div className="text-2xl font-extrabold text-emerald-400 my-2">{t.proPrice}</div>
            <p className="text-xs text-slate-400">{t.proDesc}</p>
          </div>
          <button className="w-full mt-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white text-xs font-bold transition-all cursor-pointer">
            Assinar Plano Pro
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
          <div>
            <div className="p-2 w-10 h-10 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center mb-4">
              <Crown className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-white">{t.enterpriseTitle}</h4>
            <div className="text-2xl font-extrabold text-emerald-400 my-2">{t.enterprisePrice}</div>
            <p className="text-xs text-slate-400">{t.enterpriseDesc}</p>
          </div>
          <button className="w-full mt-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer">
            Falar com Vendas
          </button>
        </div>
      </div>
    </div>
  );
};
