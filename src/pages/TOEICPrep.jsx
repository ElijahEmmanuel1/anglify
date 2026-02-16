import { useState, useMemo } from 'react'
import { toeicParts, toeicSteps } from '../data/toeicData'
import { addXP, completeToeicStep } from '../utils/progressEngine'
import { TargetIcon, ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, PinIcon, LightbulbIcon, PencilEditIcon, CorrectIcon, WrongIcon, TrophyIcon, PartyIcon, BookIcon } from '../components/Icons'

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
            <div className="space-y-6 pb-24 animate-fade-in">
                <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors text-sm"
                >
                    <ArrowLeftIcon size={18} /> Back to TOEIC parts
                </button>

                <div className="border-b border-slate-200 dark:border-slate-700/50 pb-5">
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-xs mb-1">Step {selectedStep.id}</div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{selectedStep.titleEn || selectedStep.title}</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">{selectedStep.title}</p>
                </div>

                {selectedStep.content?.strategy && (
                    <section className="premium-card p-5">
                        <h3 className="text-base font-display font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="p-1 bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 rounded-lg"><TargetIcon size={16} /></span> Strategy
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]" dangerouslySetInnerHTML={{ __html: selectedStep.content.strategy.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-600 dark:text-brand-400">$1</strong>') }} />
                    </section>
                )}

                {selectedStep.content?.keyPoints && (
                    <section className="premium-card p-5">
                        <h3 className="text-base font-display font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="p-1 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-lg"><PinIcon size={16} /></span> Key Points
                        </h3>
                        <div className="space-y-2.5">
                            {selectedStep.content.keyPoints.map((point, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 shrink-0"></div>
                                    <div className="text-slate-700 dark:text-slate-300 text-[15px]" dangerouslySetInnerHTML={{
                                        __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-700 dark:text-emerald-400">$1</strong>')
                                            .replace(/\'(.*?)\'/g, '<em class="text-slate-500 dark:text-slate-400 font-medium">$1</em>')
                                    }} />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {selectedStep.content?.vocabulary && (
                    <section className="space-y-3">
                        <h3 className="text-base font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="p-1 bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 rounded-lg"><PencilEditIcon size={16} /></span> Vocabulary
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {selectedStep.content.vocabulary.map((v, i) => (
                                <div key={i} className="premium-card-hover p-4">
                                    <div className="font-bold text-brand-700 dark:text-brand-400 mb-1 text-sm">{v.word}</div>
                                    <div className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-2">{v.definition}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400 italic border-l-2 border-slate-100 dark:border-slate-700 pl-3">"{v.example}"</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {selectedStep.exercises && selectedStep.exercises.length > 0 && (
                    <section className="space-y-4">
                        <h3 className="text-base font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="p-1 bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 rounded-lg"><PencilEditIcon size={16} /></span> Practice
                        </h3>
                        {selectedStep.exercises.map((ex, exIdx) => {
                            const state = exerciseState[exIdx]
                            return (
                                <div key={exIdx} className="premium-card p-5">
                                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Question {exIdx + 1}</div>
                                    <div className="text-base font-medium text-slate-900 dark:text-white mb-5">{ex.question}</div>

                                    <div className="grid gap-2.5">
                                        {(shuffledOptions[exIdx] || ex.options).map((opt, optIdx) => {
                                            let classes = 'p-3.5 rounded-xl border-2 text-left transition-all duration-200 font-medium text-sm flex gap-3 '
                                            if (state?.answered) {
                                                if (opt === ex.answer) classes += 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400'
                                                else if (opt === state.answer && !state.correct) classes += 'border-red-400 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 opacity-60'
                                                else classes += 'border-slate-100 dark:border-slate-700/30 bg-white dark:bg-surface-800 text-slate-400 dark:text-slate-500 opacity-40'
                                            } else {
                                                classes += 'border-slate-200 dark:border-slate-700/50 bg-white dark:bg-surface-800 text-slate-700 dark:text-slate-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 cursor-pointer active:scale-[0.98]'
                                            }

                                            return (
                                                <button key={optIdx} className={classes} onClick={() => handleAnswer(exIdx, opt)} disabled={state?.answered}>
                                                    <span className="w-6 h-6 rounded-md bg-slate-50 dark:bg-surface-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold shrink-0">{String.fromCharCode(65 + optIdx)}</span>
                                                    {opt}
                                                </button>
                                            )
                                        })}
                                    </div>
                                    {state?.answered && (
                                        <div className={`mt-3 p-3 rounded-xl text-sm font-semibold flex items-center gap-2 ${state.correct ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' : 'bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400'}`}>
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
                            <div className="bg-white dark:bg-surface-800 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lift dark:shadow-dark-lift text-center animate-scale-in">
                                <div className="mb-4 text-emerald-600 dark:text-emerald-400">
                                    {correctCount === totalExercises ? <TrophyIcon size={56} className="mx-auto" /> : correctCount >= totalExercises * 0.7 ? <PartyIcon size={56} className="mx-auto" /> : <BookIcon size={56} className="mx-auto text-slate-400 dark:text-slate-500" />}
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">
                                    {correctCount}/{totalExercises} correct
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-6">Score: {Math.round((correctCount / totalExercises) * 100)}%</p>

                                <div className="flex justify-center gap-3">
                                    <button className="btn btn-secondary px-6" onClick={goBack}>Back to Steps</button>
                                    <button className="btn btn-primary px-6" onClick={() => { setExerciseState({}); setShowResults(false) }}>Retry Step</button>
                                </div>
                            </div>
                        )}
                    </section>
                )}
            </div>
        )
    }

    // Parts overview
    return (
        <div className="space-y-6 pb-20 animate-fade-in">
            <div className="mb-4">
                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">TOEIC Prep</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">49 steps &middot; TOEIC in 49 Steps (Julie Valette)</p>
            </div>

            <div className="premium-card p-5">
                <div className="grid grid-cols-3 gap-4 text-center divide-x divide-slate-100 dark:divide-slate-700/50">
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Listening</div>
                        <div className="text-xl font-display font-bold text-brand-600 dark:text-brand-400">I–IV</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">45 min &middot; 100 Q</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Reading</div>
                        <div className="text-xl font-display font-bold text-emerald-600 dark:text-emerald-400">V–VII</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">75 min &middot; 100 Q</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Total</div>
                        <div className="text-xl font-display font-bold gradient-text-warm">990</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">2h &middot; 200 Q</div>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                {toeicParts.map((part) => {
                    const isExpanded = expandedPart === part.id
                    const completedSteps = part.steps.filter(id => progress.toeic[id]?.completed).length
                    const progressPct = (completedSteps / part.steps.length) * 100
                    const isListening = part.type === 'exam' || part.type.includes('Listening')

                    return (
                        <div key={part.id} className="premium-card overflow-hidden">
                            <button
                                className="w-full p-4 flex items-center gap-4 text-left hover:bg-slate-50/50 dark:hover:bg-surface-700/50 transition-colors duration-150"
                                onClick={() => togglePart(part.id)}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-display font-bold border shrink-0 ${isListening ? 'bg-brand-50 dark:bg-brand-950/50 border-brand-100 dark:border-brand-800/30 text-brand-600 dark:text-brand-400' : 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-100 dark:border-emerald-800/30 text-emerald-600 dark:text-emerald-400'
                                    }`}>
                                    {part.number}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white truncate">{part.title}</h3>
                                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1.5">{part.subtitle} &middot; {completedSteps}/{part.steps.length} steps</div>
                                    <div className="h-1.5 w-full max-w-[180px] bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-500 ${isListening ? 'bg-gradient-to-r from-brand-500 to-brand-400' : 'bg-gradient-to-r from-emerald-500 to-emerald-400'}`} style={{ width: `${progressPct}%` }} />
                                    </div>
                                </div>
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 ${isExpanded ? 'rotate-180 bg-slate-100 dark:bg-surface-700' : ''}`}>
                                    <ChevronDownIcon size={18} className="text-slate-400 dark:text-slate-500" />
                                </div>
                            </button>

                            {isExpanded && (
                                <div className="bg-slate-50 dark:bg-surface-850/50 border-t border-slate-100 dark:border-slate-700/30 p-3 space-y-1.5">
                                    <div className="bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300 text-sm p-3 rounded-xl border border-amber-100 dark:border-amber-800/30 mb-2 flex gap-2 items-start">
                                        <LightbulbIcon size={16} className="shrink-0 mt-0.5" /> <span>{part.tips}</span>
                                    </div>
                                    {part.steps.map(stepId => {
                                        const step = toeicSteps[stepId]
                                        const completed = progress.toeic[stepId]?.completed
                                        return (
                                            <button
                                                key={stepId}
                                                className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-colors duration-150 border ${completed ? 'bg-white dark:bg-surface-800 border-emerald-200/80 dark:border-emerald-800/30' : 'bg-white/60 dark:bg-surface-800/40 border-transparent hover:bg-white dark:hover:bg-surface-800 hover:border-slate-200 dark:hover:border-slate-700/50'
                                                    }`}
                                                onClick={() => openStep(step)}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${completed ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400' : 'bg-slate-100 dark:bg-surface-700 text-slate-500 dark:text-slate-400'
                                                        }`}>
                                                        {completed ? <CorrectIcon size={14} /> : stepId}
                                                    </div>
                                                    <span className={`font-medium text-sm ${completed ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                                                        {step.titleEn || step.title}
                                                    </span>
                                                </div>
                                                {completed && <span className="text-emerald-500 dark:text-emerald-400 text-xs font-semibold">Done</span>}
                                            </button>
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
