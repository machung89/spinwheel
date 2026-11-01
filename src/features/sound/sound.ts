/**
 * Synthesized sound effects (Web Audio). No audio files are downloaded,
 * which keeps the page light. The AudioContext is created lazily on the
 * first user gesture, as browsers require.
 */
import type { TickSound, WinSound } from "@/types/wheel";

let ctx: AudioContext | null = null;
let noise: AudioBuffer | null = null;
let lastTick = 0;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function noiseBuffer(c: AudioContext): AudioBuffer {
  if (noise) return noise;
  noise = c.createBuffer(1, c.sampleRate * 0.5, c.sampleRate);
  const data = noise.getChannelData(0);
  // Noise texture only; not used for any outcome.
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return noise;
}

function tone(c: AudioContext, freq: number, start: number, dur: number, vol: number, type: OscillatorType = "sine", endFreq?: number) {
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, start + dur);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), start + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  osc.connect(gain).connect(c.destination);
  osc.start(start);
  osc.stop(start + dur + 0.02);
}

/** Call from a user gesture to unlock audio on iOS/Safari. */
export function unlockAudio() {
  audio();
}

export function playTick(style: TickSound, volume: number) {
  if (style === "none" || volume <= 0) return;
  const c = audio();
  if (!c) return;
  const now = c.currentTime;
  if (now - lastTick < 0.022) return; // avoid a buzz when hundreds of segments pass quickly
  lastTick = now;
  if (style === "click") {
    const src = c.createBufferSource();
    src.buffer = noiseBuffer(c);
    const filter = c.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 2500;
    const gain = c.createGain();
    gain.gain.setValueAtTime(volume * 0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
    src.connect(filter).connect(gain).connect(c.destination);
    src.start(now, Math.random() * 0.4, 0.04);
  } else if (style === "wood") {
    tone(c, 950, now, 0.05, volume * 0.45, "triangle", 500);
  } else {
    tone(c, 1320, now, 0.035, volume * 0.25, "square");
  }
}

export function playSpinStart(volume: number) {
  const c = audio();
  if (!c || volume <= 0) return;
  const now = c.currentTime;
  const src = c.createBufferSource();
  src.buffer = noiseBuffer(c);
  const filter = c.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 1.2;
  filter.frequency.setValueAtTime(300, now);
  filter.frequency.exponentialRampToValueAtTime(2400, now + 0.35);
  const gain = c.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume * 0.25, now + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
  src.connect(filter).connect(gain).connect(c.destination);
  src.start(now, 0, 0.5);
}

export function playWin(style: WinSound, volume: number) {
  if (style === "none" || volume <= 0) return;
  const c = audio();
  if (!c) return;
  const t = c.currentTime + 0.02;
  const v = volume * 0.35;
  if (style === "fanfare") {
    [523.25, 659.25, 783.99].forEach((f, i) => tone(c, f, t + i * 0.11, 0.18, v, "triangle"));
    tone(c, 1046.5, t + 0.33, 0.55, v, "triangle");
    tone(c, 783.99, t + 0.33, 0.55, v * 0.6, "sine");
  } else if (style === "chime") {
    [1318.5, 1975.5, 2637].forEach((f, i) => tone(c, f, t + i * 0.08, 1.1 - i * 0.2, v * (1 - i * 0.25), "sine"));
  } else {
    tone(c, 880, t, 0.12, v, "sine", 220);
    tone(c, 1760, t + 0.08, 0.2, v * 0.6, "triangle", 880);
  }
}

export function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1;
    u.lang = document.documentElement.lang || "en-US";
    window.speechSynthesis.speak(u);
  } catch {
    /* speech unavailable */
  }
}
