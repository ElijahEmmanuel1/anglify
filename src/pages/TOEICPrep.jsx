import { useState, useMemo } from 'react'
import { toeicParts, toeicSteps, getStepsByPart } from '../data/toeicData'
import { addXP, completeToeicStep } from '../utils/progressEngine'
import { TargetIcon, ArrowLeftIcon, ChevronDownIcon, CheckCircleIcon } from '../components/Icons'

function shuffleArray(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

export default function TOEICPrep({ progress, setProgress, showXpGain }) {
    const [view, setView] = useState('parts')
    const [expandedPart, setExpandedPart] = useState(null)
    const [selectedStep, setSelectedStep] = useState(null)
    const [exerciseState, setExerciseState] = useState({})
    const [showResults, setShowResults] = useState(false)

    const shuffledOptions = useMemo(() => {
        if (!selectedStep?.exercises) return {}
        const map = {}
        selectedStep.exercises.forEach((ex, i) => {
            map[i] = shuffleArray(ex.options)
        })
        return map
    }, [selectedStep])

    const togglePart = (partId) => setExpandedPart(expandedPart === partId ? null : partId)

    const openStep = (step) => {
        setSelectedStep(step)
        setExerciseState({})
        setShowResults(false)
        setView('step')
    }

    const goBack = () => { setView('parts'); setSelectedStep(null); setShowResults(false) }

    const handleAnswer = (exIdx, answer) => {
        if (exerciseState[exIdx]?.answered) return
        const ex = selectedStep.exercises[exIdx]
        const correct = answer === ex.answer
        setExerciseState(prev => ({ ...prev, [exIdx]: { answer, correct, answered: true } }))
    }

    const submitExercises = () => {
        if (!selectedStep) return
        const total = selectedStep.exercises.length
        const correct = Object.values(exerciseState).filter(e => e.correct).length
        const score = Math.round((correct / total) * 100)
        let updated = completeToeicStep(progress, selectedStep.id, score)
        const { progress: withXp, xpGained } = addXP(updated, correct * 20 + 15, 'toeic')
        setProgress(withXp)
        showXpGain(xpGained)
        setShowResults(true)
    }

    const allAnswered = selectedStep?.exercises?.length > 0 &&
        Object.keys(exerciseState).length === selectedStep.exercises.length
    const correctCount = Object.values(exerciseState).filter(e => e.correct).length
    const totalExercises = selectedStep?.exercises?.length || 0

    // Step detail view
    if (view === 'step' && selectedStep) {
        return (
            <div className="lesson-view">
                <div className="lesson-view__back" onClick={goBack}><ArrowLeftIcon size={16} /> Back to TOEIC parts</div>

                <div className="lesson-view__header">
                    <span className="lesson-view__unit-num">Step {selectedStep.id}</span>
                    <h2 className="lesson-view__title">{selectedStep.titleEn || selectedStep.title}</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{selectedStep.title}</p>
                </div>

                {selectedStep.content?.strategy && (
                    <div className="lesson-view__section">
                        <h3 className="lesson-view__section-title">🎯 Strategy</h3>
                        <div className="lesson-view__rule-box">
                            <p dangerouslySetInnerHTML={{ __html: selectedStep.content.strategy.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--accent-primary)">$1</strong>') }} />
                        </div>
                    </div>
                )}

                {selectedStep.content?.keyPoints && (
                    <div className="lesson-view__section">
                        <h3 className="lesson-view__section-title">📌 Key Points</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {selectedStep.content.keyPoints.map((point, i) => (
                                <div key={i} className="lesson-view__example" dangerouslySetInnerHTML={{
                                    __html: point.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--accent-primary)">$1</strong>')
                                        .replace(/\'(.*?)\'/g, '<em style="color:var(--text-secondary)">$1</em>')
                                }} />
                            ))}
                        </div>
                    </div>
                )}

                {selectedStep.content?.vocabulary && (
                    <div className="lesson-view__section">
                        <h3 className="lesson-view__section-title">📝 Vocabulary</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
                            {selectedStep.content.vocabulary.map((v, i) => (
                                <div key={i} className="card" style={{ padding: '1rem' }}>
                                    <div style={{ fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>{v.word}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--warning)', marginBottom: '0.5rem' }}>{v.definition}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>"{v.example}"</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {selectedStep.exercises && selectedStep.exercises.length > 0 && (
                    <div className="lesson-view__section">
                        <h3 className="lesson-view__section-title">✏️ Practice</h3>
                        <div className="exercise">
                            {selectedStep.exercises.map((ex, exIdx) => {
                                const state = exerciseState[exIdx]
                                return (
                                    <div key={exIdx} className="card exercise__question">
                                        <div className="exercise__question-num">Question {exIdx + 1}</div>
                                        <div className="exercise__question-text">{ex.question}</div>
                                        <div className="exercise__options">
                                            {(shuffledOptions[exIdx] || ex.options).map((opt, optIdx) => {
                                                let className = 'exercise__option'
                                                if (state?.answered) {
                                                    if (opt === ex.answer) className += ' exercise__option--correct'
                                                    else if (opt === state.answer && !state.correct) className += ' exercise__option--incorrect'
                                                }
                                                return (
                                                    <div key={optIdx} className={className} onClick={() => handleAnswer(exIdx, opt)}>
                                                        <span className="exercise__option-letter">{String.fromCharCode(65 + optIdx)}</span>
                                                        <span>{opt}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {state?.answered && (
                                            <div className={`exercise__feedback ${state.correct ? 'exercise__feedback--correct' : 'exercise__feedback--incorrect'}`}>
                                                {state.correct ? '✅ Correct!' : `❌ The answer is: ${ex.answer}`}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}

                            {!showResults && allAnswered && (
                                <div className="exercise__actions">
                                    <button className="btn btn-primary btn-lg" onClick={submitExercises}>✅ Submit</button>
                                </div>
                            )}

                            {showResults && (
                                <div className="card" style={{ textAlign: 'center', padding: '2rem', animation: 'scaleIn 0.3s ease' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                                        {correctCount === totalExercises ? '🏆' : correctCount >= totalExercises * 0.7 ? '🎉' : '📚'}
                                    </div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{correctCount}/{totalExercises}</div>
                                    <div style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Score: {Math.round((correctCount / totalExercises) * 100)}%</div>
                                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                                        <button className="btn btn-secondary" onClick={goBack}>← Back</button>
                                        <button className="btn btn-primary" onClick={() => { setExerciseState({}); setShowResults(false) }}>🔄 Retry</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        )
    }

    // Parts overview
    return (
        <div className="toeic-prep">
            <div className="page-header">
                <h2 className="page-header__title">TOEIC Prep</h2>
                <p className="page-header__subtitle">49 steps • TOEIC® en 49 étapes (Julie Valette)</p>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem', padding: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Listening</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-primary)' }}>Parts I-IV</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>45 min • 100 Q</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Reading</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--success)' }}>Parts V-VII</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>75 min • 100 Q</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--xp-gold-light)' }}>990 pts</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2h • 200 Q</div>
                    </div>
                </div>
            </div>

            <div className="toeic-parts">
                {toeicParts.map((part, i) => {
                    const isExpanded = expandedPart === part.id
                    const completedSteps = part.steps.filter(id => progress.toeic[id]?.completed).length
                    const progressPct = (completedSteps / part.steps.length) * 100

                    return (
                        <div key={part.id} className="card toeic-part" style={{ animation: `fadeInUp 0.4s ease ${0.06 * i}s both`, padding: 0 }}>
                            <div className="toeic-part__header" onClick={() => togglePart(part.id)}>
                                <div className={`toeic-part__number toeic-part__number--${part.type === 'exam' ? 'listening' : part.type}`}>
                                    {part.number}
                                </div>
                                <div className="toeic-part__info">
                                    <div className="toeic-part__title">{part.title}</div>
                                    <div className="toeic-part__steps-count">
                                        {part.subtitle} • {completedSteps}/{part.steps.length} steps
                                    </div>
                                    <div className="progress-bar" style={{ marginTop: '0.5rem', maxWidth: '200px' }}>
                                        <div className="progress-bar__fill" style={{ width: `${progressPct}%` }} />
                                    </div>
                                </div>
                                <span className={`toeic-part__expand ${isExpanded ? 'toeic-part__expand--open' : ''}`}><ChevronDownIcon size={18} /></span>
                            </div>

                            {isExpanded && (
                                <div className="toeic-part__steps">
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>💡 {part.tips}</p>
                                    {part.steps.map(stepId => {
                                        const step = toeicSteps[stepId]
                                        const completed = progress.toeic[stepId]?.completed
                                        return (
                                            <div key={stepId} className="toeic-step" onClick={() => openStep(step)}>
                                                <div className={`toeic-step__num ${completed ? 'toeic-step__num--done' : ''}`}>
                                                    {completed ? '✓' : stepId}
                                                </div>
                                                <div className="toeic-step__title">
                                                    {step.titleEn || step.title}
                                                </div>
                                                {completed && <span className="badge badge--success">✓</span>}
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
