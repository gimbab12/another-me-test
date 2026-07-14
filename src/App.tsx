/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, RefreshCw, Languages } from 'lucide-react';
import LandingView from './components/LandingView';
import QuizView from './components/QuizView';
import ScanningView from './components/ScanningView';
import ResultView from './components/ResultView';
import InstallPrompt from './components/InstallPrompt';
import { Gender } from './types';
import { Language, LOCALES } from './locales';

type ViewState = 'landing' | 'quiz' | 'scanning' | 'result';

const LANGUAGES_CONFIG: { code: Language; name: string; flag: string }[] = [
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'EN', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export default function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [gender, setGender] = useState<Gender>('male');
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [choices, setChoices] = useState<number[]>([]);
  const [lang, setLang] = useState<Language>('ko');

  const currentLocale = LOCALES[lang];
  const ui = currentLocale.ui;

  const handleStart = () => {
    setView('quiz');
  };

  const handleQuizComplete = (selectedGender: Gender, uploadedPhoto: string, userAnswers: number[]) => {
    setGender(selectedGender);
    setPhotoUrl(uploadedPhoto);
    setChoices(userAnswers);
    setView('scanning');
  };

  const handleScanFinish = () => {
    setView('result');
  };

  const handleRestart = () => {
    setGender('male');
    setPhotoUrl('');
    setChoices([]);
    setView('landing');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="app-wrapper">
      {/* Top Navigation / App Branding Header */}
      <header className="w-full bg-white border-b border-slate-100 py-3 px-4 sm:px-6 sticky top-0 z-50 shadow-sm shadow-slate-100/50" id="app-header">
        <div className="max-w-4xl mx-auto flex flex-col xs:flex-row items-center justify-between gap-3 sm:gap-4" id="header-inner">
          {/* Logo Brand */}
          <div className="flex items-center justify-between w-full xs:w-auto" id="brand-logo-row">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleRestart} id="brand-logo">
              <div className="h-8.5 w-8.5 rounded-xl bg-gradient-to-tr from-rose-500 to-rose-400 flex items-center justify-center text-white shadow-sm shadow-rose-100">
                <Heart className="h-4.5 w-4.5 fill-white" />
              </div>
              <div>
                <span className="text-xs font-black text-slate-900 tracking-tight block">ANOTHER ME</span>
                <span className="text-[9px] font-bold text-rose-500 block -mt-0.5 tracking-wider uppercase">
                  {ui.title2}
                </span>
              </div>
            </div>

            {/* Micro pulse wave visible on very small devices */}
            <div className="flex xs:hidden items-center gap-1 bg-rose-50/50 py-1 px-2.5 rounded-full border border-rose-100/30" id="micro-pulse-visual">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
              </span>
              <span className="text-[8px] font-extrabold text-rose-600 uppercase tracking-widest font-mono">LIVE</span>
            </div>
          </div>

          {/* Languages Selector & Pulse Visual block */}
          <div className="flex items-center gap-2 sm:gap-3 w-full xs:w-auto justify-between xs:justify-end" id="header-actions">
            {/* Elegant Language Pill list */}
            <div className="flex items-center gap-1 bg-slate-100/75 p-1 rounded-xl border border-slate-200/50" id="lang-switcher">
              <Languages className="h-3.5 w-3.5 text-slate-400 mx-1 shrink-0" />
              {LANGUAGES_CONFIG.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-[10px] sm:text-xs font-bold py-1 px-2 rounded-lg transition-all active:scale-95 flex items-center gap-1 shrink-0 ${
                    lang === l.code
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/30 font-extrabold'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
                  }`}
                  id={`btn-lang-${l.code}`}
                >
                  <span>{l.flag}</span>
                  <span className="hidden sm:inline">{l.name}</span>
                </button>
              ))}
            </div>

            {/* Pulse Visual (Hidden on super small screens, visible on SM+) */}
            <div className="hidden xs:flex items-center gap-1 bg-slate-50 py-1.5 px-3 rounded-full border border-slate-100" id="mini-pulse-visual">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Heart Pulse</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Stage */}
      <main className="flex-grow flex items-center justify-center p-3 sm:p-4 md:p-8" id="app-main-stage">
        <div className="w-full max-w-2xl" id="view-transitions-wrapper">
          <AnimatePresence mode="wait">
            {view === 'landing' && (
              <motion.div
                key="landing-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <LandingView onStart={handleStart} lang={lang} ui={ui} />
              </motion.div>
            )}

            {view === 'quiz' && (
              <motion.div
                key="quiz-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <QuizView
                  onBack={handleRestart}
                  onComplete={handleQuizComplete}
                  lang={lang}
                  ui={ui}
                  questions={currentLocale.questions}
                />
              </motion.div>
            )}

            {view === 'scanning' && (
              <motion.div
                key="scanning-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <ScanningView photoUrl={photoUrl} onFinish={handleScanFinish} ui={ui} />
              </motion.div>
            )}

            {view === 'result' && (
              <motion.div
                key="result-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <ResultView
                  gender={gender}
                  photoUrl={photoUrl}
                  choices={choices}
                  onRestart={handleRestart}
                  lang={lang}
                  ui={ui}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Sticky footer info */}
      <footer className="w-full py-4 text-center border-t border-slate-100 bg-white" id="app-footer">
        <p className="text-[10px] text-slate-400 font-sans px-4 leading-relaxed">
          © {new Date().getFullYear()} Another Me Test. All rights reserved. <br />
          {lang === 'ko' ? '사진 데이터는 기기 로컬에서 안전하게 처리되며 저장되지 않습니다.' :
           lang === 'en' ? 'Photo data is safely processed locally on your device and never stored.' :
           lang === 'ja' ? '写真データは端末のローカル環境で安全に処理され、保存されません。' :
           '照片数据在您本地设备中进行安全处理，绝不存储。'}
        </p>
      </footer>

      {/* Persistent Floating PWA Helper */}
      <InstallPrompt lang={lang} ui={ui} />
    </div>
  );
}
