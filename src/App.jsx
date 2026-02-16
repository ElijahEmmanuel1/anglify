import { useState, useEffect } from 'react'
import { loadProgress, updateStreak, xpToNextLevel, LEVEL_TITLES, getGrammarStats, getToeicStats, estimateToeicScore } from './utils/progressEngine'
import Dashboard from './pages/Dashboard'
import GrammarLab from './pages/GrammarLab'
import TOEICPrep from './pages/TOEICPrep'
import VocabularyForge from './pages/VocabularyForge'
import QuickPractice from './pages/QuickPractice'
import Progress from './pages/Progress'
import SplashScreen from './components/SplashScreen'
import { HomeIcon, BookIcon, TargetIcon, PenIcon, ZapIcon, ChartIcon, StarIcon, GlobeIcon, SunIcon, MoonIcon } from './components/Icons'

const NAV_ITEMS = [
    { id: 'dashboard', label: 'Home', Icon: HomeIcon },
    { id: 'grammar', label: 'Grammar', Icon: BookIcon },
    { id: 'toeic', label: 'TOEIC', Icon: TargetIcon },
    { id: 'vocabulary', label: 'Vocab', Icon: PenIcon },
    { id: 'practice', label: 'Practice', Icon: ZapIcon },
    { id: 'progress', label: 'Progress', Icon: ChartIcon },
]

function useDarkMode() {
    const [dark, setDark] = useState(() => {
        if (typeof window === 'undefined') return false
        const stored = localStorage.getItem('anglify-theme')
        if (stored) return stored === 'dark'
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        const root = document.documentElement
        if (dark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem('anglify-theme', dark ? 'dark' : 'light')
    }, [dark])

    return [dark, setDark]
}

export default function App() {
    const [showSplash, setShowSplash] = useState(true)
    const [currentPage, setCurrentPage] = useState('dashboard')
    const [progress, setProgress] = useState(loadProgress)
    const [xpPopup, setXpPopup] = useState(null)
    const [dark, setDark] = useDarkMode()

    useEffect(() => {
        const updated = updateStreak(progress)
        if (updated !== progress) setProgress(updated)
    }, [])

    const showXpGain = (amount) => {
        setXpPopup(amount)
        setTimeout(() => setXpPopup(null), 2500)
    }

    const navigate = (page) => {
        setCurrentPage(page)
        window.scrollTo(0, 0)
    }

    const getTimeGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Good Morning'
        if (hour < 18) return 'Good Afternoon'
        return 'Good Evening'
    }

    const renderPage = () => {
        const pageProps = { progress, setProgress, showXpGain, navigate, dark }
        switch (currentPage) {
            case 'grammar': return <GrammarLab {...pageProps} />
            case 'toeic': return <TOEICPrep {...pageProps} />
            case 'vocabulary': return <VocabularyForge {...pageProps} />
            case 'practice': return <QuickPractice {...pageProps} />
            case 'progress': return <Progress {...pageProps} />
            default: return <Dashboard {...pageProps} />
        }
    }

    return (
        <div className="min-h-screen bg-surface-50 dark:bg-surface-900 text-slate-800 dark:text-slate-200 font-sans pb-20 md:pb-0 md:pl-72 transition-colors duration-300 mesh-bg">
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

            {/* ═══ Desktop Sidebar ═══ */}
            <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:w-72 md:flex-col md:bg-white/80 dark:md:bg-surface-850/90 md:backdrop-blur-xl md:border-r md:border-slate-200/60 dark:md:border-slate-700/40 md:px-6 md:py-8 z-30">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white font-display font-bold text-lg shadow-glow-brand">
                        A
                    </div>
                    <div>
                        <span className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Anglify</span>
                        <span className="block text-[10px] font-semibold text-brand-500 uppercase tracking-widest">Premium</span>
                    </div>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 space-y-1">
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.id)}
                            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${currentPage === item.id
                                    ? 'bg-gradient-to-r from-brand-50 to-brand-100/50 dark:from-brand-950/50 dark:to-brand-900/30 text-brand-700 dark:text-brand-300 shadow-soft dark:shadow-none'
                                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-surface-800 hover:text-slate-800 dark:hover:text-slate-200'
                                }`}
                        >
                            <item.Icon size={20} className={`transition-colors ${currentPage === item.id ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`} />
                            {item.label}
                            {currentPage === item.id && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-soft" />
                            )}
                        </button>
                    ))}
                </nav>

                {/* Dark mode toggle + User */}
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50 space-y-4">
                    {/* Theme toggle */}
                    <button
                        onClick={() => setDark(!dark)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-surface-800 transition-all"
                    >
                        {dark ? <SunIcon size={18} className="text-amber-400" /> : <MoonIcon size={18} className="text-slate-400" />}
                        {dark ? 'Light Mode' : 'Dark Mode'}
                        <div className="ml-auto">
                            <div className={`w-10 h-5 rounded-full transition-colors duration-300 flex items-center px-0.5 ${dark ? 'bg-brand-600' : 'bg-slate-200'}`}>
                                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${dark ? 'translate-x-5' : 'translate-x-0'}`} />
                            </div>
                        </div>
                    </button>

                    {/* User */}
                    <div className="flex items-center gap-3 bg-slate-50 dark:bg-surface-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                            EL
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Elijah</p>
                            <p className="text-xs text-brand-500 font-medium">Premium Plan</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* ═══ Mobile Header ═══ */}
            <header className="md:hidden sticky top-0 z-40 bg-white/85 dark:bg-surface-900/85 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-700/40 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white font-display font-bold text-sm shadow-sm">
                        A
                    </div>
                    <div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{getTimeGreeting()}</div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">Hello, Elijah</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setDark(!dark)}
                        className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-surface-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-surface-700 transition-colors"
                    >
                        {dark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
                    </button>
                    <div className="px-2.5 py-1 bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-xs font-semibold rounded-lg border border-brand-100 dark:border-brand-800/50">
                        <GlobeIcon size={14} className="inline -mt-0.5 mr-1" />EN
                    </div>
                </div>
            </header>

            {/* ═══ Main Content ═══ */}
            <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-8 animate-fade-in">
                {renderPage()}
            </main>

            {/* ═══ Mobile Bottom Navigation ═══ */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-surface-900/90 backdrop-blur-xl border-t border-slate-200/60 dark:border-slate-700/40 px-2 py-1.5 pb-safe z-50 flex justify-around" role="tablist">
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.id}
                        role="tab"
                        aria-selected={currentPage === item.id}
                        aria-label={item.label}
                        onClick={() => navigate(item.id)}
                        className={`relative flex flex-col items-center justify-center px-3 py-1.5 rounded-xl transition-all duration-200 ${currentPage === item.id ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'
                            }`}
                    >
                        <item.Icon size={22} />
                        <span className={`text-[10px] font-medium mt-0.5 ${currentPage === item.id ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'}`}>
                            {item.label}
                        </span>
                        {currentPage === item.id && (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-brand-500 dark:bg-brand-400" />
                        )}
                    </button>
                ))}
            </nav>

            {/* ═══ XP Popup ═══ */}
            {xpPopup && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] bg-white dark:bg-surface-800 border border-amber-100 dark:border-amber-800/40 text-slate-900 dark:text-slate-100 px-5 py-2.5 rounded-xl shadow-lift dark:shadow-dark-lift flex items-center gap-3 animate-fade-in-up">
                    <div className="p-1.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg text-white shadow-sm">
                        <StarIcon size={14} />
                    </div>
                    <span className="font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">+{xpPopup} XP</span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 border-l border-slate-200 dark:border-slate-700 pl-3">Well done!</span>
                </div>
            )}
        </div>
    )
}
