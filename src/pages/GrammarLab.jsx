import { useState, useMemo } from 'react'
import { grammarCategories, grammarUnits, getUnitsByCategory, normalizeUnit } from '../data/grammarData'
import { addXP, completeGrammarUnit } from '../utils/progressEngine'
import { playPronunciation, playSlowPronunciation, isAudioSupported } from '../utils/audioEngine'
import { BookIcon, ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, BookOpenIcon, RulesIcon, LightbulbIcon, PencilEditIcon, CorrectIcon, WrongIcon, TrophyIcon, PartyIcon, PlayIcon } from '../components/Icons'

function shuffleArray(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

function staggerDelay(index, base = 60) {
    return { animationDelay: `${index * base}ms`, opacity: 0 }
}

const DIFFICULTY_LABELS = { easy: 'Facile', medium: 'Moyen', hard: 'Difficile' }
const DIFFICULTY_COLORS = {
    easy: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    medium: 'bg-amber-100 text-amber-700 border-amber-200',
    hard: 'bg-red-100 text-red-700 border-red-200',
}

export default function GrammarLab({ progress, setProgress, showXpGain }) {
    const [view, setView] = useState('categories')
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedUnit, setSelectedUnit] = useState(null)
    const [activeTab, setActiveTab] = useState('cours') // 'cours' | 'exercices' | 'evaluation'
    const [difficultyFilter, setDifficultyFilter] = useState('all') // 'all' | 'easy' | 'medium' | 'hard'
    const [exerciseState, setExerciseState] = useState({})
    const [evalState, setEvalState] = useState({})
    const [showResults, setShowResults] = useState(false)
    const [showEvalResults, setShowEvalResults] = useState(false)
    const [lastAnswerAnim, setLastAnswerAnim] = useState(null)

    // Normalize unit to new format
    const unit = useMemo(() => normalizeUnit(selectedUnit), [selectedUnit])

    // Shuffle exercise options
    const shuffledOptions = useMemo(() => {
        if (!unit?.exercises) return {}
        const map = {}
        unit.exercises.forEach((ex, i) => { map[i] = shuffleArray(ex.options) })
        return map
    }, [unit])

    // Shuffle evaluation options
    const shuffledEvalOptions = useMemo(() => {
        if (!unit?.evaluation) return {}
        const map = {}
        unit.evaluation.forEach((ex, i) => { map[`eval-${i}`] = shuffleArray(ex.options) })
        return map
    }, [unit])

    // Filtered exercises by difficulty
    const filteredExercises = useMemo(() => {
        if (!unit?.exercises) return []
        if (difficultyFilter === 'all') return unit.exercises
        return unit.exercises.filter(ex => ex.difficulty === difficultyFilter)
    }, [unit, difficultyFilter])

    // Counts
    const answeredCount = Object.keys(exerciseState).length
    const totalFiltered = filteredExercises.length
    const totalExercises = unit?.exercises?.length || 0
    const evalAnsweredCount = Object.keys(evalState).length
    const totalEval = unit?.evaluation?.length || 0

    const openCategory = (cat) => { setSelectedCategory(cat); setView('units') }
    const openUnit = (u) => {
        setSelectedUnit(u); setExerciseState({}); setEvalState({})
        setShowResults(false); setShowEvalResults(false)
        setLastAnswerAnim(null); setActiveTab('cours'); setDifficultyFilter('all')
        setView('lesson')
    }
    const goBack = () => {
        if (view === 'lesson') { setView('units'); setSelectedUnit(null); setShowResults(false); setShowEvalResults(false) }
        else if (view === 'units') { setView('categories'); setSelectedCategory(null) }
    }

    // --- Exercise handlers ---
    const handleAnswer = (exIdx, answer, isEval = false) => {
        const stateObj = isEval ? evalState : exerciseState
        if (stateObj[exIdx]?.answered) return
        const exercises = isEval ? unit.evaluation : unit.exercises
        const ex = exercises[exIdx]
        const correct = answer === ex.answer
        const setter = isEval ? setEvalState : setExerciseState
        setter(prev => ({ ...prev, [exIdx]: { answer, correct, answered: true } }))
        if (!isEval) setLastAnswerAnim({ index: exIdx, correct })
    }

    const submitExercises = () => {
        if (!unit) return
        const correct = Object.values(exerciseState).filter(e => e.correct).length
        const score = Math.round((correct / totalExercises) * 100)
        let updated = completeGrammarUnit(progress, unit.id, score)
        const { progress: withXp, xpGained } = addXP(updated, correct * 15 + 10, 'grammar')
        setProgress(withXp)
        showXpGain(xpGained)
        setShowResults(true)
    }

    const submitEval = () => {
        if (!unit) return
        const correct = Object.values(evalState).filter(e => e.correct).length
        const score = Math.round((correct / totalEval) * 100)
        let updated = completeGrammarUnit(progress, unit.id, score)
        const { progress: withXp, xpGained } = addXP(updated, correct * 20 + 15, 'grammar')
        setProgress(withXp)
        showXpGain(xpGained)
        setShowEvalResults(true)
    }

    const allExAnswered = totalFiltered > 0 && Object.keys(exerciseState).length >= totalExercises
    const allEvalAnswered = totalEval > 0 && Object.keys(evalState).length >= totalEval

    // ─────────────────────────────────────
    // CATEGORIES VIEW
    // ─────────────────────────────────────
    if (view === 'categories') {
        return (
            <div className="space-y-6 pb-20 animate-fade-in">
                <div className="mb-6">
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Grammar Lab</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">145 leçons &middot; English Grammar in Use — Raymond Murphy</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {grammarCategories.map((cat, i) => {
                        const completedInCat = cat.units.filter(id => progress.grammar[id]?.completed).length
                        const availableInCat = cat.units.filter(id => grammarUnits[id]).length
                        const progressPct = availableInCat > 0 ? (completedInCat / availableInCat) * 100 : 0
                        return (
                            <button
                                key={cat.id}
                                className="premium-card-hover p-4 text-left flex items-center gap-4 animate-reveal-up"
                                style={staggerDelay(i, 40)}
                                onClick={() => openCategory(cat)}
                            >
                                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                                    <BookIcon size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white truncate">{cat.title}</h3>
                                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                        {availableInCat} / {cat.units.length} units &middot; {completedInCat} terminé{completedInCat > 1 ? 's' : ''}
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-700 ease-out" style={{ width: `${progressPct}%` }} />
                                    </div>
                                </div>
                                <ArrowRightIcon size={16} className="text-slate-300 dark:text-slate-600 shrink-0" />
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }

    // ─────────────────────────────────────
    // UNITS LIST VIEW
    // ─────────────────────────────────────
    if (view === 'units' && selectedCategory) {
        const allUnitsInCategory = selectedCategory.units
        return (
            <div className="space-y-6 pb-20 animate-slide-in-right">
                <button onClick={goBack} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors text-sm">
                    <ArrowLeftIcon size={18} /> Retour aux catégories
                </button>
                <div className="mb-4">
                    <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">{selectedCategory.title}</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{selectedCategory.description}</p>
                </div>
                <div className="space-y-2">
                    {allUnitsInCategory.map((unitId, idx) => {
                        const u = grammarUnits[unitId]
                        const completed = progress.grammar[unitId]?.completed
                        const score = progress.grammar[unitId]?.score
                        if (!u) return (
                            <div key={unitId} className="bg-slate-50 dark:bg-surface-800/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/30 text-slate-400 dark:text-slate-500 flex items-center gap-3 text-sm animate-reveal-up" style={staggerDelay(idx, 30)}>
                                <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-surface-700 flex items-center justify-center font-bold text-xs">{unitId}</div>
                                <div>Unit {unitId} &middot; Bientôt disponible</div>
                            </div>
                        )
                        return (
                            <button key={unitId}
                                className={`w-full p-3.5 rounded-xl border transition-all duration-200 flex items-center gap-3 text-left animate-reveal-up
                                    ${completed ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-800/30' : 'bg-white dark:bg-surface-800 border-slate-200/80 dark:border-slate-700/50 hover:border-brand-200 dark:hover:border-brand-800/50 hover:bg-brand-50/20 dark:hover:bg-brand-950/20'}`}
                                style={staggerDelay(idx, 30)}
                                onClick={() => openUnit(u)}
                            >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${completed ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-surface-700 text-slate-500 dark:text-slate-400'}`}>
                                    {completed ? <CorrectIcon size={16} /> : unitId}
                                </div>
                                <div className="flex-1">
                                    <div className={`font-medium text-sm ${completed ? 'text-slate-800 dark:text-slate-200' : 'text-slate-900 dark:text-white'}`}>{u.title}</div>
                                </div>
                                {completed && score !== undefined && (
                                    <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-md">{score}%</span>
                                )}
                                {!completed && <ArrowRightIcon size={14} className="text-slate-300 dark:text-slate-600" />}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }

    // ─────────────────────────────────────
    // LESSON VIEW (with tabs)
    // ─────────────────────────────────────
    if (view === 'lesson' && unit) {
        const correctCount = Object.values(exerciseState).filter(e => e.correct).length
        const evalCorrectCount = Object.values(evalState).filter(e => e.correct).length
        const exerciseProgressPct = totalExercises > 0 ? (answeredCount / totalExercises) * 100 : 0
        const evalProgressPct = totalEval > 0 ? (evalAnsweredCount / totalEval) * 100 : 0

        const hasEval = unit.evaluation && unit.evaluation.length > 0
        const hasExercises = unit.exercises && unit.exercises.length > 0

        const tabs = [
            { id: 'cours', label: '📖 Cours', show: true },
            { id: 'exercices', label: '✏️ Exercices', show: hasExercises },
            { id: 'evaluation', label: '📝 Évaluation', show: hasEval },
        ].filter(t => t.show)

        return (
            <div className="space-y-6 pb-24 animate-slide-in-right">
                {/* Header */}
                <button onClick={goBack} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors text-sm">
                    <ArrowLeftIcon size={18} /> Retour à {selectedCategory?.title}
                </button>
                <div className="border-b border-slate-200 dark:border-slate-700/50 pb-5 animate-fade-in">
                    <div className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-wider text-xs mb-1">Unit {unit.id}</div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{unit.title}</h2>
                </div>

                {/* Tab bar */}
                <div className="flex gap-1 bg-slate-100 dark:bg-surface-800 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700/30">
                    {tabs.map(tab => (
                        <button key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-200
                                ${activeTab === tab.id
                                    ? 'bg-white dark:bg-surface-700 text-brand-600 dark:text-brand-400 shadow-soft dark:shadow-dark-card'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* ════ COURS TAB ════ */}
                {activeTab === 'cours' && (
                    <div className="space-y-6 animate-fade-in" key="cours">
                        {/* Explanation */}
                        <section className="animate-reveal-up" style={staggerDelay(0, 100)}>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center"><BookOpenIcon size={16} /></span>
                                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">Leçon</h3>
                            </div>
                            <div className="premium-card p-5 leading-relaxed text-slate-700 dark:text-slate-300 text-[15px]">
                                <div dangerouslySetInnerHTML={{ __html: unit.explanation.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-600">$1</strong>') }} />
                            </div>
                        </section>

                        {/* Rules */}
                        {unit.rules && (
                            <section className="animate-reveal-up" style={staggerDelay(1, 100)}>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><RulesIcon size={16} /></span>
                                    <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">Règles clés</h3>
                                </div>
                                <div className="premium-card p-5 space-y-2.5">
                                    {unit.rules.map((rule, i) => (
                                        <div key={i} className="flex gap-3 animate-fade-in-up" style={staggerDelay(i, 60)}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-400 dark:bg-brand-500 mt-2.5 shrink-0"></div>
                                            <p className="text-slate-700 dark:text-slate-300 text-[15px]" dangerouslySetInnerHTML={{ __html: rule.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-600">$1</strong>').replace(/_(.*?)_/g, '<em class="text-slate-500 font-medium">$1</em>') }} />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Examples */}
                        {unit.examples && (
                            <section className="animate-reveal-up" style={staggerDelay(2, 100)}>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center"><LightbulbIcon size={16} /></span>
                                    <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">Exemples</h3>
                                </div>
                                <div className="grid gap-2">
                                    {unit.examples.map((ex, i) => (
                                        <div key={i} className={`p-4 rounded-xl border animate-fade-in-up ${ex.correct === false ? 'bg-red-50/50 dark:bg-red-950/20 border-red-100 dark:border-red-900/30' : 'bg-slate-50 dark:bg-surface-800/50 border-slate-100 dark:border-slate-700/30'}`} style={staggerDelay(i, 80)}>
                                            <div className="flex items-start justify-between gap-2">
                                                <p className="text-slate-800 dark:text-slate-200 text-[15px] flex-1" dangerouslySetInnerHTML={{ __html: ex.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-600">$1</strong>').replace(/~~(.*?)~~/g, '<span class="text-red-500 line-through decoration-2">$1</span>') }} />
                                                {ex.correct !== false && isAudioSupported() && (
                                                    <button onClick={() => playPronunciation(ex.text)} className="shrink-0 w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 hover:bg-brand-100 dark:hover:bg-brand-900/50 text-brand-600 dark:text-brand-400 flex items-center justify-center transition-colors" title="Écouter la prononciation">
                                                        <PlayIcon size={14} />
                                                    </button>
                                                )}
                                            </div>
                                            {ex.fr && <p className="mt-1.5 text-sm text-brand-600/80 italic">{ex.fr}</p>}
                                            {ex.note && <div className="mt-2 text-sm text-amber-600 font-medium flex items-center gap-1.5"><LightbulbIcon size={14} /> {ex.note}</div>}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Tips for French speakers */}
                        {unit.tips && unit.tips.length > 0 && (
                            <section className="animate-reveal-up" style={staggerDelay(3, 100)}>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-7 h-7 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">🇫🇷</span>
                                    <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">Astuces pour francophones</h3>
                                </div>
                                <div className="bg-violet-50/50 dark:bg-violet-950/20 p-5 rounded-2xl border border-violet-100 dark:border-violet-800/30 space-y-3">
                                    {unit.tips.map((tip, i) => (
                                        <div key={i} className="flex gap-3 animate-fade-in-up" style={staggerDelay(i, 80)}>
                                            <p className="text-violet-900 dark:text-violet-200 text-[15px]">{tip}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* CTA to go to exercises */}
                        {hasExercises && (
                            <div className="flex justify-center pt-2 animate-fade-in-up">
                                <button className="btn btn-primary px-8 py-3 text-base active:scale-[0.97] transition-transform" onClick={() => setActiveTab('exercices')}>
                                    Passer aux exercices →
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* ════ EXERCICES TAB ════ */}
                {activeTab === 'exercices' && hasExercises && (
                    <div className="space-y-5 animate-fade-in" key="exercices">
                        {/* Difficulty filter */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Difficulté :</span>
                            {['all', 'easy', 'medium', 'hard'].map(d => (
                                <button key={d}
                                    onClick={() => { setDifficultyFilter(d); setExerciseState({}); setShowResults(false); setLastAnswerAnim(null) }}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all duration-200
                                        ${difficultyFilter === d
                                            ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                                            : 'bg-white dark:bg-surface-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700/50 hover:border-brand-300 dark:hover:border-brand-700'}`}
                                >
                                    {d === 'all' ? 'Tous' : DIFFICULTY_LABELS[d]}
                                </button>
                            ))}
                        </div>

                        {/* Progress bar */}
                        {!showResults && totalFiltered > 0 && (
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5">
                                    <span>{Object.keys(exerciseState).length} / {totalExercises} répondu{Object.keys(exerciseState).length > 1 ? 's' : ''}</span>
                                    <span>{Math.round(exerciseProgressPct)}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-500 ease-out" style={{ width: `${exerciseProgressPct}%` }} />
                                </div>
                            </div>
                        )}

                        {/* Exercise cards */}
                        <div className="space-y-4">
                            {filteredExercises.map((ex, filteredIdx) => {
                                // Find original index for state tracking
                                const exIdx = unit.exercises.indexOf(ex)
                                const state = exerciseState[exIdx]
                                const isLastAnswered = lastAnswerAnim?.index === exIdx
                                return (
                                    <div key={exIdx} className={`premium-card p-5 transition-all duration-300 animate-reveal-up ${isLastAnswered && state?.answered ? (state.correct ? 'animate-correct-flash' : 'animate-shake') : ''}`} style={staggerDelay(filteredIdx, 50)}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Question {filteredIdx + 1}</span>
                                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${DIFFICULTY_COLORS[ex.difficulty || 'medium']}`}>
                                                {DIFFICULTY_LABELS[ex.difficulty || 'medium']}
                                            </span>
                                        </div>
                                        <div className="text-base font-medium text-slate-900 dark:text-white mb-4">{ex.question}</div>

                                        {/* Hint */}
                                        {ex.hint && !state?.answered && (
                                            <div className="mb-4 text-sm text-brand-500/80 dark:text-brand-400/80 italic flex items-center gap-1.5">
                                                <LightbulbIcon size={14} /> {ex.hint}
                                            </div>
                                        )}

                                        <div className="grid gap-2.5">
                                            {(shuffledOptions[exIdx] || ex.options).map((opt, optIdx) => {
                                                let classes = 'p-3.5 rounded-xl border-2 text-left transition-all duration-200 font-medium text-sm flex gap-3 '
                                                if (state?.answered) {
                                                    if (opt === ex.answer) classes += 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 animate-pop'
                                                    else if (opt === state.answer && !state.correct) classes += 'border-red-400 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 opacity-60'
                                                    else classes += 'border-slate-100 dark:border-slate-700/30 bg-white dark:bg-surface-800 text-slate-400 dark:text-slate-500 opacity-40'
                                                } else {
                                                    classes += 'border-slate-200 dark:border-slate-700/50 bg-white dark:bg-surface-800 text-slate-700 dark:text-slate-300 hover:border-brand-300 dark:hover:border-brand-700 hover:bg-brand-50/30 dark:hover:bg-brand-950/20 cursor-pointer active:scale-[0.98]'
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
                                            <div className={`mt-3 p-3 rounded-xl text-sm font-semibold flex items-center gap-2 animate-fade-in-up ${state.correct ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' : 'bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400'}`}>
                                                {state.correct ? <><CorrectIcon size={16} /> Correct !</> : <><WrongIcon size={16} /> La bonne réponse est : {ex.answer}</>}
                                                {isAudioSupported() && (
                                                    <button onClick={() => playPronunciation(ex.answer)} className="ml-auto shrink-0 w-7 h-7 rounded-md bg-white/60 dark:bg-surface-800/60 hover:bg-white dark:hover:bg-surface-700 text-current flex items-center justify-center transition-colors" title="Écouter">
                                                        <PlayIcon size={12} />
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}

                            {/* Submit button */}
                            {!showResults && allExAnswered && (
                                <div className="flex justify-center pt-2 animate-fade-in-up">
                                    <button className="btn btn-primary px-8 py-3 text-base" onClick={submitExercises}>Valider mes réponses</button>
                                </div>
                            )}

                            {/* Results */}
                            {showResults && (
                                <div className="bg-white dark:bg-surface-800 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lift dark:shadow-dark-lift text-center animate-pop">
                                    <div className="mb-4 text-brand-600 dark:text-brand-400">
                                        {correctCount === totalExercises ? <TrophyIcon size={56} className="mx-auto" /> : correctCount >= totalExercises * 0.7 ? <PartyIcon size={56} className="mx-auto" /> : <BookIcon size={56} className="mx-auto" />}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">
                                        {correctCount}/{totalExercises} correct{correctCount > 1 ? 's' : ''}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 mb-6">Score : {Math.round((correctCount / totalExercises) * 100)}%</p>
                                    <div className="flex justify-center gap-3 flex-wrap">
                                        <button className="btn btn-secondary px-6" onClick={goBack}>Retour à la liste</button>
                                        <button className="btn btn-primary px-6" onClick={() => { setExerciseState({}); setShowResults(false); setLastAnswerAnim(null) }}>Réessayer</button>
                                        {hasEval && <button className="btn btn-primary px-6" onClick={() => { setActiveTab('evaluation') }}>Passer à l'évaluation →</button>}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ════ ÉVALUATION TAB ════ */}
                {activeTab === 'evaluation' && hasEval && (
                    <div className="space-y-5 animate-fade-in" key="evaluation">
                        <div className="bg-violet-50/60 dark:bg-violet-950/20 p-4 rounded-2xl border border-violet-100 dark:border-violet-800/30">
                            <p className="text-sm text-violet-800 dark:text-violet-300 font-medium">
                                📝 <b>Mode évaluation</b> — Questions de niveau intermédiaire à avancé, style TOEIC. Pas d'indices ici !
                            </p>
                        </div>

                        {/* Eval progress */}
                        {!showEvalResults && totalEval > 0 && (
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5">
                                    <span>{evalAnsweredCount} / {totalEval} répondu{evalAnsweredCount > 1 ? 's' : ''}</span>
                                    <span>{Math.round(evalProgressPct)}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-violet-500 to-violet-400 rounded-full transition-all duration-500 ease-out" style={{ width: `${evalProgressPct}%` }} />
                                </div>
                            </div>
                        )}

                        <div className="space-y-4">
                            {unit.evaluation.map((ex, evalIdx) => {
                                const state = evalState[evalIdx]
                                return (
                                    <div key={evalIdx} className={`premium-card p-5 transition-all duration-300 animate-reveal-up`} style={staggerDelay(evalIdx, 60)}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-violet-400 dark:text-violet-500 uppercase tracking-wider">Évaluation {evalIdx + 1}</span>
                                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${DIFFICULTY_COLORS[ex.difficulty || 'hard']}`}>
                                                {DIFFICULTY_LABELS[ex.difficulty || 'hard']}
                                            </span>
                                        </div>
                                        <div className="text-base font-medium text-slate-900 dark:text-white mb-5">{ex.question}</div>

                                        <div className="grid gap-2.5">
                                            {(shuffledEvalOptions[`eval-${evalIdx}`] || ex.options).map((opt, optIdx) => {
                                                let classes = 'p-3.5 rounded-xl border-2 text-left transition-all duration-200 font-medium text-sm flex gap-3 '
                                                if (state?.answered) {
                                                    if (opt === ex.answer) classes += 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 animate-pop'
                                                    else if (opt === state.answer && !state.correct) classes += 'border-red-400 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 opacity-60'
                                                    else classes += 'border-slate-100 dark:border-slate-700/30 bg-white dark:bg-surface-800 text-slate-400 dark:text-slate-500 opacity-40'
                                                } else {
                                                    classes += 'border-slate-200 dark:border-slate-700/50 bg-white dark:bg-surface-800 text-slate-700 dark:text-slate-300 hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-50/30 dark:hover:bg-violet-950/20 cursor-pointer active:scale-[0.98]'
                                                }
                                                return (
                                                    <button key={optIdx} className={classes} onClick={() => handleAnswer(evalIdx, opt, true)} disabled={state?.answered}>
                                                        <span className="w-6 h-6 rounded-md bg-slate-50 dark:bg-surface-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold shrink-0">{String.fromCharCode(65 + optIdx)}</span>
                                                        {opt}
                                                    </button>
                                                )
                                            })}
                                        </div>

                                        {state?.answered && (
                                            <div className={`mt-3 p-3 rounded-xl text-sm font-semibold flex items-center gap-2 animate-fade-in-up ${state.correct ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' : 'bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400'}`}>
                                                {state.correct ? <><CorrectIcon size={16} /> Correct !</> : <><WrongIcon size={16} /> La bonne réponse est : {ex.answer}</>}
                                                {isAudioSupported() && (
                                                    <button onClick={() => playPronunciation(ex.answer)} className="ml-auto shrink-0 w-7 h-7 rounded-md bg-white/60 dark:bg-surface-800/60 hover:bg-white dark:hover:bg-surface-700 text-current flex items-center justify-center transition-colors" title="Écouter">
                                                        <PlayIcon size={12} />
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}

                            {/* Submit eval */}
                            {!showEvalResults && allEvalAnswered && (
                                <div className="flex justify-center pt-2 animate-fade-in-up">
                                    <button className="btn btn-primary px-8 py-3 text-base active:scale-[0.97] transition-transform bg-violet-600 hover:bg-violet-700" onClick={submitEval}>Valider l'évaluation</button>
                                </div>
                            )}

                            {/* Eval results */}
                            {showEvalResults && (
                                <div className="bg-white dark:bg-surface-800 rounded-2xl p-8 border border-violet-200 dark:border-violet-800/30 shadow-lift dark:shadow-dark-lift text-center animate-pop">
                                    <div className="mb-4 text-violet-600 dark:text-violet-400">
                                        {evalCorrectCount === totalEval ? <TrophyIcon size={56} className="mx-auto" /> : evalCorrectCount >= totalEval * 0.7 ? <PartyIcon size={56} className="mx-auto" /> : <BookIcon size={56} className="mx-auto" />}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">
                                        {evalCorrectCount}/{totalEval} correct{evalCorrectCount > 1 ? 's' : ''}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 mb-2">Score : {Math.round((evalCorrectCount / totalEval) * 100)}%</p>
                                    <p className="text-sm text-slate-400 dark:text-slate-500 mb-6">
                                        {evalCorrectCount === totalEval ? '🎉 Parfait ! Vous maîtrisez cette leçon !' : evalCorrectCount >= totalEval * 0.7 ? '👏 Bien joué ! Quelques points à revoir.' : '📖 Relisez le cours et réessayez.'}
                                    </p>
                                    <div className="flex justify-center gap-3 flex-wrap">
                                        <button className="btn btn-secondary px-6" onClick={() => setActiveTab('cours')}>Revoir le cours</button>
                                        <button className="btn btn-primary px-6" onClick={() => { setEvalState({}); setShowEvalResults(false) }}>Réessayer l'évaluation</button>
                                        <button className="btn btn-secondary px-6" onClick={goBack}>Retour à la liste</button>
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
