import React, { useEffect, useRef, useState } from 'react';

interface AdFitBannerProps {
  unitId?: string;
  width?: string;
  height?: string;
  isStickyBottom?: boolean;
}

export default function AdFitBanner({ unitId, width, height, isStickyBottom = false }: AdFitBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Set the default unit IDs based on whether this is a sticky bottom ad or regular ad
  const defaultUnitId = isStickyBottom ? 'DAN-9f0CcoCd3v9jgrUT' : 'DAN-fPpKBjqcgAZAFFem';
  const activeUnitId = (!unitId || unitId === 'PLACEHOLDER') ? defaultUnitId : unitId;
  
  const activeWidth = isStickyBottom ? '320' : (activeUnitId === 'DAN-fPpKBjqcgAZAFFem' ? '250' : (width || '320'));
  const activeHeight = isStickyBottom ? '50' : (activeUnitId === 'DAN-fPpKBjqcgAZAFFem' ? '250' : (height || '50'));

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeUnitId || !isVisible) return;

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
  }, [activeUnitId, activeWidth, activeHeight, isVisible]);

  if (!isVisible) return null;

  // Render as a Sticky Bottom Banner
  if (isStickyBottom) {
    return (
      <>
        {/* Spacer to prevent page content from being hidden behind the sticky banner */}
        <div className="w-full h-[95px] sm:h-[105px] shrink-0 pointer-events-none" id="adfit-sticky-spacer" />
        
        {/* Sticky floating banner wrapper */}
        <div 
          className="fixed bottom-0 left-0 right-0 md:left-1/2 md:right-auto md:-translate-x-1/2 md:max-w-md md:rounded-t-2xl z-50 bg-white/95 backdrop-blur-md border-t border-x border-slate-100 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] flex flex-col items-center justify-center pt-2 pb-2 px-4"
          id={`adfit-sticky-container-${activeUnitId}`}
        >
          {/* Header row with tiny labels and a closing trigger */}
          <div className="w-full max-w-[320px] flex items-center justify-between mb-1 px-1" id="adfit-sticky-header">
            <span className="text-[7.5px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded font-extrabold font-mono tracking-wider uppercase">ADVERTISEMENT</span>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-[9px] font-bold text-slate-400 hover:text-slate-600 transition-colors py-0.5 px-1.5 rounded bg-slate-50 hover:bg-slate-100 active:scale-95"
              id="adfit-sticky-close-btn"
            >
              닫기
            </button>
          </div>

          <div ref={containerRef} className="flex justify-center items-center h-[50px] w-[320px] overflow-hidden bg-slate-50/50 rounded-lg">
            <ins
              className="kakao_ad_area"
              style={{ display: 'none' }}
              data-ad-unit={activeUnitId}
              data-ad-width={activeWidth}
              data-ad-height={activeHeight}
            />
          </div>
        </div>
      </>
    );
  }

  // Render as an Inline Banner
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

