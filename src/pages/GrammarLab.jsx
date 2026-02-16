import { useState, useMemo } from 'react'
import { grammarCategories, grammarUnits, getUnitsByCategory } from '../data/grammarData'
import { addXP, completeGrammarUnit } from '../utils/progressEngine'
import { BookIcon, ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, BookOpenIcon, RulesIcon, LightbulbIcon, PencilEditIcon, CorrectIcon, WrongIcon, TrophyIcon, PartyIcon } from '../components/Icons'

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
            <div className="space-y-6 pb-20 animate-fade-in">
                <div className="mb-6">
                    <h2 className="text-2xl font-display font-bold text-slate-900">Grammar Lab</h2>
                    <p className="text-slate-500 mt-1 text-sm">145 lessons &middot; English Grammar in Use — Raymond Murphy</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {grammarCategories.map((cat) => {
                        const completedInCat = cat.units.filter(id => progress.grammar[id]?.completed).length
                        const progressPct = (completedInCat / cat.units.length) * 100
                        return (
                            <button
                                key={cat.id}
                                className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-card transition-shadow duration-200 text-left flex items-center gap-4"
                                onClick={() => openCategory(cat)}
                            >
                                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                                    <BookIcon size={20} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-slate-900 truncate">{cat.title}</h3>
                                    <div className="text-sm text-slate-500 mb-2">
                                        {cat.units.length} units &middot; {completedInCat} completed
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-500 rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
                                    </div>
                                </div>
                                <ArrowRightIcon size={16} className="text-slate-300 shrink-0" />
                            </button>
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
            <div className="space-y-6 pb-20 animate-fade-in">
                <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium transition-colors text-sm"
                >
                    <ArrowLeftIcon size={18} /> Back to categories
                </button>

                <div className="mb-4">
                    <h2 className="text-xl font-display font-bold text-slate-900">{selectedCategory.title}</h2>
                    <p className="text-slate-500 text-sm">{selectedCategory.description}</p>
                </div>

                <div className="space-y-2">
                    {allUnitsInCategory.map((unitId) => {
                        const unit = grammarUnits[unitId]
                        const completed = progress.grammar[unitId]?.completed
                        const score = progress.grammar[unitId]?.score

                        if (!unit) return (
                            <div key={unitId} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-slate-400 flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center font-bold text-xs">{unitId}</div>
                                <div>Unit {unitId} &middot; Coming Soon</div>
                            </div>
                        )

                        return (
                            <button
                                key={unitId}
                                className={`w-full bg-white p-3.5 rounded-xl border transition-colors duration-150 flex items-center gap-3 text-left
                                    ${completed ? 'border-emerald-200/80 bg-emerald-50/30' : 'border-slate-200/80 hover:border-brand-200 hover:bg-brand-50/20'}
                                `}
                                onClick={() => openUnit(unit)}
                            >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0
                                    ${completed ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}
                                `}>
                                    {completed ? <CorrectIcon size={16} /> : unitId}
                                </div>

                                <div className="flex-1">
                                    <div className={`font-medium text-sm ${completed ? 'text-slate-800' : 'text-slate-900'}`}>{unit.title}</div>
                                </div>

                                {completed && score !== undefined && (
                                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-md">{score}%</span>
                                )}
                                {!completed && (
                                    <ArrowRightIcon size={14} className="text-slate-300" />
                                )}
                            </button>
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
            <div className="space-y-6 pb-24 animate-fade-in">
                <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium transition-colors text-sm"
                >
                    <ArrowLeftIcon size={18} /> Back to {selectedCategory?.title}
                </button>

                <div className="border-b border-slate-200 pb-5">
                    <div className="text-brand-600 font-bold uppercase tracking-wider text-xs mb-1">Unit {selectedUnit.id}</div>
                    <h2 className="text-2xl font-display font-bold text-slate-900">{selectedUnit.title}</h2>
                </div>

                <div className="space-y-6">
                    {/* Explanation Section */}
                    <section>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center"><BookOpenIcon size={16} /></span>
                            <h3 className="text-lg font-display font-bold text-slate-900">Lesson</h3>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft leading-relaxed text-slate-700 text-[15px]">
                            <p dangerouslySetInnerHTML={{ __html: selectedUnit.explanation.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-600">$1</strong>') }} />
                        </div>
                    </section>

                    {/* Rules */}
                    {selectedUnit.rules && (
                        <section>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><RulesIcon size={16} /></span>
                                <h3 className="text-lg font-display font-bold text-slate-900">Key Rules</h3>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft space-y-2.5">
                                {selectedUnit.rules.map((rule, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2.5 shrink-0"></div>
                                        <p className="text-slate-700 text-[15px]" dangerouslySetInnerHTML={{ __html: rule.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-600">$1</strong>').replace(/_(.*?)_/g, '<em class="text-slate-500 font-medium">$1</em>') }} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Examples */}
                    {selectedUnit.examples && (
                        <section>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center"><LightbulbIcon size={16} /></span>
                                <h3 className="text-lg font-display font-bold text-slate-900">Examples</h3>
                            </div>
                            <div className="grid gap-2">
                                {selectedUnit.examples.map((ex, i) => (
                                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <p className="text-slate-800 text-[15px]" dangerouslySetInnerHTML={{ __html: ex.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-600">$1</strong>').replace(/~~(.*?)~~/g, '<span class="text-red-500 line-through decoration-2">$1</span>') }} />
                                        {ex.note && <div className="mt-2 text-sm text-amber-600 font-medium flex items-center gap-1.5"><LightbulbIcon size={14} /> {ex.note}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Exercises */}
                    {selectedUnit.exercises && selectedUnit.exercises.length > 0 && (
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center"><PencilEditIcon size={16} /></span>
                                <h3 className="text-lg font-display font-bold text-slate-900">Practice</h3>
                            </div>

                            <div className="space-y-4">
                                {selectedUnit.exercises.map((ex, exIdx) => {
                                    const state = exerciseState[exIdx]
                                    return (
                                        <div key={exIdx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Question {exIdx + 1}</div>
                                            <div className="text-base font-medium text-slate-900 mb-5">{ex.question}</div>

                                            <div className="grid gap-2.5">
                                                {(shuffledOptions[exIdx] || ex.options).map((opt, optIdx) => {
                                                    let classes = 'p-3.5 rounded-xl border-2 text-left transition-colors duration-150 font-medium text-sm flex gap-3 '
                                                    if (state?.answered) {
                                                        if (opt === ex.answer) classes += 'border-emerald-500 bg-emerald-50 text-emerald-700'
                                                        else if (opt === state.answer && !state.correct) classes += 'border-red-400 bg-red-50 text-red-700 opacity-60'
                                                        else classes += 'border-slate-100 bg-white text-slate-400 opacity-40'
                                                    } else {
                                                        classes += 'border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:bg-brand-50/30 cursor-pointer'
                                                    }

                                                    return (
                                                        <button key={optIdx} className={classes} onClick={() => handleAnswer(exIdx, opt)} disabled={state?.answered}>
                                                            <span className="w-6 h-6 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-bold shrink-0">{String.fromCharCode(65 + optIdx)}</span>
                                                            {opt}
                                                        </button>
                                                    )
                                                })}
                                            </div>

                                            {state?.answered && (
                                                <div className={`mt-3 p-3 rounded-xl text-sm font-semibold flex items-center gap-2 ${state.correct ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                                                    {state.correct ? <><CorrectIcon size={16} /> Correct!</> : <><WrongIcon size={16} /> The answer is: {ex.answer}</>}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}

                                {!showResults && allAnswered && (
                                    <div className="flex justify-center pt-2">
                                        <button className="btn btn-primary px-8 py-3 text-base" onClick={submitExercises}>Submit Answers</button>
                                    </div>
                                )}

                                {showResults && (
                                    <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lift text-center animate-scale-in">
                                        <div className="mb-4 text-brand-600">
                                            {correctCount === totalExercises ? <TrophyIcon size={56} className="mx-auto" /> : correctCount >= totalExercises * 0.7 ? <PartyIcon size={56} className="mx-auto" /> : <BookIcon size={56} className="mx-auto" />}
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">
                                            {correctCount}/{totalExercises} correct
                                        </h3>
                                        <p className="text-slate-500 mb-6">Score: {Math.round((correctCount / totalExercises) * 100)}%</p>

                                        <div className="flex justify-center gap-3">
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
