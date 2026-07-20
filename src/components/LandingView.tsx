import React from 'react';
import { motion } from 'motion/react';
import { Heart, Upload, Sparkles, UserCheck, Share2, PlusSquare } from 'lucide-react';
import { Language, UIStrings } from '../locales';
import AdFitBanner from './AdFitBanner';
import { handleMobileShare, handleMobileInstall } from '../utils/mobileActions';

interface LandingViewProps {
  onStart: () => void;
  lang: Language;
  ui: UIStrings;
}


export default function LandingView({ onStart, lang, ui }: LandingViewProps) {
  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-8 text-center" id="landing-container">
      {/* Visual Accent */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative mb-5 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-rose-50 text-rose-500 shadow-sm"
        id="icon-wrapper"
      >
        <Heart className="h-8 w-8 sm:h-10 sm:w-10 fill-rose-500 animate-pulse" />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border-2 border-rose-400"
        />
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight px-4"
        id="main-title"
      >
        {ui.title1} <br className="sm:hidden" />
        <span className="text-rose-500 relative">
          {ui.title2}
          <span className="absolute bottom-1 left-0 h-2 w-full bg-rose-100 -z-10 rounded"></span>
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-3.5 sm:mt-4 max-w-md font-sans text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed px-4 sm:px-6"
        id="main-subtitle"
      >
        {ui.subtitle}
      </motion.p>

      {/* Card Info Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg px-4"
        id="info-grid"
      >
        <div className="flex flex-col items-center p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <UserCheck className="h-5.5 w-5.5 sm:h-6 sm:w-6 text-indigo-500 mb-2 shrink-0" />
          <span className="text-xs font-semibold text-slate-700">
            {lang === 'ko' ? '1. 성별 선택' : lang === 'en' ? '1. Select Gender' : lang === 'ja' ? '1. 性別の選択' : '1. 选择性别'}
          </span>
          <span className="text-[10px] text-slate-400 mt-1">
            {lang === 'ko' ? '이성 매칭 타겟 설정' : lang === 'en' ? 'Set matchmaking target' : lang === 'ja' ? 'マッチングターゲット' : '设置匹配目标'}
          </span>
        </div>
        <div className="flex flex-col items-center p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <Upload className="h-5.5 w-5.5 sm:h-6 sm:w-6 text-amber-500 mb-2 shrink-0" />
          <span className="text-xs font-semibold text-slate-700">
            {lang === 'ko' ? '2. 사진 업로드' : lang === 'en' ? '2. Upload Photo' : lang === 'ja' ? '2. 写真のアップロード' : '2. 上传照片'}
          </span>
          <span className="text-[10px] text-slate-400 mt-1">
            {lang === 'ko' ? '자아 정밀 분석 소스' : lang === 'en' ? 'Source for deep scan' : lang === 'ja' ? '精確スキャン用ソース' : '用于深层扫描的源文件'}
          </span>
        </div>
        <div className="flex flex-col items-center p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <Sparkles className="h-5.5 w-5.5 sm:h-6 sm:w-6 text-rose-500 mb-2 shrink-0" />
          <span className="text-xs font-semibold text-slate-700">
            {lang === 'ko' ? '3. 5문항 고속 스캔' : lang === 'en' ? '3. 5-Question Scan' : lang === 'ja' ? '3. 5つの質問スキャン' : '3. 5道题快速扫描'}
          </span>
          <span className="text-[10px] text-slate-400 mt-1">
            {lang === 'ko' ? '성격/심박 정밀 조율' : lang === 'en' ? 'Personality calibration' : lang === 'ja' ? '性格と心拍の精密調整' : '性格心率精准微调'}
          </span>
        </div>
      </motion.div>

      {/* Pulsing Start Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8 sm:mt-10 w-full px-4 max-w-xs"
        id="start-button-wrapper"
      >
        <button
          onClick={onStart}
          className="group relative w-full overflow-hidden rounded-full bg-slate-900 py-3.5 sm:py-4 px-6 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:bg-slate-800 hover:shadow-xl active:scale-95"
          id="btn-start"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wide">
            {lang === 'ko' ? '테스트 시작하기' : lang === 'en' ? 'Start Face Test' : lang === 'ja' ? 'テストを開始する' : '开始脸部测试'}
            <Heart className="h-4 w-4 fill-white text-rose-500 animate-pulse" />
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-rose-500 to-amber-500 opacity-20 transition-transform duration-500 group-hover:translate-x-0" />
        </button>
      </motion.div>

      {/* Mobile Quick Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="mt-4 w-full px-4 max-w-xs flex flex-col gap-2.5 sm:hidden"
        id="mobile-quick-actions"
      >
        <div className="flex items-center gap-2 w-full">
          <button
            onClick={() => handleMobileShare(ui)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-sm active:scale-95 transition-all"
            id="mobile-btn-share"
          >
            <Share2 className="h-4 w-4 text-slate-500" />
            <span>{lang === 'ko' ? '링크 공유' : lang === 'en' ? 'Share Link' : lang === 'ja' ? 'シェアする' : '分享链接'}</span>
          </button>
          
          <button
            onClick={handleMobileInstall}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-sm active:scale-95 transition-all"
            id="mobile-btn-install"
          >
            <PlusSquare className="h-4 w-4 text-rose-500" />
            <span>{lang === 'ko' ? '홈 화면 추가' : lang === 'en' ? 'Add to Home' : lang === 'ja' ? 'ホームに追加' : '添加到桌面'}</span>
          </button>
        </div>
      </motion.div>

      {/* AdFit Web Banner */}
      <AdFitBanner
        unitId={(import.meta as any).env.VITE_ADFIT_LANDING_ID || 'PLACEHOLDER'}
        width="320"
        height="50"
      />
    </div>
  );
}
