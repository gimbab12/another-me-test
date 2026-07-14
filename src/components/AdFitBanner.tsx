import React, { useEffect } from 'react';

interface AdFitBannerProps {
  unitId: string;
  width: string;
  height: string;
}

export default function AdFitBanner({ unitId, width, height }: AdFitBannerProps) {
  useEffect(() => {
    // Only run script on client side and when unitId is provided
    if (!unitId || unitId === 'PLACEHOLDER') return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script if component unmounts
      try {
        document.body.removeChild(script);
      } catch (e) {
        // Ignore if already removed
      }
    };
  }, [unitId]);

  // If unitId is placeholder, show a beautifully styled dummy/preview box for UX
  if (!unitId || unitId === 'PLACEHOLDER') {
    return (
      <div 
        className="w-full max-w-[320px] mx-auto my-4 p-3 rounded-2xl bg-slate-50 border border-dashed border-slate-200 text-slate-400 text-[10px] font-sans font-medium flex flex-col items-center justify-center gap-1 shrink-0"
        id="adfit-dummy-placeholder"
      >
        <span className="text-[9px] bg-slate-200/60 px-1.5 py-0.5 rounded text-slate-500 font-bold font-mono">ADVERTISING</span>
        <span>카카오 애드핏 광고 영역 ({width}x{height})</span>
        <span className="text-[9px] text-slate-400">(Vercel 배포 후 발급받은 광고 단위 ID를 입력하면 활성화됩니다)</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-4 overflow-hidden max-w-full shrink-0" id={`adfit-container-${unitId}`}>
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={unitId}
        data-ad-width={width}
        data-ad-height={height}
      />
    </div>
  );
}
