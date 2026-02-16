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
        iconBg: 'bg-brand-50 text-brand-600',
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
        iconBg: 'bg-emerald-50 text-emerald-600',
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
        iconBg: 'bg-amber-50 text-amber-600',
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
        iconBg: 'bg-rose-50 text-rose-600',
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
            {/* AI Buddy Card */}
            <div className="bg-brand-600 rounded-2xl p-6 md:p-8 text-white shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0">
                        <SparkleIcon size={24} className="text-white" />
                    </div>
                    <div>
                        <div className="text-brand-200 text-sm font-medium mb-0.5">Your AI Buddy</div>
                        <div className="text-lg sm:text-xl font-display font-bold leading-snug">{buddyMessage}</div>
                    </div>
                </div>
            </div>

            {/* Today's Pick */}
            <button
                onClick={() => navigate('grammar')}
                className="w-full bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft text-left hover:shadow-card transition-shadow duration-200 group"
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wide">Featured</span>
                            <span className="text-xs text-slate-400 font-medium">Daily Recommendation</span>
                        </div>
                        <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors">Today's Pick: Grammar</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5"><BookIcon size={14} /> {145 - grammarStats.completed} lessons left</span>
                            <span className="flex items-center gap-1.5"><ZapIcon size={14} /> 10 min</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="flex-1 sm:flex-none sm:w-28">
                            <div className="flex justify-between text-xs font-medium mb-1">
                                <span className="text-slate-500">Progress</span>
                                <span className="text-brand-600">{grammarProgress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-500 rounded-full transition-all duration-700" style={{ width: `${grammarProgress}%` }}></div>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-soft group-hover:bg-brand-700 transition-colors">
                            <PlayIcon size={18} />
                        </div>
                    </div>
                </div>
            </button>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-soft flex flex-col items-center justify-center text-center">
                    <div className="text-amber-500 mb-1"><StarIcon size={18} /></div>
                    <div className="text-lg font-bold text-slate-900">{progress.xp}</div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">XP</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-soft flex flex-col items-center justify-center text-center">
                    <div className="text-orange-500 mb-1"><FlameIcon size={18} /></div>
                    <div className="text-lg font-bold text-slate-900">{progress.streak.current}</div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">Streak</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-soft flex flex-col items-center justify-center text-center">
                    <div className="text-brand-500 mb-1"><TargetIcon size={18} /></div>
                    <div className="text-lg font-bold text-slate-900">{toeicScore}</div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">TOEIC</div>
                </div>
            </div>

            {/* Let's Learn Grid */}
            <div>
                <div className="flex items-center justify-between mb-3 px-0.5">
                    <h2 className="text-lg font-display font-bold text-slate-900">Let's learn</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MODULES.map((mod) => (
                        <button
                            key={mod.id}
                            onClick={() => navigate(mod.id)}
                            className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft hover:shadow-card transition-shadow duration-200 text-left group flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className={`w-10 h-10 rounded-xl ${mod.iconBg} flex items-center justify-center`}>
                                    {mod.lordIconSrc ? (
                                        <LordIcon src={mod.lordIconSrc} trigger="hover" size={28} colors={`primary:${mod.accent === 'brand' ? '#2451ed' : mod.accent === 'emerald' ? '#059669' : mod.accent === 'amber' ? '#d97706' : '#e11d48'},secondary:#334155`} />
                                    ) : (
                                        <mod.Icon size={22} />
                                    )}
                                </div>
                                <span className="px-2 py-0.5 bg-slate-50 text-slate-500 text-xs font-semibold rounded-md">
                                    {mod.category}
                                </span>
                            </div>

                            <h3 className="text-base font-semibold text-slate-900 mb-1.5 group-hover:text-brand-600 transition-colors leading-snug">{mod.title}</h3>
                            <div className="mt-auto pt-3 flex items-center gap-4 text-xs font-medium text-slate-400">
                                <span className="flex items-center gap-1"><BookIcon size={13} /> {mod.lessons} lessons</span>
                                <span className="flex items-center gap-1"><ZapIcon size={13} /> {mod.time}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Study Activity */}
            <div>
                <div className="flex items-center gap-2 mb-3 px-0.5">
                    <ChartIcon size={18} className="text-brand-600" />
                    <h2 className="text-lg font-display font-bold text-slate-900">Study Activity</h2>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft">
                    {/* Month labels */}
                    <div className="flex justify-between text-[10px] font-medium text-slate-400 mb-2 px-0.5">
                        {heatmapMonths.map((m, i) => <span key={i}>{m}</span>)}
                    </div>
                    {/* Heatmap grid */}
                    <div className="grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(13, 1fr)' }}>
                        {Array.from({ length: 91 }, (_, i) => {
                            const date = new Date()
                            date.setDate(date.getDate() - (90 - i))
                            const dateStr = date.toISOString().split('T')[0]
                            const val = progress.studyDays?.[dateStr] || 0

                            let colorClass = 'bg-slate-100'
                            if (val > 0) colorClass = 'bg-brand-200'
                            if (val >= 3) colorClass = 'bg-brand-300'
                            if (val >= 5) colorClass = 'bg-brand-400'
                            if (val >= 10) colorClass = 'bg-brand-500'
                            if (val >= 20) colorClass = 'bg-brand-600'

                            return (
                                <div
                                    key={i}
                                    className={`aspect-square w-full rounded-[3px] ${colorClass}`}
                                    title={`${dateStr}: ${val} activities`}
                                />
                            )
                        })}
                    </div>
                    {/* Legend */}
                    <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-slate-400">
                        <span>Less</span>
                        <div className="w-3 h-3 rounded-[2px] bg-slate-100"></div>
                        <div className="w-3 h-3 rounded-[2px] bg-brand-200"></div>
                        <div className="w-3 h-3 rounded-[2px] bg-brand-400"></div>
                        <div className="w-3 h-3 rounded-[2px] bg-brand-600"></div>
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
