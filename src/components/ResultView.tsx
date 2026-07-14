import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, Share2, Award, Sparkles, CheckCircle, Heart } from 'lucide-react';
import { FEMALE_RESULTS, MALE_RESULTS, Gender, GradeResult } from '../types';
import { Language, LOCALES, UIStrings } from '../locales';
import AdFitBanner from './AdFitBanner';

interface ResultViewProps {

  gender: Gender;
  photoUrl: string;
  choices: number[];
  onRestart: () => void;
  lang: Language;
  ui: UIStrings;
}

export default function ResultView({ gender, photoUrl, choices, onRestart, lang, ui }: ResultViewProps) {
  // Determine target counterpart gender (opposite of user's original gender)
  const targetGender: Gender = gender === 'male' ? 'female' : 'male';
  
  // Calculate base grade from choices
  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
  choices.forEach(val => {
    if (val >= 1 && val <= 4) {
      counts[val] = (counts[val] || 0) + 1;
    }
  });

  // Find highest frequency choice
  let calculatedGrade: 1 | 2 | 3 | 4 = 1;
  let maxCount = -1;
  for (let g = 1; g <= 4; g++) {
    if (counts[g] > maxCount) {
      maxCount = counts[g];
      calculatedGrade = g as 1 | 2 | 3 | 4;
    }
  }

  // Deterministic pseudorandom seed based on the image size / string hash
  const getPhotoHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < Math.min(str.length, 1000); i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };
  
  const hashVal = getPhotoHash(photoUrl);
  // Let the photo hash jitter the grade slightly, keeping the core personality range
  const randomFactor = (hashVal % 4) + 1; // 1, 2, 3, or 4
  
  // Blend 70% personality answers and 30% random scanning factor
  const blendedValue = Math.round((calculatedGrade * 2 + randomFactor) / 3);
  const finalGrade = (blendedValue >= 1 && blendedValue <= 4 ? blendedValue : calculatedGrade) as 1 | 2 | 3 | 4;

  // Dynamically load the localized translation for this grade and override with correct local image
  const baseResults = targetGender === 'female' ? FEMALE_RESULTS : MALE_RESULTS;
  const localizedResults = targetGender === 'female' ? LOCALES[lang].femaleResults : LOCALES[lang].maleResults;
  
  const baseResult = baseResults[finalGrade];
  const localizedResult = localizedResults[finalGrade];

  const result: GradeResult = {
    ...localizedResult,
    image: baseResult.image // Use actual high-quality JPG asset from base result
  };

  // Helper to handle results sharing copy
  const handleShare = () => {
    try {
      // Use clean URL without anchor tags or hashes
      const shareUrl = window.location.origin + window.location.pathname;
      navigator.clipboard.writeText(shareUrl);
      alert(ui.copySuccess);
    } catch (err) {
      alert(ui.copyFail);
    }
  };

  // Localized gender labels inside parenthesis
  const getGenderLabel = (g: Gender) => {
    if (lang === 'ko') {
      return g === 'male' ? '남' : '여';
    } else if (lang === 'en') {
      return g === 'male' ? 'Male' : 'Female';
    } else if (lang === 'ja') {
      return g === 'male' ? '男' : '女';
    } else {
      return g === 'male' ? '男' : '女';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-2 sm:py-4" id="result-root">
      {/* Visual Header Badge */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mx-auto flex w-fit items-center gap-1.5 rounded-full bg-slate-900 py-1.5 px-4 text-[10px] sm:text-[11px] font-bold text-white shadow-md mb-5 sm:mb-6"
        id="result-header-badge"
      >
        <Sparkles className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
        {ui.reportTitle}
      </motion.div>

      {/* Main Comparative Cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start" id="result-grid">
        {/* Left column: Image Comparison Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="md:col-span-5 bg-white p-4 sm:p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center"
          id="visual-match-box"
        >
          <h3 className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1">
            <Award className="h-4 w-4 text-rose-500" /> {ui.visualMatchTitle}
          </h3>

          <div className="flex flex-col gap-3.5 w-full" id="dual-avatar-container">
            {/* 1. Original User photo */}
            <div className="relative group w-full" id="card-original">
              <div className="absolute top-2 left-2 z-10 bg-slate-900/80 text-white text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm">
                {ui.originalSelf} ({getGenderLabel(gender)})
              </div>
              <div className="h-28 sm:h-32 w-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <img
                  src={photoUrl}
                  alt="Original Self"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  id="img-result-original"
                />
              </div>
            </div>

            {/* Link element indicator */}
            <div className="flex justify-center -my-2.5 relative z-10" id="link-indicator">
              <div className="h-6.5 w-6.5 rounded-full bg-rose-500 text-white flex items-center justify-center border-2 border-white shadow-md">
                <Heart className="h-3 w-3 fill-white text-white animate-pulse" />
              </div>
            </div>

            {/* 2. Counterpart grade photo */}
            <div className="relative group w-full" id="card-counterpart">
              <div className="absolute top-2 left-2 z-10 bg-rose-500/90 text-white text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm">
                {ui.anotherSelf} ({getGenderLabel(targetGender)})
              </div>
              <div className="h-36 sm:h-44 w-full rounded-2xl overflow-hidden border-2 border-rose-300 shadow-lg shadow-rose-100 relative">
                <img
                  src={result.image}
                  alt="Another Me Counterpart"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  id="img-result-counterpart"
                />
                <div className="absolute inset-0 border border-rose-500/20 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right column: Personality Details and breakdown */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="md:col-span-7 bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between"
          id="personality-match-box"
        >
          <div>
            {/* Grade Title */}
            <div className="flex items-center gap-1.5 mb-2.5" id="grade-badge-container">
              <span className={`text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                result.grade === 1 ? 'bg-amber-100 text-amber-800' :
                result.grade === 2 ? 'bg-indigo-100 text-indigo-800' :
                result.grade === 3 ? 'bg-rose-100 text-rose-800' :
                'bg-emerald-100 text-emerald-800'
              }`}>
                {ui.visualGrade} 0{result.grade}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                {lang === 'ko' ? '등급' : lang === 'en' ? 'Grade' : lang === 'ja' ? '等' : '等'}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight" id="result-grade-title">
              {result.title}
            </h1>
            <p className="text-xs font-bold text-rose-500 mt-1" id="result-grade-subtitle">
              {result.subTitle}
            </p>

            <hr className="my-3.5 border-slate-100" />

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-5 font-medium" id="result-grade-desc">
              {result.description}
            </p>

            {/* Charms and points checklist */}
            <div className="mb-5 animate-fade-in" id="charm-points-section">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> {ui.charmTitle}
              </h4>
              <ul className="space-y-2" id="charm-points-list">
                {result.charms.map((charm, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs text-slate-600 font-semibold" id={`charm-item-${index}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0" />
                    <span>{charm}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MBTI Matching summary */}
            <div className="mb-5 sm:mb-6 p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between" id="mbti-container">
              <span className="text-xs font-bold text-slate-400">{ui.mbtiMatchTitle}</span>
              <span className="text-xs font-extrabold text-indigo-600 bg-white py-1 px-3 rounded-xl border border-indigo-50 shadow-sm font-sans">
                {result.mbtiMatch}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3.5 pt-2" id="action-buttons-container">
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-1.5 border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold py-3 px-4 rounded-full text-xs transition-colors active:scale-95"
              id="btn-share"
            >
              <Share2 className="h-3.5 w-3.5 text-slate-500 shrink-0" /> {ui.btnShare}
            </button>
            <button
              onClick={onRestart}
              className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-full text-xs transition-colors shadow-md shadow-slate-950/5 active:scale-95"
              id="btn-restart"
            >
              <RefreshCw className="h-3.5 w-3.5 shrink-0" /> {ui.btnRestart}
            </button>
          </div>

          {/* AdFit Web Banner */}
          <AdFitBanner
            unitId={(import.meta as any).env.VITE_ADFIT_RESULT_ID || 'PLACEHOLDER'}
            width="320"
            height="50"
          />
        </motion.div>
      </div>
    </div>
  );
}
