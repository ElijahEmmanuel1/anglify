import { getGrammarStats, getToeicStats, estimateToeicScore, xpToNextLevel, LEVEL_TITLES } from '../utils/progressEngine'
import { grammarCategories } from '../data/grammarData'
import CircularProgress from '../components/CircularProgress'
import { StarIcon, FlameIcon, BookIcon, TargetIcon, ChartIcon } from '../components/Icons'

export default function Progress({ progress }) {
    const grammarStats = getGrammarStats(progress)
    const toeicStats = getToeicStats(progress)
    const toeicScore = estimateToeicScore(progress)
    const xpInfo = xpToNextLevel(progress.xp, progress.level)

    // Category-level grammar stats
    const categoryStats = grammarCategories.map(cat => {
        const completed = cat.units.filter(id => progress.grammar[id]?.completed).length
        const pct = Math.round((completed / cat.units.length) * 100)
        return { ...cat, completed, total: cat.units.length, pct }
    })

    // Study days for heatmap
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
                <p className="page-header__subtitle">Ton parcours vers la maîtrise du TOEIC</p>
            </div>

            {/* TOEIC Score Estimator */}
            <div className="card progress-page__score-estimator" style={{ animation: 'fadeInUp 0.5s ease' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Score TOEIC Estimé</div>
                <div className="toeic-score">{toeicScore}</div>
                <div className="toeic-score-label">sur 990 points</div>
                <div className="progress-bar progress-bar--lg" style={{ maxWidth: '500px', margin: '1.5rem auto' }}>
                    <div className="progress-bar__fill" style={{ width: `${(toeicScore / 990) * 100}%` }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Listening</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-primary-light)' }}>{Math.round(toeicScore * 0.5)}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Reading</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--success)' }}>{Math.round(toeicScore * 0.5)}</div>
                    </div>
                </div>
            </div>

            {/* Level & XP */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="card" style={{ padding: '1.5rem', animation: 'fadeInUp 0.5s ease both', animationDelay: '0.1s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-lg)', background: 'var(--warning-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><StarIcon size={24} /></div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--xp-gold-light)' }}>{progress.xp} XP</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Niveau {progress.level} — {LEVEL_TITLES[progress.level]}</div>
                        </div>
                    </div>
                    <div className="progress-bar progress-bar--gold">
                        <div className="progress-bar__fill" style={{ width: `${xpInfo.percentage}%`, background: 'var(--xp-gradient)' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                        <span>{Math.round(xpInfo.current)} XP</span>
                        <span>{Math.round(xpInfo.needed)} XP pour Niv. {progress.level + 1}</span>
                    </div>
                </div>

                <div className="card" style={{ padding: '1.5rem', animation: 'fadeInUp 0.5s ease both', animationDelay: '0.15s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-lg)', background: 'var(--error-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--streak-fire)' }}><FlameIcon size={24} /></div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--warning)' }}>{progress.streak.current} jours</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Série en cours (Record: {progress.streak.best})</div>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ padding: '1.5rem', animation: 'fadeInUp 0.5s ease both', animationDelay: '0.2s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-lg)', background: 'rgba(99,102,241,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary-light)' }}><ChartIcon size={24} /></div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{totalStudyDays}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Jours d'étude ({totalActivities} activités)</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grammar Radar */}
            <div className="card" style={{ marginBottom: '2rem', animation: 'fadeInUp 0.5s ease both', animationDelay: '0.25s' }}>
                <h3 className="section-title"><BookIcon size={20} /> Grammar Mastery</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
                    {categoryStats.map(cat => (
                        <div key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-lg)' }}>
                            <span style={{ fontSize: '1.25rem' }}>{cat.icon}</span>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{cat.title}</span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{cat.completed}/{cat.total}</span>
                                </div>
                                <div className="progress-bar" style={{ height: '6px' }}>
                                    <div className="progress-bar__fill" style={{
                                        width: `${cat.pct}%`,
                                        background: cat.pct === 100 ? 'var(--success)' : cat.pct >= 50 ? 'var(--accent-gradient)' : 'var(--warning)'
                                    }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* TOEIC Progress */}
            <div className="card" style={{ marginBottom: '2rem', animation: 'fadeInUp 0.5s ease both', animationDelay: '0.3s' }}>
                <h3 className="section-title"><TargetIcon size={20} /> TOEIC Progress</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary-light)' }}>{toeicStats.completed}</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Étapes complétées</div>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-dim)' }}>{49 - toeicStats.completed}</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Étapes restantes</div>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--success)' }}>{Math.round((toeicStats.completed / 49) * 100)}%</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Progression</div>
                    </div>
                </div>
                <div className="progress-bar progress-bar--lg" style={{ marginTop: '1rem' }}>
                    <div className="progress-bar__fill progress-bar--success" style={{ width: `${(toeicStats.completed / 49) * 100}%` }} />
                </div>
            </div>

            {/* Study Heatmap */}
            <div className="card" style={{ animation: 'fadeInUp 0.5s ease both', animationDelay: '0.35s' }}>
                <h3 className="section-title"><ChartIcon size={20} /> Study Heatmap (6 mois)</h3>
                <div className="heatmap__grid">
                    {last180.map((dateStr, i) => {
                        const val = progress.studyDays?.[dateStr] || 0
                        const level = val === 0 ? '' : val < 3 ? 'heatmap__day--l1' : val < 5 ? 'heatmap__day--l2' : val < 10 ? 'heatmap__day--l3' : val < 20 ? 'heatmap__day--l4' : 'heatmap__day--l5'
                        return <div key={i} className={`heatmap__day ${level}`} title={`${dateStr}: ${val} activités`} />
                    })}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    <span>Moins</span>
                    <div className="heatmap__day" style={{ width: '12px', height: '12px' }} />
                    <div className="heatmap__day heatmap__day--l1" style={{ width: '12px', height: '12px' }} />
                    <div className="heatmap__day heatmap__day--l2" style={{ width: '12px', height: '12px' }} />
                    <div className="heatmap__day heatmap__day--l3" style={{ width: '12px', height: '12px' }} />
                    <div className="heatmap__day heatmap__day--l5" style={{ width: '12px', height: '12px' }} />
                    <span>Plus</span>
                </div>
            </div>
        </div>
    )
}
