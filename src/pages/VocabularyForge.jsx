import { useState, useMemo } from 'react'
import { vocabThemes, vocabularyWords, getWordsByTheme, getDueWords } from '../data/vocabularyData'
import { addXP, updateVocabWord } from '../utils/progressEngine'
import { ArrowLeftIcon, ArrowRightIcon, LayersIcon, RefreshIcon, CorrectIcon, WrongIcon } from '../components/Icons'

export default function VocabularyForge({ progress, setProgress, showXpGain }) {
    const [mode, setMode] = useState('themes')
    const [selectedTheme, setSelectedTheme] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [flipped, setFlipped] = useState(false)
    const [words, setWords] = useState([])

    const dueWords = useMemo(() => getDueWords(progress), [progress])

    const startTheme = (theme) => {
        const themeWords = getWordsByTheme(theme.id)
        setWords(themeWords)
        setSelectedTheme(theme)
        setCurrentIndex(0)
        setFlipped(false)
        setMode('flashcard')
    }

    const startReview = () => {
        const due = getDueWords(progress)
        if (due.length === 0) return
        setWords(due.slice(0, 20))
        setSelectedTheme({ title: 'SRS Review' })
        setCurrentIndex(0)
        setFlipped(false)
        setMode('flashcard')
    }

    const handleKnow = () => {
        const word = words[currentIndex]
        const updated = updateVocabWord(progress, word.id, true)
        const { progress: withXp, xpGained } = addXP(updated, 5, 'vocabulary')
        setProgress(withXp)
        showXpGain(xpGained)
        nextCard()
    }

    const handleDontKnow = () => {
        const word = words[currentIndex]
        const updated = updateVocabWord(progress, word.id, false)
        setProgress(updated)
        nextCard()
    }

    const nextCard = () => {
        setFlipped(false)
        if (currentIndex < words.length - 1) {
            setTimeout(() => setCurrentIndex(prev => prev + 1), 200)
        } else {
            setMode('themes')
        }
    }

    const goBack = () => {
        setMode('themes')
        setSelectedTheme(null)
        setCurrentIndex(0)
    }

    if (mode === 'flashcard' && words.length > 0) {
        const word = words[currentIndex]
        const wordProgress = progress.vocabulary?.words?.[word.id]
        const boxLevel = wordProgress?.box || 0

        return (
            <div className="space-y-6 pb-24 h-[calc(100vh-140px)] flex flex-col items-center justify-center animate-fade-in">
                <div className="w-full max-w-md flex items-center justify-between mb-2">
                    <button onClick={goBack} className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors text-sm font-medium">
                        <ArrowLeftIcon size={18} /> Back
                    </button>
                    <div className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                        {currentIndex + 1} / {words.length}
                    </div>
                </div>

                <div className="w-full max-w-md aspect-[3/4]" style={{ perspective: '1000px' }}>
                    <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setFlipped(!flipped)}
                        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', transition: 'transform 0.5s ease' }}
                    >
                        {/* Front */}
                        <div className="absolute inset-0 bg-white dark:bg-surface-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 shadow-card dark:shadow-dark-card flex flex-col items-center justify-center p-8 text-center" style={{ backfaceVisibility: 'hidden' }}>
                            {boxLevel > 0 && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 rounded-lg text-xs font-bold border border-brand-100 dark:border-brand-800/30">
                                    Box {boxLevel}
                                </div>
                            )}
                            <div className="text-3xl font-display font-bold text-slate-800 dark:text-white mb-4">{word.word}</div>
                            <div className="text-slate-400 dark:text-slate-500 text-xs font-medium uppercase tracking-widest">Tap to flip</div>
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 bg-brand-50 dark:bg-brand-950/40 rounded-2xl border border-brand-100 dark:border-brand-800/50 shadow-card dark:shadow-dark-card flex flex-col items-center justify-center p-8 text-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                            <div className="text-lg font-medium text-brand-900 dark:text-brand-200 mb-6">{word.definition}</div>
                            <div className="text-slate-500 dark:text-slate-400 italic text-sm">"{word.example}"</div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 w-full max-w-md">
                    <button
                        className="flex-1 py-3.5 rounded-xl border-2 border-rose-200 dark:border-rose-800/50 bg-white dark:bg-surface-800 text-rose-500 dark:text-rose-400 font-bold hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors flex items-center justify-center gap-2 text-sm"
                        onClick={handleDontKnow}
                    >
                        <WrongIcon size={16} /> Don't know
                    </button>
                    <button
                        className="flex-1 py-3.5 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 text-sm"
                        onClick={handleKnow}
                    >
                        <CorrectIcon size={16} /> I know!
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6 pb-24 animate-fade-in">
            <div className="mb-4">
                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Vocabulary Forge</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Master business English with spaced repetition</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="premium-card p-4 text-center">
                    <div className="text-xl font-display font-bold text-brand-600 dark:text-brand-400">{progress.vocabulary?.totalLearned || 0}</div>
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">Studied</div>
                </div>
                <div className="premium-card p-4 text-center">
                    <div className="text-xl font-display font-bold text-emerald-500 dark:text-emerald-400">{progress.vocabulary?.totalMastered || 0}</div>
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">Mastered</div>
                </div>
                <div className="premium-card p-4 text-center">
                    <div className="text-xl font-display font-bold text-amber-500 dark:text-amber-400">{dueWords.length}</div>
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">Due</div>
                </div>
            </div>

            {dueWords.length > 0 && (
                <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-5 border border-amber-200/80 dark:border-amber-800/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center"><RefreshIcon size={20} /></span>
                        <div>
                            <div className="font-bold text-amber-900 dark:text-amber-200 text-sm">{dueWords.length} words to review</div>
                            <div className="text-amber-600 dark:text-amber-400 text-xs">Spaced repetition strengthens memory</div>
                        </div>
                    </div>
                    <button
                        onClick={startReview}
                        className="px-4 py-2 bg-amber-500 text-white font-bold rounded-xl text-sm hover:bg-amber-600 transition-colors"
                    >
                        Review
                    </button>
                </div>
            )}

            <div>
                <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white font-display font-bold text-base">
                    <LayersIcon size={18} className="text-brand-600 dark:text-brand-400" /> Themes
                </div>

                <div className="space-y-3">
                    {vocabThemes.map((theme) => {
                        const themeWords = getWordsByTheme(theme.id)
                        const learned = themeWords.filter(w => progress.vocabulary?.words?.[w.id]).length
                        return (
                            <button
                                key={theme.id}
                                className="w-full premium-card-hover p-4 text-left flex items-center gap-4"
                                onClick={() => startTheme(theme)}
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-surface-700 text-xl flex items-center justify-center shrink-0">
                                    {theme.icon}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{theme.title}</h3>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">{themeWords.length} words &middot; {learned} learned</div>
                                    <div className="h-1.5 w-full bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-500" style={{ width: `${(learned / themeWords.length) * 100}%` }} />
                                    </div>
                                </div>

                                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 dark:text-slate-600">
                                    <ArrowRightIcon size={16} />
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
