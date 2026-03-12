import { WebHaptics } from 'web-haptics';

let hapticsInstance: any = null;
let audioCtx: AudioContext | null = null;

const playClickSound = (type: string) => {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'selection' || type === 'light') {
      // Noise component for "click" texture
      const bufferSize = audioCtx.sampleRate * 0.02;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.04, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
      
      noise.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);
      noise.start(now);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.01);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.01);
      osc.start(now);
      osc.stop(now + 0.01);
    } else if (type === 'medium') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.05);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'heavy' || type === 'success' || type === 'warning' || type === 'error') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(100, now);
      osc.frequency.exponentialRampToValueAtTime(20, now + 0.08);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    console.warn('Audio feedback failed', e);
  }
};

export const triggerHaptic = (type: 'light' | 'medium' | 'heavy' | 'selection' | 'success' | 'warning' | 'error' = 'light') => {
  // Sound feedback for desktop/general
  if (typeof window !== 'undefined') {
    playClickSound(type);
  }

  // Physical haptics for mobile
  try {
    if (!hapticsInstance && typeof window !== 'undefined') {
      hapticsInstance = new WebHaptics();
    }
    
    if (hapticsInstance) {
      hapticsInstance.trigger();
    }
  } catch (e) {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      const pattern = type === 'success' ? [10, 30, 10] : 10;
      navigator.vibrate(pattern);
    }
  }
};
