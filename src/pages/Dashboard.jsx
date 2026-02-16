import { useMemo } from 'react'
import { getGrammarStats, getToeicStats, estimateToeicScore } from '../utils/progressEngine'
import { BookIcon, TargetIcon, PenIcon, ZapIcon, StarIcon, FlameIcon, ChartIcon } from '../components/Icons'

const MODULES = [
    {
        id: 'grammar',
        Icon: BookIcon,
        title: 'Learn grammar with interactive exercises',
        category: 'Grammar',
        accent: 'indigo',
        iconBg: 'bg-indigo-100 text-indigo-600',
        lessons: 145,
        time: '30 min',
    },
    {
        id: 'toeic',
        Icon: TargetIcon,
        title: 'Master the TOEIC exam step by step',
        category: 'TOEIC',
        accent: 'emerald',
        iconBg: 'bg-emerald-100 text-emerald-600',
        lessons: 49,
        time: '20 min',
    },
    {
        id: 'vocabulary',
        Icon: PenIcon,
        title: 'Build your vocabulary with flashcards',
        category: 'Vocabulary',
        accent: 'amber',
        iconBg: 'bg-amber-100 text-amber-600',
        lessons: 500,
        time: '15 min',
    },
    {
        id: 'practice',
        Icon: ZapIcon,
        title: 'Quick drills to test your skills',
        category: 'Practice',
        accent: 'rose',
        iconBg: 'bg-rose-100 text-rose-600',
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
    const toeicScore = estimateToeicScore(progress)

    const buddyMessage = useMemo(() =>
        BUDDY_MESSAGES[Math.floor(Math.random() * BUDDY_MESSAGES.length)]
        , [])

    const grammarProgress = Math.round((grammarStats.completed / 145) * 100)

    return (
        <div className="space-y-8 pb-8">
            {/* AI Buddy Card */}
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-indigo-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-700"></div>
                <div className="relative z-10 flex items-start sm:items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-lg border border-white/30">
                        🤖
                    </div>
                    <div>
                        <div className="text-indigo-100 font-medium mb-1">Your AI Buddy</div>
                        <div className="text-xl sm:text-2xl font-bold leading-tight">{buddyMessage}</div>
                    </div>
                </div>
            </div>

            {/* Today's Pick */}
            <div
                onClick={() => navigate('grammar')}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-soft cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wide">Featured</span>
                            <span className="text-xs text-slate-400 font-medium">Daily Recommendation</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Today's Pick: Grammar</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5"><BookIcon size={16} /> {145 - grammarStats.completed} lessons left</span>
                            <span className="flex items-center gap-1.5"><ZapIcon size={16} /> 10 min</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="flex-1 sm:flex-none sm:w-32">
                            <div className="flex justify-between text-xs font-medium mb-1.5">
                                <span className="text-slate-600">Progress</span>
                                <span className="text-indigo-600">{grammarProgress}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 rounded-full transition-all duration-1000" style={{ width: `${grammarProgress}%` }}></div>
                            </div>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200 group-hover:scale-110 transition-transform">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="text-yellow-500 mb-1"><StarIcon size={20} /></div>
                    <div className="text-lg font-bold text-slate-900">{progress.xp}</div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">XP</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="text-orange-500 mb-1"><FlameIcon size={20} /></div>
                    <div className="text-lg font-bold text-slate-900">{progress.streak.current}</div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Streak</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="text-indigo-500 mb-1"><TargetIcon size={20} /></div>
                    <div className="text-lg font-bold text-slate-900">{toeicScore}</div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">TOEIC</div>
                </div>
            </div>

            {/* Let's Learn Grid */}
            <div>
                <div className="flex items-center justify-between mb-4 px-1">
                    <h2 className="text-lg font-bold text-slate-900">Let's learn</h2>
                    <span className="text-sm font-medium text-indigo-600 cursor-pointer hover:underline">View all</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {MODULES.map((mod, i) => (
                        <div
                            key={mod.id}
                            onClick={() => navigate(mod.id)}
                            className="bg-white rounded-2xl p-5 border border-slate-100 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col h-full"
                            style={{ animation: `fadeInUp 0.4s ease ${0.1 * (i + 1)}s both` }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-2xl ${mod.iconBg} flex items-center justify-center shadow-sm`}>
                                    <mod.Icon size={24} />
                                </div>
                                <div className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg group-hover:bg-slate-100 transition-colors">
                                    {mod.category}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-colors">{mod.title}</h3>
                            <div className="mt-auto pt-4 flex items-center gap-4 text-xs font-medium text-slate-500">
                                <span className="flex items-center gap-1.5"><BookIcon size={14} /> {mod.lessons} lessons</span>
                                <span className="flex items-center gap-1.5"><ZapIcon size={14} /> {mod.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Study Activity */}
            <div>
                <div className="flex items-center gap-2 mb-4 px-1">
                    <ChartIcon size={20} className="text-indigo-600" />
                    <h2 className="text-lg font-bold text-slate-900">Study Activity</h2>
                </div>
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-soft">
                    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                        {Array.from({ length: 91 }, (_, i) => {
                            const date = new Date()
                            date.setDate(date.getDate() - (90 - i))
                            const dateStr = date.toISOString().split('T')[0]
                            const val = progress.studyDays?.[dateStr] || 0

                            let colorClass = 'bg-slate-100'
                            if (val > 0) colorClass = 'bg-indigo-200'
                            if (val >= 3) colorClass = 'bg-indigo-300'
                            if (val >= 5) colorClass = 'bg-indigo-400'
                            if (val >= 10) colorClass = 'bg-indigo-500'
                            if (val >= 20) colorClass = 'bg-indigo-600'

                            return (
                                <div
                                    key={i}
                                    className={`w-3 h-3 rounded-sm ${colorClass} transition-colors hover:ring-2 ring-indigo-200`}
                                    title={`${dateStr}: ${val} activities`}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
