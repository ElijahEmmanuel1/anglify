import { useState } from 'react'
import { grammarCategories, grammarUnits, getUnitsByCategory } from '../data/grammarData'
import { addXP, completeGrammarUnit } from '../utils/progressEngine'

export default function GrammarLab({ progress, setProgress, showXpGain }) {
    const [view, setView] = useState('categories') // 'categories' | 'units' | 'lesson'
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedUnit, setSelectedUnit] = useState(null)
    const [exerciseState, setExerciseState] = useState({})
    const [showResults, setShowResults] = useState(false)

    const openCategory = (cat) => {
        setSelectedCategory(cat)
        setView('units')
    }

    const openUnit = (unit) => {
        setSelectedUnit(unit)
        setExerciseState({})
        setShowResults(false)
        setView('lesson')
    }

    const goBack = () => {
        if (view === 'lesson') { setView('units'); setSelectedUnit(null); setShowResults(false); }
        else if (view === 'units') { setView('categories'); setSelectedCategory(null); }
    }

    const handleAnswer = (exIdx, answer) => {
        if (exerciseState[exIdx]?.answered) return
        const ex = selectedUnit.exercises[exIdx]
        const correct = answer === ex.answer
        setExerciseState(prev => ({
            ...prev,
            [exIdx]: { answer, correct, answered: true }
        }))
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
            <div className="grammar-lab">
                <div className="grammar-lab__header">
                    <h2 className="grammar-lab__title">📖 Grammar Lab</h2>
                    <p className="grammar-lab__subtitle">145 leçons basées sur English Grammar in Use — Raymond Murphy</p>
                </div>
                <div className="grammar-lab__categories">
                    {grammarCategories.map((cat, i) => {
                        const units = getUnitsByCategory(cat.id)
                        const completedInCat = cat.units.filter(id => progress.grammar[id]?.completed).length
                        const progressPct = (completedInCat / cat.units.length) * 100
                        return (
                            <div
                                key={cat.id}
                                className="glass-card category-card"
                                onClick={() => openCategory(cat)}
                                style={{ animation: 'fadeInUp 0.5s ease both', animationDelay: `${0.05 * i}s` }}
                            >
                                <div className="category-card__header">
                                    <span className="category-card__icon">{cat.icon}</span>
                                    <span className="category-card__title">{cat.title}</span>
                                </div>
                                <p className="category-card__count">{cat.units.length} unités • {completedInCat} complété{completedInCat > 1 ? 's' : ''}</p>
                                <div className="category-card__units">
                                    {units.slice(0, 3).map(u => (
                                        <span key={u.id} className="category-card__units-preview">
                                            {progress.grammar[u.id]?.completed ? '✅' : '○'} {u.title}
                                        </span>
                                    ))}
                                    {cat.units.length > 3 && (
                                        <span className="category-card__units-preview" style={{ color: 'var(--text-dim)' }}>
                                            +{cat.units.length - (units.length > 3 ? 3 : units.length)} autres unités...
                                        </span>
                                    )}
                                </div>
                                <div className="progress-bar" style={{ marginTop: 'auto' }}>
                                    <div className="progress-bar__fill" style={{ width: `${progressPct}%` }} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    // Units list view
    if (view === 'units' && selectedCategory) {
        const units = getUnitsByCategory(selectedCategory.id)
        const allUnitsInCategory = selectedCategory.units
        return (
            <div className="grammar-lab">
                <div className="lesson-view__back" onClick={goBack}>← Retour aux catégories</div>
                <div className="grammar-lab__header">
                    <h2 className="grammar-lab__title">{selectedCategory.icon} {selectedCategory.title}</h2>
                    <p className="grammar-lab__subtitle">{selectedCategory.description}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {allUnitsInCategory.map((unitId, i) => {
                        const unit = grammarUnits[unitId]
                        const completed = progress.grammar[unitId]?.completed
                        const score = progress.grammar[unitId]?.score
                        return (
                            <div
                                key={unitId}
                                className={`glass-card ${unit ? '' : 'glass-card--static'}`}
                                style={{
                                    padding: '1rem 1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    cursor: unit ? 'pointer' : 'default',
                                    opacity: unit ? 1 : 0.5,
                                    animation: 'fadeInUp 0.3s ease both',
                                    animationDelay: `${0.03 * i}s`
                                }}
                                onClick={() => unit && openUnit(unit)}
                            >
                                <div style={{
                                    width: '36px', height: '36px', borderRadius: 'var(--radius-md)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.875rem', fontWeight: 700, flexShrink: 0,
                                    background: completed ? 'var(--success-bg)' : 'var(--glass-bg)',
                                    color: completed ? 'var(--success)' : 'var(--text-muted)'
                                }}>
                                    {completed ? '✓' : unitId}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                                        {unit ? unit.title : `Unit ${unitId}`}
                                    </div>
                                    {!unit && <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Bientôt disponible</div>}
                                </div>
                                {completed && score !== undefined && (
                                    <span className={`badge ${score >= 80 ? 'badge-success' : score >= 50 ? 'badge-warning' : 'badge-error'}`}>
                                        {score}%
                                    </span>
                                )}
                                {unit && !completed && <span style={{ color: 'var(--text-dim)', fontSize: '0.875rem' }}>→</span>}
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
                <div className="lesson-view__back" onClick={goBack}>← Retour à {selectedCategory?.title}</div>

                <div className="lesson-view__header">
                    <span className="lesson-view__unit-num">Unit {selectedUnit.id}</span>
                    <h2 className="lesson-view__title">{selectedUnit.title}</h2>
                </div>

                {/* Explanation */}
                <div className="lesson-view__section">
                    <h3 className="lesson-view__section-title">📖 Lesson</h3>
                    <p className="lesson-view__explanation" dangerouslySetInnerHTML={{ __html: selectedUnit.explanation.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--accent-primary-light)">$1</strong>') }} />
                </div>

                {/* Rules */}
                {selectedUnit.rules && (
                    <div className="lesson-view__section">
                        <h3 className="lesson-view__section-title">📏 Key Rules</h3>
                        <div className="lesson-view__rule-box">
                            {selectedUnit.rules.map((rule, i) => (
                                <p key={i} dangerouslySetInnerHTML={{ __html: rule.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--accent-primary-light)">$1</strong>').replace(/_(.*?)_/g, '<em style="color:var(--text-secondary)">$1</em>') }} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Examples */}
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

                {/* Exercises */}
                {selectedUnit.exercises && selectedUnit.exercises.length > 0 && (
                    <div className="lesson-view__section">
                        <h3 className="lesson-view__section-title">✏️ Practice Exercises</h3>
                        <div className="exercise">
                            {selectedUnit.exercises.map((ex, exIdx) => {
                                const state = exerciseState[exIdx]
                                return (
                                    <div key={exIdx} className="glass-card exercise__question">
                                        <div className="exercise__question-num">Question {exIdx + 1}</div>
                                        <div className="exercise__question-text">{ex.question}</div>
                                        <div className="exercise__options">
                                            {ex.options.map((opt, optIdx) => {
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
                                                {state.correct ? '✅ Correct ! Bien joué !' : `❌ Incorrect. La bonne réponse est : ${ex.answer}`}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}

                            {/* Submit / Results */}
                            {!showResults && allAnswered && (
                                <div className="exercise__actions">
                                    <button className="btn btn-primary btn-lg" onClick={submitExercises}>
                                        ✅ Valider mes réponses
                                    </button>
                                </div>
                            )}

                            {showResults && (
                                <div className="glass-card" style={{ textAlign: 'center', padding: '2rem', animation: 'scaleIn 0.3s ease' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                                        {correctCount === totalExercises ? '🏆' : correctCount >= totalExercises * 0.7 ? '🎉' : '📚'}
                                    </div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                                        {correctCount}/{totalExercises} correct{correctCount > 1 ? 's' : ''}
                                    </div>
                                    <div style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                        Score: {Math.round((correctCount / totalExercises) * 100)}%
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                                        <button className="btn btn-secondary" onClick={goBack}>← Retour</button>
                                        <button className="btn btn-primary" onClick={() => { setExerciseState({}); setShowResults(false) }}>
                                            🔄 Réessayer
                                        </button>
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
