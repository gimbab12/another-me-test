import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Activity } from 'lucide-react';
import { playHeartbeatSound } from './SoundUtility';
import { UIStrings } from '../locales';

interface ScanningViewProps {
  photoUrl: string;
  onFinish: () => void;
  ui: UIStrings;
}

export default function ScanningView({ photoUrl, onFinish, ui }: ScanningViewProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(ui.scanStatus1);

  // Synchronize audio and visual heartbeat thumps
  useEffect(() => {
    // Initial thump-thump
    playHeartbeatSound();

    const interval = setInterval(() => {
      playHeartbeatSound();
    }, 1000); // Thump thump every 1000ms (60 BPM)

    return () => clearInterval(interval);
  }, []);

  // Progress loader logic
  useEffect(() => {
    const duration = 4500; // 4.5 seconds scan
    const stepTime = 45; // update every 45ms
    const totalSteps = duration / stepTime;
    let step = 0;

    const progressInterval = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.floor((step / totalSteps) * 100), 100);
      setProgress(currentProgress);

      // Dynamic text based on progress
      if (currentProgress < 20) {
        setStatusText(ui.scanStatus1);
      } else if (currentProgress < 45) {
        setStatusText(ui.scanStatus2);
      } else if (currentProgress < 70) {
        setStatusText(ui.scanStatus3);
      } else if (currentProgress < 90) {
        setStatusText(ui.scanStatus4);
      } else {
        setStatusText(ui.scanStatus5);
      }

      if (step >= totalSteps) {
        clearInterval(progressInterval);
        setTimeout(() => {
          onFinish();
        }, 300);
      }
    }, stepTime);

    return () => clearInterval(progressInterval);
  }, [onFinish, ui]);

  return (
    <div className="flex flex-col items-center justify-center py-4 sm:py-6 text-center" id="scanning-root">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-sans tracking-tight" id="scan-title">
        {ui.scanTitle}
      </h2>
      <p className="text-[11px] sm:text-xs text-slate-400 mb-5 sm:mb-6 font-sans max-w-sm px-4 leading-relaxed">
        {ui.scanSub}
      </p>

      {/* Main Face Scanning Area */}
      <div className="relative mb-6 sm:mb-8" id="scanner-frame-wrapper">
        {/* Outer Tech border */}
        <div className="absolute -inset-2 rounded-full border border-rose-100 opacity-60 animate-ping duration-1000" />
        <div className="absolute -inset-1 rounded-full border border-rose-200/50" />
        
        {/* Profile Image & Scanner bar */}
        <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-slate-200/50" id="face-scan-box">
          <img
            src={photoUrl}
            alt="Scanning target"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
            id="img-scan-target"
          />
          
          {/* Holographic grid overlay */}
          <div className="absolute inset-0 bg-rose-500/5 pointer-events-none mix-blend-overlay" />

          {/* Sweeping Neon Laser Line */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent shadow-[0_0_12px_#f43f5e] z-10"
            id="scan-laser-line"
          />
        </div>

        {/* Pulse Heartbeat Badge overlay */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }} // Syncs with playHeartbeatSound
          className="absolute -bottom-2 right-3 sm:-bottom-3 sm:right-4 bg-rose-500 text-white rounded-full p-1.5 sm:p-2 shadow-lg shadow-rose-500/20 z-20 flex items-center justify-center border-2 border-white"
          id="pulse-heart-badge"
        >
          <Heart className="h-4.5 w-4.5 sm:h-5 sm:w-5 fill-white text-white" />
        </motion.div>
      </div>

      {/* Interactive BPM & activity counter */}
      <div className="flex items-center gap-4 sm:gap-6 mb-5 sm:mb-6 px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full shadow-sm" id="stats-banner">
        <div className="flex items-center gap-1.5" id="pulse-indicator">
          <Activity className="h-4 w-4 text-rose-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-600">{ui.heartRate}: 124 BPM</span>
        </div>
        <div className="h-3 w-[1px] bg-slate-200" />
        <div className="flex items-center gap-1" id="mbti-indicator">
          <ShieldCheck className="h-4 w-4 text-indigo-500" />
          <span className="text-[10px] sm:text-xs font-semibold text-slate-600">{ui.genderSync}</span>
        </div>
      </div>

      {/* Progress logs & percentage loader */}
      <div className="w-full max-w-xs px-4" id="progress-container">
        <div className="flex justify-between items-center text-[10px] sm:text-xs mb-1.5" id="progress-meta">
          <span className="font-sans font-semibold text-slate-400 line-clamp-1 max-w-[240px] text-left">{statusText}</span>
          <span className="font-mono font-bold text-slate-800">{progress}%</span>
        </div>
        
        {/* Slider bar */}
        <div className="w-full h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-100 shadow-inner" id="progress-bar-bg">
          <div
            className="h-full bg-gradient-to-r from-rose-500 to-rose-400 transition-all duration-75"
            style={{ width: `${progress}%` }}
            id="progress-bar-fill"
          />
        </div>
      </div>
    </div>
  );
}
