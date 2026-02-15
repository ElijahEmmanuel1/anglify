import { useState, useMemo } from 'react'
import { vocabThemes, vocabularyWords, getWordsByTheme, getDueWords } from '../data/vocabularyData'
import { addXP, updateVocabWord } from '../utils/progressEngine'

export default function VocabularyForge({ progress, setProgress, showXpGain }) {
    const [mode, setMode] = useState('themes') // 'themes' | 'review' | 'flashcard'
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
        setSelectedTheme({ title: 'Révision SRS', icon: '🔄' })
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
            <div className="vocab-forge">
                <div className="lesson-view__back" onClick={goBack}>← Retour</div>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selectedTheme?.icon} {selectedTheme?.title}</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Carte {currentIndex + 1} / {words.length}</p>
                    <div className="progress-bar" style={{ maxWidth: '300px', margin: '0.75rem auto' }}>
                        <div className="progress-bar__fill progress-bar--gold" style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }} />
                    </div>
                </div>

                <div className="flashcard-container">
                    <div className={`flashcard ${flipped ? 'flashcard--flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
                        <div className="flashcard__face flashcard__front">
                            {boxLevel > 0 && (
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                                    <span className={`badge ${boxLevel >= 4 ? 'badge-success' : boxLevel >= 2 ? 'badge-warning' : 'badge-primary'}`}>
                                        Box {boxLevel}
                                    </span>
                                </div>
                            )}
                            <div className="flashcard__word">{word.word}</div>
                            <div className="flashcard__hint">Cliquer pour retourner</div>
                        </div>
                        <div className="flashcard__face flashcard__back">
                            <div className="flashcard__definition">{word.definition}</div>
                            <div className="flashcard__example">"{word.example}"</div>
                        </div>
                    </div>
                </div>

                <div className="flashcard__controls">
                    <button className="btn btn-secondary btn-lg" onClick={handleDontKnow} style={{ borderColor: 'var(--error)', color: 'var(--error)' }}>
                        ❌ Je ne sais pas
                    </button>
                    <button className="btn btn-success btn-lg" onClick={handleKnow}>
                        ✅ Je sais !
                    </button>
                </div>
            </div>
        )
    }

    // Themes view
    return (
        <div className="vocab-forge">
            <div className="vocab-forge__header">
                <h2 className="vocab-forge__title">📝 Vocabulary Forge</h2>
                <p className="vocab-forge__subtitle">Maîtrise le vocabulaire business anglais avec la répétition espacée</p>
            </div>

            {/* Stats */}
            <div className="vocab-forge__stats">
                <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary-light)' }}>
                        {progress.vocabulary?.totalLearned || 0}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mots étudiés</div>
                </div>
                <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--success)' }}>
                        {progress.vocabulary?.totalMastered || 0}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mots maîtrisés</div>
                </div>
                <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--warning)' }}>
                        {dueWords.length}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>À réviser</div>
                </div>
                <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {vocabularyWords.length}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mots au total</div>
                </div>
            </div>

            {/* Due Review */}
            {dueWords.length > 0 && (
                <div className="glass-card" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', animation: 'borderGlow 2s infinite', borderColor: 'var(--warning)' }}>
                    <span style={{ fontSize: '2rem' }}>🔔</span>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700 }}>{dueWords.length} mots à réviser</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>La révision espacée renforce la mémorisation</div>
                    </div>
                    <button className="btn btn-gold" onClick={startReview}>Réviser maintenant</button>
                </div>
            )}

            {/* Theme Cards */}
            <h3 className="dashboard__section-title">📚 Thèmes</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {vocabThemes.map((theme, i) => {
                    const themeWords = getWordsByTheme(theme.id)
                    const learned = themeWords.filter(w => progress.vocabulary?.words?.[w.id]).length
                    return (
                        <div
                            key={theme.id}
                            className="glass-card"
                            onClick={() => startTheme(theme)}
                            style={{ cursor: 'pointer', animation: 'fadeInUp 0.4s ease both', animationDelay: `${0.05 * i}s` }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                <span style={{ fontSize: '1.75rem' }}>{theme.icon}</span>
                                <div>
                                    <div style={{ fontWeight: 700 }}>{theme.title}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{themeWords.length} mots • {learned} appris</div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar__fill" style={{ width: `${(learned / themeWords.length) * 100}%` }} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
