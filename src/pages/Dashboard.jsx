import { useMemo } from 'react'
import { getGrammarStats, getToeicStats, estimateToeicScore } from '../utils/progressEngine'
import { BookIcon, TargetIcon, PenIcon, ZapIcon, StarIcon, FlameIcon, ChartIcon, SparkleIcon, ArrowRightIcon, PlayIcon } from '../components/Icons'
import LordIcon from '../components/LordIcon'

const MODULES = [
    {
        id: 'grammar',
        Icon: BookIcon,
        lordIconSrc: 'https://cdn.lordicon.com/nocovwne.json',
        title: 'Learn grammar with interactive exercises',
        category: 'Grammar',
        accent: 'brand',
        gradient: 'from-brand-500/10 to-brand-600/5 dark:from-brand-500/15 dark:to-brand-600/10',
        iconBg: 'bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400',
        borderHover: 'hover:border-brand-200 dark:hover:border-brand-800/50',
        lessons: 145,
        time: '30 min',
    },
    {
        id: 'toeic',
        Icon: TargetIcon,
        lordIconSrc: 'https://cdn.lordicon.com/fhtaantg.json',
        title: 'Master the TOEIC exam step by step',
        category: 'TOEIC',
        accent: 'emerald',
        gradient: 'from-emerald-500/10 to-emerald-600/5 dark:from-emerald-500/15 dark:to-emerald-600/10',
        iconBg: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400',
        borderHover: 'hover:border-emerald-200 dark:hover:border-emerald-800/50',
        lessons: 49,
        time: '20 min',
    },
    {
        id: 'vocabulary',
        Icon: PenIcon,
        lordIconSrc: 'https://cdn.lordicon.com/wloilxuq.json',
        title: 'Build your vocabulary with flashcards',
        category: 'Vocabulary',
        accent: 'amber',
        gradient: 'from-amber-500/10 to-amber-600/5 dark:from-amber-500/15 dark:to-amber-600/10',
        iconBg: 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400',
        borderHover: 'hover:border-amber-200 dark:hover:border-amber-800/50',
        lessons: 500,
        time: '15 min',
    },
    {
        id: 'practice',
        Icon: ZapIcon,
        lordIconSrc: 'https://cdn.lordicon.com/rpgflhzq.json',
        title: 'Quick drills to test your skills',
        category: 'Practice',
        accent: 'rose',
        gradient: 'from-rose-500/10 to-rose-600/5 dark:from-rose-500/15 dark:to-rose-600/10',
        iconBg: 'bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400',
        borderHover: 'hover:border-rose-200 dark:hover:border-rose-800/50',
        lessons: 10,
        time: '5 min',
    }
]

const BUDDY_MESSAGES = [
    "You're learning great today! Keep it up!",
    "Practice makes perfect. Let's go!",
    "One step closer to mastering English!",
    "Your dedication is impressive!",
    "Ready for another learning session?",
]

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function Dashboard({ progress, navigate }) {
    const grammarStats = getGrammarStats(progress)
    const toeicScore = estimateToeicScore(progress)

    const buddyMessage = useMemo(() =>
        BUDDY_MESSAGES[Math.floor(Math.random() * BUDDY_MESSAGES.length)]
        , [])

    const grammarProgress = Math.round((grammarStats.completed / 145) * 100)

    // Compute heatmap month labels
    const heatmapMonths = useMemo(() => {
        const months = []
        const today = new Date()
        for (let i = 90; i >= 0; i -= 30) {
            const d = new Date(today)
            d.setDate(d.getDate() - i)
            months.push(MONTHS_SHORT[d.getMonth()])
        }
        return [...new Set(months)]
    }, [])

    return (
        <div className="space-y-6 pb-8">
            {/* ═══ AI Buddy Hero Card ═══ */}
            <div className="relative rounded-2xl p-6 md:p-8 text-white shadow-lift overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 dark:from-surface-800 dark:via-brand-950 dark:to-surface-800 dark:border dark:border-brand-800/30">
                {/* Decorative mesh */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-400/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

                <div className="relative z-10 flex items-start sm:items-center gap-4">
                    <div className="w-13 h-13 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 shadow-lg">
                        <SparkleIcon size={26} className="text-white" />
                    </div>
                    <div>
                        <div className="text-brand-200 dark:text-brand-300 text-sm font-medium mb-0.5 flex items-center gap-2">
                            Your AI Buddy
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 text-[10px] font-bold uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft"></span>
                                Active
                            </span>
                        </div>
                        <div className="text-lg sm:text-xl font-display font-bold leading-snug">{buddyMessage}</div>
                    </div>
                </div>
            </div>

            {/* ═══ Today's Pick ═══ */}
            <button
                onClick={() => navigate('grammar')}
                className="w-full premium-card-hover p-5 text-left group"
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="px-2.5 py-0.5 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-bold uppercase tracking-wide shadow-sm">Featured</span>
                            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">Daily Recommendation</span>
                        </div>
                        <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Today's Pick: Grammar</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1.5"><BookIcon size={14} /> {145 - grammarStats.completed} lessons left</span>
                            <span className="flex items-center gap-1.5"><ZapIcon size={14} /> 10 min</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="flex-1 sm:flex-none sm:w-28">
                            <div className="flex justify-between text-xs font-medium mb-1">
                                <span className="text-slate-500 dark:text-slate-400">Progress</span>
                                <span className="text-brand-600 dark:text-brand-400 font-bold">{grammarProgress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-700" style={{ width: `${grammarProgress}%` }}></div>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-white flex items-center justify-center shadow-md group-hover:shadow-glow-brand transition-all group-hover:scale-105">
                            <PlayIcon size={18} />
                        </div>
                    </div>
                </div>
            </button>

            {/* ═══ Stats Row ═══ */}
            <div className="grid grid-cols-3 gap-3">
                <div className="premium-card p-3.5 flex flex-col items-center justify-center text-center group hover:shadow-glow-amber transition-all">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-transform">
                        <StarIcon size={16} />
                    </div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">{progress.xp}</div>
                    <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">XP</div>
                </div>
                <div className="premium-card p-3.5 flex flex-col items-center justify-center text-center group hover:shadow-glow-amber transition-all">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 text-white flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-transform">
                        <FlameIcon size={16} />
                    </div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">{progress.streak.current}</div>
                    <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Streak</div>
                </div>
                <div className="premium-card p-3.5 flex flex-col items-center justify-center text-center group hover:shadow-glow-brand transition-all">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 text-white flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-transform">
                        <TargetIcon size={16} />
                    </div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">{toeicScore}</div>
                    <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">TOEIC</div>
                </div>
            </div>

            {/* ═══ Let's Learn Grid ═══ */}
            <div>
                <div className="flex items-center justify-between mb-3 px-0.5">
                    <h2 className="text-lg font-display font-bold text-slate-900 dark:text-white">Let's learn</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MODULES.map((mod) => (
                        <button
                            key={mod.id}
                            onClick={() => navigate(mod.id)}
                            className={`premium-card-hover bg-gradient-to-br ${mod.gradient} p-5 text-left group flex flex-col h-full ${mod.borderHover}`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className={`w-11 h-11 rounded-xl ${mod.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                                    {mod.lordIconSrc ? (
                                        <LordIcon src={mod.lordIconSrc} trigger="hover" size={28} colors={`primary:${mod.accent === 'brand' ? '#2451ed' : mod.accent === 'emerald' ? '#059669' : mod.accent === 'amber' ? '#d97706' : '#e11d48'},secondary:#334155`} />
                                    ) : (
                                        <mod.Icon size={22} />
                                    )}
                                </div>
                                <span className="px-2.5 py-0.5 bg-white/80 dark:bg-surface-800/80 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-lg border border-slate-100 dark:border-slate-700/50 backdrop-blur-sm">
                                    {mod.category}
                                </span>
                            </div>

                            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">{mod.title}</h3>
                            <div className="mt-auto pt-3 flex items-center gap-4 text-xs font-medium text-slate-400 dark:text-slate-500">
                                <span className="flex items-center gap-1"><BookIcon size={13} /> {mod.lessons} lessons</span>
                                <span className="flex items-center gap-1"><ZapIcon size={13} /> {mod.time}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* ═══ Study Activity ═══ */}
            <div>
                <div className="flex items-center gap-2 mb-3 px-0.5">
                    <ChartIcon size={18} className="text-brand-600 dark:text-brand-400" />
                    <h2 className="text-lg font-display font-bold text-slate-900 dark:text-white">Study Activity</h2>
                </div>
                <div className="premium-card p-5">
                    {/* Month labels */}
                    <div className="flex justify-between text-[10px] font-medium text-slate-400 dark:text-slate-500 mb-2 px-0.5">
                        {heatmapMonths.map((m, i) => <span key={i}>{m}</span>)}
                    </div>
                    {/* Heatmap grid */}
                    <div className="grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(13, 1fr)' }}>
                        {Array.from({ length: 91 }, (_, i) => {
                            const date = new Date()
                            date.setDate(date.getDate() - (90 - i))
                            const dateStr = date.toISOString().split('T')[0]
                            const val = progress.studyDays?.[dateStr] || 0

                            let colorClass = 'bg-slate-100 dark:bg-surface-700'
                            if (val > 0) colorClass = 'bg-brand-200 dark:bg-brand-800'
                            if (val >= 3) colorClass = 'bg-brand-300 dark:bg-brand-700'
                            if (val >= 5) colorClass = 'bg-brand-400 dark:bg-brand-600'
                            if (val >= 10) colorClass = 'bg-brand-500'
                            if (val >= 20) colorClass = 'bg-brand-600 dark:bg-brand-400'

                            return (
                                <div
                                    key={i}
                                    className={`aspect-square w-full rounded-[3px] ${colorClass} transition-colors`}
                                    title={`${dateStr}: ${val} activities`}
                                />
                            )
                        })}
                    </div>
                    {/* Legend */}
                    <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-slate-400 dark:text-slate-500">
                        <span>Less</span>
                        <div className="w-3 h-3 rounded-[2px] bg-slate-100 dark:bg-surface-700"></div>
                        <div className="w-3 h-3 rounded-[2px] bg-brand-200 dark:bg-brand-800"></div>
                        <div className="w-3 h-3 rounded-[2px] bg-brand-400 dark:bg-brand-600"></div>
                        <div className="w-3 h-3 rounded-[2px] bg-brand-600 dark:bg-brand-400"></div>
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
