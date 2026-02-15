import { getGrammarStats, getToeicStats, estimateToeicScore } from '../utils/progressEngine'
import CircularProgress from '../components/CircularProgress'
import { BookIcon, TargetIcon, PenIcon, ZapIcon, StarIcon, FlameIcon, LayersIcon, ChartIcon } from '../components/Icons'

const MODULES = [
    {
        id: 'grammar',
        Icon: BookIcon,
        title: 'Grammar Lab',
        desc: '145 leçons de grammaire avec exercices interactifs.',
        accent: 'grammar',
        color: 'var(--module-grammar)',
    },
    {
        id: 'toeic',
        Icon: TargetIcon,
        title: 'TOEIC Prep',
        desc: '49 étapes méthodiques pour maîtriser le test TOEIC.',
        accent: 'toeic',
        color: 'var(--module-toeic)',
    },
    {
        id: 'vocabulary',
        Icon: PenIcon,
        title: 'Vocabulary Forge',
        desc: '500+ mots business avec flashcards et SRS.',
        accent: 'vocab',
        color: 'var(--module-vocab)',
    },
    {
        id: 'practice',
        Icon: ZapIcon,
        title: 'Quick Practice',
        desc: 'Défis quotidiens et speed drills pour progresser.',
        accent: 'practice',
        color: 'var(--module-practice)',
    }
]

const QUOTES = [
    "The secret of getting ahead is getting started. — Mark Twain",
    "Learning is not attained by chance, it must be sought with ardor. — Abigail Adams",
    "Every expert was once a beginner.",
    "A journey of a thousand miles begins with a single step. — Lao Tzu",
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
            {/* Hero Banner */}
            <div className="dashboard__hero">
                <div className="dashboard__hero-left">
                    <h2 className="dashboard__greeting">
                        {getTimeGreeting()} ! 👋
                    </h2>
                    <p className="dashboard__subtitle">{quote}</p>
                </div>
                <div className="dashboard__hero-right">
                    <div className="dashboard__hero-ring">
                        <CircularProgress
                            value={toeicScore}
                            max={990}
                            size={100}
                            strokeWidth={8}
                            gradientId="hero-toeic"
                            label={toeicScore}
                            sublabel="TOEIC"
                        />
                        <div className="dashboard__hero-ring-label">Score estimé</div>
                    </div>
                    <div className="dashboard__hero-ring">
                        <CircularProgress
                            value={grammarStats.completed}
                            max={145}
                            size={80}
                            strokeWidth={6}
                            color="var(--module-grammar)"
                            label={grammarStats.completed}
                            sublabel="/ 145"
                        />
                        <div className="dashboard__hero-ring-label">Grammar</div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="dashboard__grid">
                <div className="card stat-card stagger-1" style={{ animationFillMode: 'both', animation: 'fadeInUp 0.5s ease 0.05s both' }}>
                    <div className="stat-card__icon stat-card__icon--xp">
                        <StarIcon size={20} />
                    </div>
                    <div>
                        <div className="stat-card__value" style={{ color: 'var(--xp-gold-light)' }}>{progress.xp}</div>
                        <div className="stat-card__label">XP Total</div>
                    </div>
                </div>
                <div className="card stat-card stagger-2" style={{ animation: 'fadeInUp 0.5s ease 0.1s both' }}>
                    <div className="stat-card__icon stat-card__icon--streak">
                        <FlameIcon size={20} />
                    </div>
                    <div>
                        <div className="stat-card__value" style={{ color: 'var(--streak-fire)' }}>{progress.streak.current}</div>
                        <div className="stat-card__label">Jours de série</div>
                    </div>
                </div>
                <div className="card stat-card stagger-3" style={{ animation: 'fadeInUp 0.5s ease 0.15s both' }}>
                    <div className="stat-card__icon stat-card__icon--grammar">
                        <BookIcon size={20} />
                    </div>
                    <div>
                        <div className="stat-card__value" style={{ color: 'var(--module-grammar)' }}>{grammarStats.completed}/145</div>
                        <div className="stat-card__label">Grammar Units</div>
                    </div>
                </div>
                <div className="card stat-card stagger-4" style={{ animation: 'fadeInUp 0.5s ease 0.2s both' }}>
                    <div className="stat-card__icon stat-card__icon--toeic">
                        <TargetIcon size={20} />
                    </div>
                    <div>
                        <div className="stat-card__value" style={{ color: 'var(--module-toeic)' }}>{toeicScore}</div>
                        <div className="stat-card__label">TOEIC Estimé</div>
                    </div>
                </div>
            </div>

            {/* Modules */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h3 className="section-title">
                    <LayersIcon size={20} /> Modules d'apprentissage
                </h3>
                <div className="modules-grid">
                    {MODULES.map((mod, i) => (
                        <div
                            key={mod.id}
                            className="card card--interactive card--flush module-card"
                            onClick={() => navigate(mod.id)}
                            style={{ animation: `fadeInUp 0.5s ease ${0.05 * (i + 1)}s both` }}
                        >
                            <div className={`module-card__accent module-card__accent--${mod.accent}`} />
                            <div className="module-card__body">
                                <div className={`module-card__icon-wrap module-card__icon-wrap--${mod.accent}`}>
                                    <mod.Icon size={22} />
                                </div>
                                <div className="module-card__info">
                                    <div className="module-card__title">{mod.title}</div>
                                    <div className="module-card__desc">{mod.desc}</div>
                                    <div className="module-card__footer">
                                        <button className="btn btn-sm btn-secondary">
                                            Commencer →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Study Heatmap */}
            <div className="card" style={{ animation: 'fadeInUp 0.6s ease 0.3s both' }}>
                <h3 className="section-title" style={{ marginBottom: '16px' }}>
                    <ChartIcon size={20} /> Activité d'étude
                </h3>
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
                <div className="heatmap-legend">
                    <span>Moins</span>
                    <div className="heatmap__day" style={{ width: 11, height: 11 }} />
                    <div className="heatmap__day heatmap__day--l1" style={{ width: 11, height: 11 }} />
                    <div className="heatmap__day heatmap__day--l2" style={{ width: 11, height: 11 }} />
                    <div className="heatmap__day heatmap__day--l3" style={{ width: 11, height: 11 }} />
                    <div className="heatmap__day heatmap__day--l5" style={{ width: 11, height: 11 }} />
                    <span>Plus</span>
                </div>
            </div>
        </div>
    )
}
