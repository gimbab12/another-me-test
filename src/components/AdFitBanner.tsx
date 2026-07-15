import React, { useEffect, useRef } from 'react';

interface AdFitBannerProps {
  unitId?: string;
  width?: string;
  height?: string;
}

export default function AdFitBanner({ unitId, width, height }: AdFitBannerProps) {
  // Use user's real unitId as a reliable default fallback if VITE_ADFIT_LANDING_ID or VITE_ADFIT_RESULT_ID is not configured
  const activeUnitId = (!unitId || unitId === 'PLACEHOLDER') ? 'DAN-fPpKBjqcgAZAFFem' : unitId;
  const activeWidth = activeUnitId === 'DAN-fPpKBjqcgAZAFFem' ? '250' : (width || '320');
  const activeHeight = activeUnitId === 'DAN-fPpKBjqcgAZAFFem' ? '250' : (height || '50');

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeUnitId) return;

    // Create the AdFit loader script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//t1.kakaocdn.net/kas/static/ba.min.js';
    script.async = true;

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.appendChild(script);
    }

    return () => {
      if (currentContainer && script.parentNode === currentContainer) {
        currentContainer.removeChild(script);
      }
    };
  }, [activeUnitId, activeWidth, activeHeight]);

  return (
    <div className="flex flex-col items-center justify-center my-6 overflow-hidden max-w-full shrink-0" id={`adfit-container-${activeUnitId}`}>
      {/* Tiny clean visual label for ads */}
      <span className="text-[8px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded font-bold font-mono tracking-wider mb-2">ADVERTISEMENT</span>
      <div ref={containerRef} className="flex justify-center items-center">
        <ins
          className="kakao_ad_area"
          style={{ display: 'none' }}
          data-ad-unit={activeUnitId}
          data-ad-width={activeWidth}
          data-ad-height={activeHeight}
        />
      </div>
    </div>
  );
}

