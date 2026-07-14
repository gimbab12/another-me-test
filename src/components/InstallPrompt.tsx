import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, Share2, Info, PlusSquare, ArrowRight, Laptop, Sparkles } from 'lucide-react';
import { Language, UIStrings } from '../locales';

interface InstallPromptProps {
  lang: Language;
  ui: UIStrings;
}

export default function InstallPrompt({ lang, ui }: InstallPromptProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    // 1. Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone;
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // 2. Detect platform
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setPlatform('ios');
      setShowFloatingButton(true);
    } else if (/android/i.test(userAgent)) {
      setPlatform('android');
    } else {
      setPlatform('desktop');
    }

    // 3. Listen to PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowFloatingButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // If on iOS or if browser already supports installation, show button after 3 seconds
    const timer = setTimeout(() => {
      if (platform === 'ios') {
        setShowFloatingButton(true);
      }
    }, 2500);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, [platform]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Trigger native PWA install prompt
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowFloatingButton(false);
        setIsInstalled(true);
      }
    } else {
      // For iOS and unsupported desktop, show custom guidelines modal
      setShowModal(true);
    }
  };

  if (isInstalled) return null;

  return (
    <>
      {/* Floating Sticky Bottom/Top install banner optimized for phone screens */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto"
            id="pwa-floating-banner"
          >
            <div className="bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-rose-500 to-rose-400 flex items-center justify-center shadow-lg shadow-rose-500/20 shrink-0">
                  <Sparkles className="h-4.5 w-4.5 text-white animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-tight">{ui.pwaTitle}</h4>
                  <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5 max-w-[210px] sm:max-w-xs leading-none">
                    {ui.pwaDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg transition-colors border border-white/5 active:scale-95 shrink-0"
                  id="btn-pwa-guide"
                >
                  {ui.pwaGuideBtn}
                </button>
                {deferredPrompt && (
                  <button
                    onClick={handleInstallClick}
                    className="bg-rose-500 hover:bg-rose-600 text-white text-[11px] font-extrabold py-1.5 px-3 rounded-lg transition-colors active:scale-95 shadow-sm shadow-rose-500/20 shrink-0"
                    id="btn-pwa-install-native"
                  >
                    {ui.pwaInstallBtn}
                  </button>
                )}
                <button
                  onClick={() => setShowFloatingButton(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors shrink-0"
                  id="btn-pwa-dismiss"
                  aria-label="Dismiss install banner"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Guide Modal Backdrop */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm" id="pwa-modal-backdrop">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white text-slate-900 w-full max-w-sm rounded-3xl p-6 border border-slate-100 shadow-2xl relative overflow-hidden"
              id="pwa-modal-container"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-50 transition-colors"
                id="btn-pwa-modal-close"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Title Header */}
              <div className="flex flex-col items-center text-center mb-5" id="pwa-modal-header">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-rose-400 flex items-center justify-center text-white mb-3 shadow-md shadow-rose-100">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="text-base font-black text-slate-900 tracking-tight">{ui.pwaTitle}</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed px-2">
                  {ui.pwaDesc}
                </p>
              </div>

              {/* Step instructions depending on device */}
              <div className="space-y-4 mb-6" id="pwa-modal-steps">
                {platform === 'ios' ? (
                  <div className="space-y-3.5" id="pwa-steps-ios">
                    <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div className="h-6 w-6 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                        1
                      </div>
                      <div className="text-xs font-medium text-slate-600">
                        Safari 브라우저 하단의 <strong className="text-slate-900 font-bold">공유 버튼 <Share2 className="h-3.5 w-3.5 inline mx-0.5" /></strong>을 클릭해주세요.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div className="h-6 w-6 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                        2
                      </div>
                      <div className="text-xs font-medium text-slate-600">
                        메뉴를 스크롤하여 <strong className="text-slate-900 font-bold">'홈 화면에 추가' <PlusSquare className="h-3.5 w-3.5 inline mx-0.5 text-slate-800" /></strong> 메뉴를 탭하세요.
                      </div>
                    </div>
                  </div>
                ) : platform === 'android' ? (
                  <div className="space-y-3.5" id="pwa-steps-android">
                    <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div className="h-6 w-6 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                        1
                      </div>
                      <div className="text-xs font-medium text-slate-600 leading-relaxed">
                        Chrome 브라우저 우측 상단 <strong className="text-slate-900 font-bold">메뉴 버튼(세로 점 3개)</strong>을 클릭해주세요.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div className="h-6 w-6 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                        2
                      </div>
                      <div className="text-xs font-medium text-slate-600 leading-relaxed">
                        <strong className="text-slate-900 font-bold">'앱 설치'</strong> 또는 <strong className="text-slate-900 font-bold">'홈 화면에 추가'</strong>를 선택해주세요.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5" id="pwa-steps-desktop">
                    <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div className="h-6 w-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                        <Laptop className="h-3.5 w-3.5" />
                      </div>
                      <div className="text-xs font-medium text-slate-600 leading-relaxed">
                        브라우저 주소창 우측 끝의 <strong className="text-slate-900 font-bold">설치 아이콘(⊕)</strong>을 클릭하시거나, 브라우저 메뉴의 <strong className="text-slate-900 font-bold">'설치'</strong>를 클릭해주세요.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Install Button if native installer prompt is saved in state */}
              {deferredPrompt ? (
                <button
                  onClick={handleInstallClick}
                  className="w-full flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-2xl text-xs shadow-md transition-all active:scale-98"
                  id="btn-pwa-modal-install"
                >
                  <Download className="h-3.5 w-3.5" /> {ui.pwaInstallBtn}
                </button>
              ) : (
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-2xl text-xs transition-colors"
                  id="btn-pwa-modal-dismiss"
                >
                  확인
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
