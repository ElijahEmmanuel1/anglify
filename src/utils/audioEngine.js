// ============================================
// Audio Engine — Natural Text-to-Speech for pronunciation
// Uses the Web Speech API with premium voice selection
// ============================================

let currentUtterance = null;
let cachedVoice = null;
let voicesLoaded = false;

// ---- Premium / natural-sounding voice keywords (ranked) ----
// These keywords appear in high-quality voices across platforms
const PREMIUM_KEYWORDS = [
    'natural',    // Edge "Microsoft … Natural" voices — best quality
    'neural',     // Some platforms label neural voices
    'enhanced',   // macOS enhanced voices (e.g. "Samantha (Enhanced)")
    'premium',    // macOS / iOS premium voices
    'online',     // ChromeOS online voices
];

// Specific high-quality voice names per platform
const PREFERRED_VOICES = [
    // macOS / iOS — enhanced & premium
    'Samantha (Enhanced)', 'Samantha (Premium)', 'Samantha',
    'Karen (Enhanced)', 'Karen (Premium)', 'Karen',
    'Daniel (Enhanced)', 'Daniel (Premium)', 'Daniel',
    'Moira (Enhanced)', 'Moira (Premium)',
    'Tessa (Enhanced)', 'Tessa (Premium)',
    // Microsoft Edge — Natural neural voices (very human)
    'Microsoft Aria Online (Natural)',
    'Microsoft Guy Online (Natural)',
    'Microsoft Jenny Online (Natural)',
    'Microsoft Aria', 'Microsoft Guy', 'Microsoft Jenny',
    'Microsoft Zira', 'Microsoft David',
    // Google Chrome
    'Google UK English Female', 'Google UK English Male',
    'Google US English',
];

/**
 * Score a voice — higher is better (more natural / human-like)
 */
function scoreVoice(voice) {
    const name = voice.name.toLowerCase();
    let score = 0;

    // Must be an English voice
    if (!voice.lang.startsWith('en')) return -1;

    // Exact preferred name matches (highest priority)
    const idx = PREFERRED_VOICES.findIndex(
        pv => voice.name === pv || voice.name.startsWith(pv)
    );
    if (idx !== -1) score += 200 - idx; // earlier in list → higher score

    // Premium keyword bonuses
    for (let i = 0; i < PREMIUM_KEYWORDS.length; i++) {
        if (name.includes(PREMIUM_KEYWORDS[i])) {
            score += 100 - i * 10;
        }
    }

    // Prefer en-US over en-GB over other English locales
    if (voice.lang === 'en-US') score += 15;
    else if (voice.lang === 'en-GB') score += 10;
    else score += 5;

    // Local voices are usually lower quality than remote/network ones
    if (!voice.localService) score += 8;

    return score;
}

/**
 * Pick the most natural-sounding English voice available
 */
function getBestVoice() {
    if (cachedVoice && voicesLoaded) return cachedVoice;

    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;

    voicesLoaded = true;

    const scored = voices
        .map(v => ({ voice: v, score: scoreVoice(v) }))
        .filter(v => v.score > 0)
        .sort((a, b) => b.score - a.score);

    cachedVoice = scored.length > 0 ? scored[0].voice : null;
    return cachedVoice;
}

/**
 * Clean text from markdown / emoji before speaking
 */
function cleanForSpeech(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/~~(.*?)~~/g, '$1')
        .replace(/<[^>]*>/g, '')
        .replace(/→/g, '')
        .replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '') // strip emoji & symbols
        .replace(/\s{2,}/g, ' ')
        .trim();
}

/**
 * Play English pronunciation of a text
 * @param {string} text - The English text to pronounce
 * @param {number} rate - Speech rate (0.5 = slow, 1 = normal, 0.92 = default)
 */
export function playPronunciation(text, rate = 0.92) {
    if (!window.speechSynthesis) return false;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const cleanText = cleanForSpeech(text);
    if (!cleanText) return false;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1.02;   // very slight pitch lift — sounds warmer
    utterance.volume = 1;

    // Use the best available natural voice
    const voice = getBestVoice();
    if (voice) utterance.voice = voice;

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    return true;
}

/**
 * Play slow pronunciation (for learners)
 */
export function playSlowPronunciation(text) {
    return playPronunciation(text, 0.65);
}

/**
 * Stop any ongoing pronunciation
 */
export function stopPronunciation() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
}

/**
 * Check if speech synthesis is supported
 */
export function isAudioSupported() {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/**
 * Preload and cache the best voice (call on component mount)
 */
export function preloadVoices() {
    if (!window.speechSynthesis) return;

    // Initial attempt
    const voices = window.speechSynthesis.getVoices();
    if (voices.length) getBestVoice();

    // Chrome / Edge load voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
            cachedVoice = null;   // reset cache so we re-score
            voicesLoaded = false;
            getBestVoice();
        };
    }
}
