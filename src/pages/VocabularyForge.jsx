import { useState, useMemo } from 'react'
import { vocabThemes, vocabularyWords, getWordsByTheme, getDueWords } from '../data/vocabularyData'
import { addXP, updateVocabWord } from '../utils/progressEngine'
import { PenIcon, ArrowLeftIcon, StarIcon, LayersIcon } from '../components/Icons'

export default function VocabularyForge({ progress, setProgress, showXpGain }) {
    const [mode, setMode] = useState('themes')
    const [selectedTheme, setSelectedTheme] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [flipped, setFlipped] = useState(false)
    const [words, setWords] = useState([])

    const dueWords = useMemo(() => getDueWords(progress), [progress])

    const startTheme = (theme) => {
        const themeWords = getWordsByTheme(theme.id)
        setWords(themeWords)
        setSelectedTheme(theme)
        setCurrentIndex(0)
        setFlipped(false)
        setMode('flashcard')
    }

    const startReview = () => {
        const due = getDueWords(progress)
        if (due.length === 0) return
        setWords(due.slice(0, 20))
        setSelectedTheme({ title: 'SRS Review', icon: '🔄' })
        setCurrentIndex(0)
        setFlipped(false)
        setMode('flashcard')
    }

    const handleKnow = () => {
        const word = words[currentIndex]
        const updated = updateVocabWord(progress, word.id, true)
        const { progress: withXp, xpGained } = addXP(updated, 5, 'vocabulary')
        setProgress(withXp)
        showXpGain(xpGained)
        nextCard()
    }

    const handleDontKnow = () => {
        const word = words[currentIndex]
        const updated = updateVocabWord(progress, word.id, false)
        setProgress(updated)
        nextCard()
    }

    const nextCard = () => {
        setFlipped(false)
        if (currentIndex < words.length - 1) {
            setTimeout(() => setCurrentIndex(prev => prev + 1), 200)
        } else {
            setMode('themes')
        }
    }

    const goBack = () => {
        setMode('themes')
        setSelectedTheme(null)
        setCurrentIndex(0)
    }

    if (mode === 'flashcard' && words.length > 0) {
        const word = words[currentIndex]
        const wordProgress = progress.vocabulary?.words?.[word.id]
        const boxLevel = wordProgress?.box || 0

        return (
            <div className="vocabulary">
                <div className="lesson-view__back" onClick={goBack}><ArrowLeftIcon size={16} /> Back</div>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selectedTheme?.icon} {selectedTheme?.title}</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Card {currentIndex + 1} / {words.length}</p>
                    <div className="progress-bar" style={{ maxWidth: '300px', margin: '0.75rem auto' }}>
                        <div className="progress-bar__fill" style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }} />
                    </div>
                </div>

                <div className={`flashcard ${flipped ? 'flashcard--flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
                    <div className="flashcard__inner">
                        <div className="flashcard__face flashcard__front">
                            {boxLevel > 0 && (
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                                    <span className="badge badge--accent">Box {boxLevel}</span>
                                </div>
                            )}
                            <div className="flashcard__word">{word.word}</div>
                            <div className="flashcard__hint">Tap to flip</div>
                        </div>
                        <div className="flashcard__face flashcard__back">
                            <div className="flashcard__definition">{word.definition}</div>
                            <div className="flashcard__example">"{word.example}"</div>
                        </div>
                    </div>
                </div>

                <div className="flashcard__controls">
                    <button className="btn btn-secondary btn-lg" onClick={handleDontKnow} style={{ borderColor: 'var(--error)', color: 'var(--error)' }}>
                        ❌ Don't know
                    </button>
                    <button className="btn btn-primary btn-lg" onClick={handleKnow} style={{ background: 'var(--success)' }}>
                        ✅ I know!
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="vocabulary">
            <div className="page-header">
                <h2 className="page-header__title">Vocabulary Forge</h2>
                <p className="page-header__subtitle">Master business English with spaced repetition</p>
            </div>

            <div className="vocab-stats">
                <div className="vocab-stat">
                    <div className="vocab-stat__value" style={{ color: 'var(--accent-primary)' }}>{progress.vocabulary?.totalLearned || 0}</div>
                    <div className="vocab-stat__label">Studied</div>
                </div>
                <div className="vocab-stat">
                    <div className="vocab-stat__value" style={{ color: 'var(--success)' }}>{progress.vocabulary?.totalMastered || 0}</div>
                    <div className="vocab-stat__label">Mastered</div>
                </div>
                <div className="vocab-stat">
                    <div className="vocab-stat__value" style={{ color: 'var(--warning)' }}>{dueWords.length}</div>
                    <div className="vocab-stat__label">Due</div>
                </div>
            </div>

            {dueWords.length > 0 && (
                <div className="card" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>🔔</span>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700 }}>{dueWords.length} words to review</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Spaced repetition strengthens memory</div>
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={startReview}>Review</button>
                </div>
            )}

            <div className="section-title"><LayersIcon size={18} /> Themes</div>
            <div className="vocab-themes">
                {vocabThemes.map((theme, i) => {
                    const themeWords = getWordsByTheme(theme.id)
                    const learned = themeWords.filter(w => progress.vocabulary?.words?.[w.id]).length
                    return (
                        <div
                            key={theme.id}
                            className="vocab-theme"
                            onClick={() => startTheme(theme)}
                            style={{ animation: `fadeInUp 0.3s ease ${0.04 * i}s both` }}
                        >
                            <span style={{ fontSize: '1.75rem' }}>{theme.icon}</span>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 700 }}>{theme.title}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{themeWords.length} words • {learned} learned</div>
                                <div className="progress-bar" style={{ marginTop: '0.5rem', maxWidth: '180px' }}>
                                    <div className="progress-bar__fill" style={{ width: `${(learned / themeWords.length) * 100}%` }} />
                                </div>
                            </div>
                            <span style={{ color: 'var(--text-dim)' }}>→</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
