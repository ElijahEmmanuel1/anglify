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
            <div className="space-y-6 pb-20 fade-in">
                <div className="mb-8">
                    <h2 className="text-3xl font-display font-bold text-slate-900">Grammar Lab</h2>
                    <p className="text-slate-500 mt-2">145 lessons • English Grammar in Use — Raymond Murphy</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {grammarCategories.map((cat, i) => {
                        const completedInCat = cat.units.filter(id => progress.grammar[id]?.completed).length
                        const progressPct = (completedInCat / cat.units.length) * 100
                        return (
                            <div
                                key={cat.id}
                                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex items-center gap-4"
                                onClick={() => openCategory(cat)}
                                style={{ animation: `fadeInUp 0.3s ease ${0.05 * i}s both` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                    <BookIcon size={24} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-slate-900 truncate">{cat.title}</h3>
                                    <div className="text-sm text-slate-500 mb-2">
                                        {cat.units.length} units • {completedInCat} completed
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">
                                    →
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
        const allUnitsInCategory = selectedCategory.units
        return (
            <div className="space-y-6 pb-20 animate-fadeIn">
                <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors"
                >
                    <ArrowLeftIcon size={20} /> Back to categories
                </button>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">{selectedCategory.title}</h2>
                    <p className="text-slate-500">{selectedCategory.description}</p>
                </div>

                <div className="space-y-3">
                    {allUnitsInCategory.map((unitId, i) => {
                        const unit = grammarUnits[unitId]
                        const completed = progress.grammar[unitId]?.completed
                        const score = progress.grammar[unitId]?.score

                        if (!unit) return (
                            <div key={unitId} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-400 flex items-center gap-4 opacity-60">
                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs">{unitId}</div>
                                <div>Unit {unitId} • Coming Soon</div>
                            </div>
                        )

                        return (
                            <div
                                key={unitId}
                                className={`bg-white p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 cursor-pointer group
                                    ${completed ? 'border-indigo-100 bg-indigo-50/30' : 'border-slate-100 hover:border-indigo-200 hover:shadow-md'}
                                `}
                                style={{ animation: `fadeInUp 0.3s ease ${0.02 * i}s both` }}
                                onClick={() => openUnit(unit)}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 transition-colors
                                    ${completed ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'}
                                `}>
                                    {completed ? '✓' : unitId}
                                </div>

                                <div className="flex-1">
                                    <div className={`font-medium ${completed ? 'text-indigo-900' : 'text-slate-900'}`}>{unit.title}</div>
                                </div>

                                {completed && score !== undefined && (
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg">{score}%</span>
                                )}
                                {!completed && (
                                    <span className="text-slate-300 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all">→</span>
                                )}
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
            <div className="space-y-8 pb-24 animate-fadeIn">
                <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors"
                >
                    <ArrowLeftIcon size={20} /> Back to {selectedCategory?.title}
                </button>

                <div className="flex items-end justify-between border-b border-slate-200 pb-6">
                    <div>
                        <div className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-1">Unit {selectedUnit.id}</div>
                        <h2 className="text-3xl font-bold text-slate-900">{selectedUnit.title}</h2>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Explanation Section */}
                    <section>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">📖</span>
                            <h3 className="text-xl font-bold text-slate-900">Lesson</h3>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm leading-relaxed text-slate-700">
                            <p dangerouslySetInnerHTML={{ __html: selectedUnit.explanation.replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-600">$1</strong>') }} />
                        </div>
                    </section>

                    {/* Rules */}
                    {selectedUnit.rules && (
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">📏</span>
                                <h3 className="text-xl font-bold text-slate-900">Key Rules</h3>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                                {selectedUnit.rules.map((rule, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0"></div>
                                        <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: rule.replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-600">$1</strong>').replace(/_(.*?)_/g, '<em class="text-slate-500 font-medium">$1</em>') }} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Examples */}
                    {selectedUnit.examples && (
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">💡</span>
                                <h3 className="text-xl font-bold text-slate-900">Examples</h3>
                            </div>
                            <div className="grid gap-3">
                                {selectedUnit.examples.map((ex, i) => (
                                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <p className="text-slate-800" dangerouslySetInnerHTML={{ __html: ex.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-green-600">$1</strong>').replace(/~~(.*?)~~/g, '<span class="text-red-500 line-through decoration-2">$1</span>') }} />
                                        {ex.note && <div className="mt-2 text-sm text-amber-600 font-medium flex items-center gap-1.5">💡 {ex.note}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Exercises */}
                    {selectedUnit.exercises && selectedUnit.exercises.length > 0 && (
                        <section>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">✏️</span>
                                <h3 className="text-xl font-bold text-slate-900">Practice</h3>
                            </div>

                            <div className="space-y-6">
                                {selectedUnit.exercises.map((ex, exIdx) => {
                                    const state = exerciseState[exIdx]
                                    return (
                                        <div key={exIdx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Question {exIdx + 1}</div>
                                            <div className="text-lg font-medium text-slate-900 mb-6">{ex.question}</div>

                                            <div className="grid gap-3">
                                                {(shuffledOptions[exIdx] || ex.options).map((opt, optIdx) => {
                                                    let classes = 'p-4 rounded-xl border-2 text-left transition-all font-medium flex gap-3 '
                                                    if (state?.answered) {
                                                        if (opt === ex.answer) classes += 'border-green-500 bg-green-50 text-green-700'
                                                        else if (opt === state.answer && !state.correct) classes += 'border-red-500 bg-red-50 text-red-700 opacity-60'
                                                        else classes += 'border-slate-100 bg-white text-slate-400 opacity-50'
                                                    } else if (state?.answer === opt) {
                                                        classes += 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                    } else {
                                                        classes += 'border-slate-100 bg-white text-slate-700 hover:border-indigo-200 hover:bg-slate-50 cursor-pointer'
                                                    }

                                                    return (
                                                        <button key={optIdx} className={classes} onClick={() => handleAnswer(exIdx, opt)} disabled={state?.answered}>
                                                            <span className="w-6 h-6 rounded-md bg-white border border-inherit flex items-center justify-center text-xs font-bold shrink-0">{String.fromCharCode(65 + optIdx)}</span>
                                                            {opt}
                                                        </button>
                                                    )
                                                })}
                                            </div>

                                            {state?.answered && (
                                                <div className={`mt-4 p-3 rounded-lg text-sm font-bold flex items-center gap-2 ${state.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                    {state.correct ? '✅ Correct!' : `❌ The answer is: ${ex.answer}`}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}

                                {!showResults && allAnswered && (
                                    <div className="flex justify-center pt-4">
                                        <button className="btn btn-primary px-8 py-3 text-lg shadow-xl shadow-indigo-200" onClick={submitExercises}>✅ Submit Answers</button>
                                    </div>
                                )}

                                {showResults && (
                                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl text-center animate-scaleIn">
                                        <div className="text-6xl mb-4">
                                            {correctCount === totalExercises ? '🏆' : correctCount >= totalExercises * 0.7 ? '🎉' : '📚'}
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                            {correctCount}/{totalExercises} correct
                                        </h3>
                                        <p className="text-slate-500 mb-8">Score: {Math.round((correctCount / totalExercises) * 100)}%</p>

                                        <div className="flex justify-center gap-4">
                                            <button className="btn btn-secondary px-6" onClick={goBack}>Back to List</button>
                                            <button className="btn btn-primary px-6" onClick={() => { setExerciseState({}); setShowResults(false) }}>Retry Lesson</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        )
    }

    return null
}
