import { useState, useEffect, useMemo } from 'react'
import { grammarUnits } from '../data/grammarData'
import { vocabularyWords } from '../data/vocabularyData'
import { toeicSteps } from '../data/toeicData'
import { addXP } from '../utils/progressEngine'
import { TargetIcon, ClockIcon, PenIcon, StarIcon, ArrowLeftIcon, ArrowRightIcon, TrophyIcon, PartyIcon, BookIcon, CorrectIcon, WrongIcon } from '../components/Icons'

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
    const [mode, setMode] = useState('menu')
    const [questions, setQuestions] = useState([])
    const [currentQ, setCurrentQ] = useState(0)
    const [answers, setAnswers] = useState({})
    const [showResult, setShowResult] = useState(false)
    const [timer, setTimer] = useState(0)
    const [timerActive, setTimerActive] = useState(false)

    const allExercises = useMemo(() => getAllExercises(), [])

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
                question: `What does "${w.word}" mean?`,
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
    const goBack = () => { setMode('menu'); setTimerActive(false) }

    // Quiz in progress
    if ((mode === 'daily' || mode === 'speed' || mode === 'vocab-quiz') && questions.length > 0) {
        if (showResult) {
            const correctCount = Object.values(answers).filter(a => a.correct).length
            const total = questions.length
            const pct = Math.round((correctCount / total) * 100)
            return (
                <div className="space-y-6 pb-24 flex items-center justify-center min-h-[60vh] animate-fade-in">
                    <div className="bg-white dark:bg-surface-800 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lift dark:shadow-dark-lift text-center animate-scale-in w-full max-w-md">
                        <div className="mb-4 text-emerald-600 dark:text-emerald-400">
                            {pct === 100 ? <TrophyIcon size={56} className="mx-auto" /> : pct >= 70 ? <PartyIcon size={56} className="mx-auto" /> : <BookIcon size={56} className="mx-auto text-slate-400 dark:text-slate-500" />}
                        </div>
                        <div className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">{correctCount}/{total}</div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm mb-1">Score: {pct}%</div>
                        <div className="text-slate-400 dark:text-slate-500 font-mono text-xs mb-6">Time: {formatTime(timer)}</div>

                        <div className="flex gap-3 justify-center">
                            <button className="btn btn-secondary px-6" onClick={goBack}>Main Menu</button>
                            <button className="btn btn-primary px-6" onClick={mode === 'daily' ? startDaily : mode === 'speed' ? startSpeed : startVocabQuiz}>
                                Play Again
                            </button>
                        </div>
                    </div>
                </div>
            )
        }

        const q = questions[currentQ]
        const state = answers[currentQ]

        return (
            <div className="space-y-5 pb-24 max-w-2xl mx-auto animate-fade-in">
                <div className="flex items-center justify-between">
                    <button onClick={goBack} className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-medium flex items-center gap-2 text-sm">
                        <ArrowLeftIcon size={18} /> Quit
                    </button>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-slate-400 dark:text-slate-500">
                            {currentQ + 1}/{questions.length}
                        </span>
                        <span className={`font-mono text-xs font-medium px-2 py-1 rounded-lg bg-slate-100 dark:bg-surface-700 flex items-center gap-1.5 ${mode === 'speed' ? 'text-rose-600 dark:text-rose-400' : 'text-slate-600 dark:text-slate-300'}`}>
                            <ClockIcon size={12} /> {formatTime(timer)}
                        </span>
                    </div>
                </div>

                <div className="h-1.5 w-full bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-300" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
                </div>

                <div className="premium-card p-5 md:p-6 mt-4">
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">{q.sourceTitle}</div>
                    <div className="text-base font-medium text-slate-900 dark:text-white mb-6 leading-relaxed">{q.question}</div>

                    <div className="grid gap-2.5">
                        {(shuffledQOptions[currentQ] || q.options).map((opt, i) => {
                            let classes = 'p-3.5 rounded-xl border-2 text-left transition-all duration-200 font-medium text-sm flex gap-3 '
                            if (state?.answered) {
                                if (opt === q.answer) classes += 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400'
                                else if (opt === state.answer && !state.correct) classes += 'border-red-400 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 opacity-60'
                                else classes += 'border-slate-100 dark:border-slate-700/30 bg-white dark:bg-surface-800 text-slate-400 dark:text-slate-500 opacity-40'
                            } else {
                                classes += 'border-slate-200 dark:border-slate-700/50 bg-white dark:bg-surface-800 text-slate-700 dark:text-slate-300 hover:border-brand-300 dark:hover:border-brand-700 hover:bg-brand-50/30 dark:hover:bg-brand-950/20 cursor-pointer active:scale-[0.98]'
                            }
                            return (
                                <button key={i} className={classes} onClick={() => handleAnswer(opt)} disabled={state?.answered}>
                                    <span className="w-6 h-6 rounded-md bg-slate-50 dark:bg-surface-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold shrink-0">{String.fromCharCode(65 + i)}</span>
                                    {opt}
                                </button>
                            )
                        })}
                    </div>

                    {state?.answered && (
                        <div className="mt-4 flex items-center justify-between animate-fade-in">
                            <div className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 ${state.correct ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' : 'bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400'}`}>
                                {state.correct ? <><CorrectIcon size={16} /> Correct!</> : <><WrongIcon size={16} /> Answer: {q.answer}</>}
                            </div>
                            <button className="btn btn-primary px-5 flex items-center gap-2 text-sm" onClick={nextQuestion}>
                                {currentQ < questions.length - 1 ? <>Next <ArrowRightIcon size={14} /></> : 'Finish Quiz'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    // Menu
    return (
        <div className="space-y-6 pb-24 animate-fade-in">
            <div className="mb-4">
                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Quick Practice</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Train quickly to reinforce your skills</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                    onClick={startDaily}
                    className="premium-card-hover p-5 text-left group"
                >
                    <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                        <TargetIcon size={24} />
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Daily Challenge</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">10 mixed questions from all topics. Best for daily streak.</p>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-3 py-1.5 rounded-lg w-fit">
                        <StarIcon size={12} /> +50–150 XP
                    </div>
                </button>

                <button
                    onClick={startSpeed}
                    className="premium-card-hover p-5 text-left group"
                >
                    <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                        <ClockIcon size={24} />
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Speed Drill</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">5 rapid-fire questions. Test your thinking speed.</p>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-3 py-1.5 rounded-lg w-fit">
                        <StarIcon size={12} /> +30–80 XP
                    </div>
                </button>

                <button
                    onClick={startVocabQuiz}
                    className="premium-card-hover p-5 text-left group"
                >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                        <PenIcon size={24} />
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Vocab Quiz</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">10 words to define. Expand your business vocabulary.</p>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-3 py-1.5 rounded-lg w-fit">
                        <StarIcon size={12} /> +25–125 XP
                    </div>
                </button>
            </div>
        </div>
    )
}
