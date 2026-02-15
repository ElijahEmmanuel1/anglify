import { getGrammarStats, getToeicStats, estimateToeicScore } from '../utils/progressEngine'

const MODULES = [
    {
        id: 'grammar',
        icon: '📖',
        title: 'Grammar Lab',
        desc: '145 leçons de grammaire avec exercices interactifs. Du present simple aux phrasal verbs.',
        color: '#4F46E5'
    },
    {
        id: 'toeic',
        icon: '🎯',
        title: 'TOEIC Prep',
        desc: '49 étapes méthodiques pour maîtriser chaque partie du test TOEIC.',
        color: '#10B981'
    },
    {
        id: 'vocabulary',
        icon: '📝',
        title: 'Vocabulary Forge',
        desc: '500+ mots business avec flashcards et répétition espacée (SRS).',
        color: '#8B5CF6'
    },
    {
        id: 'practice',
        icon: '⚡',
        title: 'Quick Practice',
        desc: 'Défis quotidiens, speed drills et mini-quiz pour rester en forme.',
        color: '#F59E0B'
    }
]

const QUOTES = [
    "The secret of getting ahead is getting started. — Mark Twain",
    "Learning is not attained by chance, it must be sought with ardor. — Abigail Adams",
    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. — Brian Herbert",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
    "Every expert was once a beginner.",
    "A journey of a thousand miles begins with a single step. — Lao Tzu",
    "The more that you read, the more things you will know. — Dr. Seuss",
    "Education is the passport to the future. — Malcolm X",
]

export default function Dashboard({ progress, navigate }) {
    const grammarStats = getGrammarStats(progress)
    const toeicStats = getToeicStats(progress)
    const toeicScore = estimateToeicScore(progress)
    const vocabLearned = progress.vocabulary?.totalLearned || 0
    const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)]

    const getTimeGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Bonjour'
        if (hour < 18) return 'Bon après-midi'
        return 'Bonsoir'
    }

    return (
        <div className="dashboard">
            {/* Welcome */}
            <div className="dashboard__welcome">
                <h2 className="dashboard__greeting">
                    {getTimeGreeting()} ! <span style={{ animation: 'fireFlicker 1s infinite', display: 'inline-block' }}>🔥</span>
                </h2>
                <p className="dashboard__subtitle">{quote}</p>
            </div>

            {/* Stats Grid */}
            <div className="dashboard__grid">
                <div className="glass-card dashboard__stat-card" style={{ animationDelay: '0.1s', animation: 'fadeInUp 0.5s ease both' }}>
                    <div className="dashboard__stat-icon dashboard__stat-icon--xp">⭐</div>
                    <div>
                        <div className="dashboard__stat-value" style={{ color: 'var(--xp-gold-light)' }}>{progress.xp}</div>
                        <div className="dashboard__stat-label">XP Total</div>
                    </div>
                </div>
                <div className="glass-card dashboard__stat-card" style={{ animationDelay: '0.2s', animation: 'fadeInUp 0.5s ease both' }}>
                    <div className="dashboard__stat-icon dashboard__stat-icon--streak">🔥</div>
                    <div>
                        <div className="dashboard__stat-value" style={{ color: 'var(--warning)' }}>{progress.streak.current}</div>
                        <div className="dashboard__stat-label">Jours de série</div>
                    </div>
                </div>
                <div className="glass-card dashboard__stat-card" style={{ animationDelay: '0.3s', animation: 'fadeInUp 0.5s ease both' }}>
                    <div className="dashboard__stat-icon dashboard__stat-icon--grammar">📖</div>
                    <div>
                        <div className="dashboard__stat-value" style={{ color: 'var(--accent-primary-light)' }}>{grammarStats.completed}/145</div>
                        <div className="dashboard__stat-label">Grammar Units</div>
                    </div>
                </div>
                <div className="glass-card dashboard__stat-card" style={{ animationDelay: '0.4s', animation: 'fadeInUp 0.5s ease both' }}>
                    <div className="dashboard__stat-icon dashboard__stat-icon--toeic">🎯</div>
                    <div>
                        <div className="dashboard__stat-value" style={{ color: 'var(--success)' }}>{toeicScore}</div>
                        <div className="dashboard__stat-label">TOEIC Score Estimé</div>
                    </div>
                </div>
            </div>

            {/* TOEIC Score Preview */}
            <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem', marginBottom: '2rem', animation: 'fadeInUp 0.6s ease both', animationDelay: '0.3s' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Score TOEIC Estimé</div>
                <div className="toeic-score">{toeicScore}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>sur 990 points</div>
                <div className="progress-bar progress-bar--lg" style={{ maxWidth: '400px', margin: '1rem auto' }}>
                    <div className="progress-bar__fill" style={{ width: `${(toeicScore / 990) * 100}%` }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-primary">Grammar: {grammarStats.completed}/145</span>
                    <span className="badge badge-success">TOEIC Steps: {toeicStats.completed}/49</span>
                    <span className="badge badge-gold">Vocab: {vocabLearned} mots</span>
                </div>
            </div>

            {/* Modules */}
            <div className="dashboard__modules">
                <h3 className="dashboard__section-title">📚 Modules d'apprentissage</h3>
                <div className="dashboard__modules-grid">
                    {MODULES.map((mod, i) => (
                        <div
                            key={mod.id}
                            className="glass-card module-card"
                            onClick={() => navigate(mod.id)}
                            style={{ animation: 'fadeInUp 0.5s ease both', animationDelay: `${0.1 * (i + 1)}s`, cursor: 'pointer' }}
                        >
                            <div className="module-card__icon">{mod.icon}</div>
                            <div className="module-card__title">{mod.title}</div>
                            <div className="module-card__desc">{mod.desc}</div>
                            <div style={{ marginTop: 'auto' }}>
                                <button className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
                                    Commencer →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Study Heatmap Preview */}
            <div className="glass-card" style={{ marginTop: '2rem', animation: 'fadeInUp 0.6s ease both', animationDelay: '0.5s' }}>
                <h3 className="dashboard__section-title">📅 Activité d'étude</h3>
                <div className="heatmap__grid">
                    {Array.from({ length: 91 }, (_, i) => {
                        const date = new Date()
                        date.setDate(date.getDate() - (90 - i))
                        const dateStr = date.toISOString().split('T')[0]
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
