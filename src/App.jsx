import { useState, useEffect } from 'react'
import { loadProgress, updateStreak, xpToNextLevel, LEVEL_TITLES, getGrammarStats, getToeicStats, estimateToeicScore } from './utils/progressEngine'
import Dashboard from './pages/Dashboard'
import GrammarLab from './pages/GrammarLab'
import TOEICPrep from './pages/TOEICPrep'
import VocabularyForge from './pages/VocabularyForge'
import QuickPractice from './pages/QuickPractice'
import Progress from './pages/Progress'

const NAV_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'grammar', label: 'Grammar Lab', icon: '📖' },
    { id: 'toeic', label: 'TOEIC Prep', icon: '🎯' },
    { id: 'vocabulary', label: 'Vocabulary Forge', icon: '📝' },
    { id: 'practice', label: 'Quick Practice', icon: '⚡' },
    { id: 'progress', label: 'Progress', icon: '📊' },
]

const PAGE_TITLES = {
    dashboard: 'Dashboard',
    grammar: 'Grammar Lab',
    toeic: 'TOEIC Prep',
    vocabulary: 'Vocabulary Forge',
    practice: 'Quick Practice',
    progress: 'My Progress',
}

export default function App() {
    const [currentPage, setCurrentPage] = useState('dashboard')
    const [progress, setProgress] = useState(loadProgress)
    const [sidebarOpen, setSidebarOpen] = useState(false)
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
        setSidebarOpen(false)
        window.scrollTo(0, 0)
    }

    const xpInfo = xpToNextLevel(progress.xp, progress.level)
    const grammarStats = getGrammarStats(progress)
    const toeicStats = getToeicStats(progress)

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
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div className="sidebar-overlay sidebar-overlay--visible" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
                <div className="sidebar__logo">
                    <div className="sidebar__logo-icon">An</div>
                    <div className="sidebar__logo-text">
                        <span className="sidebar__logo-title">Anglify</span>
                        <span className="sidebar__logo-subtitle">Master English, Ace TOEIC</span>
                    </div>
                </div>

                <nav className="sidebar__nav">
                    <span className="sidebar__label">Modules</span>
                    {NAV_ITEMS.map(item => (
                        <a
                            key={item.id}
                            className={`sidebar__link ${currentPage === item.id ? 'sidebar__link--active' : ''}`}
                            onClick={() => navigate(item.id)}
                        >
                            <span className="sidebar__link-icon">{item.icon}</span>
                            <span>{item.label}</span>
                            {item.id === 'grammar' && grammarStats.completed > 0 && (
                                <span className="sidebar__link-badge">{grammarStats.completed}</span>
                            )}
                            {item.id === 'toeic' && toeicStats.completed > 0 && (
                                <span className="sidebar__link-badge">{toeicStats.completed}</span>
                            )}
                        </a>
                    ))}
                </nav>

                <div className="sidebar__footer">
                    <div className="sidebar__streak">
                        <span className="sidebar__streak-fire">🔥</span>
                        <div className="sidebar__streak-info">
                            <div className="sidebar__streak-count">{progress.streak.current} jours</div>
                            <div className="sidebar__streak-label">Série en cours</div>
                        </div>
                    </div>
                    <div className="sidebar__xp">
                        <div className="sidebar__xp-header">
                            <span className="sidebar__xp-level">
                                Niv. {progress.level} — {LEVEL_TITLES[progress.level] || 'Apprenant'}
                            </span>
                            <span className="sidebar__xp-amount">{progress.xp} XP</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-bar__fill" style={{ width: `${xpInfo.percentage}%` }} />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Header */}
            <header className="header">
                <div className="header__left">
                    <button className="mobile-menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        ☰
                    </button>
                    <h1 className="header__title">{PAGE_TITLES[currentPage]}</h1>
                </div>
                <div className="header__right">
                    <div className="header__stat header__stat-streak">
                        🔥 {progress.streak.current}
                    </div>
                    <div className="header__stat header__stat-xp">
                        ⭐ {progress.xp} XP
                    </div>
                    <div className="header__stat" style={{ color: 'var(--accent-primary-light)' }}>
                        Niv. {progress.level}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <div className="page-container">
                    {renderPage()}
                </div>
            </main>

            {/* XP Popup */}
            {xpPopup && (
                <div className="xp-popup">
                    <span className="xp-popup__amount">+{xpPopup} XP</span>
                    <span className="xp-popup__label">Bien joué ! 🎉</span>
                </div>
            )}
        </div>
    )
}
