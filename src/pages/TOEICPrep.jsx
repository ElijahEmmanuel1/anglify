import { useState } from 'react'
import { toeicParts, toeicLessons, getLessonsByPart, getTotalLessons, getTotalExercises } from '../data/toeicData'
import { addXP, completeToeicStep } from '../utils/progressEngine'
import { TargetIcon, ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, LightbulbIcon, PencilEditIcon, CorrectIcon, WrongIcon, TrophyIcon, PartyIcon, BookIcon } from '../components/Icons'

const DIFF_COLORS = {
    beginner: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40',
    intermediate: 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/40',
    advanced: 'bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800/40',
}

export default function TOEICPrep({ progress, setProgress, showXpGain }) {
    const [view, setView] = useState('parts') // parts | lessons | exercise
    const [expandedPart, setExpandedPart] = useState(null)
    const [selectedLesson, setSelectedLesson] = useState(null)
    const [currentQ, setCurrentQ] = useState(0)
    const [answers, setAnswers] = useState({})
    const [showResults, setShowResults] = useState(false)
    const [imageLoaded, setImageLoaded] = useState({})

    const togglePart = (partId) => setExpandedPart(expandedPart === partId ? null : partId)

    const openLesson = (lesson) => {
        setSelectedLesson(lesson)
        setCurrentQ(0)
        setAnswers({})
        setShowResults(false)
        setImageLoaded({})
        setView('exercise')
    }

    const goBack = () => {
        if (view === 'exercise') { setView('parts'); setSelectedLesson(null); setShowResults(false) }
        else { setView('parts') }
    }

    const handleSelect = (qIdx, answerIdx) => {
        if (answers[qIdx] !== undefined) return
        setAnswers(prev => ({ ...prev, [qIdx]: answerIdx }))
    }

    const nextQuestion = () => {
        if (!selectedLesson) return
        if (currentQ < selectedLesson.exercises.length - 1) {
            setCurrentQ(currentQ + 1)
        }
    }

    const prevQuestion = () => {
        if (currentQ > 0) setCurrentQ(currentQ - 1)
    }

    const finishLesson = () => {
        if (!selectedLesson) return
        const total = selectedLesson.exercises.length
        const correctCount = selectedLesson.exercises.filter((ex, i) => answers[i] === ex.answer).length
        const score = Math.round((correctCount / total) * 100)
        let updated = completeToeicStep(progress, selectedLesson.id, score)
        const { progress: withXp, xpGained } = addXP(updated, correctCount * 20 + 15, 'toeic')
        setProgress(withXp)
        showXpGain(xpGained)
        setShowResults(true)
    }

    const allAnswered = selectedLesson?.exercises?.length > 0 &&
        Object.keys(answers).length === selectedLesson.exercises.length
    const correctCount = selectedLesson ? selectedLesson.exercises.filter((ex, i) => answers[i] === ex.answer).length : 0
    const totalExercises = selectedLesson?.exercises?.length || 0

    // ─── EXERCISE VIEW ─────────────────────────
    if (view === 'exercise' && selectedLesson) {
        const ex = selectedLesson.exercises[currentQ]
        const userAnswer = answers[currentQ]
        const isAnswered = userAnswer !== undefined
        const isCorrect = userAnswer === ex.answer

        if (showResults) {
            return (
                <div className="space-y-6 pb-24 animate-fade-in">
                    <button onClick={goBack} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors text-sm">
                        <ArrowLeftIcon size={18} /> Back to Parts
                    </button>

                    <div className="bg-white dark:bg-surface-800 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lift dark:shadow-dark-lift text-center animate-scale-in">
                        <div className="mb-4 text-emerald-600 dark:text-emerald-400">
                            {correctCount === totalExercises
                                ? <TrophyIcon size={56} className="mx-auto" />
                                : correctCount >= totalExercises * 0.7
                                    ? <PartyIcon size={56} className="mx-auto" />
                                    : <BookIcon size={56} className="mx-auto text-slate-400 dark:text-slate-500" />
                            }
                        </div>
                        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">
                            {correctCount}/{totalExercises} correct
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-2">
                            Score: {Math.round((correctCount / totalExercises) * 100)}%
                        </p>
                        <p className="text-sm text-slate-400 dark:text-slate-500 mb-6">{selectedLesson.title} — {selectedLesson.titleFr}</p>

                        {/* Review each question */}
                        <div className="text-left space-y-4 mb-6">
                            {selectedLesson.exercises.map((revEx, i) => {
                                const uA = answers[i]
                                const ok = uA === revEx.answer
                                const options = revEx.type === 'qr' ? revEx.responses : revEx.statements
                                return (
                                    <div key={i} className={`p-4 rounded-xl border ${ok ? 'border-emerald-200 dark:border-emerald-800/40 bg-emerald-50/50 dark:bg-emerald-950/20' : 'border-red-200 dark:border-red-800/40 bg-red-50/50 dark:bg-red-950/20'}`}>
                                        <div className="flex items-start gap-3 mb-2">
                                            <span className={`mt-0.5 shrink-0 ${ok ? 'text-emerald-500' : 'text-red-500'}`}>
                                                {ok ? <CorrectIcon size={16} /> : <WrongIcon size={16} />}
                                            </span>
                                            <div>
                                                {revEx.type === 'qr' && <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 italic">"{revEx.question}"</p>}
                                                <p className="text-sm font-semibold text-slate-900 dark:text-white">Q{i + 1}: {options[revEx.answer]}</p>
                                                {!ok && <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">Your answer: {options[uA]}</p>}
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{revEx.explanation}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex justify-center gap-3">
                            <button className="btn btn-secondary px-6" onClick={goBack}>Back to Parts</button>
                            <button className="btn btn-primary px-6" onClick={() => { setAnswers({}); setCurrentQ(0); setShowResults(false); setImageLoaded({}) }}>Retry</button>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="space-y-5 pb-24 animate-fade-in">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <button onClick={goBack} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors text-sm">
                        <ArrowLeftIcon size={18} /> Back
                    </button>
                    <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                        {currentQ + 1} / {totalExercises}
                    </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-500"
                        style={{ width: `${((Object.keys(answers).length) / totalExercises) * 100}%` }}
                    />
                </div>

                {/* Lesson info */}
                <div className="text-center">
                    <h2 className="text-lg font-display font-bold text-slate-900 dark:text-white">{selectedLesson.title}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{selectedLesson.titleFr}</p>
                </div>

                {/* Exercise card — adapts to type */}
                <div className="premium-card overflow-hidden">
                    {/* Photo header (only for photo type) */}
                    {ex.type === 'photo' && (
                        <div className="relative bg-slate-100 dark:bg-surface-700 aspect-[16/10] overflow-hidden">
                            {!imageLoaded[currentQ] && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 border-3 border-brand-200 dark:border-brand-800 border-t-brand-500 dark:border-t-brand-400 rounded-full animate-spin" />
                                </div>
                            )}
                            <img
                                key={ex.id}
                                src={ex.image}
                                alt={ex.imageAlt}
                                className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded[currentQ] ? 'opacity-100' : 'opacity-0'}`}
                                onLoad={() => setImageLoaded(prev => ({ ...prev, [currentQ]: true }))}
                                loading="eager"
                            />
                        </div>
                    )}

                    <div className="p-5 space-y-3">
                        {/* Question-Response header */}
                        {ex.type === 'qr' && (
                            <>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-2xl">💬</span>
                                    <div className="text-xs font-bold text-violet-500 dark:text-violet-400 uppercase tracking-wider">Question-Response</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-surface-700/50 rounded-xl p-4 border border-slate-200/80 dark:border-slate-700/50">
                                    <p className="text-base font-semibold text-slate-900 dark:text-white leading-relaxed">{ex.question}</p>
                                    {ex.questionFr && <p className="text-sm text-slate-400 dark:text-slate-500 mt-1.5 italic">{ex.questionFr}</p>}
                                </div>
                            </>
                        )}

                        {/* Photo instruction */}
                        {ex.type === 'photo' && (
                            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                Choose the statement that best describes the photograph
                            </div>
                        )}

                        {/* QR instruction */}
                        {ex.type === 'qr' && (
                            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                Choose the best response
                            </div>
                        )}

                        {/* Options / Responses */}
                        <div className="grid gap-2.5">
                            {(ex.type === 'qr' ? ex.responses : ex.statements).map((stmt, sIdx) => {
                                let classes = 'p-3.5 rounded-xl border-2 text-left transition-all duration-200 font-medium text-sm flex gap-3 items-start '

                                if (isAnswered) {
                                    if (sIdx === ex.answer) {
                                        classes += 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400'
                                    } else if (sIdx === userAnswer && !isCorrect) {
                                        classes += 'border-red-400 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 opacity-60'
                                    } else {
                                        classes += 'border-slate-100 dark:border-slate-700/30 bg-white dark:bg-surface-800 text-slate-400 dark:text-slate-500 opacity-40'
                                    }
                                } else {
                                    classes += 'border-slate-200 dark:border-slate-700/50 bg-white dark:bg-surface-800 text-slate-700 dark:text-slate-300 hover:border-brand-300 dark:hover:border-brand-700 hover:bg-brand-50/30 dark:hover:bg-brand-950/20 cursor-pointer active:scale-[0.98]'
                                }

                                return (
                                    <button
                                        key={sIdx}
                                        className={classes}
                                        onClick={() => handleSelect(currentQ, sIdx)}
                                        disabled={isAnswered}
                                    >
                                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 border ${isAnswered && sIdx === ex.answer
                                                ? 'bg-emerald-100 dark:bg-emerald-900/50 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400'
                                                : 'bg-slate-50 dark:bg-surface-700 border-slate-200 dark:border-slate-600'
                                            }`}>
                                            {String.fromCharCode(65 + sIdx)}
                                        </span>
                                        <span className="pt-0.5">{stmt.replace(/^\([A-D]\)\s*/, '')}</span>
                                    </button>
                                )
                            })}
                        </div>

                        {/* Feedback */}
                        {isAnswered && (
                            <div className={`mt-2 p-3 rounded-xl text-sm font-semibold flex items-start gap-2 ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' : 'bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400'}`}>
                                {isCorrect ? <CorrectIcon size={16} className="mt-0.5 shrink-0" /> : <WrongIcon size={16} className="mt-0.5 shrink-0" />}
                                <span>{isCorrect ? 'Correct! ' : 'Incorrect. '}{ex.explanation}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between gap-3">
                    <button
                        onClick={prevQuestion}
                        disabled={currentQ === 0}
                        className="btn btn-secondary px-4 py-2.5 text-sm disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ArrowLeftIcon size={16} /> Prev
                    </button>

                    {allAnswered && !showResults ? (
                        <button className="btn btn-primary px-6 py-2.5 text-sm flex-1 max-w-[200px]" onClick={finishLesson}>
                            Finish &amp; Submit
                        </button>
                    ) : (
                        <div className="flex gap-1.5">
                            {selectedLesson.exercises.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentQ(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentQ
                                            ? 'bg-brand-500 dark:bg-brand-400 scale-125'
                                            : answers[i] !== undefined
                                                ? answers[i] === selectedLesson.exercises[i].answer
                                                    ? 'bg-emerald-400 dark:bg-emerald-500'
                                                    : 'bg-red-400 dark:bg-red-500'
                                                : 'bg-slate-200 dark:bg-surface-600'
                                        }`}
                                />
                            ))}
                        </div>
                    )}

                    <button
                        onClick={nextQuestion}
                        disabled={currentQ >= totalExercises - 1}
                        className="btn btn-secondary px-4 py-2.5 text-sm disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        Next <ArrowRightIcon size={16} />
                    </button>
                </div>
            </div>
        )
    }

    // ─── PARTS OVERVIEW ─────────────────────────
    const totalLessons = getTotalLessons()
    const totalEx = getTotalExercises()
    const completedLessons = Object.keys(progress.toeic).filter(k => progress.toeic[k]?.completed).length

    return (
        <div className="space-y-6 pb-20 animate-fade-in">
            <div className="mb-4">
                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">TOEIC Prep</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">{totalLessons} lessons &middot; {totalEx} exercises &middot; 7 parts</p>
            </div>

            {/* TOEIC overview card */}
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

            {/* Progress summary */}
            {completedLessons > 0 && (
                <div className="premium-card p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                        <CorrectIcon size={20} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">{completedLessons}/{totalLessons} lessons completed</div>
                        <div className="h-1.5 mt-1.5 bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500" style={{ width: `${(completedLessons / totalLessons) * 100}%` }} />
                        </div>
                    </div>
                </div>
            )}

            {/* Parts accordion */}
            <div className="space-y-3">
                {toeicParts.map((part) => {
                    const isExpanded = expandedPart === part.id
                    const lessons = getLessonsByPart(part.id)
                    const completedInPart = lessons.filter(l => progress.toeic[l.id]?.completed).length
                    const progressPct = lessons.length > 0 ? (completedInPart / lessons.length) * 100 : 0
                    const isListening = part.type === 'listening'
                    const hasContent = lessons.length > 0

                    return (
                        <div key={part.id} className="premium-card overflow-hidden">
                            <button
                                className="w-full p-4 flex items-center gap-4 text-left hover:bg-slate-50/50 dark:hover:bg-surface-700/50 transition-colors duration-150"
                                onClick={() => hasContent && togglePart(part.id)}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border ${isListening
                                        ? 'bg-brand-50 dark:bg-brand-950/50 border-brand-100 dark:border-brand-800/30'
                                        : 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-100 dark:border-emerald-800/30'
                                    }`}>
                                    {part.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-base font-semibold text-slate-900 dark:text-white truncate">
                                            Part {part.number}: {part.title}
                                        </h3>
                                        {!hasContent && (
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-surface-700 px-2 py-0.5 rounded-full">Soon</span>
                                        )}
                                    </div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1.5">
                                        {part.subtitle} &middot; {part.questionsPerTest} Q/test
                                        {hasContent && <> &middot; {completedInPart}/{lessons.length} lessons</>}
                                    </div>
                                    {hasContent && (
                                        <div className="h-1.5 w-full max-w-[180px] bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                                            <div className={`h-full rounded-full transition-all duration-500 ${isListening ? 'bg-gradient-to-r from-brand-500 to-brand-400' : 'bg-gradient-to-r from-emerald-500 to-emerald-400'}`} style={{ width: `${progressPct}%` }} />
                                        </div>
                                    )}
                                </div>
                                {hasContent && (
                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 ${isExpanded ? 'rotate-180 bg-slate-100 dark:bg-surface-700' : ''}`}>
                                        <ChevronDownIcon size={18} className="text-slate-400 dark:text-slate-500" />
                                    </div>
                                )}
                            </button>

                            {isExpanded && hasContent && (
                                <div className="bg-slate-50 dark:bg-surface-850/50 border-t border-slate-100 dark:border-slate-700/30 p-3 space-y-2">
                                    {/* Strategy tips */}
                                    {part.strategy && part.strategy.length > 0 && (
                                        <div className="bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300 text-sm p-3 rounded-xl border border-amber-100 dark:border-amber-800/30 mb-2">
                                            <div className="flex gap-2 items-start mb-2">
                                                <LightbulbIcon size={16} className="shrink-0 mt-0.5" />
                                                <span className="font-semibold">Strategy Tips</span>
                                            </div>
                                            <ul className="space-y-1.5 ml-6">
                                                {part.strategy.map((tip, i) => (
                                                    <li key={i} className="text-xs list-disc" dangerouslySetInnerHTML={{
                                                        __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                    }} />
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Lesson cards */}
                                    {lessons.map((lesson) => {
                                        const completed = progress.toeic[lesson.id]?.completed
                                        const bestScore = progress.toeic[lesson.id]?.score
                                        return (
                                            <button
                                                key={lesson.id}
                                                className={`w-full p-3.5 rounded-xl flex items-center justify-between text-left transition-all duration-150 border ${completed
                                                        ? 'bg-white dark:bg-surface-800 border-emerald-200/80 dark:border-emerald-800/30'
                                                        : 'bg-white/60 dark:bg-surface-800/40 border-transparent hover:bg-white dark:hover:bg-surface-800 hover:border-slate-200 dark:hover:border-slate-700/50'
                                                    }`}
                                                onClick={() => openLesson(lesson)}
                                            >
                                                <div className="flex items-center gap-3 min-w-0">
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${completed
                                                            ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400'
                                                            : 'bg-slate-100 dark:bg-surface-700 text-slate-500 dark:text-slate-400'
                                                        }`}>
                                                        {completed ? <CorrectIcon size={14} /> : lesson.id.split('_')[1].replace('l', '')}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <span className={`font-medium text-sm block truncate ${completed ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                                                            {lesson.title}
                                                        </span>
                                                        <span className="text-xs text-slate-400 dark:text-slate-500 block">
                                                            {lesson.titleFr} &middot; {lesson.exercises.length} {lesson.exercises[0]?.type === 'photo' ? 'photos' : 'questions'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 shrink-0 ml-2">
                                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${DIFF_COLORS[lesson.difficulty] || ''}`}>
                                                        {lesson.difficulty}
                                                    </span>
                                                    {completed && bestScore !== undefined && (
                                                        <span className="text-emerald-500 dark:text-emerald-400 text-xs font-bold">{bestScore}%</span>
                                                    )}
                                                </div>
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
