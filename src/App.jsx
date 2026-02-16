import { useState, useEffect } from 'react'
import { loadProgress, updateStreak, xpToNextLevel, LEVEL_TITLES, getGrammarStats, getToeicStats, estimateToeicScore } from './utils/progressEngine'
import Dashboard from './pages/Dashboard'
import GrammarLab from './pages/GrammarLab'
import TOEICPrep from './pages/TOEICPrep'
import VocabularyForge from './pages/VocabularyForge'
import QuickPractice from './pages/QuickPractice'
import Progress from './pages/Progress'
import SplashScreen from './components/SplashScreen'
import { HomeIcon, BookIcon, TargetIcon, PenIcon, ZapIcon, ChartIcon, StarIcon, BellIcon } from './components/Icons'

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
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-24 md:pb-0 md:pl-64">
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

            {/* Desktop Sidebar (Hidden on mobile) */}
            <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:w-64 md:flex-col md:border-r md:border-slate-200 md:bg-white md:px-6 md:py-8">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-100">
                        A
                    </div>
                    <span className="text-2xl font-display font-bold text-slate-900 tracking-tight">Anglify</span>
                </div>

                <nav className="flex-1 space-y-1">
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${currentPage === item.id
                                    ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                        >
                            <item.Icon size={20} className={currentPage === item.id ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'} />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm ring-2 ring-white">
                            EL
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-900 truncate">Elijah</p>
                            <p className="text-xs text-slate-500">Premium Plan</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="md:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between transition-all duration-300">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-100 to-white border border-indigo-50 flex items-center justify-center text-indigo-700 font-bold text-sm shadow-sm">
                        EL
                    </div>
                    <div>
                        <div className="text-xs font-medium text-slate-500">Hello, Elijah 👋</div>
                        <div className="text-sm font-bold text-slate-900">{getTimeGreeting()}</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100 shadow-sm">
                        🇬🇧 EN
                    </div>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors relative">
                        <BellIcon size={20} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-8 animate-fadeIn">
                {renderPage()}
            </main>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 px-2 py-2 pb-safe z-50 flex justify-around shadow-lg shadow-slate-200/50">
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.id}
                        onClick={() => navigate(item.id)}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 relative ${currentPage === item.id ? 'text-indigo-600 -translate-y-1' : 'text-slate-400'
                            }`}
                    >
                        {currentPage === item.id && (
                            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-indigo-500 rounded-b-lg shadow-glow"></span>
                        )}
                        <item.Icon size={24} className={`transition-transform duration-300 ${currentPage === item.id ? 'scale-110' : ''}`} />
                        <span className={`text-[10px] font-medium mt-1 ${currentPage === item.id ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                            {item.label}
                        </span>
                    </button>
                ))}
            </nav>

            {/* XP Popup Notification */}
            {xpPopup && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] bg-white border border-yellow-100 text-slate-900 px-5 py-3 rounded-full shadow-xl shadow-yellow-500/10 flex items-center gap-3 animate-bounce">
                    <div className="p-1 bg-yellow-100 rounded-full text-yellow-600">
                        <StarIcon size={16} />
                    </div>
                    <span className="font-bold text-yellow-600">+{xpPopup} XP</span>
                    <span className="text-sm font-medium text-slate-600 border-l border-slate-200 pl-3">Awesome!</span>
                </div>
            )}
        </div>
    )
}
