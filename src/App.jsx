import { useState, useEffect } from 'react'
import { loadProgress, updateStreak, xpToNextLevel, LEVEL_TITLES, getGrammarStats, getToeicStats, estimateToeicScore } from './utils/progressEngine'
import Dashboard from './pages/Dashboard'
import GrammarLab from './pages/GrammarLab'
import TOEICPrep from './pages/TOEICPrep'
import VocabularyForge from './pages/VocabularyForge'
import QuickPractice from './pages/QuickPractice'
import Progress from './pages/Progress'
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
        <div className="app-layout">
            {/* Header - only on dashboard */}
            {currentPage === 'dashboard' && (
                <header className="header">
                    <div className="header__user">
                        <div className="header__avatar">An</div>
                        <div>
                            <div className="header__greeting-text">Hello 👋</div>
                            <div className="header__greeting-name">{getTimeGreeting()}</div>
                        </div>
                    </div>
                    <div className="header__actions">
                        <div className="header__lang-badge">
                            🇬🇧 English
                        </div>
                        <button className="header__notif">
                            <BellIcon size={18} />
                        </button>
                    </div>
                </header>
            )}

            {/* Main Content */}
            <main className="main-content">
                <div className="page-container">
                    {renderPage()}
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="bottom-nav">
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.id}
                        className={`bottom-nav__item ${currentPage === item.id ? 'bottom-nav__item--active' : ''}`}
                        onClick={() => navigate(item.id)}
                    >
                        {currentPage === item.id && <div className="bottom-nav__indicator" />}
                        <item.Icon size={22} />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>

            {/* XP Popup */}
            {xpPopup && (
                <div className="xp-popup">
                    <StarIcon size={20} />
                    <span className="xp-popup__amount">+{xpPopup} XP</span>
                    <span className="xp-popup__label">Bien joué !</span>
                </div>
            )}
        </div>
    )
}
