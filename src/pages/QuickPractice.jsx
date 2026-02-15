import { useState, useEffect, useCallback, useMemo } from 'react'
import { grammarUnits } from '../data/grammarData'
import { vocabularyWords } from '../data/vocabularyData'
import { toeicSteps } from '../data/toeicData'
import { addXP } from '../utils/progressEngine'
import { TargetIcon, ClockIcon, PenIcon, StarIcon, ArrowLeftIcon } from '../components/Icons'

// Gather all exercises from all sources
function getAllExercises() {
    const exercises = []
    Object.values(grammarUnits).forEach(unit => {
        if (unit.exercises) {
            unit.exercises.forEach(ex => exercises.push({ ...ex, source: 'grammar', sourceTitle: unit.title }))
        }
    })
    Object.values(toeicSteps).forEach(step => {
        if (step.exercises) {
            step.exercises.forEach(ex => exercises.push({ ...ex, source: 'toeic', sourceTitle: step.titleEn || step.title }))
        }
    })
    return exercises
}

function shuffle(array) {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

export default function QuickPractice({ progress, setProgress, showXpGain }) {
    const [mode, setMode] = useState('menu') // 'menu' | 'daily' | 'speed' | 'vocab-quiz'
    const [questions, setQuestions] = useState([])
    const [currentQ, setCurrentQ] = useState(0)
    const [answers, setAnswers] = useState({})
    const [showResult, setShowResult] = useState(false)
    const [timer, setTimer] = useState(0)
    const [timerActive, setTimerActive] = useState(false)

    const allExercises = useMemo(() => getAllExercises(), [])

    // Shuffle options for each question so correct answer isn't always first
    const shuffledQOptions = useMemo(() => {
        const map = {}
        questions.forEach((q, i) => {
            if (q.options) map[i] = shuffle(q.options)
        })
        return map
    }, [questions])

    useEffect(() => {
        let interval
        if (timerActive) {
            interval = setInterval(() => setTimer(t => t + 1), 1000)
        }
        return () => clearInterval(interval)
    }, [timerActive])

    const startDaily = () => {
        const selected = shuffle(allExercises).slice(0, 10)
        setQuestions(selected)
        setCurrentQ(0)
        setAnswers({})
        setShowResult(false)
        setTimer(0)
        setTimerActive(true)
        setMode('daily')
    }

    const startSpeed = () => {
        const selected = shuffle(allExercises).slice(0, 5)
        setQuestions(selected)
        setCurrentQ(0)
        setAnswers({})
        setShowResult(false)
        setTimer(0)
        setTimerActive(true)
        setMode('speed')
    }

    const startVocabQuiz = () => {
        const shuffled = shuffle(vocabularyWords).slice(0, 10)
        const qs = shuffled.map(w => {
            const wrongAnswers = shuffle(vocabularyWords.filter(v => v.id !== w.id)).slice(0, 3).map(v => v.definition)
            const options = shuffle([w.definition, ...wrongAnswers])
            return {
                type: 'correct',
                question: `Quelle est la traduction de "${w.word}" ?`,
                answer: w.definition,
                options,
                source: 'vocabulary',
                sourceTitle: w.word
            }
        })
        setQuestions(qs)
        setCurrentQ(0)
        setAnswers({})
        setShowResult(false)
        setTimer(0)
        setTimerActive(true)
        setMode('vocab-quiz')
    }

    const handleAnswer = (answer) => {
        if (answers[currentQ]?.answered) return
        const correct = answer === questions[currentQ].answer
        setAnswers(prev => ({
            ...prev,
            [currentQ]: { answer, correct, answered: true }
        }))
    }

    const nextQuestion = () => {
        if (currentQ < questions.length - 1) {
            setCurrentQ(prev => prev + 1)
        } else {
            finishQuiz()
        }
    }

    const finishQuiz = () => {
        setTimerActive(false)
        const correctCount = Object.values(answers).filter(a => a.correct).length
        const xpBase = mode === 'daily' ? 50 : mode === 'speed' ? 30 : 25
        const { progress: withXp, xpGained } = addXP(progress, xpBase + correctCount * 10, 'practice')
        setProgress(withXp)
        showXpGain(xpGained)
        setShowResult(true)
    }

    const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`

    const goBack = () => {
        setMode('menu')
        setTimerActive(false)
    }

    // Quiz in progress
    if ((mode === 'daily' || mode === 'speed' || mode === 'vocab-quiz') && questions.length > 0) {
        if (showResult) {
            const correctCount = Object.values(answers).filter(a => a.correct).length
            const total = questions.length
            const pct = Math.round((correctCount / total) * 100)
            return (
                <div className="quick-practice" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="card" style={{ textAlign: 'center', padding: '3rem', animation: 'scaleIn 0.4s ease' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                            {pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                            {correctCount}/{total}
                        </div>
                        <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Score: {pct}%</div>
                        <div style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Temps: {formatTime(timer)}</div>
                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="btn btn-secondary" onClick={goBack}>← Menu</button>
                            <button className="btn btn-primary" onClick={mode === 'daily' ? startDaily : mode === 'speed' ? startSpeed : startVocabQuiz}>
                                🔄 Rejouer
                            </button>
                        </div>
                    </div>
                </div>
            )
        }

        const q = questions[currentQ]
        const state = answers[currentQ]

        return (
            <div className="quick-practice" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="lesson-view__back" onClick={goBack}><ArrowLeftIcon size={16} /> Quitter</div>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        Question {currentQ + 1}/{questions.length}
                    </span>
                    <span style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: mode === 'speed' ? 'var(--error)' : 'var(--text-muted)' }}>
                        ⏱ {formatTime(timer)}
                    </span>
                </div>
                <div className="progress-bar" style={{ marginBottom: '1.5rem' }}>
                    <div className="progress-bar__fill" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
                </div>

                {/* Question */}
                <div className="card">
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>{q.sourceTitle}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.5 }}>{q.question}</div>
                    <div className="exercise__options">
                        {(shuffledQOptions[currentQ] || q.options).map((opt, i) => {
                            let className = 'exercise__option'
                            if (state?.answered) {
                                if (opt === q.answer) className += ' exercise__option--correct'
                                else if (opt === state.answer && !state.correct) className += ' exercise__option--incorrect'
                            }
                            return (
                                <div key={i} className={className} onClick={() => handleAnswer(opt)}>
                                    <span className="exercise__option-letter">{String.fromCharCode(65 + i)}</span>
                                    <span>{opt}</span>
                                </div>
                            )
                        })}
                    </div>
                    {state?.answered && (
                        <>
                            <div className={`exercise__feedback ${state.correct ? 'exercise__feedback--correct' : 'exercise__feedback--incorrect'}`} style={{ marginTop: '1rem' }}>
                                {state.correct ? '✅ Correct !' : `❌ Réponse : ${q.answer}`}
                            </div>
                            <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                                <button className="btn btn-primary" onClick={nextQuestion}>
                                    {currentQ < questions.length - 1 ? 'Suivante →' : 'Voir les résultats'}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        )
    }

    // Menu
    return (
        <div className="quick-practice">
            <div className="quick-practice__header">
                <h2 className="page-header__title">Quick Practice</h2>
                <p className="page-header__subtitle">Entraîne-toi rapidement pour renforcer tes acquis</p>
            </div>

            <div className="practice-modes">
                <div className="card card--interactive practice-mode" onClick={startDaily} style={{ animation: 'fadeInUp 0.5s ease both', animationDelay: '0.1s' }}>
                    <div className="practice-mode__icon practice-mode__icon--daily"><TargetIcon size={28} /></div>
                    <div className="practice-mode__title">Défi Quotidien</div>
                    <div className="practice-mode__desc">10 questions mixtes (grammaire + TOEIC) — Chronomètre activé</div>
                    <div className="practice-mode__reward"><StarIcon size={14} /> +50-150 XP</div>
                </div>

                <div className="card card--interactive practice-mode" onClick={startSpeed} style={{ animation: 'fadeInUp 0.5s ease both', animationDelay: '0.2s' }}>
                    <div className="practice-mode__icon practice-mode__icon--speed"><ClockIcon size={28} /></div>
                    <div className="practice-mode__title">Speed Drill</div>
                    <div className="practice-mode__desc">5 questions rapides — Teste ta vitesse de réponse</div>
                    <div className="practice-mode__reward"><StarIcon size={14} /> +30-80 XP</div>
                </div>

                <div className="card card--interactive practice-mode" onClick={startVocabQuiz} style={{ animation: 'fadeInUp 0.5s ease both', animationDelay: '0.3s' }}>
                    <div className="practice-mode__icon practice-mode__icon--quiz"><PenIcon size={28} /></div>
                    <div className="practice-mode__title">Vocab Quiz</div>
                    <div className="practice-mode__desc">10 mots à traduire — Teste ton vocabulaire business</div>
                    <div className="practice-mode__reward"><StarIcon size={14} /> +25-125 XP</div>
                </div>
            </div>
        </div>
    )
}
