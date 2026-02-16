import { useState, useEffect } from 'react'
import { loadProgress, updateStreak, xpToNextLevel, LEVEL_TITLES, getGrammarStats, getToeicStats, estimateToeicScore } from './utils/progressEngine'
import Dashboard from './pages/Dashboard'
import GrammarLab from './pages/GrammarLab'
import TOEICPrep from './pages/TOEICPrep'
import VocabularyForge from './pages/VocabularyForge'
import QuickPractice from './pages/QuickPractice'
import Progress from './pages/Progress'
import SplashScreen from './components/SplashScreen'
import { HomeIcon, BookIcon, TargetIcon, PenIcon, ZapIcon, ChartIcon, StarIcon, GlobeIcon } from './components/Icons'

const NAV_ITEMS = [
    { id: 'dashboard', label: 'Home', Icon: HomeIcon },
    { id: 'grammar', label: 'Grammar', Icon: BookIcon },
    { id: 'toeic', label: 'TOEIC', Icon: TargetIcon },
    { id: 'vocabulary', label: 'Vocab', Icon: PenIcon },
    { id: 'practice', label: 'Practice', Icon: ZapIcon },
    { id: 'progress', label: 'Progress', Icon: ChartIcon },
]

export default function App() {
    const [showSplash, setShowSplash] = useState(true)
    const [currentPage, setCurrentPage] = useState('dashboard')
    const [progress, setProgress] = useState(loadProgress)
    const [xpPopup, setXpPopup] = useState(null)

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
        const pageProps = { progress, setProgress, showXpGain, navigate }
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
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20 md:pb-0 md:pl-64">
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

            {/* Desktop Sidebar */}
            <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:w-64 md:flex-col md:border-r md:border-slate-200/80 md:bg-white md:px-6 md:py-8">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-display font-bold text-lg">
                        A
                    </div>
                    <span className="text-xl font-display font-bold text-slate-900 tracking-tight">Anglify</span>
                </div>

                <nav className="flex-1 space-y-0.5">
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${currentPage === item.id
                                    ? 'bg-brand-50 text-brand-700'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                                }`}
                        >
                            <item.Icon size={20} className={currentPage === item.id ? 'text-brand-600' : 'text-slate-400'} />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
                        <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm">
                            EL
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-900 truncate">Elijah</p>
                            <p className="text-xs text-slate-500">Premium Plan</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="md:hidden sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-display font-bold text-sm">
                        A
                    </div>
                    <div>
                        <div className="text-xs font-medium text-slate-500">{getTimeGreeting()}</div>
                        <div className="text-sm font-semibold text-slate-900">Hello, Elijah</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-lg border border-brand-100">
                        <GlobeIcon size={14} className="inline -mt-0.5 mr-1" />EN
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-8 animate-fade-in">
                {renderPage()}
            </main>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-2 py-1.5 pb-safe z-50 flex justify-around" role="tablist">
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.id}
                        role="tab"
                        aria-selected={currentPage === item.id}
                        aria-label={item.label}
                        onClick={() => navigate(item.id)}
                        className={`flex flex-col items-center justify-center px-3 py-1.5 rounded-xl transition-colors duration-150 ${currentPage === item.id ? 'text-brand-600' : 'text-slate-400'
                            }`}
                    >
                        <item.Icon size={22} />
                        <span className={`text-[10px] font-medium mt-0.5 ${currentPage === item.id ? 'text-brand-600' : 'text-slate-400'}`}>
                            {item.label}
                        </span>
                    </button>
                ))}
            </nav>

            {/* XP Popup Notification */}
            {xpPopup && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] bg-white border border-amber-100 text-slate-900 px-5 py-2.5 rounded-xl shadow-lift flex items-center gap-3 animate-fade-in-up">
                    <div className="p-1 bg-amber-50 rounded-lg text-amber-500">
                        <StarIcon size={16} />
                    </div>
                    <span className="font-bold text-amber-600">+{xpPopup} XP</span>
                    <span className="text-sm font-medium text-slate-500 border-l border-slate-200 pl-3">Well done!</span>
                </div>
            )}
        </div>
    )
}
