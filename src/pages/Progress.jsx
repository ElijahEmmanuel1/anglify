import { getGrammarStats, getToeicStats, estimateToeicScore, xpToNextLevel, LEVEL_TITLES } from '../utils/progressEngine'
import { grammarCategories } from '../data/grammarData'
import { StarIcon, FlameIcon, BookIcon, TargetIcon, ChartIcon } from '../components/Icons'

export default function Progress({ progress }) {
    const grammarStats = getGrammarStats(progress)
    const toeicStats = getToeicStats(progress)
    const toeicScore = estimateToeicScore(progress)
    const xpInfo = xpToNextLevel(progress.xp, progress.level)

    const categoryStats = grammarCategories.map(cat => {
        const completed = cat.units.filter(id => progress.grammar[id]?.completed).length
        const pct = Math.round((completed / cat.units.length) * 100)
        return { ...cat, completed, total: cat.units.length, pct }
    })

    const today = new Date()
    const last180 = Array.from({ length: 180 }, (_, i) => {
        const date = new Date(today)
        date.setDate(date.getDate() - (179 - i))
        return date.toISOString().split('T')[0]
    })

    const totalStudyDays = Object.keys(progress.studyDays || {}).length
    const totalActivities = Object.values(progress.studyDays || {}).reduce((sum, v) => sum + v, 0)

    return (
        <div className="progress-page">
            <div className="page-header">
                <h2 className="page-header__title">My Progress</h2>
                <p className="page-header__subtitle">Your journey to TOEIC mastery</p>
            </div>

            {/* TOEIC Score */}
            <div className="progress-score" style={{ animation: 'fadeInUp 0.4s ease' }}>
                <div className="progress-score__value">{toeicScore}</div>
                <div className="progress-score__label">Estimated TOEIC Score / 990</div>
                <div className="progress-bar" style={{ maxWidth: '300px', margin: '1rem auto 0' }}>
                    <div className="progress-bar__fill" style={{ width: `${(toeicScore / 990) * 100}%` }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
                    <div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Listening</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{Math.round(toeicScore * 0.5)}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Reading</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--success)' }}>{Math.round(toeicScore * 0.5)}</div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="progress-stats">
                <div className="progress-stat" style={{ animation: 'fadeInUp 0.4s ease 0.1s both' }}>
                    <div className="progress-stat__icon" style={{ background: 'var(--warning-bg)', color: 'var(--xp-gold)' }}><StarIcon size={20} /></div>
                    <div>
                        <div className="progress-stat__value" style={{ color: 'var(--xp-gold-light)' }}>{progress.xp} XP</div>
                        <div className="progress-stat__label">Level {progress.level} — {LEVEL_TITLES[progress.level]}</div>
                    </div>
                </div>

                <div className="progress-stat" style={{ animation: 'fadeInUp 0.4s ease 0.15s both' }}>
                    <div className="progress-stat__icon" style={{ background: 'var(--error-bg)', color: 'var(--streak-fire)' }}><FlameIcon size={20} /></div>
                    <div>
                        <div className="progress-stat__value" style={{ color: 'var(--warning)' }}>{progress.streak.current} days</div>
                        <div className="progress-stat__label">Streak (Best: {progress.streak.best})</div>
                    </div>
                </div>

                <div className="progress-stat" style={{ animation: 'fadeInUp 0.4s ease 0.2s both' }}>
                    <div className="progress-stat__icon" style={{ background: 'var(--module-grammar-bg)', color: 'var(--accent-primary)' }}><BookIcon size={20} /></div>
                    <div>
                        <div className="progress-stat__value">{grammarStats.completed}/145</div>
                        <div className="progress-stat__label">Grammar units</div>
                    </div>
                </div>

                <div className="progress-stat" style={{ animation: 'fadeInUp 0.4s ease 0.25s both' }}>
                    <div className="progress-stat__icon" style={{ background: 'var(--module-toeic-bg)', color: 'var(--module-toeic)' }}><ChartIcon size={20} /></div>
                    <div>
                        <div className="progress-stat__value">{totalStudyDays}</div>
                        <div className="progress-stat__label">Study days ({totalActivities} activities)</div>
                    </div>
                </div>
            </div>

            {/* XP Progress */}
            <div className="card" style={{ marginBottom: '1.5rem', animation: 'fadeInUp 0.4s ease 0.2s both' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 700 }}>Level {progress.level} → {progress.level + 1}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{Math.round(xpInfo.current)}/{Math.round(xpInfo.needed)} XP</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-bar__fill" style={{ width: `${xpInfo.percentage}%`, background: 'var(--xp-gradient)' }} />
                </div>
            </div>

            {/* Grammar Mastery */}
            <div className="card" style={{ marginBottom: '1.5rem', animation: 'fadeInUp 0.4s ease 0.25s both' }}>
                <div className="section-title" style={{ marginBottom: '1rem' }}><BookIcon size={18} /> Grammar Mastery</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {categoryStats.map(cat => (
                        <div key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)' }}>
                            <span style={{ fontSize: '1.25rem' }}>{cat.icon}</span>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{cat.title}</span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{cat.completed}/{cat.total}</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-bar__fill" style={{
                                        width: `${cat.pct}%`,
                                        background: cat.pct === 100 ? 'var(--success)' : 'var(--accent-gradient)'
                                    }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* TOEIC Progress */}
            <div className="card" style={{ marginBottom: '1.5rem', animation: 'fadeInUp 0.4s ease 0.3s both' }}>
                <div className="section-title" style={{ marginBottom: '1rem' }}><TargetIcon size={18} /> TOEIC Progress</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{toeicStats.completed}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Completed</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dim)' }}>{49 - toeicStats.completed}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Remaining</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--success)' }}>{Math.round((toeicStats.completed / 49) * 100)}%</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Progress</div>
                    </div>
                </div>
                <div className="progress-bar" style={{ marginTop: '1rem' }}>
                    <div className="progress-bar__fill" style={{ width: `${(toeicStats.completed / 49) * 100}%`, background: 'var(--module-toeic)' }} />
                </div>
            </div>

            {/* Heatmap */}
            <div className="card" style={{ animation: 'fadeInUp 0.4s ease 0.35s both' }}>
                <div className="section-title" style={{ marginBottom: '1rem' }}><ChartIcon size={18} /> Study Heatmap (6 months)</div>
                <div className="heatmap__grid">
                    {last180.map((dateStr, i) => {
                        const val = progress.studyDays?.[dateStr] || 0
                        const level = val === 0 ? '' : val < 3 ? 'heatmap__day--l1' : val < 5 ? 'heatmap__day--l2' : val < 10 ? 'heatmap__day--l3' : val < 20 ? 'heatmap__day--l4' : 'heatmap__day--l5'
                        return <div key={i} className={`heatmap__day ${level}`} title={`${dateStr}: ${val}`} />
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
    )
}
