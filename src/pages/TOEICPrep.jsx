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
                    className="flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium transition-colors text-sm"
                >
                    <ArrowLeftIcon size={18} /> Back to TOEIC parts
                </button>

                <div className="border-b border-slate-200 pb-5">
                    <div className="text-emerald-600 font-bold uppercase tracking-wider text-xs mb-1">Step {selectedStep.id}</div>
                    <h2 className="text-2xl font-display font-bold text-slate-900">{selectedStep.titleEn || selectedStep.title}</h2>
                    <p className="text-slate-500 mt-1 text-sm">{selectedStep.title}</p>
                </div>

                {selectedStep.content?.strategy && (
                    <section className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
                        <h3 className="text-base font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span className="p-1 bg-brand-50 text-brand-600 rounded-lg"><TargetIcon size={16} /></span> Strategy
                        </h3>
                        <p className="text-slate-700 leading-relaxed text-[15px]" dangerouslySetInnerHTML={{ __html: selectedStep.content.strategy.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-600">$1</strong>') }} />
                    </section>
                )}

                {selectedStep.content?.keyPoints && (
                    <section className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
                        <h3 className="text-base font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span className="p-1 bg-amber-50 text-amber-600 rounded-lg"><PinIcon size={16} /></span> Key Points
                        </h3>
                        <div className="space-y-2.5">
                            {selectedStep.content.keyPoints.map((point, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 shrink-0"></div>
                                    <div className="text-slate-700 text-[15px]" dangerouslySetInnerHTML={{
                                        __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-700">$1</strong>')
                                            .replace(/\'(.*?)\'/g, '<em class="text-slate-500 font-medium">$1</em>')
                                    }} />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {selectedStep.content?.vocabulary && (
                    <section className="space-y-3">
                        <h3 className="text-base font-display font-bold text-slate-900 flex items-center gap-2">
                            <span className="p-1 bg-brand-50 text-brand-600 rounded-lg"><PencilEditIcon size={16} /></span> Vocabulary
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {selectedStep.content.vocabulary.map((v, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-soft hover:shadow-card transition-shadow duration-200">
                                    <div className="font-bold text-brand-700 mb-1 text-sm">{v.word}</div>
                                    <div className="text-sm text-amber-600 font-medium mb-2">{v.definition}</div>
                                    <div className="text-sm text-slate-500 italic border-l-2 border-slate-100 pl-3">"{v.example}"</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {selectedStep.exercises && selectedStep.exercises.length > 0 && (
                    <section className="space-y-4">
                        <h3 className="text-base font-display font-bold text-slate-900 flex items-center gap-2">
                            <span className="p-1 bg-rose-50 text-rose-600 rounded-lg"><PencilEditIcon size={16} /></span> Practice
                        </h3>
                        {selectedStep.exercises.map((ex, exIdx) => {
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
                                                classes += 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/30 cursor-pointer'
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
                                <div className="mb-4 text-emerald-600">
                                    {correctCount === totalExercises ? <TrophyIcon size={56} className="mx-auto" /> : correctCount >= totalExercises * 0.7 ? <PartyIcon size={56} className="mx-auto" /> : <BookIcon size={56} className="mx-auto text-slate-400" />}
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">
                                    {correctCount}/{totalExercises} correct
                                </h3>
                                <p className="text-slate-500 mb-6">Score: {Math.round((correctCount / totalExercises) * 100)}%</p>

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
                <h2 className="text-2xl font-display font-bold text-slate-900">TOEIC Prep</h2>
                <p className="text-slate-500 mt-1 text-sm">49 steps &middot; TOEIC in 49 Steps (Julie Valette)</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-soft">
                <div className="grid grid-cols-3 gap-4 text-center divide-x divide-slate-100">
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Listening</div>
                        <div className="text-xl font-display font-bold text-brand-600">I–IV</div>
                        <div className="text-xs text-slate-500 mt-0.5">45 min &middot; 100 Q</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Reading</div>
                        <div className="text-xl font-display font-bold text-emerald-600">V–VII</div>
                        <div className="text-xs text-slate-500 mt-0.5">75 min &middot; 100 Q</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total</div>
                        <div className="text-xl font-display font-bold text-amber-500">990</div>
                        <div className="text-xs text-slate-500 mt-0.5">2h &middot; 200 Q</div>
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
                        <div key={part.id} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-soft">
                            <button
                                className="w-full p-4 flex items-center gap-4 text-left hover:bg-slate-50/50 transition-colors duration-150"
                                onClick={() => togglePart(part.id)}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-display font-bold border shrink-0 ${isListening ? 'bg-brand-50 border-brand-100 text-brand-600' : 'bg-emerald-50 border-emerald-100 text-emerald-600'
                                    }`}>
                                    {part.number}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-slate-900 truncate">{part.title}</h3>
                                    <div className="text-sm text-slate-500 mb-1.5">{part.subtitle} &middot; {completedSteps}/{part.steps.length} steps</div>
                                    <div className="h-1.5 w-full max-w-[180px] bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-500 ${isListening ? 'bg-brand-500' : 'bg-emerald-500'}`} style={{ width: `${progressPct}%` }} />
                                    </div>
                                </div>
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 ${isExpanded ? 'rotate-180 bg-slate-100' : ''}`}>
                                    <ChevronDownIcon size={18} className="text-slate-400" />
                                </div>
                            </button>

                            {isExpanded && (
                                <div className="bg-slate-50 border-t border-slate-100 p-3 space-y-1.5">
                                    <div className="bg-amber-50 text-amber-700 text-sm p-3 rounded-xl border border-amber-100 mb-2 flex gap-2 items-start">
                                        <LightbulbIcon size={16} className="shrink-0 mt-0.5" /> <span>{part.tips}</span>
                                    </div>
                                    {part.steps.map(stepId => {
                                        const step = toeicSteps[stepId]
                                        const completed = progress.toeic[stepId]?.completed
                                        return (
                                            <button
                                                key={stepId}
                                                className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-colors duration-150 border ${completed ? 'bg-white border-emerald-200/80' : 'bg-white/60 border-transparent hover:bg-white hover:border-slate-200'
                                                    }`}
                                                onClick={() => openStep(step)}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${completed ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                                                        }`}>
                                                        {completed ? <CorrectIcon size={14} /> : stepId}
                                                    </div>
                                                    <span className={`font-medium text-sm ${completed ? 'text-slate-900' : 'text-slate-600'}`}>
                                                        {step.titleEn || step.title}
                                                    </span>
                                                </div>
                                                {completed && <span className="text-emerald-500 text-xs font-semibold">Done</span>}
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
