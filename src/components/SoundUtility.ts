/**
 * Web Audio API Heartbeat Synthesizer
 * Generates custom low-frequency heart thumps (thump-thump) in real-time.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a single thump sound
 * @param time play starting time in seconds
 * @param frequency starting pitch frequency
 * @param duration decay length
 */
function playThump(time: number, frequency: number, duration: number = 0.3) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    
    // Low heartbeat pitch that drops off exponentially
    osc.frequency.setValueAtTime(frequency, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + duration);

    // Fade-out gain envelope
    gain.gain.setValueAtTime(0.6, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);

    osc.start(time);
    osc.stop(time + duration);
  } catch (error) {
    console.error("Failed to synthesize heartbeat audio:", error);
  }
}

/**
 * Plays a classic double-heartbeat (thump-thump) sound
 */
export function playHeartbeatSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // First thump (Lub)
    playThump(now, 75, 0.28);
    
    // Second thump (Dub) - slightly lower pitch, slightly offset
    playThump(now + 0.22, 60, 0.25);
  } catch (error) {
    console.warn("AudioContext is not initialized or user interaction is required.", error);
  }
}
