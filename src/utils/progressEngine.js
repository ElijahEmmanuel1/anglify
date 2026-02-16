// ============================================
// Progress Engine — LocalStorage Persistence
// ============================================

import { getTotalLessons } from '../data/toeicData'

const STORAGE_KEY = 'toeic_master_progress';

const DEFAULT_PROGRESS = {
    xp: 0,
    level: 1,
    streak: { current: 0, best: 0, lastDate: null },
    grammar: {}, // unitId -> { completed: bool, score: number, attempts: number }
    toeic: {},   // stepId -> { completed: bool, score: number }
    vocabulary: {
        words: {},  // wordId -> { box: 1-5, nextReview: date, correct: n, incorrect: n }
        totalLearned: 0,
        totalMastered: 0
    },
    practice: {
        dailyChallengesCompleted: 0,
        totalQuizzes: 0,
        bestScore: 0
    },
    achievements: [],
    history: [], // { date, type, xpEarned, details }
    studyDays: {} // 'YYYY-MM-DD' -> minutes studied
};

export function loadProgress() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return { ...DEFAULT_PROGRESS, ...JSON.parse(stored) };
        }
    } catch (e) {
        console.warn('Failed to load progress:', e);
    }
    return { ...DEFAULT_PROGRESS };
}

export function saveProgress(progress) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.warn('Failed to save progress:', e);
    }
}

export function addXP(progress, amount, source) {
    const streakMultiplier = progress.streak.current >= 7 ? 1.5 :
        progress.streak.current >= 3 ? 1.2 : 1;
    const xpGained = Math.round(amount * streakMultiplier);
    const newXP = progress.xp + xpGained;
    const newLevel = calculateLevel(newXP);
    const leveledUp = newLevel > progress.level;

    const updated = {
        ...progress,
        xp: newXP,
        level: newLevel,
        history: [
            { date: new Date().toISOString(), type: source, xpEarned: xpGained },
            ...progress.history.slice(0, 99)
        ]
    };

    // Track study day
    const today = new Date().toISOString().split('T')[0];
    updated.studyDays = { ...updated.studyDays, [today]: (updated.studyDays[today] || 0) + 1 };

    saveProgress(updated);
    return { progress: updated, xpGained, leveledUp, newLevel };
}

export function updateStreak(progress) {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = progress.streak.lastDate;

    if (lastDate === today) return progress;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    let newStreak;
    if (lastDate === yesterdayStr) {
        newStreak = progress.streak.current + 1;
    } else if (!lastDate) {
        newStreak = 1;
    } else {
        newStreak = 1; // streak broken
    }

    const updated = {
        ...progress,
        streak: {
            current: newStreak,
            best: Math.max(newStreak, progress.streak.best),
            lastDate: today
        }
    };

    saveProgress(updated);
    return updated;
}

export function completeGrammarUnit(progress, unitId, score) {
    const existing = progress.grammar[unitId] || { completed: false, score: 0, attempts: 0 };
    const updated = {
        ...progress,
        grammar: {
            ...progress.grammar,
            [unitId]: {
                completed: true,
                score: Math.max(existing.score, score),
                attempts: existing.attempts + 1
            }
        }
    };
    saveProgress(updated);
    return updated;
}

export function completeToeicStep(progress, stepId, score) {
    const updated = {
        ...progress,
        toeic: {
            ...progress.toeic,
            [stepId]: { completed: true, score }
        }
    };
    saveProgress(updated);
    return updated;
}

export function updateVocabWord(progress, wordId, correct) {
    const existing = progress.vocabulary.words[wordId] || { box: 1, nextReview: null, correct: 0, incorrect: 0 };
    let newBox;
    if (correct) {
        newBox = Math.min(existing.box + 1, 5);
    } else {
        newBox = Math.max(existing.box - 1, 1);
    }

    // SRS intervals: Box 1 = 1 day, Box 2 = 3 days, Box 3 = 7 days, Box 4 = 14 days, Box 5 = 30 days
    const intervals = { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 };
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + intervals[newBox]);

    const updated = {
        ...progress,
        vocabulary: {
            ...progress.vocabulary,
            words: {
                ...progress.vocabulary.words,
                [wordId]: {
                    box: newBox,
                    nextReview: nextReview.toISOString(),
                    correct: existing.correct + (correct ? 1 : 0),
                    incorrect: existing.incorrect + (correct ? 0 : 1)
                }
            },
            totalLearned: Object.keys({ ...progress.vocabulary.words, [wordId]: true }).length,
            totalMastered: Object.values({ ...progress.vocabulary.words, [wordId]: { box: newBox } })
                .filter(w => w.box >= 4).length
        }
    };
    saveProgress(updated);
    return updated;
}

export function calculateLevel(xp) {
    // Each level requires more XP: level N requires N * 100 XP
    let level = 1;
    let xpNeeded = 0;
    while (xpNeeded + level * 100 <= xp) {
        xpNeeded += level * 100;
        level++;
    }
    return Math.min(level, 50);
}

export function xpForLevel(level) {
    let total = 0;
    for (let i = 1; i < level; i++) total += i * 100;
    return total;
}

export function xpToNextLevel(xp, level) {
    const currentLevelXP = xpForLevel(level);
    const nextLevelXP = xpForLevel(level + 1);
    return {
        current: xp - currentLevelXP,
        needed: nextLevelXP - currentLevelXP,
        percentage: Math.min(100, ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100)
    };
}

export function getGrammarStats(progress) {
    const units = Object.values(progress.grammar);
    const completed = units.filter(u => u.completed).length;
    const totalScore = units.reduce((sum, u) => sum + u.score, 0);
    const avgScore = units.length > 0 ? totalScore / units.length : 0;
    return { completed, total: 145, avgScore: Math.round(avgScore) };
}

export function getToeicStats(progress) {
    const steps = Object.values(progress.toeic);
    const completed = steps.filter(s => s.completed).length;
    const total = getTotalLessons();
    return { completed, total };
}

export function estimateToeicScore(progress) {
    const grammarStats = getGrammarStats(progress);
    const toeicStats = getToeicStats(progress);
    const vocabMastered = progress.vocabulary.totalMastered || 0;

    // Rough estimation: base 200 + grammar contribution + toeic contribution + vocab contribution
    const grammarScore = (grammarStats.completed / 145) * grammarStats.avgScore * 3;
    const toeicScore = toeicStats.total > 0 ? (toeicStats.completed / toeicStats.total) * 200 : 0;
    const vocabScore = Math.min(vocabMastered * 0.5, 100);

    return Math.min(990, Math.round(200 + grammarScore + toeicScore + vocabScore));
}

export const LEVEL_TITLES = {
    1: 'Débutant', 2: 'Débutant', 3: 'Débutant', 4: 'Débutant', 5: 'Débutant',
    6: 'Apprenant', 7: 'Apprenant', 8: 'Apprenant', 9: 'Apprenant', 10: 'Apprenant',
    11: 'Intermédiaire', 12: 'Intermédiaire', 13: 'Intermédiaire', 14: 'Intermédiaire', 15: 'Intermédiaire',
    16: 'Avancé', 17: 'Avancé', 18: 'Avancé', 19: 'Avancé', 20: 'Avancé',
    21: 'Expert', 22: 'Expert', 23: 'Expert', 24: 'Expert', 25: 'Expert',
    26: 'Maître', 27: 'Maître', 28: 'Maître', 29: 'Maître', 30: 'Maître',
    31: 'Champion', 32: 'Champion', 33: 'Champion', 34: 'Champion', 35: 'Champion',
    36: 'Légende', 37: 'Légende', 38: 'Légende', 39: 'Légende', 40: 'Légende',
    41: 'TOEIC Pro', 42: 'TOEIC Pro', 43: 'TOEIC Pro', 44: 'TOEIC Pro', 45: 'TOEIC Pro',
    46: 'TOEIC Master', 47: 'TOEIC Master', 48: 'TOEIC Master', 49: 'TOEIC Master', 50: 'TOEIC Master'
};
