import { UIStrings } from '../locales';

/**
 * Shared mobile share handler. Uses Web Share API on mobile devices,
 * or copies link to clipboard as a fallback.
 */
export const handleMobileShare = async (ui: UIStrings) => {
  const shareData = {
    title: `${ui.title1} - ${ui.title2}`,
    text: ui.subtitle,
    url: window.location.origin + window.location.pathname,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return true;
    } catch (err: any) {
      // If the user cancelled, we don't need to copy or alert
      if (err.name === 'AbortError') {
        return false;
      }
    }
  }

  // Fallback to copying to clipboard
  try {
    await navigator.clipboard.writeText(shareData.url);
    alert(ui.copySuccess);
    return true;
  } catch (err) {
    alert(ui.copyFail);
    return false;
  }
};

/**
 * Triggers the PWA install flow. If native prompt is available, it runs it.
 * Otherwise, it dispatches a custom event to open the guide modal.
 */
export const handleMobileInstall = () => {
  const prompt = (window as any).deferredPrompt;
  if (prompt) {
    prompt.prompt();
    prompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        (window as any).deferredPrompt = null;
      }
    });
  } else {
    // Dispatch custom event to open the PWA guide modal in InstallPrompt
    window.dispatchEvent(new CustomEvent('show-pwa-guide'));
  }
};
