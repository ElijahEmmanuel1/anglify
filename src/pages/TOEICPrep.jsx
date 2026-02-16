import { useState, useMemo } from 'react'
import { toeicParts, toeicSteps } from '../data/toeicData'
import { addXP, completeToeicStep } from '../utils/progressEngine'
import { TargetIcon, ArrowLeftIcon, ChevronDownIcon } from '../components/Icons'

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
            <div className="space-y-8 pb-24 animate-fadeIn">
                <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors"
                >
                    <ArrowLeftIcon size={20} /> Back to TOEIC parts
                </button>

                <div className="flex items-end justify-between border-b border-slate-200 pb-6">
                    <div>
                        <div className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-1">Step {selectedStep.id}</div>
                        <h2 className="text-3xl font-bold text-slate-900">{selectedStep.titleEn || selectedStep.title}</h2>
                        <p className="text-slate-500 mt-1">{selectedStep.title}</p>
                    </div>
                </div>

                {selectedStep.content?.strategy && (
                    <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <span className="p-1.5 bg-indigo-100 text-indigo-600 rounded-lg"><TargetIcon size={16} /></span> Strategy
                        </h3>
                        <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedStep.content.strategy.replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-600">$1</strong>') }} />
                    </section>
                )}

                {selectedStep.content?.keyPoints && (
                    <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Key Points</h3>
                        <div className="space-y-3">
                            {selectedStep.content.keyPoints.map((point, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 shrink-0"></div>
                                    <div className="text-slate-700" dangerouslySetInnerHTML={{
                                        __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-700">$1</strong>')
                                            .replace(/\'(.*?)\'/g, '<em class="text-slate-500 font-medium">$1</em>')
                                    }} />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {selectedStep.content?.vocabulary && (
                    <section className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">📝 Vocabulary</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {selectedStep.content.vocabulary.map((v, i) => (
                                <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:border-indigo-100 hover:shadow-md transition-all">
                                    <div className="font-bold text-indigo-700 mb-1">{v.word}</div>
                                    <div className="text-sm text-amber-600 font-medium mb-3">{v.definition}</div>
                                    <div className="text-sm text-slate-500 italic border-l-2 border-slate-100 pl-3">"{v.example}"</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {selectedStep.exercises && selectedStep.exercises.length > 0 && (
                    <section className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900">✏️ Practice</h3>
                        {selectedStep.exercises.map((ex, exIdx) => {
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
                                            } else {
                                                classes += 'border-slate-100 bg-white text-slate-700 hover:border-emerald-200 hover:bg-emerald-50 cursor-pointer'
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
                                <button className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 px-8 py-3 text-lg shadow-xl shadow-emerald-200" onClick={submitExercises}>✅ Submit Answers</button>
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
                                    <button className="btn btn-secondary px-6" onClick={goBack}>Back to Steps</button>
                                    <button className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 px-6" onClick={() => { setExerciseState({}); setShowResults(false) }}>Retry Step</button>
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
        <div className="space-y-6 pb-20">
            <div className="mb-4">
                <h2 className="text-3xl font-display font-bold text-slate-900">TOEIC Prep</h2>
                <p className="text-slate-500 mt-2">49 steps • TOEIC® en 49 étapes (Julie Valette)</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <div className="grid grid-cols-3 gap-4 text-center divide-x divide-slate-100">
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Listening</div>
                        <div className="text-2xl font-bold text-indigo-600">I-IV</div>
                        <div className="text-xs text-slate-500 mt-1">45 min • 100 Q</div>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Reading</div>
                        <div className="text-2xl font-bold text-emerald-600">V-VII</div>
                        <div className="text-xs text-slate-500 mt-1">75 min • 100 Q</div>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total</div>
                        <div className="text-2xl font-bold text-amber-500">990</div>
                        <div className="text-xs text-slate-500 mt-1">2h • 200 Q</div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {toeicParts.map((part, i) => {
                    const isExpanded = expandedPart === part.id
                    const completedSteps = part.steps.filter(id => progress.toeic[id]?.completed).length
                    const progressPct = (completedSteps / part.steps.length) * 100
                    const isListening = part.type === 'exam' || part.type.includes('Listening')

                    return (
                        <div key={part.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300" style={{ animation: `fadeInUp 0.4s ease ${0.06 * i}s both` }}>
                            <div
                                className="p-5 flex items-center gap-5 cursor-pointer hover:bg-slate-50 transition-colors"
                                onClick={() => togglePart(part.id)}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold border-2 shrink-0 ${isListening ? 'bg-indigo-50 border-indigo-100 text-indigo-600' : 'bg-emerald-50 border-emerald-100 text-emerald-600'
                                    }`}>
                                    {part.number}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-slate-900 truncate">{part.title}</h3>
                                    <div className="text-sm text-slate-500 mb-2">{part.subtitle} • {completedSteps}/{part.steps.length} steps</div>
                                    <div className="h-1.5 w-full max-w-[200px] bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-500 ${isListening ? 'bg-indigo-500' : 'bg-emerald-500'}`} style={{ width: `${progressPct}%` }} />
                                    </div>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-slate-100' : 'bg-transparent'}`}>
                                    <ChevronDownIcon size={20} className="text-slate-400" />
                                </div>
                            </div>

                            {isExpanded && (
                                <div className="bg-slate-50 border-t border-slate-100 p-4 space-y-2">
                                    <div className="bg-amber-50 text-amber-700 text-sm p-3 rounded-lg border border-amber-100 mb-3 flex gap-2">
                                        <span>💡</span> {part.tips}
                                    </div>
                                    {part.steps.map(stepId => {
                                        const step = toeicSteps[stepId]
                                        const completed = progress.toeic[stepId]?.completed
                                        return (
                                            <div
                                                key={stepId}
                                                className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-all border ${completed ? 'bg-white border-green-200 shadow-sm' : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm'
                                                    }`}
                                                onClick={() => openStep(step)}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${completed ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-500'
                                                        }`}>
                                                        {completed ? '✓' : stepId}
                                                    </div>
                                                    <span className={`font-medium ${completed ? 'text-slate-900' : 'text-slate-600'}`}>
                                                        {step.titleEn || step.title}
                                                    </span>
                                                </div>
                                                {completed && <span className="text-green-500 text-sm font-bold">Done</span>}
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
