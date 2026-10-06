import React, { useState } from 'react';
import { Search, Loader2, CheckCircle2, AlertCircle, User, Calendar } from 'lucide-react';
import { formatCPF, isValidCPFAlgorithm, queryCPFOnline, type CpfResult } from '../utils/cpfValidator';
import { type TranslationSchema } from '../i18n/translations';

interface CpfLookupStudioProps {
  t: TranslationSchema['studio'];
}

export const CpfLookupStudio: React.FC<CpfLookupStudioProps> = ({ t }) => {
  const [cpf, setCpf] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CpfResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setCpf(formatted);
    setError(null);
  };

  const handleLookup = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!cpf.trim()) return;

    if (!isValidCPFAlgorithm(cpf)) {
      setError(t.invalidMsg);
      setResult(null);
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await queryCPFOnline(cpf);
      if (res) {
        setResult(res);
      } else {
        setError(t.invalidMsg);
      }
    } catch (err) {
      console.error(err);
      setError(t.invalidMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
      <form onSubmit={handleLookup} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            {t.inputLabel}
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              value={cpf}
              onChange={handleInputChange}
              maxLength={14}
              placeholder={t.placeholder}
              className="w-full pl-4 pr-12 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-lg font-bold placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            <div className="absolute right-4 text-slate-400 font-mono text-xs">
              {cpf.replace(/\D/g, '').length}/11
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || cpf.replace(/\D/g, '').length < 11}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-base shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{t.validatingBtn}</span>
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              <span>{t.validateBtn}</span>
            </>
          )}
        </button>
      </form>

      {/* Error Alert */}
      {error && (
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 flex items-center gap-3 text-sm animate-fade-in">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Result Display */}
      {result && (
        <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/40 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>{t.validMsg}</span>
            </div>
            <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded border border-emerald-800 font-semibold">
              {result.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1.5 mb-1">
                <User className="w-3.5 h-3.5 text-emerald-400" /> {t.nameLabel}
              </span>
              <p className="font-bold text-slate-100 text-base">{result.name}</p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" /> {t.birthLabel}
              </span>
              <p className="font-bold text-slate-100 text-base">{result.birthDate}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
            <span>{t.sourceLabel}: <strong className="text-slate-200">{result.source}</strong></span>
            <span className="text-emerald-400 font-mono font-semibold">CPF: {result.cpf}</span>
          </div>
        </div>
      )}
    </div>
  );
};
