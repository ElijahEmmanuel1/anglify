import { useState, useMemo } from 'react'
import { vocabThemes, vocabularyWords, getWordsByTheme, getDueWords } from '../data/vocabularyData'
import { addXP, updateVocabWord } from '../utils/progressEngine'
import { PenIcon, ArrowLeftIcon, StarIcon, LayersIcon } from '../components/Icons'

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
        setSelectedTheme({ title: 'SRS Review', icon: '🔄' })
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
            <div className="space-y-8 pb-24 h-[calc(100vh-140px)] flex flex-col items-center justify-center">
                <div className="w-full max-w-md flex items-center justify-between mb-4">
                    <button onClick={goBack} className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <ArrowLeftIcon size={20} /> Back
                    </button>
                    <div className="text-slate-500 font-medium text-sm">
                        {currentIndex + 1} / {words.length}
                    </div>
                </div>

                <div className="w-full max-w-md perspective-[1000px] aspect-[3/4]">
                    <div
                        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d cursor-pointer ${flipped ? 'rotate-y-180' : ''}`}
                        onClick={() => setFlipped(!flipped)}
                        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                    >
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden bg-white rounded-3xl border border-slate-200 shadow-xl flex flex-col items-center justify-center p-8 text-center hover:border-indigo-200 transition-colors" style={{ backfaceVisibility: 'hidden' }}>
                            {boxLevel > 0 && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold border border-indigo-100">
                                    Box {boxLevel}
                                </div>
                            )}
                            <div className="text-4xl font-bold text-slate-800 mb-4">{word.word}</div>
                            <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">Tap to flip</div>
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-indigo-50 to-white rounded-3xl border border-indigo-100 shadow-xl flex flex-col items-center justify-center p-8 text-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                            <div className="text-xl font-medium text-indigo-900 mb-6">{word.definition}</div>
                            <div className="text-slate-500 italic">"{word.example}"</div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 w-full max-w-md">
                    <button
                        className="flex-1 py-4 rounded-xl border-2 border-rose-100 bg-white text-rose-500 font-bold hover:bg-rose-50 hover:border-rose-200 transition-all flex items-center justify-center gap-2"
                        onClick={handleDontKnow}
                    >
                        <span>❌</span> Don't know
                    </button>
                    <button
                        className="flex-1 py-4 rounded-xl bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                        onClick={handleKnow}
                    >
                        <span>✅</span> I know!
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8 pb-24">
            <div className="mb-4">
                <h2 className="text-3xl font-display font-bold text-slate-900">Vocabulary Forge</h2>
                <p className="text-slate-500 mt-2">Master business English with spaced repetition</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                    <div className="text-2xl font-bold text-indigo-600">{progress.vocabulary?.totalLearned || 0}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Studied</div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                    <div className="text-2xl font-bold text-emerald-500">{progress.vocabulary?.totalMastered || 0}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Mastered</div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                    <div className="text-2xl font-bold text-amber-500">{dueWords.length}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Due</div>
                </div>
            </div>

            {dueWords.length > 0 && (
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg shadow-orange-200 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="text-3xl bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">🔔</span>
                        <div>
                            <div className="font-bold text-lg">{dueWords.length} words to review</div>
                            <div className="text-orange-50 text-sm opacity-90">Spaced repetition strengthens memory</div>
                        </div>
                    </div>
                    <button
                        onClick={startReview}
                        className="px-5 py-2.5 bg-white text-orange-600 font-bold rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all"
                    >
                        Review
                    </button>
                </div>
            )}

            <div>
                <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold text-lg">
                    <LayersIcon size={20} className="text-indigo-600" /> Themes
                </div>

                <div className="space-y-4">
                    {vocabThemes.map((theme, i) => {
                        const themeWords = getWordsByTheme(theme.id)
                        const learned = themeWords.filter(w => progress.vocabulary?.words?.[w.id]).length
                        return (
                            <div
                                key={theme.id}
                                className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all cursor-pointer flex items-center gap-4 group"
                                onClick={() => startTheme(theme)}
                                style={{ animation: `fadeInUp 0.3s ease ${0.04 * i}s both` }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-slate-50 text-2xl flex items-center justify-center group-hover:bg-indigo-50 group-hover:scale-110 transition-all duration-300">
                                    {theme.icon}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{theme.title}</h3>
                                    <div className="text-sm text-slate-500 mb-2">{themeWords.length} words • {learned} learned</div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${(learned / themeWords.length) * 100}%` }} />
                                    </div>
                                </div>

                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">
                                    →
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
