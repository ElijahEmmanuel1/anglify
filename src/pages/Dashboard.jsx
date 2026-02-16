import { useMemo } from 'react'
import { getGrammarStats, getToeicStats, estimateToeicScore } from '../utils/progressEngine'
import { BookIcon, TargetIcon, PenIcon, ZapIcon, StarIcon, FlameIcon, ChartIcon, LayersIcon, BookOpenIcon, ClockIcon } from '../components/Icons'

const MODULES = [
    {
        id: 'grammar',
        Icon: BookIcon,
        title: 'Learn grammar with interactive exercises',
        category: 'Grammar',
        accent: 'grammar',
        lessons: 145,
        time: '30 min',
    },
    {
        id: 'toeic',
        Icon: TargetIcon,
        title: 'Master the TOEIC exam step by step',
        category: 'TOEIC',
        accent: 'toeic',
        lessons: 49,
        time: '20 min',
    },
    {
        id: 'vocabulary',
        Icon: PenIcon,
        title: 'Build your vocabulary with flashcards',
        category: 'Vocabulary',
        accent: 'vocab',
        lessons: 500,
        time: '15 min',
    },
    {
        id: 'practice',
        Icon: ZapIcon,
        title: 'Quick drills to test your skills',
        category: 'Practice',
        accent: 'practice',
        lessons: 10,
        time: '5 min',
    }
]

const BUDDY_MESSAGES = [
    "You're learning great today! Keep it up! 🎯",
    "Practice makes perfect! Let's go! 💪",
    "One step closer to mastering English! 🚀",
    "Your dedication is impressive! 🌟",
    "Ready for another learning session? 📚",
]

export default function Dashboard({ progress, navigate }) {
    const grammarStats = getGrammarStats(progress)
    const toeicStats = getToeicStats(progress)
    const toeicScore = estimateToeicScore(progress)

    const buddyMessage = useMemo(() =>
        BUDDY_MESSAGES[Math.floor(Math.random() * BUDDY_MESSAGES.length)]
        , [])

    const grammarProgress = Math.round((grammarStats.completed / 145) * 100)

    return (
        <div className="dashboard">
            {/* AI Buddy Card */}
            <div className="buddy-card">
                <div className="buddy-card__avatar">🤖</div>
                <div className="buddy-card__content">
                    <div className="buddy-card__label">Your AI buddy</div>
                    <div className="buddy-card__message">{buddyMessage}</div>
                </div>
                <div className="buddy-card__emoji">📚</div>
            </div>

            {/* Today's Pick */}
            <div className="todays-pick" onClick={() => navigate('grammar')}>
                <div className="todays-pick__info">
                    <div className="todays-pick__title">Today's pick: Grammar</div>
                    <div className="todays-pick__meta">
                        <span>📖 {145 - grammarStats.completed} lessons left</span>
                        <span>⏱ 10 min</span>
                    </div>
                </div>
                <div className="todays-pick__right">
                    <div className="todays-pick__progress-text">{grammarProgress}% complete</div>
                    <button className="todays-pick__play">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="stats-row">
                <div className="stat-chip">
                    <div className="stat-chip__icon">⭐</div>
                    <div className="stat-chip__value" style={{ color: 'var(--xp-gold-light)' }}>{progress.xp}</div>
                    <div className="stat-chip__label">XP</div>
                </div>
                <div className="stat-chip">
                    <div className="stat-chip__icon">🔥</div>
                    <div className="stat-chip__value" style={{ color: 'var(--streak-fire)' }}>{progress.streak.current}</div>
                    <div className="stat-chip__label">Streak</div>
                </div>
                <div className="stat-chip">
                    <div className="stat-chip__icon">🎯</div>
                    <div className="stat-chip__value" style={{ color: 'var(--accent-primary)' }}>{toeicScore}</div>
                    <div className="stat-chip__label">TOEIC</div>
                </div>
            </div>

            {/* Let's Learn Section */}
            <div className="section-title">Let's learn</div>

            {/* Category Tabs */}
            <div className="category-tabs">
                <div className="chip chip--active">
                    All <span className="chip__count">{MODULES.length}</span>
                </div>
                <div className="chip" onClick={() => navigate('grammar')}>
                    <BookIcon size={14} /> Grammar
                </div>
                <div className="chip" onClick={() => navigate('toeic')}>
                    <TargetIcon size={14} /> TOEIC
                </div>
                <div className="chip" onClick={() => navigate('vocabulary')}>
                    <PenIcon size={14} /> Vocab
                </div>
                <div className="chip" onClick={() => navigate('practice')}>
                    <ZapIcon size={14} /> Practice
                </div>
            </div>

            {/* Module Cards */}
            <div className="modules-grid">
                {MODULES.map((mod, i) => (
                    <div
                        key={mod.id}
                        className={`module-card module-card--${mod.accent}`}
                        onClick={() => navigate(mod.id)}
                        style={{ animation: `fadeInUp 0.4s ease ${0.08 * (i + 1)}s both` }}
                    >
                        <div className={`module-card__icon-wrap module-card__icon-wrap--${mod.accent}`}>
                            <mod.Icon size={22} />
                        </div>
                        <div className="module-card__category">{mod.category}</div>
                        <div className="module-card__title">{mod.title}</div>
                        <div className="module-card__meta">
                            <span>📖 {mod.lessons} lessons</span>
                            <span>⏱ {mod.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Activity Heatmap */}
            <div style={{ marginTop: 'var(--space-8)' }}>
                <div className="section-title">
                    <ChartIcon size={18} /> Study Activity
                </div>
                <div className="card">
                    <div className="heatmap__grid">
                        {Array.from({ length: 91 }, (_, i) => {
                            const date = new Date()
                            date.setDate(date.getDate() - (90 - i))
                            const dateStr = date.toISOString().split('T')[0]
                            const val = progress.studyDays?.[dateStr] || 0
                            const level = val === 0 ? '' : val < 3 ? 'heatmap__day--l1' : val < 5 ? 'heatmap__day--l2' : val < 10 ? 'heatmap__day--l3' : val < 20 ? 'heatmap__day--l4' : 'heatmap__day--l5'
                            return <div key={i} className={`heatmap__day ${level}`} title={`${dateStr}: ${val} activities`} />
                        })}
                    </div>
                    <div className="heatmap-legend">
                        <span>Less</span>
                        <div className="heatmap__day" style={{ width: 11, height: 11 }} />
                        <div className="heatmap__day heatmap__day--l1" style={{ width: 11, height: 11 }} />
                        <div className="heatmap__day heatmap__day--l2" style={{ width: 11, height: 11 }} />
                        <div className="heatmap__day heatmap__day--l3" style={{ width: 11, height: 11 }} />
                        <div className="heatmap__day heatmap__day--l5" style={{ width: 11, height: 11 }} />
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
