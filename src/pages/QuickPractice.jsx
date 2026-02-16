import { useState, useEffect, useMemo } from 'react'
import { grammarUnits } from '../data/grammarData'
import { vocabularyWords } from '../data/vocabularyData'
import { toeicSteps } from '../data/toeicData'
import { addXP } from '../utils/progressEngine'
import { TargetIcon, ClockIcon, PenIcon, StarIcon, ArrowLeftIcon } from '../components/Icons'

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
                <div className="space-y-8 pb-24 flex items-center justify-center min-h-[60vh]">
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl text-center animate-scaleIn w-full max-w-md">
                        <div className="text-6xl mb-4">
                            {pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}
                        </div>
                        <div className="text-3xl font-bold text-slate-900 mb-2">{correctCount}/{total}</div>
                        <div className="text-slate-500 mb-1">Score: {pct}%</div>
                        <div className="text-slate-400 font-mono text-sm mb-8">Time: {formatTime(timer)}</div>

                        <div className="flex gap-4 justify-center">
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
            <div className="space-y-6 pb-24 max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <button onClick={goBack} className="text-slate-500 hover:text-slate-700 font-medium flex items-center gap-2">
                        <ArrowLeftIcon size={18} /> Quit
                    </button>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-slate-400">
                            {currentQ + 1}/{questions.length}
                        </span>
                        <span className={`font-mono text-sm font-medium px-2 py-1 rounded bg-slate-100 ${mode === 'speed' ? 'text-red-600' : 'text-slate-600'}`}>
                            ⏱ {formatTime(timer)}
                        </span>
                    </div>
                </div>

                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full transition-all duration-300" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
                </div>

                <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-lg mt-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{q.sourceTitle}</div>
                    <div className="text-xl font-bold text-slate-900 mb-8 leading-relaxed">{q.question}</div>

                    <div className="grid gap-3">
                        {(shuffledQOptions[currentQ] || q.options).map((opt, i) => {
                            let classes = 'p-4 rounded-xl border-2 text-left transition-all font-medium flex gap-3 relative overflow-hidden '
                            if (state?.answered) {
                                if (opt === q.answer) classes += 'border-green-500 bg-green-50 text-green-700'
                                else if (opt === state.answer && !state.correct) classes += 'border-red-500 bg-red-50 text-red-700 opacity-60'
                                else classes += 'border-slate-100 bg-white text-slate-400 opacity-50'
                            } else {
                                classes += 'border-slate-100 bg-white text-slate-700 hover:border-indigo-200 hover:bg-slate-50 cursor-pointer shadow-sm hover:shadow-md'
                            }
                            return (
                                <button key={i} className={classes} onClick={() => handleAnswer(opt)} disabled={state?.answered}>
                                    <span className="w-6 h-6 rounded-md bg-white border border-inherit flex items-center justify-center text-xs font-bold shrink-0">{String.fromCharCode(65 + i)}</span>
                                    {opt}
                                </button>
                            )
                        })}
                    </div>

                    {state?.answered && (
                        <div className="mt-6 flex items-center justify-between animate-fadeIn">
                            <div className={`px-4 py-2 rounded-lg text-sm font-bold ${state.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {state.correct ? '✅ Correct!' : `❌ Answer: ${q.answer}`}
                            </div>
                            <button className="btn btn-primary px-6 shadow-lg shadow-indigo-200" onClick={nextQuestion}>
                                {currentQ < questions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    // Menu
    return (
        <div className="space-y-8 pb-24">
            <div className="mb-4">
                <h2 className="text-3xl font-display font-bold text-slate-900">Quick Practice</h2>
                <p className="text-slate-500 mt-2">Train quickly to reinforce your skills</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    onClick={startDaily}
                    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    style={{ animation: 'fadeInUp 0.4s ease 0.1s both' }}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <TargetIcon size={120} className="text-indigo-600" />
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <TargetIcon size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Daily Challenge</h3>
                    <p className="text-slate-500 text-sm mb-6">10 mixed questions from all topics. Best for daily streak.</p>

                    <div className="flex items-center gap-2 text-xs font-bold text-amber-500 bg-amber-50 self-start px-3 py-1.5 rounded-full w-fit">
                        <StarIcon size={14} /> +50-150 XP
                    </div>
                </div>

                <div
                    onClick={startSpeed}
                    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    style={{ animation: 'fadeInUp 0.4s ease 0.2s both' }}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ClockIcon size={120} className="text-rose-600" />
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <ClockIcon size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">Speed Drill</h3>
                    <p className="text-slate-500 text-sm mb-6">5 rapid-fire questions. Test your thinking speed.</p>

                    <div className="flex items-center gap-2 text-xs font-bold text-amber-500 bg-amber-50 self-start px-3 py-1.5 rounded-full w-fit">
                        <StarIcon size={14} /> +30-80 XP
                    </div>
                </div>

                <div
                    onClick={startVocabQuiz}
                    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    style={{ animation: 'fadeInUp 0.4s ease 0.3s both' }}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <PenIcon size={120} className="text-emerald-600" />
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <PenIcon size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Vocab Quiz</h3>
                    <p className="text-slate-500 text-sm mb-6">10 words to defined. Expand your medical vocabulary.</p>

                    <div className="flex items-center gap-2 text-xs font-bold text-amber-500 bg-amber-50 self-start px-3 py-1.5 rounded-full w-fit">
                        <StarIcon size={14} /> +25-125 XP
                    </div>
                </div>
            </div>
        </div>
    )
}
