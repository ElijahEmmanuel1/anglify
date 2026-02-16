import { useState, useMemo } from 'react'
import { grammarCategories, grammarUnits, getUnitsByCategory } from '../data/grammarData'
import { addXP, completeGrammarUnit } from '../utils/progressEngine'
import { BookIcon, ArrowLeftIcon, CheckCircleIcon } from '../components/Icons'

function shuffleArray(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

export default function GrammarLab({ progress, setProgress, showXpGain }) {
    const [view, setView] = useState('categories')
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedUnit, setSelectedUnit] = useState(null)
    const [exerciseState, setExerciseState] = useState({})
    const [showResults, setShowResults] = useState(false)

    const shuffledOptions = useMemo(() => {
        if (!selectedUnit?.exercises) return {}
        const map = {}
        selectedUnit.exercises.forEach((ex, i) => {
            map[i] = shuffleArray(ex.options)
        })
        return map
    }, [selectedUnit])

    const openCategory = (cat) => { setSelectedCategory(cat); setView('units') }
    const openUnit = (unit) => { setSelectedUnit(unit); setExerciseState({}); setShowResults(false); setView('lesson') }
    const goBack = () => {
        if (view === 'lesson') { setView('units'); setSelectedUnit(null); setShowResults(false) }
        else if (view === 'units') { setView('categories'); setSelectedCategory(null) }
    }

    const handleAnswer = (exIdx, answer) => {
        if (exerciseState[exIdx]?.answered) return
        const ex = selectedUnit.exercises[exIdx]
        const correct = answer === ex.answer
        setExerciseState(prev => ({ ...prev, [exIdx]: { answer, correct, answered: true } }))
    }

    const submitExercises = () => {
        if (!selectedUnit) return
        const total = selectedUnit.exercises.length
        const correct = Object.values(exerciseState).filter(e => e.correct).length
        const score = Math.round((correct / total) * 100)
        let updated = completeGrammarUnit(progress, selectedUnit.id, score)
        const { progress: withXp, xpGained } = addXP(updated, correct * 15 + 10, 'grammar')
        setProgress(withXp)
        showXpGain(xpGained)
        setShowResults(true)
    }

    const allAnswered = selectedUnit?.exercises?.length > 0 &&
        Object.keys(exerciseState).length === selectedUnit.exercises.length

    // Categories view
    if (view === 'categories') {
        return (
            <div>
                <div className="page-header">
                    <h2 className="page-header__title">Grammar Lab</h2>
                    <p className="page-header__subtitle">145 lessons • English Grammar in Use — Raymond Murphy</p>
                </div>
                <div className="grammar-categories">
                    {grammarCategories.map((cat, i) => {
                        const completedInCat = cat.units.filter(id => progress.grammar[id]?.completed).length
                        const progressPct = (completedInCat / cat.units.length) * 100
                        return (
                            <div
                                key={cat.id}
                                className="grammar-category"
                                onClick={() => openCategory(cat)}
                                style={{ animation: `fadeInUp 0.3s ease ${0.04 * i}s both` }}
                            >
                                <div className="grammar-category__icon">
                                    <BookIcon size={20} />
                                </div>
                                <div className="grammar-category__info">
                                    <div className="grammar-category__title">{cat.title}</div>
                                    <div className="grammar-category__count">
                                        {cat.units.length} units • {completedInCat} completed
                                    </div>
                                    <div className="progress-bar" style={{ marginTop: '6px', maxWidth: '200px' }}>
                                        <div className="progress-bar__fill" style={{ width: `${progressPct}%` }} />
                                    </div>
                                </div>
                                <div className="grammar-category__chevron">→</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    // Units list view
    if (view === 'units' && selectedCategory) {
        const allUnitsInCategory = selectedCategory.units
        return (
            <div>
                <div className="lesson-view__back" onClick={goBack}><ArrowLeftIcon size={16} /> Back to categories</div>
                <div className="page-header">
                    <h2 className="page-header__title">{selectedCategory.title}</h2>
                    <p className="page-header__subtitle">{selectedCategory.description}</p>
                </div>
                <div className="grammar-units">
                    {allUnitsInCategory.map((unitId, i) => {
                        const unit = grammarUnits[unitId]
                        const completed = progress.grammar[unitId]?.completed
                        const score = progress.grammar[unitId]?.score
                        return (
                            <div
                                key={unitId}
                                className="grammar-unit"
                                style={{
                                    cursor: unit ? 'pointer' : 'default',
                                    opacity: unit ? 1 : 0.5,
                                    animation: `fadeInUp 0.3s ease ${0.03 * i}s both`
                                }}
                                onClick={() => unit && openUnit(unit)}
                            >
                                <div className={`grammar-unit__num ${completed ? 'grammar-unit__num--done' : ''}`}>
                                    {completed ? '✓' : unitId}
                                </div>
                                <div className="grammar-unit__title">
                                    {unit ? unit.title : `Unit ${unitId}`}
                                    {!unit && <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Coming soon</div>}
                                </div>
                                {completed && score !== undefined && (
                                    <span className="grammar-unit__badge">{score}%</span>
                                )}
                                {unit && !completed && <span style={{ color: 'var(--text-dim)' }}>→</span>}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    // Lesson view
    if (view === 'lesson' && selectedUnit) {
        const correctCount = Object.values(exerciseState).filter(e => e.correct).length
        const totalExercises = selectedUnit.exercises?.length || 0

        return (
            <div className="lesson-view">
                <div className="lesson-view__back" onClick={goBack}><ArrowLeftIcon size={16} /> Back to {selectedCategory?.title}</div>

                <div className="lesson-view__header">
                    <span className="lesson-view__unit-num">Unit {selectedUnit.id}</span>
                    <h2 className="lesson-view__title">{selectedUnit.title}</h2>
                </div>

                <div className="lesson-view__section">
                    <h3 className="lesson-view__section-title">📖 Lesson</h3>
                    <p className="lesson-view__rule-box" dangerouslySetInnerHTML={{ __html: selectedUnit.explanation.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--accent-primary)">$1</strong>') }} />
                </div>

                {selectedUnit.rules && (
                    <div className="lesson-view__section">
                        <h3 className="lesson-view__section-title">📏 Key Rules</h3>
                        <div className="lesson-view__rule-box">
                            {selectedUnit.rules.map((rule, i) => (
                                <p key={i} dangerouslySetInnerHTML={{ __html: rule.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--accent-primary)">$1</strong>').replace(/_(.*?)_/g, '<em style="color:var(--text-secondary)">$1</em>') }} />
                            ))}
                        </div>
                    </div>
                )}

                {selectedUnit.examples && (
                    <div className="lesson-view__section">
                        <h3 className="lesson-view__section-title">💡 Examples</h3>
                        {selectedUnit.examples.map((ex, i) => (
                            <div key={i} className="lesson-view__example">
                                <span dangerouslySetInnerHTML={{ __html: ex.text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--success)">$1</strong>').replace(/~~(.*?)~~/g, '<span style="color:var(--error);text-decoration:line-through">$1</span>') }} />
                                {ex.note && <div style={{ marginTop: '0.25rem', fontSize: '0.8rem', color: 'var(--warning)' }}>💡 {ex.note}</div>}
                            </div>
                        ))}
                    </div>
                )}

                {selectedUnit.exercises && selectedUnit.exercises.length > 0 && (
                    <div className="lesson-view__section">
                        <h3 className="lesson-view__section-title">✏️ Practice</h3>
                        <div className="exercise">
                            {selectedUnit.exercises.map((ex, exIdx) => {
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
                                                } else if (state?.answer === opt) {
                                                    className += ' exercise__option--selected'
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
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                                        {correctCount}/{totalExercises} correct
                                    </div>
                                    <div style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                        Score: {Math.round((correctCount / totalExercises) * 100)}%
                                    </div>
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

    return null
}
