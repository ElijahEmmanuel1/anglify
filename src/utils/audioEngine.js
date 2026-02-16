// ============================================
// Audio Engine — Text-to-Speech for pronunciation
// Uses the Web Speech API (built into browsers)
// ============================================

let currentUtterance = null;

/**
 * Play English pronunciation of a text
 * @param {string} text - The English text to pronounce
 * @param {number} rate - Speech rate (0.5 = slow, 1 = normal, 0.85 = default)
 */
export function playPronunciation(text, rate = 0.85) {
    if (!window.speechSynthesis) return false;
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    // Clean the text: remove markdown and special characters
    const cleanText = text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/~~(.*?)~~/g, '$1')
        .replace(/<[^>]*>/g, '')
        .replace(/→/g, '')
        .replace(/🇫🇷|⚠️|📐|🔵|🔴|💡|📝|📖|🎯|✅|❌/g, '')
        .trim();

    if (!cleanText) return false;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to use a natural English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Samantha'))
        || voices.find(v => v.lang === 'en-US')
        || voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) utterance.voice = englishVoice;

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    return true;
}

/**
 * Play slow pronunciation (for learners)
 */
export function playSlowPronunciation(text) {
    return playPronunciation(text, 0.6);
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
 * Preload voices (call on component mount)
 */
export function preloadVoices() {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.getVoices();
    // Chrome requires an event listener to load voices
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }
}
